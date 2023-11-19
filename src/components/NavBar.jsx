import { Icon } from '@iconify-icon/solid';
import { createSignal, createRoot, createEffect, createMemo } from 'solid-js';
import selectedCategorie from '../stores/selectedCategories';
import searchedMarket from '../stores/searchedMarket';
import MarketCard from './market/card';
import { instance } from '../stores/network';
import useCategories from "../stores/categories";

const Badge = ({ title, selected, onClick }) => {
  return (<>
    <span onClick={onClick} class={` ${selected ?
      ' text-blue-800 border-blue-400 dark:bg-gray-700 dark:text-blue-400 bg-blue-100' :
      ' text-gray-900 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-gray-50'
      } fade text-sm font-medium me-2 px-2.5 py-0.5 rounded  border cursor-pointer select-none`}>{selected && <i class='fa-regular fa-check text-xs' />} {'  '} {title}</span>
  </>)
}
const NavBar = () => {
  const { list: categorii } = useCategories;
  const { isSelected } = selectedCategorie;
  const { small, queriedMarkets, markets, search, setSearch } = searchedMarket;
  return (
    <>
      <div class={`fixed z-50 w-[calc(100%-16px)] mr-1 h-24 ${!small() ? 'h-24' : 'h-[53px]'} max-w-lg h- -translate-x-1/2 bg-white border border-gray-200 rounded-lg overflow-hidden top-1 left-1/2 dark:bg-gray-700 dark:border-gray-600`}>
        <div class="flex flex-col h-full  mx-1">
          <div class='flex relative flex-col justify-center w-full'>
            <div class={`flex relative flex-row items-center mt-1 w-full`}>
              < div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <Icon icon="ic:baseline-search" />
                </div>
                <input type="text" onKeyUp={(e) => { setSearch(e.target.value) }} value={search()} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Caută magazine" required />
              </div>
            </div>
            <div class='flex flex-row justify-start mt-3 pb-8 pl-5 overflow-x-scroll w-full'>
              {categorii().map((categorie, index) => {
                const selected = categorii().filter(({ _id }) => isSelected(_id)).map(({ _id }) => _id).includes(categorie._id);
                return (<Badge selected={selected} key={`categorie-${index}`} title={categorie.name} onClick={() => {
                  if (selected) selectedCategorie.select(null);
                  else selectedCategorie.select(categorie._id);
                }} />)
              })}
            </div>
          </div>
        </div>
      </div >
      {small() &&
        <div class={`absolute overflow-scroll top-0 left-0 w-full bg-white h-full `} style={{ zIndex: 100 }}>
          <div class="mt-[60px] mb-[100px]">
            <div class='p-2 overflow-scroll gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {queriedMarkets()
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
            </div>
          </div>
        </div>}
    </>
  );
};

export default NavBar;
