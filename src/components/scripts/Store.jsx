import Philodendron from './Philodendron';
// import Anthurium from './Anthurium';
// import Amydium from './Amydium';
import '../styles/Store.css';

function Store(props){
  const { value, onValueChange } = props;
  return (
    <><div className="app-search">
      <input
        className="app-search-input"
        type="text"
        value={value}
        placeholder="Search plants"
        onChange={event => onValueChange(event.target.value)} />
    </div><div className="container">
        <Philodendron />
        {/* <Anthurium />
    <Amydium /> */}
      </div></>
  );
}

export default Store;