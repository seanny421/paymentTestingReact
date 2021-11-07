import React from "react";
import Item from "./Item.jsx";
import {CardElement, CardElementContainer} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";


export default function CheckoutForm(){
const stripePromise = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM");
    return (
        <div>
            <form>
                {/* <CardElementContainer> */}
                    <CardElement/>
                    
                {/* </CardElementContainer> */}
            </form>
            <button>Submit</button>
        </div>

    );
}
