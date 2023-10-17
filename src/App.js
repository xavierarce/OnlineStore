import { Routes, Route } from "react-router-dom";

import NavBar from "./Routes/NavBar/Navbar";

import Home from "./Routes//Home/Home";


const Shop = () => {
  return <h2>I am the shop</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
