import Spinner from "../components/Spinner";



export default function SplashScreen() {
    return (<div class='fade h-screen w-screen flex justify-center items-center'>
        <div class='flex flex-col justify-center items-center gap-4'>
            <h1 class='text-2xl font-bold'>Livrari Regie</h1>
            <Spinner />
        </div>
    </div>)
}