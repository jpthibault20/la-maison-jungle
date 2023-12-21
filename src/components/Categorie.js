import { plantList } from '../datas/plantList'


function Categorie({categorie, updateCategorie}) {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function handleInput(e) {
        updateCategorie(e.target.value)
	}

    return (
        <div>
            <select name='categorie_' id='categoriePlante' onChange={handleInput}>
                <option value='default'>...</option>
                {categories.map((cat) => (<option value={cat}>{cat}</option>))}
            </select>
        </div>
    )

}

export default Categorie