import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import Dashboard from './pages/Dashboard/Dashboard';

import DefaultLayout from './layout/DefaultLayout';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Delivery from './pages/Delivery/Delivery';
import Selection from './pages/Delivery/Selection';
import Billing from './pages/Delivery/Billing';
import PaymentMethod from './pages/Delivery/Payment_method';
import Overview from './pages/Delivery/Overview';
import Invoice from './pages/Delivery/Invoice';
import TrackingInitiated from './pages/Tracking/TrackingInitiated';
import TrackingPacked from './pages/Tracking/TrackingPacked';
import TrackingTransit from './pages/Tracking/TrackingTransit';
import TrackingDelivery from './pages/Tracking/TrackingDelivery';
import LandingPage from './pages/LandingPage/LandingPage';

const hiddenOnRoutes = [ '/signup', '/signin'];

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
          index
          element={
            <>
              <PageTitle title="Welcome To Gold Palace" />
              <LandingPage />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Sign Up | Gold Palace" />
              <SignUp />
            </>
          }
        />

        <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Sign In | Gold Palace" />
              <SignIn />
            </>
          }
        />

        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="Dashboard | Gold Palace" />
              <Dashboard />
            </>
          }
        />

        <Route
          path="/delivery"
          element={
            <>
              <PageTitle title="Delivery | Gold Palace" />
              <Delivery />
            </>
          }
        />

        <Route
          path="/selection"
          element={
            <>
              <PageTitle title="Delivery | Gold Palace" />
              <Selection />
            </>
          }
        />
        <Route
          path="/billing"
          element={
            <>
              <PageTitle title="Billing Address | Gold Palace" />
              <Billing />
            </>
          }
        />
        <Route
          path="/payment-method"
          element={
            <>
              <PageTitle title="Payment Method | Gold Palace" />
              <PaymentMethod />
            </>
          }
        />
        <Route
          path="/overview"
          element={
            <>
              <PageTitle title="Overview | Gold Palace" />
              <Overview />
            </>
          }
        />
        <Route
          path="/invoice"
          element={
            <>
              <PageTitle title="Invoice | Gold Palace" />
              <Invoice />
            </>
          }
        />
        <Route
          path="/tracking-init"
          element={
            <>
              <PageTitle title="Tracking - Init | Gold Palace" />
              <TrackingInitiated />
            </>
          }
        />
        <Route
          path="/tracking-packed"
          element={
            <>
              <PageTitle title="Tracking - Packed | Gold Palace" />
              <TrackingPacked />
            </>
          }
        />
        <Route
          path="/tracking-transit"
          element={
            <>
              <PageTitle title="Tracking - Transit | Gold Palace" />
              <TrackingTransit />
            </>
          }
        />
        <Route
          path="/tracking-delivery"
          element={
            <>
              <PageTitle title="Tracking - Delivery | Gold Palace" />
              <TrackingDelivery />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
