import { plantList } from '../datas/plantList'


function Categorie() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <select name='categorie' id='categoriePlante'>
                <option value='default'>...</option>
                {categories.map((cat) => (<option value={cat}>{cat}</option>))}
            </select>
        </div>
    )

}

export default Categorie