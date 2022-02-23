//Html elements
const billInput = document.getElementById("bill");
const tipButtons = document.querySelectorAll(".selector");
const customTip = document.getElementById("custom");
const errorMsg = document.querySelector(".error");
const errorMsg2 = document.querySelector(".error2");
const personCount = document.getElementById("people");
const resetButton = document.querySelector(".reset");
const tipPerPerson = document.getElementById("tip");
const totalPerPerson = document.getElementById("totalCost");
const reset = document.querySelector(".reset");
let bill = 0;
let tip = 0;
let noOfPeople = 0;

billInput.addEventListener("change", () => {
  if (billInput.value <= 0) {
    bill = 0;
    billInput.value = bill;
    tipPerPerson.innerText = "$0.00";
    errorMsg.style.visibility = "visible";
  } else {
    bill = billInput.value;
    errorMsg.style.visibility = "hidden";
  }
});

//tip buttons
tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tip = button.value / 100;
    //changing button color
    //*function update
    update();
  });
});

function update() {
  //tipAmount
  let tipAmount = (parseFloat(bill) * tip) / parseInt(noOfPeople);
  tipPerPerson.innerText = "$" + tipAmount.toFixed(2);
  //totalPerPerson
  let total =
    (parseFloat(bill) + tipAmount * parseInt(noOfPeople)) /
    parseInt(noOfPeople);
  totalPerPerson.innerText = "$" + total.toFixed(2);
}

// make buttons change color when clicked
tipButtons.forEach((item) => {
  item.addEventListener("focus", (e) => {
    e.target.style.background = "hsl(185, 41%, 84%)";
  });
  item.addEventListener("blur", (e) => {
    e.target.style.background = "";
  });
});

//*? visibility for errorMsg2 not working
personCount.addEventListener("change", () => {
  if (personCount.value <= 0) {
    noOfPeople = 0;
    personCount.value = noOfPeople;
    errorMsg2.style.visibility = "visbile";
  } else {
    noOfPeople = personCount.value;
    errorMsg2.style.visibility = "hidden";
  }
});

//*reset function
resetButton.addEventListener("click", () => {
  bill = 0;
  tip = 0;
  noOfPeople = 0;
  billInput.value = "";
  personCount.value = "";
  customTip.value = "";
  tipPerPerson.innerText = "$0.00";
  totalPerPerson.innerText = "$0.00";
  errorMsg.style.visibility = "hidden";
});

//TODO: custom button functionality

customTip.addEventListener("change", () => {
  tip = parseFloat(customTip.value) / 100;
  //console.log(tip);
  update();
});
