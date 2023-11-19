import { createSignal, createMemo, createRoot, createComputed } from "solid-js";
interface SelectedCategorie {
    categorie: () => any;
    select: (categorie: any) => void;
    isSelected: (categorie: any) => boolean;
}
function createSelectedCategorie() {
    const [categorie, setCategorie] = createSignal(null as any);
    const select = (categorie: any) => setCategorie(categorie);
    const isSelected = ({ _id }: any) => {
        if (!categorie()) return false;
        const { _id: ID } = categorie();
        return _id === ID
    };
    return { categorie, select, isSelected };
}

const selectedCategorie = createRoot(createSelectedCategorie);

export default selectedCategorie as SelectedCategorie;