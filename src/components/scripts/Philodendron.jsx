import { Layout } from 'antd';
import Sidebar from './Sidebar';
import GridItem from './GridItem';

const { Content } = Layout;
const products = [
  { id: 1, description: 'normal', name: 'Caramel marble', image: '/caramel-marble.jpeg' },
  { id: 2, description: 'Variegated', name: 'Red Anderson', image: '/red-anderson.jpeg' },
  { id: 3, description: 'Variegated', name: 'Caramel', image: '/caramel.jpg' },
  { id: 4, description: 'normal', name: 'Goeldii', image: '/goeldii.jpg' },
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