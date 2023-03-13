import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Banner, NavBar, Slider } from "./components";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Home from './pages/Home';
import FAQ from "./pages/FAQ";
import IphoneRepair from "./pages/servicespages/IPhoneRepair";
import SmartphoneRepair from "./pages/servicespages/SmartphoneRepair";
import IPadTabletRepair from "./pages/servicespages/IPadTabletRepair";
import MacbookRepair from "./pages/servicespages/MacbookRepair";
import LaptopRepair from "./pages/servicespages/LaptopRepair";
import LogicBoardRepair from "./pages/servicespages/LogicBoardRepair";
import LiquidDamageRepair from "./pages/servicespages/LiquidDamageRepair";
import GamingConsoleRepair from "./pages/servicespages/GamingConsoleRepair";
import OtherElectronicsRepair from "./pages/servicespages/OtherElectronicsRepair";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Banner />
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/iphone_repair" element={<IphoneRepair />} />
            <Route path="/smartphone_repair" element={<SmartphoneRepair />} />
            {/* <Route path="/ipadtablet_repair" element={<IPadTabletRepair />} /> */}
            <Route path="/macbook_repair" element={<MacbookRepair />} />
            <Route path="/laptop_repair" element={<LaptopRepair />} />
            <Route path="/logicboard_repair" element={<LogicBoardRepair />} />
            <Route path="/liquiddamege_repair" element={<LiquidDamageRepair />} />
            <Route path="/gamingconsole_repair" element={<GamingConsoleRepair />} />
            <Route path="/otherelectronic_repair" element={<OtherElectronicsRepair />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact_us" element={<ContactUs />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
