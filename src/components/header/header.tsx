import { MenuOutlined } from "@ant-design/icons";
import Layout from "antd/es/layout";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Drawer, Menu, Row } from "antd";
import PandaLogo from '../../assets/panda.svg?react'

import s from './header.module.scss';

export const Header = React.memo(() => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Layout.Header className={s.header}>
      <div className={s['header-content']}>
        <div className={s.logo}>
          <PandaLogo />
          <span className={s.title}>PandaParcels</span>
        </div>

        <div className={s['nav-desktop']}>
          <Row gutter={[16, 16]}>
            <Col>
              <Link to="/">Главная</Link>
            </Col>
            <Col>
              <Link to="/orders">Список заказов</Link>
            </Col>
          </Row>
        </div>

        <div className={s['nav-mobile']}>
          <Button
            className={s['menu-button']}
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
          <Drawer
            title="Навигация"
            placement="right"
            onClose={onClose}
            open={open}
            width={250}
          >
            <Menu
              className={s['ant-menu']}
              mode="inline"
            >
              <Menu.Item key="main">
                <Link
                  to="/"
                  onClick={onClose}
                >Главная
                </Link>
              </Menu.Item>
              <Menu.Item key="orders">
                <Link
                  to="/orders"
                  onClick={onClose}
                >Список заказов
                </Link>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </div>
    </Layout.Header>
  );
});