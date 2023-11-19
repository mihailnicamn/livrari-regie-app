import { createSignal, createMemo, createRoot, createEffect } from "solid-js";
import overlay from "./overlay";
import { instance } from "./network";
interface IMarkets {
    list: any;
    fetchMarkets: () => void;
}

const readCategiesCache = () => {
    try {
        return JSON.parse(localStorage.getItem('markets') || '[]');
    } catch (e) {
        return [];
    }
}

function createMarkets() {
    const [list, setList] = createSignal(readCategiesCache());
    createEffect(() => {
        localStorage.setItem('markets', JSON.stringify(list()));
    })
    const fetchMarkets = async () => {
        try {
            const { data } = await instance.get('d/markets');
            setList(data);
        } catch (e) { }
    }
    fetchMarkets();
    return {
        list,
        fetchMarkets
    };
}

const markets = createRoot(createMarkets);

export default markets as IMarkets;


