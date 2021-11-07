import React from "react";
import Item from "./Item.jsx";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm.jsx";
import {loadStripe} from "@stripe/stripe-js";


function Cart(){
const stripePromise = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM");
    return (
        <div>
            <Item/>
            <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
        </div>

    );
}

export default Cart;
