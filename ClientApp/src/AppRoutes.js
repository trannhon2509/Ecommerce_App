import  Counter  from "./components/Counter";
import  FetchData  from "./components/FetchData";
import  Home  from "./pages/Home";
import RoutePath from "./routes/RoutePath";
import DefaultLayout from './layouts/DefaultLayout'
import AdminLayout from './layouts/AdminLayout'
import About from './pages/About'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
const AppRoutes = [
  {
    path: RoutePath.HOME,
    element: Home,
    layout: DefaultLayout
  },
  {
    path: RoutePath.ABOUT,
    element: About,
    layout: DefaultLayout
  },
  {
    path: RoutePath.SHOP,
    element: Shop,
    layout: DefaultLayout
  },
  {
    path: RoutePath.BLOG,
    element: Blog,
    layout: DefaultLayout
  },
  {
    path: RoutePath.CONTACT,
    element: Contact,
    layout: DefaultLayout
  }
];

export default AppRoutes;
