import { Icon } from '@iconify-icon/solid';
const getSize = (active) => active ? 'font-size:35px' : 'font-size:25px'
const getColor = (active) => active ? 'text-blue-600' : 'text-black'
import useLocation from '../stores/nav';
import { createMemo } from 'solid-js';
const HomeBtn = () => {
  const { location, setLocation } = useLocation;
  const loc = 'home'
  const size = createMemo(() => getSize(location() === loc))
  const color = createMemo(() => getColor(location() === loc))
  const goto = () => setLocation(loc)
  return (<>
    <button class={`inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group ${color()}`} onClick={goto}>
      <Icon icon='ic:round-home-work' style={size()} />
    </button >
  </>)
}
const ComenziBtn = () => {
  const { location, setLocation } = useLocation;
  const loc = 'comenzi'
  const size = createMemo(() => getSize(location() === loc))
  const color = createMemo(() => getColor(location() === loc))
  const goto = () => setLocation(loc)
  return (<>
    <button class={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group  ${color()}`} onClick={goto}>
      <Icon icon='material-symbols-light:order-approve' style={size()} />
    </button>

  </>)
}
const CosBtn = () => {
  const { location, setLocation } = useLocation;
  const loc = 'cos'
  const size = createMemo(() => getSize(location() === loc))
  const color = createMemo(() => getColor(location() === loc))
  const goto = () => setLocation(loc)
  return (<>
    <button class={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group  ${color()}`} onClick={goto}>
      <Icon icon='icon-park-twotone:shopping' style={size()} />
    </button>

  </>)
}
const CosBtnBak = () => {
  const { location, setLocation } = useLocation;
  const loc = 'cos'
  const size = createMemo(() => getSize(location() === loc))
  const color = createMemo(() => getColor(location() === loc))
  const goto = () => setLocation(loc)
  return (<>
    <div class="flex items-center justify-center relative">
      <span class="bg-blue-100 absolute top-0 right-0 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">2</span>
      <button class="text-white inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800" onClick={goto}>
        <Icon icon='icon-park-twotone:shopping' style={size()} />
      </button>
    </div>
  </>)
}
const ProfilBtn = () => {
  const { location, setLocation } = useLocation;
  const loc = 'profil'
  const size = createMemo(() => getSize(location() === loc))
  const color = createMemo(() => getColor(location() === loc))
  const goto = () => setLocation(loc)
  return (<>
    <button class={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${color()}`} onClick={goto}>
      <Icon icon='clarity:user-solid' style={size()} />
    </button>
  </>)
}
const SetariBtn = () => {
  const { location, setLocation } = useLocation;
  const loc = 'setari'
  const size = createMemo(() => getSize(location() === loc))
  const color = createMemo(() => getColor(location() === loc))
  const goto = () => setLocation(loc)
  return (<>
    <button class={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${color()}`} onClick={goto}>
      <Icon icon='clarity:cog-solid' style={size()} />
    </button>
  </>)
}

const NavMenu = () => {
  return (
    <div class="fade fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full overflow-hidden bottom-2 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
        <HomeBtn />
        <ComenziBtn />
        <CosBtn />
        <ProfilBtn />
        <SetariBtn />
      </div>
    </div>
  );
};

export default NavMenu;
