import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import {
  Home,
  Cos,
  Profil,
  Setari,
  Comenzi,
} from './pages';
import SplashScreen from './pages/SplashScreen';
import nav from './stores/nav'
function App() {
  const { location } = nav;
  return (
    <div class="text-center">
      {location() === 'home' && <Home />}
      {location() !== 'splash' && <NavMenu />}
      {location() === 'splash' && <SplashScreen />}
    </div>
  );
}

export default App;
