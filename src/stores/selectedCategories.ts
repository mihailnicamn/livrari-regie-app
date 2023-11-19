import { createSignal, createMemo, createRoot } from "solid-js";
interface SelectedCategorie {
    categorie: any;
    select: (categorie: any) => void;
}
function createSelectedCategorie() {
    const [categorie, setCategorie] = createSignal(null as any);
    const select = (categorie: any) => setCategorie(categorie);
    return { categorie, select };
}

const selectedCategorie = createRoot(createSelectedCategorie);

export default selectedCategorie as SelectedCategorie;