import './App.css';
import Header from './Header';
import Legend from './Legend';
import Main from './main';
import ShiftCard from './ShiftCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <span className='sidebyside'>
      <ShiftCard />
      <Legend/>
      </span>
</div>
  );
}

export default App;
