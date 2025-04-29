import { renderOrderSummary } from "./checkout/orderSummary.js"; 
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js'; // Import the cart object
//import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js"; // Import the loadCart function


// async makes a function return a promise
// async await helps to make the code look a lot cleaner too
async function loadPage() {
    try{
       // throw 'error1';
        await loadProductsFetch(); // now we will wait for this line to finish
    
        const value = await new Promise((resolve) => {
            // throw 'error2';
            loadCart(() => {
                //reject('error3'); // Reject the promise if loading fails
                resolve(); // Resolve the promise when the cart is loaded
            });
        })
    } catch(error) {
        console.log("Error loading products"); // Log the error if loading fails
    }
   
    renderOrderSummary(); // Call the function to render the order summary
    renderPaymentSummary(); // Call the function to render the payment summary
}
loadPage();

/*
Promise.all([
    loadProductsFetch(), // Load products using fetch
    new Promise((resolve) => {
        loadCart(() => {
            resolve(); // Resolve the promise when the cart is loaded
        });
    })
]).then(() => {
    renderOrderSummary(); // Call the function to render the order summary
    renderPaymentSummary(); // Call the function to render the payment summary
})
*/

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1'); // Resolve the promise when the products are loaded
    });
}).then((value) => {

    return new Promise((resolve) => {
        loadCart(() => {
            resolve(); // Resolve the promise when the cart is loaded
        });
    });
}).then(()=> {
    renderOrderSummary(); // Call the function to render the order summary
    renderPaymentSummary(); // Call the function to render the payment summary
});
*/

/*
loadProducts(() => {    
    renderOrderSummary();  
    renderPaymentSummary();
})
*/
