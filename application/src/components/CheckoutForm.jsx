import React from "react";
import Item from "./Item.jsx";
import {CardElement, CardElementContainer} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";

import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, Card, Button, FormLayout, TextField} from "@shopify/polaris";

export default function CheckoutForm(){
    return (
        <div>
            <AppProvider i18n={enTranslations}>
                <Page title="Example App">
                    <Card sectioned>
                        <FormLayout.Group>
                            <TextField value="" label="firsname" placeholder="sean"/>
                        <Button primary onClick={() => alert('Button clicked!')}>Example button</Button>
                        </FormLayout.Group>
                    </Card>
                </Page>
            </AppProvider>
        </div>
    );
}
