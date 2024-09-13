import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home/home";
import Horeca from "./Components/HoReCa/Horeca";
import TradeRegistration from "./Components/TradeRegistration/TradeRegistration";
import CompanyFormation from "./Components/CompanyFormation/CompanyFormation";
import AboutHero from "./Components/AboutUs/AboutHero";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/trade-registration" element={<TradeRegistration />} />
        <Route path="/company-formation" element={<CompanyFormation />} />
        <Route path="/about" element={<AboutHero />} />

        <Route path="/horeca" element={<Horeca />} />
      </Route>
    </Routes>
  );
};

export default App;
