import { plantList } from '../datas/plantList'

function ShoppingList() {

    const category = plantList.reduce((acc, valCourant) => acc.includes(valCourant.category) ? acc : acc.concat(valCourant.category), [])
    return (
    <div>
        <ul>
            {
                category.map((cat) => (
                    <li key={`${cat}`}>
                        {cat}
                    </li>
                ))
            }
        </ul>
        <ul>
            {
                plantList.map((plant, i) => (
                    <li key={`${plant.name}-${i}`}>
                        {plant.name}
                    </li>
                ))
            }
        </ul>
    </div>
    )
}

export default ShoppingList
