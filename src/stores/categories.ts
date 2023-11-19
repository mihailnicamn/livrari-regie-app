import { createSignal, createMemo, createRoot, createEffect } from "solid-js";
import { instance } from "./network";
interface ICategories {
    list: any;
    fetchCategories: () => void;
}

const readCategiesCache = () => {
    try {
        return JSON.parse(localStorage.getItem('categories') || '[]');
    } catch (e) {
        return [];
    }
}

function createCategories() {
    const [list, setList] = createSignal(readCategiesCache());
    createEffect(() => {
        localStorage.setItem('categories', JSON.stringify(list()));
    })
    const fetchCategories = async () => {
        try {
            const { data } = await instance.get('d/categories');
            setList(data);
        } catch (e) { }
    }
    fetchCategories();
    return {
        list,
        fetchCategories
    };
}

const categories = createRoot(createCategories);

export default categories as ICategories;


