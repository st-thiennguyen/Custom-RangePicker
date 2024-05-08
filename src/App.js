import './App.css';
import CustomRangePicker from './CustomRangePicker';

function App() {
  return (
    <div
      className='App'
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CustomRangePicker />
    </div>
  );
}

export default App;
