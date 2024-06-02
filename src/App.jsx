import { Outlet, Link, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <div className="container text-center mt-4">
      <h1>React SPA (プライマリ)</h1>
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item">
          <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>ホーム</Link>
        </li>
        <li className="nav-item">
          <Link to='/profile' className={location.pathname === '/profile' ? 'nav-link active' : 'nav-link'}>プロファイル</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default App;