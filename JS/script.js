
var deliveryFee = 200;

function pizza(pizzaFlavor, crustType, pizzaSize, toppings, totalAmount) {
    this.pizzaFlavor = pizzaFlavor;
    this.crustName = crustType;
    this.sizeName = pizzaSize;
    this.toppingName = toppings;
    this.totalAmount = totalAmount
}

$(document).ready(function () {
    $("button#submit").click(function (event) {
         event.preventDefault();

var pizzaFlavor = $('#flavor option:selected').val();
var pizzaSize = $('#pizza-size option:selected').val();
var crustType = $('#crust option:selected').val();
var toppings = $('#toppings option:selected').val();
var additionalToppings = $('#extra-toppings option:selected').val();
var totalNumberOfPizza = $('#pizza-number').val();

var totalAmount = parseInt(totalNumberOfPizza) * (parseInt(pizzaSize) + parseInt(toppings) +
    parseInt(additionalToppings) + parseInt(crustType));


    // display summary
$("#submit").click(function () {
      $("#ordersTaken").append(
          "<tr>" +
          '<td>' +
          pizzaFlavor+
          "</td>" +
          "<td>" +
          pizzaSize+
          "</td>" +
          "<td>" +
          crustType+
          "</td>" +
          "<td>" +
          toppings+
          "</td>" +
          "<td>" +
          totalAmount+
          "</td>" +
          "</tr>"
      );
});
    });

   
// checkout
$("#Checkout").click(function () {
    $(".checkout-info").show();

$("#person-name").val("");
$("#OptionDelivery").val("");

$("#deliver").click(function (event) {
     event.preventDefault();
 
var fullName = $('#person-name').val();
var telephoneNumber = $('#phone-number').val();
tel = telephoneNumber
NameOfCustomer = fullName;
var deliveryOption = $("#OptionDelivery option:selected").val();
if (deliveryOption === "deliver") {
    $(".deliveryLocation").show();
} else {
    alert ("Dear, " + fullName + "  Your total bill is Ksh. " + totalAmount + 
    ".Collect your order in the next one hour." + " " +
     " Feel free to reach out to us anytime for questions pertaining our products.");
};
});
});

$("#finiish").click(function (event) {
    var pizzaFlavor = $('#flavor option:selected').val();
    var pizzaSize = $('#pizza-size option:selected').val();
    var crustType = $('#crust option:selected').val();
    var toppings = $('#toppings option:selected').val();
    var additionalToppings = $('#extra-toppings option:selected').val();
    var fullName = $('#person-name').val();
    var totalAmount = parseInt(totalNumberOfPizza) * (parseInt(pizzaSize) + parseInt(toppings) +
        parseInt(additionalToppings) + parseInt(crustType));
    var totalNumberOfPizza = $('#pizza-number').val();
    var telephoneNumber = $('#phone-number').val();
    tel = telephoneNumber
    NameOfCustomer = fullName;
    
   alert("Dear " + fullName + " "  + "Your" + " " + pizzaFlavor + " " + "that" + "costs ksh." + totalAmount + " " + 
    "will be delivered within thirty minutes." + "thank you for shopping with us" + "  "  + "regards (gla's Pizeria)" );
    event.preventDefault();

});

});

