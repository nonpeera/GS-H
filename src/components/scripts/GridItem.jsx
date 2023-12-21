import { Card } from 'antd';
import '../styles/GridItem.css';

const { Meta } = Card;

const GridItem = ({ image, name , species, detail, stock}) => {
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
            <p>Species: {species}</p>
            <p>Detail: {detail}</p>
            <p>Stock: {stock}</p>
          </>
        } />
    </Card>
  );
};

export default GridItem;