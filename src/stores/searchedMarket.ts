import { createSignal, createMemo, createRoot, createEffect } from "solid-js";
import overlay from "./overlay";
interface SearchedMarket {
    search: any;
    setSearch: (search: string) => void;
    markets: any;
    setMarkets: (markets: any) => void;
}
function createSearchedMarket() {
    const [search, setSearch] = createSignal("");
    const [markets, setMarkets] = createSignal([]);
    const queriedMarkets = createMemo(() => {
        if (!search()) return markets();
        return markets().filter((market: any) =>
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
    return { search, setSearch, markets, setMarkets, queriedMarkets, small };
}

const searchedMarket = createRoot(createSearchedMarket);

export default searchedMarket as SearchedMarket;