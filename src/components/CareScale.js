import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function CareScale({scaleValue, careType}) {
   
    const scaleType = careType === 'light' ? sun : water

    const range = [1, 2, 3]

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <img src={scaleType} alt={careType}  /> : null
            )}
        </div>
    )
}
    
export default CareScale