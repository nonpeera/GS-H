import { Layout,Modal } from 'antd';
import Sidebar from './Sidebar';
import GridItem from './GridItem';
import React, { useState } from 'react';

const { Content } = Layout;
const products = [
  { id: 1, detail: 'Normal', stock: 10, species: 'Philodendron', name: 'Caramel marble', image: '/caramel-marble.jpeg' },
  { id: 2, detail: 'Normal', stock: 100, species: 'Anthurium', name: 'Regale', image: '/regale.jpeg' },
  { id: 3, detail: 'Variegated', stock: 1, species: 'Monstera', name: 'White Monster', image: '/white-monster.jpeg' },
  { id: 4, detail: 'Variegated', stock: 1, species: 'Philodendron', name: 'Red Anderson', image: '/red-anderson.jpeg' },
  { id: 5, detail:   'Variegated', stock: 20, species: 'Amydium', name: 'Medium', image: '/medium.jpg' },
  { id: 6, detail: 'Variegated', stock: 1, species: 'Amydium', name: 'Zippelianum', image: '/zippelianum.jpg' },
  { id: 7, detail: 'Variegated', stock: 10, species: 'Scindapsus', name: 'Mayari (stem)', image: '/scindapsus.jpg' },
  { id: 8, detail: 'Normal', stock: 1, species: 'Philodendron', name: 'Caramel', image: '/caramel.jpg' },
  { id: 9, detail: 'Normal', stock: 100, species: 'Spathiphyllum', name: 'Golden', image: '/golden.jpg' },
  { id: 10, detail: 'Normal', stock: 30, species: 'Philodendron', name: 'Goeldii', image: '/goeldii.jpg' },
];

const Trees = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store the selected product

  const openModal = (product) => {
    setSelectedProduct(product); // Set the selected product when clicked
  };

  const closeModal = () => {
    setSelectedProduct(null); // Clear the selected product when closing the modal
  };

  return (
    <Layout style={{ minHeight: '150vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ padding: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map((product) => (
              <div key={product.id} onClick={() => openModal(product)}>
                {/* Render your GridItem component */}
                <GridItem
                  name={product.name}
                  species={product.species}
                  detail={product.detail}
                  stock={product.stock}
                  image={product.image}
                />
              </div>
            ))}
          </div>

          {/* Modal for displaying product details */}
          <Modal
            title={selectedProduct ? selectedProduct.name : ''}
            visible={selectedProduct !== null}
            onCancel={closeModal}
            footer={null}
          >
            {selectedProduct && (
              <div>
                <p>Species: {selectedProduct.species}</p>
                <p>Detail: {selectedProduct.detail}</p>
                <p>Stock: {selectedProduct.stock}</p>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ maxWidth: '100%' }} />
              </div>
            )}
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Trees;