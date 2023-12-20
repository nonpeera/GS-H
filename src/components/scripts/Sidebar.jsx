import '../styles/Store.css';
import { Layout, Menu } from 'antd';
import {GiftOutlined} from '@ant-design/icons';
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={300} theme="light">
      <h2>สินค้าทั้งหมด</h2>
      <Menu mode="vertical" theme="light" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<GiftOutlined />}>ฟิโลเดนดรอน</Menu.Item>
        <Menu.Item key="2" icon={<GiftOutlined />}>ซิงโกเนียม</Menu.Item>
        <Menu.Item key="3" icon={<GiftOutlined />}>อโลคาเซีย</Menu.Item>
        <Menu.Item key="4" icon={<GiftOutlined />}>มอนสเตอร่า</Menu.Item>
        <Menu.Item key="5" icon={<GiftOutlined />}>แอนธูเรี่ยม</Menu.Item>
        <Menu.Item key="6" icon={<GiftOutlined />}>ซินแดปซัส</Menu.Item>
        <Menu.Item key="7" icon={<GiftOutlined />}>ไพเพอร์</Menu.Item>
        <Menu.Item key="8" icon={<GiftOutlined />}>อมีเดียม</Menu.Item>
        <Menu.Item key="9" icon={<GiftOutlined />}>สปาทิฟิลลั่ม</Menu.Item>
        <Menu.Item key="10" icon={<GiftOutlined />}>อะกลาโอเนม่า</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;