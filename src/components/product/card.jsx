




export default function ProductCard(props) {
    return (<>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class=" rounded-t-lg" src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR5ULXi2OR1z-cpaVdnMbSm-VNbc5sHy5EOJzD6CD8QO42w_MHQN4eGeT4E2zHEmxkI" alt="product image" />
            </a>
            <div class="px-1 pb-1">
                <a href="#">
                    <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-white">Coca Cola 2L</h5>
                </a>
                <div class="flex items-center justify-center">
                    <span class="text-md font-bold text-gray-900 dark:text-white">{props.price} Lei</span>
                </div>
                <div class="flex items-center justify-between w-full">
                    <a href="#" class="w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Adaugă în coș  <i class='fa-regular fa-cart-plus' /></a>
                </div>
            </div>
        </div>
    </>)
}