import { Layout,Modal } from 'antd';
import Sidebar from './Sidebar';
import GridItem from './GridItem';
import React, { useState } from 'react';
import '../styles/ButtonOrder.css'

const { Content } = Layout;
const products = [
  { id: 1, detail: 'Normal', stock: 10, species: 'Philodendron', name: 'Caramel marble', image: '/caramel-marble.jpeg', price: 500},
  { id: 2, detail: 'Normal', stock: 100, species: 'Anthurium', name: 'Regale', image: '/regale.jpeg', price: 100},
  { id: 3, detail: 'Variegated', stock: 1, species: 'Monstera', name: 'White Monster', image: '/white-monster.jpeg', price: 500},
  { id: 4, detail: 'Variegated', stock: 1, species: 'Philodendron', name: 'Red Anderson', image: '/red-anderson.jpeg', price: 1000},
  { id: 5, detail:   'Variegated', stock: 20, species: 'Amydium', name: 'Medium', image: '/medium.jpg', price: 250},
  { id: 6, detail: 'Variegated', stock: 1, species: 'Amydium', name: 'Zippelianum', image: '/zippelianum.jpg', price: 1500},
  { id: 7, detail: 'Variegated', stock: 10, species: 'Scindapsus', name: 'Mayari (stem)', image: '/scindapsus.jpg', price: 200},
  { id: 8, detail: 'Normal', stock: 1, species: 'Philodendron', name: 'Caramel', image: '/caramel.jpg', price: 1000},
  { id: 9, detail: 'Normal', stock: 100, species: 'Spathiphyllum', name: 'Golden', image: '/golden.jpg', price: 100},
  { id: 10, detail: 'Normal', stock: 30, species: 'Philodendron', name: 'Goeldii', image: '/goeldii.jpg', price: 350},
];

const Trees = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [buyModalVisible, setBuyModalVisible] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setQuantity(1);
    setBuyModalVisible(false); // Close the buy modal when closing the main modal
  };

  const increaseQuantity = () => {
    if (quantity < selectedProduct.stock){
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyPlant = () => {
    setBuyModalVisible(true); // Show the buy modal when "Buy Plant" is clicked
  };

  const handleBuyConfirmation = () => {
    // Perform actions when buy is confirmed (e.g., add to cart, make a purchase)
    // For demonstration, simply close the buy modal
    setBuyModalVisible(false);
  };

  return (
    <Layout style={{ minHeight: '150vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ padding: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map((product) => (
              <div key={product.id} onClick={() => openModal(product)}>
                <GridItem
                  name={product.name}
                  species={product.species}
                  detail={product.detail}
                  stock={product.stock}
                  price={product.price}
                  image={product.image}
                />
              </div>
            ))}
          </div>

          <Modal
            title={selectedProduct ? selectedProduct.name : ''}
            visible={selectedProduct !== null}
            onCancel={closeModal}
            footer={null}
          >
            {selectedProduct && (
              <div>
                <p className='text-detail'>Species: {selectedProduct.species}</p>
                <p className='text-detail'>Detail: {selectedProduct.detail}</p>
                <p className='text-detail'>Stock: {selectedProduct.stock}</p>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ maxWidth: '100%' }} />
                <p className="text-quantity">Quantity: {quantity}</p>
                <button className="button" onClick={decreaseQuantity}>-</button>
                <button className="button" onClick={increaseQuantity}>+</button>
                <br/>
                <button className="buy" type="primary" onClick={handleBuyPlant}>
                  Buy Plant
                </button>
              </div>
            )}
          </Modal>

          {/* Buy Plant Modal */}
          <Modal
            title="Confirm Purchase"
            visible={buyModalVisible}
            onCancel={() => setBuyModalVisible(false)}
            footer={[
              <button key="cancel" className="cancel" onClick={() => setBuyModalVisible(false)}>
                Cancel
              </button>,
              <button key="buy" className="cancel" type="primary" onClick={handleBuyConfirmation}>
                Buy
              </button>,
            ]}
          >
            <p className='text-confirm'>Confirm purchase of {quantity} {selectedProduct && selectedProduct.name}?</p>
            {/* Additional details or confirmation message can be added here */}
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Trees;