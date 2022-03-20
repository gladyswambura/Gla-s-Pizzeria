
var deliveryFee = 200;
// var crustPrice = new Array(250, 350, 300);
// var toppingsPrice = new Array(300, 200, 150, 400);

function totalPrices(flavorName, crustName, sizeName, toppingName, pizzaNumber) {
    this.flavorName = flavorName;
    this.crustName = crustName;
    this.sizeName = sizeName;
    this.toppingName = toppingName;
    this. pizzaNumber = pizzaNumber
}

$(document).ready(function () {
    $("button#submit").click(function (event) {
         event.preventDefault();



var fullName = $('#person-name').val();
var telephoneNumber = $('#phone-number').val();
var pizzaFlavor = $('#flavor option:selected').val();
var pizzaSize = $('#pizza-size option:selected').val();
var crustType = $('#crust option:selected').val();
var toppings = $('#toppings option:selected').val();
var additionalToppings = $('#extra-toppings option:selected').val();
var totalNumberOfPizza = $('#pizza-number').val();

var totalAmount = parseInt(totalNumberOfPizza) * (parseInt(pizzaSize) + parseInt(toppings) +
    parseInt(additionalToppings) + parseInt(crustType) + deliveryFee);

    // display summary
 $("#ordersTaken").append("");
 if (totalAmount.length > 0) {
     $("#form-heading").empty();
     $("#form-heading").append("Make A New Order");
 }

$("#totalAmount").fadeIn();
$("#Checkout").fadeIn();
$("#totalAmount").empty();
$("#totalAmount").append(totalAmount);
$("#totalAmount").show();
});

$("#Checkout").click(function () {
    $(".checkout-info").show();
});
     
alert("Dear " + fullName + "Your" + pizzaFlavor + " " + telephoneNumber + totalsOfPizza);


});
});



