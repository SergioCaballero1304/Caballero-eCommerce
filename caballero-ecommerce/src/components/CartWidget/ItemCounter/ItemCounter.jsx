import { useState } from "react"

export const ItemCounter = ({ initial = 1, stock = 5, onAdd }) => {
    const [count, setCount] = useState(initial)

    const handleSuma = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleResta = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }


    const handleOnAdd = () => {
        onAdd(count)
    }

    return (
        <div className="text-center">
            <div>
                <p>{count}</p>
            </div>
            <div>
                <button onClick={handleSuma}> + </button>
                <button onClick={handleResta}> - </button>
                <button onClick={handleOnAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}
