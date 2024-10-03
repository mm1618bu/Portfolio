import './App.css';
import Header from './Header';
import Legend from './Legend';
import Main from './main';
import ShiftCard from './ShiftCard';
import ShiftsList from './ShiftsList';
import Tabler from './Tabler';
import LawnComponent from './LawnComponent';
import PackageProgress from './PackageProcess';
import TrafficLight from './TrafficLight';
import JobCalculator from './JobCalculator';
import ClusterTable from './ClusterTable';
import CallLogTable from './CallLogTable';

function App() {
  return (
    <div className="App">
      <Header />
        <span className='sidebyside'>
        <ShiftCard />
      <Legend/>
      </span>
      <PackageProgress />
      <JobCalculator />
      <ClusterTable />
      <span className='sidebyside' style={appStyles}>
        <TrafficLight name="Washington @ Middle - Middle North" />
        <TrafficLight name="Washington @ Middle - Middle South" />
      </span>
</div>
  );
}

const appStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  height: '100vh',
  backgroundColor: '#f0f0f0',
};

export default App;
