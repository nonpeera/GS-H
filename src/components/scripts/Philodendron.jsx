import { Layout } from 'antd';
import Sidebar from './Sidebar';
import GridItem from './GridItem';

const { Content } = Layout;
const products = [
  { id: 1, description: 'normal', name: 'Caramel marble', image: '/flower.jpg' },
  { id: 2, description: 'Variegated', name: 'Red Anderson', image: '/flower.jpg' },
  { id: 3, description: 'Description', name: 'Product 3', image: '/flower.jpg' },
  { id: 4, description: 'Description', name: 'Product 4', image: '/flower.jpg' },
  { id: 5, description: 'Description', name: 'Product 5', image: '/flower.jpg' },
];

const Philodendron = () => {
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

export default Philodendron;