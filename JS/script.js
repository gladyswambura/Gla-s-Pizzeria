var total = [];
var deliveryFee = 200;
// var crustPrice = new Array(250, 350, 300);
// var toppingsPrice = new Array(50, 300, 200, 150, 400);

function totalPrices(flavorName, crustName, sizeName, toppingName, pizzaNumber) {
    this.flavorName = flavorName;
    this.crustName = crustName;
    this.sizeName = sizeName;
    this.toppingName = toppingName;
    this, pizzaNumber = pizzaNumber
}

$(document).ready(function () {
    $("button#submit").click(function (event) {
        $("button#submit").alert("its you again");
         event.preventDefault();
});

      var pizzaPrice = new Array(500, 800, 1100);
      Pizza.prototype.totalPrice = function () {
          return (this.crustName + this.toppingName + this.sizeName) * this.pizzaNumber
      };

        //  size
      Pizza.prototype.pizzaS = function () {
          if (this.sizeName == 1100) {
              return "Large"

          } else if (this.sizeName == 800) {
              return "Medium"

          } else if (this.sizeName == 500) {
              return "Small"
          }
      }

    //   crust
    Pizza.prototype.pizzaC = function () {
        if (this.crustName == 250) {
            return "Thin"

        } else if (this.crustName == 350) {
            return "Thick"

        } else if (this.crustName == 300) {
            return "Stuffed"
        }
    }

    // topping
    Pizza.prototype.pizzaT = function () {
        if (this.toppingName == 150) {
            return "Potato"
        } else if (this.toppingName == 170) {
            return "Mushrooms"
        } else if (this.toppingName == 200) {
            return "Black olives"
        }
    }

    $("#checkout").click(function (event) {

                var flavorName = $("#Flavour").val();

                var sizeName = parseInt($("#Size").val());

                var crustName = parseInt($("#Crust").val());

                var toppingName = parseInt($("#Topping").val());

                var PizzaNumber = parseInt($("#number").val());


  var newTotal = new Pizza(flavorName, sizeName, crustName, toppingName, PizzaNumber);

 console.log(newTotal)

 console.log(newTotal.flavorName)
 OrderNew.push(newTotal);
 console.log(total)

$("#Flavour").val("");
$("#Size").val("");
$("#Crust").val("");
$("#Topping").val("");
$("#number").val("");

}