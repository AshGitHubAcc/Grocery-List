import { useState } from "react"
import "./add-item.css"

export default function AddItem({items, setItems}) {
    const [val, setVal] = useState("")

    function addingItem(e) {


        if (e.code === "Enter") {
            onAdded(e.target.value)
            e.target.value = ""
        }
    }

    function onAdded(itemInfo) {

        const newItems = [...items, {
            id: items.length + 1,
            info: itemInfo

        }]
        setItems(newItems)
        console.log(items)
    }




    return (
        <div className="add-item-container">

            <input className="add-item" type="text" onKeyDown={addingItem} />
            <img className="add-image" src={`${process.env.PUBLIC_URL}/plus.png`}/>

        
        </div>
    )
}