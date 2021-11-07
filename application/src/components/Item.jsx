import React, {useState}  from "react";


export default function Item(){
    const [price, setPrice] = useState(20.0);
    return (
        <div>
            <ul>
                <li>
                    <h2>Flowers</h2>
                </li>
                <li>
                    <h2>£{price}</h2>
                </li>
            </ul>
        </div>

    );
}
