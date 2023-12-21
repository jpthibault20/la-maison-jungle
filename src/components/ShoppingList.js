import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categorie from './Categorie'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {


	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div>
			<Categorie />
			<div className='lmj-shopping-list'>
				<ul className='lmj-plant-list'>
					{plantList.map(({ id, cover, name, water, light, price }) => (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					))}
				</ul>
			</div>
		</div>
	)
}

export default ShoppingList
