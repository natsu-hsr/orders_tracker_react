import {Alert, Button, Row, Skeleton, Space} from "antd";
import Typography from "antd/es/typography";
import {LeftCircleTwoTone} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

import {findOrderDetailsById, TOrderDetails} from "../../store/slices/orders";
import {OrderDetailsForm} from "../../components/order-details-form/order-details-form";

import s from './order-details.module.scss';

const {Title} = Typography;

export const OrderDetails = () => {
  const navigate = useNavigate();
  const {orderId} = useParams();

  const [orderDetails, setOrderDetails] = useState<TOrderDetails | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);

  // имитация загрузки данных с сервера
  useEffect(() => {
    let timeoutId: number | undefined;

    if (orderId) {
      setLoading(true);
      timeoutId = setTimeout(() => {
        const searchedOrder = findOrderDetailsById({orderId});
        setOrderDetails(searchedOrder);
        setLoading(false);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [orderId]);
  
  return (
    <Space
      className={s.wrapper}
      direction="vertical"
    >
      <Row
        className={s.title}
        align="middle"
        justify="space-between"
      >
        <Title level={2}>
          Информация о заказе {orderId}
        </Title>
        <Button
          type="primary"
          icon={<LeftCircleTwoTone />}
          onClick={() => navigate(-1)}
        >
          Назад
        </Button>
      </Row>
      
      <Skeleton
        loading={isLoading}
        active={isLoading}
      >
        {
          orderDetails ? (
            <OrderDetailsForm
              mode='view'
              order={orderDetails}
            />
          ) : (
            <Alert
              type="error"
              description="Произошла ошибка при получении деталей заказа :("
            />
          )
        }
      </Skeleton>
    </Space>
  )
}

export default OrderDetails