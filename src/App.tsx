import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import Dashboard from './pages/Dashboard/Dashboard';

import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import AllUsers from './pages/Users/AllUsers';
import UserDetails from './pages/Users/UserDetails';
import AddUser from './pages/Users/AddUser';
import SignUp from './pages/Authentication/SignUp';
import SignIn from './pages/Authentication/SignIn';
import AllEvents from './pages/Events/AllEvents';
import AddEvent from './pages/Events/AddEvent';
import EventDetails from './pages/Events/EventDetails';
import AllNews from './pages/News/AllNews';
import AddNews from './pages/News/AddNews';
import NewsDetails from './pages/News/NewsDetails';
import AllProjects from './pages/Projects/AllProjects';
import AddProject from './pages/Projects/AddProject';
import ProjectDetails from './pages/Projects/ProjectDetails';
import AllProducts from './pages/Shop/AllProducts';
import AddEventImages from './pages/Events/AddEventImages';
import AddNewsImages from './pages/News/AddNewsImages';
import AddProjectImages from './pages/Projects/AddProjectImages';
import ProductsDetails from './pages/Shop/ProductDetails';
import AddProductImages from './pages/Shop/AddProductImages';
import AddProduct from './pages/Shop/AddProject';
import AllAccounts from './pages/Accounts/AllAccounts';
import AddAccount from './pages/Accounts/AddAccount';
import AllDues from './pages/Dues/AllDues';
import AllOrders from './pages/Shop/Orders/AllOrders';

const hiddenOnRoutes = ['/', '/signup', '/signin'];

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout pathname={pathname} hiddenOnRoutes={hiddenOnRoutes}>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="Dashboard | WGhs Old Girls'Association" />
              <Dashboard />
            </>
          }
        />

        <Route
          index
          element={
            <>
              <PageTitle title="Sign In | WGhs Old Girls'Association" />
              <SignIn />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Sign Up | WGhs Old Girls'Association" />
              <SignUp />
            </>
          }
        />

        <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Sign In | WGhs Old Girls'Association" />
              <SignIn />
            </>
          }
        />

        <Route
          path="/all-users"
          element={
            <>
              <PageTitle title="All Users | WGhs Old Girls'Association" />
              <AllUsers />
            </>
          }
        />

        <Route
          path="/user-details/:user_id"
          element={
            <>
              <PageTitle title="User Details | WGhs Old Girls'Association" />
              <UserDetails />
            </>
          }
        />

        <Route
          path="/add-user"
          element={
            <>
              <PageTitle title="Add User | WGhs Old Girls'Association" />
              <AddUser />
            </>
          }
        />

        <Route
          path="/all-projects"
          element={
            <>
              <PageTitle title="All Projects | WGhs Old Girls'Association" />
              <AllProjects />
            </>
          }
        />

        <Route
          path="/project-details/:project_id"
          element={
            <>
              <PageTitle title="Project Details | WGhs Old Girls'Association" />
              <ProjectDetails />
            </>
          }
        />

        <Route
          path="/add-project"
          element={
            <>
              <PageTitle title="Add Event | WGhs Old Girls'Association" />
              <AddProject />
            </>
          }
        />


<Route
          path="/add-project-images/:project_id"
          element={
            <>
              <PageTitle title="Add Project Images | WGhs Old Girls'Association" />
              <AddProjectImages />
            </>
          }
        />

        <Route
          path="/all-events"
          element={
            <>
              <PageTitle title="All Events | WGhs Old Girls'Association" />
              <AllEvents />
            </>
          }
        />

        <Route
          path="/event-details/:event_id"
          element={
            <>
              <PageTitle title="Event Details | WGhs Old Girls'Association" />
              <EventDetails />
            </>
          }
        />

        <Route
          path="/add-event"
          element={
            <>
              <PageTitle title="Add Event | WGhs Old Girls'Association" />
              <AddEvent />
            </>
          }
        />


<Route
          path="/add-event-images/:event_id"
          element={
            <>
              <PageTitle title="Add Event Images | WGhs Old Girls'Association" />
              <AddEventImages />
            </>
          }
        />

        <Route
          path="/all-news"
          element={
            <>
              <PageTitle title="All News | WGhs Old Girls'Association" />
              <AllNews />
            </>
          }
        />

        <Route
          path="/news-details/:news_id"
          element={
            <>
              <PageTitle title="Event Details | WGhs Old Girls'Association" />
              <NewsDetails />
            </>
          }
        />

        <Route
          path="/add-news"
          element={
            <>
              <PageTitle title="Add News | WGhs Old Girls'Association" />
              <AddNews />
            </>
          }
        />

<Route
          path="/add-news-images/:news_id"
          element={
            <>
              <PageTitle title="Add News Images | WGhs Old Girls'Association" />
              <AddNewsImages />
            </>
          }
        />

        <Route
          path="/all-products"
          element={
            <>
              <PageTitle title="Shop | WGhs Old Girls'Association" />
              <AllProducts />
            </>
          }
        />

<Route
          path="/all-orders"
          element={
            <>
              <PageTitle title="Orders | WGhs Old Girls'Association" />
              <AllOrders />
            </>
          }
        />

<Route
          path="/product-details/:product_id"
          element={
            <>
              <PageTitle title="Product Details | WGhs Old Girls'Association" />
              <ProductsDetails />
            </>
          }
        />

        
<Route
          path="/add-product"
          element={
            <>
              <PageTitle title="Add Product | WGhs Old Girls'Association" />
              <AddProduct />
            </>
          }
        />


<Route
          path="/add-product-images/:product_id"
          element={
            <>
              <PageTitle title="Add Product Images | WGhs Old Girls'Association" />
              <AddProductImages />
            </>
          }
        />



<Route
          path="/all-accounts"
          element={
            <>
              <PageTitle title="Year group account | WGhs Old Girls'Association" />
              <AllAccounts />
            </>
          }
        />






<Route
          path="/add-account"
          element={
            <>
              <PageTitle title="Add Year group account | WGhs Old Girls'Association" />
              <AddAccount />
            </>
          }
        />





<Route
          path="/all-dues"
          element={
            <>
              <PageTitle title="User Dues | WGhs Old Girls'Association" />
              <AllDues />
            </>
          }
        />








        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | WGhs Old Girls'Association " />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | WGhs Old Girls'Association" />
              <Buttons />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
