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

const Trees = (e) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [buyModalVisible, setBuyModalVisible] = useState(false);
  const [buyOrderDetailsVisible, setOrderDetailsVisible] = useState(false);
  const [qrCodeVisible , setQrCodeVisible] = useState(false) ;
  const [successVisible, setSuccessVisible] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };
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
    setOrderDetailsVisible(true) ;
    console.log('Shipping Address:', shippingAddress);
  };
  const hanndelPurchase = () => {
    setOrderDetailsVisible(false) ;
    setQrCodeVisible(true) ;
  }
  const handleQrCodeConfirmation = () => {
    // Perform actions when buy is confirmed (e.g., add to cart, make a purchase)
    // For demonstration, simply close the buy modal
    setQrCodeVisible(false);
    setSuccessVisible(true);
  };
  const handleSuccessConfirmation = () => {
    // Perform actions when buy is confirmed (e.g., add to cart, make a purchase)
    // For demonstration, simply close the buy modal
    setQrCodeVisible(false);
    setSuccessVisible(false);
    setSelectedProduct(null);
    setOrderDetailsVisible(false) ;
    setBuyModalVisible(false) ;
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
          <Modal
            title="Shipping address"
            visible={buyModalVisible}
            onCancel={() => setBuyModalVisible(false)}
      
            footer={[
              <button key="cancel" className="cancel" onClick={() => setBuyModalVisible(false)}>
                Cancel
              </button>,
              <button key="submit" className="cancel" type="primary" onClick={handleBuyConfirmation}>
                Submit
              </button>,
            ]}
          >   
              <form>
                <label htmlFor="firstname" >First Name:</label>
                <input type="text" id="firstname" name="firstname"onChange={handleInputChange} className='rounded-textfield'/><br /><br />

                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" onChange={handleInputChange} className='rounded-textfield'/><br /><br />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" onChange={handleInputChange} className='rounded-textfield' /><br /><br />

                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city"onChange={handleInputChange} className='rounded-textfield' /><br /><br />

                <label htmlFor="state">State:</label>
                <input type="text" id="state" name="state" onChange={handleInputChange} className='rounded-textfield'/><br /><br />

                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country"onChange={handleInputChange} className='rounded-textfield' /><br /><br />

                <label htmlFor="zip">ZIP Code:</label>
                <input type="text" id="zip" name="zip" onChange={handleInputChange} className='rounded-textfield'/><br /><br />
              </form>
          </Modal>
          <Modal
            title="Order detail"
            visible={buyOrderDetailsVisible}
            onCancel={() => setOrderDetailsVisible(false)}
            footer={[
              <button key="cancel" className="cancel" onClick={() => setOrderDetailsVisible(false)}>
                Cancel
              </button>,
              <button key="buy" className="cancel" type="primary" onClick={hanndelPurchase}>
                Purchase
              </button>,
            ]}
          >
            {selectedProduct && (
              <table className='table'>
                <tbody>
                  <tr>
                    <td className='cell'>
                    <img className='image-detail' src={selectedProduct.image} alt="Tree"/>
                    </td>
                    <td className='cell'>
                      <p className='tree-detail'>Species: {selectedProduct.species}</p>
                      <p className='tree-detail'>Detail: {selectedProduct.detail}</p>
                      <p className='tree-detail'>Quantity: {quantity}</p>
                      <p className='tree-detail'>Price: ฿{selectedProduct.price}</p>
                      <p className='text-total-price'>Total Price: ฿{quantity * selectedProduct.price}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className='cell'>
                      <p className='address-detail'>Name: {shippingAddress.firstname} {shippingAddress.lastname}</p>
                      <p className='address-detail'>Address: {shippingAddress.address}</p>
                      <p className='address-detail'>City: {shippingAddress.city}</p>
                      <p className='address-detail'>Country: {shippingAddress.country}</p>
                      <p className='address-detail'>Zip: {shippingAddress.zip}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </Modal>
          <Modal
            title="Purchase"
            visible={qrCodeVisible}
            onCancel={() => setQrCodeVisible(false)}
              footer={[
              <button key="cancel" className="cancel" onClick={() => setQrCodeVisible(false)}>
                Cancel
              </button>,
              <button key="comfirm" className="cancel" type="primary" onClick={handleQrCodeConfirmation}>
                Confirm
              </button>,
            ]}
          >
            <img src="qr-code.jpg" alt="QR Code" style={{ width: '100%', height: 'auto' }} />
          </Modal>
          <Modal
            title="Sucess"
            visible={successVisible}
            onCancel={() => setSuccessVisible(false)}
            footer={[
              <button key="comfirm" className="cancel" type="primary" onClick={handleSuccessConfirmation}>
                Confirm
              </button>
            ]}
            >
            <img src="Success.png" alt="QR Code" style={{ width: '100%', height: 'auto' }} />
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Trees;