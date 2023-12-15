import './App.css';
import BlongUpdates from './Component/BlongUpdates';
import Demiy from './Component/Demiy';
import EightCustomers from './Component/EightCustomers';
import FirstSection from './Component/FirstSection';
import FivethSection from './Component/FivethSection';
import Footer from './Component/Footer';
import FourSection from './Component/FourSecton';
import NavBarOm from './Component/NavBarOm';
import NineOurTes from './Component/NineOurTes';
import SecondSection from './Component/SecondSection';
import SevenProducts from './Component/SevenProducts';
import SixPattern from './Component/SixPattern';
import TenSection from './Component/TenSection';
import ThirdSection from './Component/ThirdSection';

function App() {
  return (
    <div className="App" style={{background: 'linear-gradient(to bottom,#cfd9ff,#ffffff)'}}>
      <NavBarOm />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FivethSection />
      <SixPattern />
      <SevenProducts />
      <EightCustomers />
      <NineOurTes />
      <TenSection />
      <BlongUpdates />
      <Footer />
    </div>
  );
}

export default App;
