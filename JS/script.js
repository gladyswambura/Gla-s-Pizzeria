
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



var fullName = $('#person-name').val();
var telephoneNumber = $('#phone-number').val();
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
   
// $("#totalAmount").fadeIn();
// $("#Checkout").fadeIn();
// $("#totalAmount").empty();
// $("#totalAmount").append(totalAmount);
// $("#totalAmount").show();
// });


$("#checkout").click(function() {
    $("#checkout-info").show()
    event.preventDefault();
    var name = $("#person-name").val();
    var deliveryOption = $("#OptionDelivery").val();
});

// $("#person-name").val("");
// $("#OptionDelivery").val("");
// $(".checkout-info").hide();
// $("#Checkout").hide();

// if (deliveryOption === "deliver") {
//     $(".deliveryLocation").show();
//     $(".deliveryCost").show();
//     $("#totalAmount").empty();
//     $("#delivery-cost").append(150);
//     totalAmount += 150;
//     $("#totalAmount").empty();
//     $("#totalAmount").empty();
//     $("#totalAmount").append(totalAmount);
//     $(".TotalAmount").show();
// } else {
//     alert ="Dear, " + NameOfCustomer + ": Your total bill is Ksh. " + totalAmount + ".Collect your order in the next one hour." + " " + " Feel free to reach out to us anytime for questions peraining our products.");
// // alert("Dear " + fullName + " "  + "Your" + " " + pizzaFlavor + " " + "costs ksh." + totalAmount);
});
});