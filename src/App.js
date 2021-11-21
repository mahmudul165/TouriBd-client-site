import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Booking from "./Pages/Booking/Booking/Booking";
import AddPackage from "./Pages/PackgesOffer/AddPackage/AddPackage";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Services from "./Pages/Home/Services/Services";
import MyTour from "./Pages/PackgesOffer/MyTour/MyTour";
import ManagePackages from "./Pages/PackgesOffer/ManagePackages/ManagePackages";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/package">
              <Services></Services>
            </Route>
            <Route path="/addPackage">
              <AddPackage></AddPackage>
            </Route>
            <PrivateRoute path="/myTour">
              <MyTour></MyTour>
            </PrivateRoute>
            <PrivateRoute path="/manageTour">
              <ManagePackages></ManagePackages>
            </PrivateRoute>
            <PrivateRoute path="/booking/:Id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
