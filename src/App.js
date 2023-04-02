import './App.css';
import DateAndTime from './components/dateandtime/DateAndTime';
import Forecast from './components/forecast/Forecast';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Nav from './components/nav/Nav';
import Search from './components/search/Search';
import TemperatureDetails from './components/temperatureadetails/TemperatureDetails';
import { UserContext } from './context/Context';


function App() {
  const {error,loading} = UserContext();
  console.log(error)
  if(loading){
    return ( <div class="center">
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
  </div>)
  }
  return (
    <div>
         <Nav/>
         <Search/>
         {error? <h1 className='h1'>No detail about specified location.</h1>:<>
         <DateAndTime/>
         <TemperatureDetails/>
         <Forecast title="daily forecast"/></>}

    </div>
  );
}

export default App;
