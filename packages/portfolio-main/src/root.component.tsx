import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './common/utils/PrivateRoute';

// const Home = lazy(() => import('./pages/home'));
// const Login = lazy(() => import('./pages/login'));

const Home = () => <div>Home page</div>;
const Login = () => <div>Login page</div>;

function Root() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback=''>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route
              path='*'
              element={
                // <PrivateRoute>
                <Routes>
                  <Route path='*' element={<Home />} />
                </Routes>
                // </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
export default Root;
