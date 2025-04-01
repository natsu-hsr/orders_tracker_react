import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Provider} from "react-redux"

import Home from "./pages/home/home"
import OrderDetails from "./pages/order-details/order-details"
import Orders from "./pages/orders/orders"
import NotFound from "./pages/not-found/not-found"
import {store} from "./store/config"
import {Header} from "./components/header/header"

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <div className="body-wrapper">
          <Routes>
            <Route index element={<Home />} />
            <Route path="orders">
              <Route index element={<Orders />} />
              <Route path=":orderId" element={<OrderDetails />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
