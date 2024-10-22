import { useState } from "react"
import "./list.css"

export default function List() {

    const list = [
        {
            id: 1,
            info: "Cake, Apples and Food"
        },
        {
            id: 2,
            info: "Lettcure, grass"
        },

    ]





    const [gorceryList, setGroceryList] = useState(list);


    return (
        <div className="list-container">

            

            <ul className="list">
                {list.map((ele)=> {
                    return (
                        <li key={ele.id}>
                            <input className="checkbox" type="checkbox"></input>
                            <p className="info">{ele.info}</p>
                            <img className="delete-image" src={`${process.env.PUBLIC_URL}/delete.png`} alt="Delete Icon"/>
                        </li>
                    )
                })}
            </ul>

            









        
        
        
        </div>
    )
}