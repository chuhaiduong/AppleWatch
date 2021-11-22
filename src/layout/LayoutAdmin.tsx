import React  from "react";

import { Link, Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const LayoutAdmin: React.FC = () => {
 
  return (
    <div>
      <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Admin
        </Menu.Item>
        <Menu.Item key="6" icon={<VideoCameraOutlined />}>
          <Link to="/"></Link>
          Trang Chủ
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Quản Lý Sản Phẩm
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          Danh Mục
        </Menu.Item>
        <Menu.Item key="5" icon={<BarChartOutlined />}>
          Tài Khoản
        </Menu.Item>
        
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          
         
        
          ...
          <br />
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
      <Outlet />
    </div>
  );
};
export default LayoutAdmin;
