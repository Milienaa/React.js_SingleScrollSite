import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import NewsPage from './pages/NewsPage';
import Page404 from './pages/Page404';
import Layout from './Layout';
import SingleNew from './pages/SingleNew';

function App() {

  return (
    <>
        <Routes>
          <Route path = '/' element = {<Layout/>}>
            <Route index element = {<HomePage />} />
            <Route path = '/settings' element = {<SettingsPage />} />
            <Route path = '/news' element = {<NewsPage/>} />
            <Route path = '/news/:id' element = {<SingleNew/>} />
            <Route path = '*' element = {<Page404/>} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
