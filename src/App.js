import "./App.css";
import Home1 from './components/Home/Home1';
import Navbar from './components/Home/Navbar';
import Header from './components/Home/Header';
// import Dashboard from './components/Home/Dashboard'
import Dashboard from './components/Doctor/DoctorDashboard/Dashboard';



function App() {
  return (
    <div>
      <Dashboard/>
      {/* <Header/>
      <Navbar/>
      <Home1/> */}
    </div>
  );
}

export default App;
