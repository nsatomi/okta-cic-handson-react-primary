import { Outlet, Link, useLocation } from 'react-router-dom';
import Auth from './Auth';

function App() {

  const location = useLocation();

  const linkWithActivate = (path, label) => {
    return (
      <Link to={path} className={location.pathname === path ? 'nav-link active' : 'nav-link'}>{label}</Link>
    )
  }

  return (
    <div className="container text-center mt-4">
      <h1 style={{backgroundColor: 'black', color: 'white'}} className='py-2'>React SPA (プライマリ)</h1>
      <Auth />
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item">
          {linkWithActivate('/', 'ホーム')}
        </li>
        <li className="nav-item">
          {linkWithActivate('/profile', 'プロファイル')}
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default App;