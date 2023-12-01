import { getRecettes } from '../apis/recettes';

export async function recettesLoader() {
    return (
        getRecettes()
    );
}


