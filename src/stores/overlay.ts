import { createSignal, createMemo, createRoot } from "solid-js";
interface IOverlay {
    overlay: any;
    setOverlay: (overlay: any) => void;
}
function createSearchedMarket() {
    const [overlay, setOverlay] = createSignal(false);
    return { overlay, setOverlay };
}

const overlay = createRoot(createSearchedMarket);

export default overlay as IOverlay;