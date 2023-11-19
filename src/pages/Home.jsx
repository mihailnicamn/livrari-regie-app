import HomeView from '../views/Home';
import ViewLayout from '../components/ViewLayout';
import NavBar from '../components/NavBar';
const Home = () => {
  return (
    <div class='fade'>
      <ViewLayout>
        <HomeView />
      </ViewLayout>
      <NavBar />
    </div>
  );
};

export default Home;
