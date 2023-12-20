import '../styles/Store.css';
import { Layout, Menu } from 'antd';
import {HeartOutlined, GiftOutlined} from '@ant-design/icons';
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={300} theme="light">
      <Menu mode="vertical" theme="light" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HeartOutlined />}>VIEW ALL</Menu.Item>
        <p>CATEGORY</p>
        <Menu.Item key="2" icon={<GiftOutlined />}>Philodendron</Menu.Item>
        <Menu.Item key="3" icon={<GiftOutlined />}>Syngonium</Menu.Item>
        <Menu.Item key="4" icon={<GiftOutlined />}>Alocasia</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;