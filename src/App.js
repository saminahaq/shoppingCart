import "./App.css";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import store from "./Store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbars";
import "./index.css";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      {/* because we need navbars at every pages  */}
      <Provider store={store}> 
        <BrowserRouter>
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
       </Provider> 
    </div>
  );
}

export default App;
