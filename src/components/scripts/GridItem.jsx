import { Card } from 'antd';

const { Meta } = Card;

const GridItem = ({ image, name , description}) => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: '16px' }}
      cover={<img alt={name} src={image} />}
    >
      <Meta title={name} description={description} />
    </Card>
  );
};

export default GridItem;