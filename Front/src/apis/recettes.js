export async function getRecettes() {
    try {
        const response = await fetch(`api/recettes/getRecettes`);
        if (response.ok) {
            const recettesBack = await response.json();
            console.log(recettesBack);
        };
        return recettesBacks ;
    }
    catch (error) {
        console.error(error);
    }
}
