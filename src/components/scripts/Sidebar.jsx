import '../styles/Store.css';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={300} theme="light">
      <Menu mode="vertical" theme="light" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">ฟิโลเดนดรอน</Menu.Item>
        <Menu.Item key="2">ซิงโกเนียม</Menu.Item>
        <Menu.Item key="3">อโลคาเซีย</Menu.Item>
        <Menu.Item key="4">มอนสเตอร่า</Menu.Item>
        <Menu.Item key="5">แอนธูเรี่ยม</Menu.Item>
        <Menu.Item key="6">ซินแดปซัส</Menu.Item>
        <Menu.Item key="7">ไพเพอร์</Menu.Item>
        <Menu.Item key="8">อมีเดียม</Menu.Item>
        <Menu.Item key="9">สปาทิฟิลลั่ม</Menu.Item>
        <Menu.Item key="10">อะกลาโอเนม่า</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;