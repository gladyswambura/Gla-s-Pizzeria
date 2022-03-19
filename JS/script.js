var total = 0;
var deliveryFee = 200;
var crustPrice = new Array(250, 350, 300);
var sizePrice = new Array(500, 800, 1100);
var toppingsPrice = new Array(50, 300, 200, 150, 400);

function TotalPrices(flavorName, crustName, sizeName, toppingName) {
    this.flavorName = flavorName;
    this.crustName = crustName;
    this.sizeName = sizeName;
    this.toppingName = toppingName;
}

$(document).ready(function () {
    $("button#submit").click(function (event) {
        $("button#submit").text("Add Pizza");

        // flavour
     event.preventDefault();
     var selectedFlavor = document.getElementsByName("flavors");
     for (i = 0; i < selectedFlavor.length; i++) {
         if (selectedFlavor[i].checked) {
             var flavorName = selectedFlavor[i].value;
         }
