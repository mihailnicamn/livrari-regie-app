import { NavLink } from '@solidjs/router';
import NavMenu from '../components/NavMenu';
import HomeView from '../views/Home';
import ViewLayout from '../components/ViewLayout';
import NavBar from '../components/NavBar';
const Home = () => {
  return (
    <>
      <NavMenu />
      <ViewLayout>
        <HomeView />
      </ViewLayout>
      <NavBar />
    </>
  );
};

export default Home;
