import Spinner from "../components/Spinner";



export default function SplashScreen() {
    return (<div style='height: 100vh; width: 100vw; display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 4;'>
        <div class='flex flex-col justify-center items-center gap-4'>
            <h1 class='text-2xl font-bold'>Livrari Regie</h1>
            <Spinner />
        </div>
    </div>)
}