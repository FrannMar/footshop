import { ItemListContainer } from '../src/assets/ItemListContainer';
import { Navbar } from './components/NavBar';
import '../src/index.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer text={'Todos los productos'}/>
    </div>
  );
}
