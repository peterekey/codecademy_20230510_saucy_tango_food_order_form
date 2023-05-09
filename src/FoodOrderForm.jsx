import { useState } from "react";

function FoodOrderForm() {
    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input id="name" />

            <label htmlFor="phone">Phone:</label>
            <input id="phone" />

            <label htmlFor="address">Address:</label>
            <input id="address" />

            <label htmlFor="order">Order:</label>
            <input id="order" />
        </form>
    )
}

export default FoodOrderForm;