import { Typography } from 'antd';
import CustomTableContainer from '../../components/custom-table/custom-table-container';
import { ordersMockColumns } from '../../mocks/orders/columns';
import { ordersFilters } from '../../mocks/orders/filters';
import { selectOrdersData, TOrder } from '../../store/slices/orders';
import { useAppSelector } from '../../store/config/hooks';

const { Title } = Typography;

function Orders() {
  const ordersData = useAppSelector(selectOrdersData);

  return (
    <div>
      <Title level={2}>
        Таблица заказов
      </Title>
      <CustomTableContainer<TOrder>
        filters={ordersFilters}
        columns={ordersMockColumns}
        dataSource={ordersData}
      />
    </div>
  )
}

export default Orders