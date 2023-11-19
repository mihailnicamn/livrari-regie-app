import { A, useLocation } from '@solidjs/router';


const HomeBtn = ({ location }) => {
  const loc = '/'
  return (<>
    <button class={`inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group ${location === loc ? 'text-blue-600' : 'text-black'}`}>
      <i class="fa-regular fa-home" />
    </button >
  </>)
}
const ComenziBtn = ({ location }) => {
  const loc = '/comenzi'
  return (<>
    <button class={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group  ${location === loc ? 'text-blue-600' : 'text-black'}`}>
      <i class="fa-regular fa-list" />
    </button>

  </>)
}
const CosBtn = ({ location }) => {
  return (<>
    <div class="flex items-center justify-center relative">
      <span class="bg-blue-100 absolute top-0 right-0 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">2</span>
      <button class="text-white inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
        <i className="fa-regular fa-shopping-cart" />
      </button>
    </div>
  </>)
}
const ProfilBtn = ({ location }) => {
  const loc = '/profil'
  return (<>
    <button class={`inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group ${location === loc ? 'text-blue-600' : 'text-black'}`}>
      <i class="fa-regular fa-user" />
      <span class="sr-only">Profile</span>
    </button>
  </>)
}
const SetariBtn = ({ location }) => {
  const loc = '/setari'
  return (<>
    <button class={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${location === loc ? 'text-blue-600' : 'text-black'}`}>
      <i class="fa-regular fa-cog" />
    </button>
  </>)
}

const NavMenu = () => {
  const location = window.location;
  return (
    <div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full overflow-hidden bottom-2 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
        <HomeBtn location={location.pathname} />
        <ComenziBtn location={location.pathname} />
        <CosBtn location={location.pathname} />
        <ProfilBtn location={location.pathname} />
        <SetariBtn location={location.pathname} />
      </div>
    </div>
  );
};

export default NavMenu;
