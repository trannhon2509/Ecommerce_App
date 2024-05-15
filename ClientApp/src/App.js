import './assets/css/App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import { PublicRoutes, PrivateRoutes } from './config/config';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {PublicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component
            route.layout == null ? Layout = Fragment : Layout = route.layout;
            return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}></Route>
          })}
          {PrivateRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component
            route.layout == null ? Layout = Fragment : Layout = route.layout;
            return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}></Route>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
