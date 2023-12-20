import { Layout } from 'antd';
import Sidebar from './Sidebar';

const { Content } = Layout;

const MainComponent = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ padding: '20px' }}>
          <h1>Welcome to Your Website</h1>
          <p>This is the main content of your website.</p>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainComponent;