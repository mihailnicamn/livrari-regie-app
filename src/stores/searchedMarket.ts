import { createSignal, createMemo, createRoot, createEffect } from "solid-js";
import markets from "./markets";
interface ISearchedMarket {
    search: () => string;
    setSearch: (search: string) => void;
    list: any;
    queriedMarkets: any;
    small: any;
}

function createSearchedMarket() {
    const { list, fetchMarkets } = markets;
    fetchMarkets();
    const [search, setSearch] = createSignal("");
    createEffect(() => {
        localStorage.setItem('markets', JSON.stringify(list()));
    })
    const queriedMarkets = createMemo(() => {
        if (!search()) return list();
        return list().filter((market: any) =>
            market.name.toLowerCase().includes(search().toLowerCase())
            ||
            market.description.toLowerCase().includes(search().toLowerCase())
            ||
            market.products.some((product: any) =>
                product.name.toLowerCase().includes(search().toLowerCase())
                ||
                product.description.toLowerCase().includes(search().toLowerCase())
            )
        );
    });
    const small = createMemo(() => {
        return search().length > 0
    })
    return { search, setSearch, list, queriedMarkets, small };
}

const searchedMarket = createRoot(createSearchedMarket);

export default searchedMarket as ISearchedMarket;