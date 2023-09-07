import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import LoginPage from '../LoginPage/LoginPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MovieListPage from '../MoviesListPage/MoviesListPage';
import ActorListPage from '../ActorListPage/ActorListPage';

function App() {
  const [user, setUser] = useState(true);
  return (
    <main className="App">
    {user ? 
      
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/actors' element={<ActorListPage/>}/>
        <Route path='/' element={<MovieListPage/>}/>
            <Route path="/movie/:movieName" element={<MovieDetailPage />} /> 
        
      </Routes>
      </>
   : <LoginPage setUser={setUser}/>

    }
    </main>
  );
}

export default App;
