
var deliveryFee = 200;
// var crustPrice = new Array(250, 350, 300);
// var toppingsPrice = new Array(300, 200, 150, 400);

function pizza(pizzaFlavor, crustType, pizzaSize, toppings, totalAmount) {
    this.pizzaFlavor = pizzaFlavor;
    this.crustName = crustType;
    this.sizeName = pizzaSize;
    this.toppingName = toppings;
    this. pizzaNumber = totalAmount
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

//     // display summary
//  $("#ordersTaken").append("");
//  if (totalAmount.length > 0) {
//      $("#form-heading").empty();
//      $("#form-heading").append("Make A New Order");
//  }



// $("#totalAmount").fadeIn();
// $("#Checkout").fadeIn();
// $("#totalAmount").empty();
// $("#totalAmount").append(totalAmount);
// $("#totalAmount").show();
// });


var orders = new pizza(pizzaFlavor, pizzaSize, crustType, toppings, totalAmount);

$("#submit").click(function () {
    $("#odersTaken").show();
      $("#ordersTaken").append(
          "<tr>" +
          '<td scope="orderCalculation">' +
          orders.pizzaFlavor +
          "</td>" +
          "<td>" +
          orders.pizzaSize +
          "</td>" +
          "<td>" +
          orders.crustType +
          " @ " +
          orders.pizzaCrust +
          "</td>" +
          "<td>" +
          orders.toppings +
          " @ " +
          orders.pizzaTopping +
          "</td>" +
          "<td>" +
          orders.PizzaNumber +
          "</td>" +
          "<td>" +
          orders.totalAmount +
          "</td>" +
          "</tr>"

      );
});
   
// $("#checkoutForm").submit(function (event) {
//     event.preventDefault();
//     var name = $("#name").val();
//     var deliveryOption = $("#OptionDelivery").val();
// }

// alert("Dear " + fullName + " "  + "Your" + " " + pizzaFlavor + " " + "costs ksh." + totalAmount);


});
});



