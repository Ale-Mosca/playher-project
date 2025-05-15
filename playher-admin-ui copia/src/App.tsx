import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import Header from './components/Header';
import { Users } from './pages/Users';
import { Content } from './pages/Content';
import { Stats } from './pages/Stats';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import PublicLayout from './layouts/PublicLayout';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import PrivateLayout from './layouts/PrivateLayout';
import Applications from './pages/Applications';
import UserApplications from './pages/UserApplications';
import ContinueWatching from './pages/ContinueWatching';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-4">
            {/* Qui metteremo le pagine */}
            <Routes>
              <Route path="/" element={<Navigate to="/admin" />} />
              <Route path="/admin" element={<div>Dashboard</div>} />
              <Route path="/admin/users" element={<Users />} />
              <Route path="/admin/content" element={<Content />} />
              <Route path="/admin/stats" element={<Stats />} />
              <Route path="/admin/applications" element={<Applications />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<PublicLayout><Landing /></PublicLayout>} />
              <Route path="/videos" element={<PublicLayout><Videos /></PublicLayout>} />
              <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <PrivateLayout>
                      <Profile />
                    </PrivateLayout>
                  </PrivateRoute>
                }
              />
              <Route
                path="/my-applications"
                element={
                  <PrivateRoute>
                    <PrivateLayout>
                      <UserApplications />
                    </PrivateLayout>
                  </PrivateRoute>
                }
              />
              <Route
                path="/continue"
                element={
                  <PrivateRoute>
                    <PrivateLayout>
                      <ContinueWatching />
                    </PrivateLayout>
                  </PrivateRoute>
                }
              />
              </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
