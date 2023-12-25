import { Card } from 'antd';
import '../styles/GridItem.css';

const { Meta } = Card;

const GridItem = ({ image, name , species, detail, stock, price}) => {
  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <Card
      hoverable
      style={{ width: 240, margin: '16px' }}
      cover={<img alt={name} src={image} />}
    >
      <Meta 
        title={<span style={titleStyle}>{name}</span>}
        description={
          <>
            <h3>Species: {species}</h3>
            <h3>Detail: {detail}</h3>
            <h3 style={{color: 'crimson', fontWeight: 'bold',}}>Price: ฿{price}</h3>
            <h3>Stock: {stock}</h3>
          </>
        } />
    </Card>
  );
};

export default GridItem;