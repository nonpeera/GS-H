import Philodendron from './Philodendron';
import Anthurium from './Anthurium';
import Amydium from './Amydium';
import '../styles/Store.css';

const Store = () => {
  return (
    <div className="container">
      <Philodendron />
      <Anthurium />
      <Amydium />
    </div>
  );
};

export default Store;