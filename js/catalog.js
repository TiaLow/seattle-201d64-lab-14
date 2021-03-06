/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var createOption = document.createElement('option');
    createOption.textContent = Product.allProducts[i].name;
    selectElement.appendChild(createOption);
    // console.log(Product.allProducts[0].name);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // var theForm = event.target;


  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// Add the selected item and quantity to the cart
// suss out the item picked from the select list
// get the quantity
 // using those, add one item to the Cart
function addSelectedItemToCart() {
  var inputOfProduct = event.target.items.value;
  var inputOfQuantity = event.target.quantity.value;
  var newCartItem = new CartItem(inputOfProduct,inputOfQuantity);
  console.log(newCartItem);
  totalQuantity.push(inputOfQuantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var targetCartCount = document.getElementById('itemCount');
  targetCartCount.textContent = totalQuantity;

  function arrSum(arr){
    return arr.reduce(function(a,b){
      return a + b;
    }, 0);
  }
  
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
