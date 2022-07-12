import './App.css';
import Hello from './Hello';

const settings = {
  name: 'Joe',
  enthusiasmLevel: 2,
};

function App() {
  return <Hello settings={settings} />;
}

export default App;
