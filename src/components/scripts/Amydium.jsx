import { Layout } from 'antd';
import Sidebar from './Sidebar';
import GridItem from './GridItem';

const { Content } = Layout;
const products = [
  { id: 1, description: 'Variegated', name: 'Medium', image: '/medium.jpg' },
  { id: 2, description: 'Variegated', name: 'Zippelianum', image: '/zippelianum.jpg' },
];

const Amydium = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ padding: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map((product) => (
              <GridItem
                key={product.id}
                name={product.name}
                description={product.description}
                image={product.image} />
            ))}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Amydium;