import {Col, Row, Typography} from "antd"
import Search from "antd/es/input/Search";
import {Link, useNavigate} from "react-router-dom";

const {Title} = Typography;

import s from './home.module.scss';

function Home() {
  const navigate = useNavigate();

  const handleSearch = (orderId: string) => {
    if (!orderId) return;

    navigate(`/orders/${orderId}`);
  }

  return (
    <Row justify="center" align="middle">
    <Col xs={24} md={18} lg={12}>
      <div className={s.content}>
        <Title level={1} className={s.title}>
          Добро пожаловать на сайт заказов
        </Title>

        <p className={s.description}>
          Для получения информации введите номер заказа в поле ввода ниже
        </p>

        <Search
          placeholder="Введите номер заказа"
          onSearch={handleSearch}
          className={s.search}
        />

        <div className={s.link}>
          Или перейдите к <Link to="/orders">списку заказов</Link>
        </div>
      </div>
    </Col>
  </Row>
  )
}

export default Home