
// Constants
var TAX_RATE = 1.075,
    PHONE_PRICE = 100.50,
    ACCESSORY_PRICE = 37.25,
    BUDGET_BALANCE = 600.00,
    SPENDING_THRESHOLD = BUDGET_BALANCE - (BUDGET_BALANCE * .75);

var totalPhonesPurchased = 0,
    totalPhonesCost = 0.00 
    totalAccessoriesPurchased = 0,
    totalAccessoriesCost = 0.00;

var purchasePhone = document.querySelector('.purchase-phone'),
    purchaseAccessory = document.querySelector('.purchase-accessory'),
    phoneCost = document.querySelector('.phone-cost'),
    accessoryCost = document.querySelector('.accessory-cost'),
    phonesPurchasedCount = document.querySelector('.phones-purchased-count'),
    phonesPurchasedTotal = document.querySelector('.phones-purchased-total'),
    accessoriesPurchasedCount = document.querySelector('.accessory-purchased-count'),
    accessoriesPurchasedTotal = document.querySelector('.accessory-purchased-total');

phoneCost.textContent = "$" + PHONE_PRICE.toFixed(2);
accessoryCost.textContent = "$" + ACCESSORY_PRICE.toFixed(2);

function updateBalance(){
  var budgetContent = document.querySelector('.remaining-budget');
  budgetContent.textContent = BUDGET_BALANCE.toFixed(2);
}

updateBalance();

function purchaseAttempt($item){
  if(BUDGET_BALANCE > SPENDING_THRESHOLD) {
    var Total = $item * TAX_RATE;
    BUDGET_BALANCE = BUDGET_BALANCE - Total;
  } else {
    alert("Sorry, you've reached your limit!")
  }
}


// These event listeners have a lot of repetition
// Could stand to be dried up. 

purchasePhone.addEventListener("click", function(){
  purchaseAttempt(PHONE_PRICE);

  // This should only be added *if* the purchase is made
  totalPhonesPurchased++;
  totalPhonesCost = totalPhonesCost + PHONE_PRICE;
  phonesPurchasedCount.textContent = totalPhonesPurchased;
  phonesPurchasedTotal.textContent = "$" + totalPhonesCost.toFixed(2);
  updateBalance();
});

purchaseAccessory.addEventListener("click", function(){
  purchaseAttempt(ACCESSORY_PRICE);

  // This should only be added *if* the purchase is made
  totalAccessoriesPurchased++;
  totalAccessoriesCost = totalAccessoriesCost + ACCESSORY_PRICE;
  accessoriesPurchasedCount.textContent = totalAccessoriesPurchased;
  accessoriesPurchasedTotal.textContent = "$" + totalAccessoriesCost.toFixed(2);
  updateBalance();
});