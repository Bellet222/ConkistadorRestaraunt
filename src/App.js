import React, { useState } from "react";
import MainPage from "./MainPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import UserOrders from "./components/userComponents/UserOrders";
import AdminPanel from "./components/AdminPanel";
import UserBook from "./components/userComponents/UserBook";
import UserHistory from "./components/userComponents/UserHistory";
import ManagerPanel from "./components/ManagerPanel";




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Account" element={<UserOrders />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/Booking" element={<UserBook />} />
        <Route path="/UserHistory" element={<UserHistory />} />
        <Route path="/ManagerPanel" element={<ManagerPanel/>}/>
      </Routes>
    </div>
  );

}
export default App;
