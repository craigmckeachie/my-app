import './App.css';
import Hello from './Hello';
import { Settings } from './Settings';

const settings = new Settings('Joe', 6);

function App() {
  return <Hello settings={settings} />;
}

export default App;
