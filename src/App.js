import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Blog from './pages/Blog/Blog';
import AboutUs from './pages/AboutUs/AboutUs';
import AuthProvider from './Contexts/AuthProvider';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import MyOrders from './pages/MyOrders/MyOrders';
import ManageOrders from './pages/ManageOrders/ManageOrders';

function App() {
  return (

    <div className="App">
      <AuthProvider>
        {/* router */}
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route path="/blog">
              <Blog></Blog>
            </Route>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>

            <Route path="/manageorders">
              <ManageOrders>

              </ManageOrders>
            </Route>

            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute >



            <Route path="/signin">
              <SignIn></SignIn>

            </Route>

            <Route path="/signup">
              <SignUp></SignUp>

            </Route>

            {/* page not found route */}
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
