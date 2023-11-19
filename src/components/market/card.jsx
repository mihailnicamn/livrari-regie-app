



const getHours = (market) => {
    const dayOfWeek = new Date().getDay();
    const hours = market.hours[dayOfWeek];
    if (hours) {
        const today = new Date();
        const start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours.start.split(':')[0], hours.start.split(':')[1]);
        const end = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours.end.split(':')[0], hours.end.split(':')[1]);
        const opened = start < today && end > today;
        return {
            start: hours.start,
            end: hours.end,
            opened: opened
        }
    } else {
        return {
            start: '00:00',
            end: '00:00',
            opened: false
        }
    }
}
const getEstimates = (market) => {
    const delivery = market.delivery;
    if (!delivery) {
        return {
            time: '0 min',
            sum: '0.00'
        }
    }
    if (!delivery.time) delivery.time = '0 min';
    if (!delivery.sum) delivery.sum = '0.00';
    return delivery;
}

export default function MarketCard(props) {
    const hours = getHours(props);
    const delivery = getEstimates(props);
    return (<>
        <div class="w-full cursor-pointer relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class='h-24 overflow-hidden relative'>
                <div class='absolute top-[1px] right-[-8px]'>
                    <span class="bg-blue-100  text-blue-800 text-xl font-medium me-2 px-1 py-0.5 rounded-lg cursor-pointer dark:bg-gray-700 dark:text-blue-400 border border-blue-400"><i class='fa-regular fa-info-circle' /></span>
                </div>
                <div class='absolute top-4 left-4 w-16 h-16 bg-white rounded-lg flex justify-center items-center'>
                    <img class="rounded-lg h-14 w-14" src={props.logo.url} alt={props.logo.alt} />
                </div>
                <img class="rounded-t-lg w-full" src={props.images[0].url} alt={props.images[0].alt} />
            </div>
            <div class="px-1 pb-1">
                <h5 class="text-md font-semibold tracking-tight text-blue-900 dark:text-blue-100">{props.name}</h5>
                <hr
                    class="my-[5px] h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                <div class="flex items-center justify-between px-10">
                    <span class="text-md text-blue-900 dark:text-blue-100"><i class='fa-regular fa-stopwatch' />~{delivery.time}</span>
                    <span class="text-md text-blue-900 dark:text-blue-100"><i class='fa-regular fa-truck-fast' />{delivery.sum} Lei</span>
                </div>
                <hr
                    class="my-[5px] h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                <div class="flex items-center justify-center">
                    <span class={`text-md ${hours.open ? 'text-blue-900 dark:text-blue-100' : 'text-red-900 dark:text-red-100'} `}><i class='fa-regular fa-calendar-day' /> {hours.start} - {hours.end} </span>
                </div>
            </div>
        </div>
    </>)
}