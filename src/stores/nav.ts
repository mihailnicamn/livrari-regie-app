import { createSignal, createMemo, createRoot } from "solid-js";
interface ILocation {
    location: () => string;
    setLocation: (location: string) => void;
}
function createLocationSignal() {
    const [location, setLocation] = createSignal('splash');
    return { location, setLocation };
}


const location = createRoot(createLocationSignal);
setTimeout(() => {
    location.setLocation('home');
}, 500);
export default location as ILocation;