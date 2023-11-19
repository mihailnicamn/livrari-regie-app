import { Routes, Route } from '@solidjs/router';
import {
  Home,
  Cos,
  Profil,
  Setari,
  Comenzi,
  ApiExample
} from './pages';

function App() {
  return (
    <div class="text-center">
      <Routes>
        <Route component={Home} path="/" />
        <Route component={Comenzi} path="/comenzi" />
        <Route component={Cos} path="/cos" />
        <Route component={Profil} path="/profil" />
        <Route component={Setari} path="/setari" />
      </Routes>
    </div>
  );
}

export default App;
