import { Layout } from 'antd';
import Sidebar from './Sidebar';
import GridItem from './GridItem';

const { Content } = Layout;
const products = [
  { id: 1, description: 'Seeding', name: 'Regale', image: '/regale.jpeg' },
  { id: 2, description: 'normal', name: 'Siam', image: '/siam.jpg' },
  { id: 3, description: 'normal', name: 'Moodeanum', image: '/moodeanum.jpg' },
  { id: 4, description: 'normal', name: 'Papillilaminum', image: '/papillilaminum.jpg' },
  { id: 5, description: 'normal', name: 'Clarinervium', image: '/clarinervium.jpg' },
];

const Anthurium = () => {
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

export default Anthurium;