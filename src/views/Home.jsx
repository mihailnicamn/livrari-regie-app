import { createEffect, createSignal } from "solid-js";
import MarketCard from "../components/market/card";
import ProductCard from "../components/product/card";
import axios from "axios";
import selectedCategorie from '../stores/selectedCategories';
import searchedMarket from '../stores/searchedMarket';
import Spinner from "../components/Spinner";
import { instance } from '../stores/network';


const ProductView = () => {
    return (<>
        <div className="container p-2 overflow-scroll gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6" >
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
            <ProductCard price={123.12} />
        </div>
    </>)
}


const MarketView = () => {
    const { small, markets, setMarkets } = searchedMarket;
    createEffect(async () => {
        await instance.get('d/markets').then((res) => {
            setMarkets(res.data);
        }).catch((err) => {
            console.log(err);
        })
    })
    return (
        <>
            {!small() && <div className="p-2 overflow-scroll gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" >
                {markets().length === 0 && <>
                    <div class="w-full h-full flex justify-center items-center">
                        <Spinner />
                    </div>
                </>}
                {markets()
                    .filter(({ products }) => {
                        if (!selectedCategorie.categorie()) return true;
                        return products.map(({ categories }) => categories.includes(selectedCategorie.categorie())).includes(true);
                    })
                    .map((market, index) => {
                        return (<MarketCard
                            {...market}
                            key={`market-${index}`}
                            delivery={{
                                time: '10 min',
                                sum: '20.00'
                            }}
                            hours={{
                                start: '10:00',
                                end: '22:00'
                            }}
                        />)
                    })}
            </div>}


        </>
    );
}

export default function HomeView() {
    return (
        <>
            <MarketView />
        </>
    );
}