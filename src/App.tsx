import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import BackgroundAnimmasi from "./ui/BackgroundAnimmasi";
import BackdropUi from "./components/BackdropUi";
import { BackdropProvider } from "./context/BackdropProvider";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Popup from "./components/popup/PopupContent";
import JoinRTIB from "./pages/JoinRTIB";
import AboutRTIB from "./pages/AboutRTIB";
import Loading from "./components/Loading";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Alert from "./components/alarm/Alert";
import { UserProvider } from "./context/UserProvider";
import { Login } from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { useUser } from "./context/UserProvider";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { isLogin } = useUser();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Loading isVisible={loading} />
      <Alert />
      <Popup />
      <BackdropUi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute isAuthenticated={isLogin} />}>
          <Route path="/join/MRTIB" element={<JoinRTIB />} />
        </Route>
        <Route path="/about" element={<AboutRTIB />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackgroundAnimmasi />
    </>
  );
}

function App() {
  return (
    <Router>
      <UserProvider>
        <BackdropProvider>
          <AppContent />
        </BackdropProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
