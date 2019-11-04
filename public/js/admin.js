/**
 * Client Side JavaScript called in the product.ejs, delete button calls this function
 * with (this) as a param, you should look more into client side js (udemy maybe)
 * here we retrieve the prodId, csrf token and the entire product article by accessing the 
 * DOM through this button, then we make a fetch() call which can make a async call to a url
 * and we add the method and csrf-token in the header, Note that csrf can also be passed as a header
 * as well as a hidden body element.
 * this will trigger the DELETE function in the controller (by way of routers folder) which will delete 
 * the product on the backend.
 * on the frontend, we access the button parentNode which is the overall article where the product sits
 * and we remove it from the DOM for imidiate removal of the item on the UI.  
 */

const deleteProduct = (btn) => {
    const prodId = btn.parentNode.querySelector('[name=productId]').value;
    const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

    const productElement = btn.closest('article');
  
    fetch('/admin/product/' + prodId, {
        method: 'DELETE',
        headers: {
            'csrf-token' : csrf
        }
    })
    .then(result => {
        return result.json();
    })
    .then(data => {
        console.log(data);
        productElement.parentNode.removeChild(productElement);
    })
    .catch(err => {
        console.log(err);
    });
};

