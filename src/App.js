import './App.css';
import FirstSection from './Component/FirstSection';
import FourSection from './Component/FourSecton';
import NavBarOm from './Component/NavBarOm';
import SecondSection from './Component/SecondSection';
import ThirdSection from './Component/ThirdSection';

function App() {
  return (
    <div className="App xl:px-24" style={{background: 'linear-gradient(to bottom,#cfd9ff,#ffffff)'}}>
      <NavBarOm />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
    </div>
  );
}

export default App;
