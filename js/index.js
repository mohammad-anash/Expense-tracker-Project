const currentBalance = document.querySelector(".currentBalance");
const assortment = document.querySelector("#assortment");
const amount = document.querySelector("#Amount");
const allTransitionbtn = document.querySelector(".btn");
const historyContainer = document.querySelector(".history-container");
const expenseEl = document.querySelector(".decreaseBalance");
const updateBalance = document.querySelector(".update");

function createHistory(Number) {
  const thingsDiv = document.createElement("div");
  const historyItem = document.createElement("div");
  const paisaDiv = document.createElement("div");

  thingsDiv.classList.add("things");
  historyItem.classList.add("history-item");
  paisaDiv.classList.add("paisa");

  if (Number > 0) {
    historyItem.style.borderRight = "4px solid #2ecc71";
  } else {
    historyItem.style.borderRight = "4px solid #c0392b";
  }

  thingsDiv.innerText = `${assortment.value}`;
  paisaDiv.innerText = `${amount.value}`;

  historyItem.style.padding = "10px";
  historyItem.append(thingsDiv, paisaDiv);
  historyContainer.appendChild(historyItem);
}

function manageCurrentBalance() {
  if (assortment.value === "" || amount.value === "") {
    alert(`Please text fill in Assortment`);
  } else {
    const totalBalance = Number(amount.value);
    createHistory(totalBalance);

    if (totalBalance > 0) {
      currentBalance.innerText = totalBalance;
      updateBalance.innerText = totalBalance;
    } else {
      expenseEl.innerText = amount.value.toString().replace("-", "");
      updateBalance.innerText =
        Number(updateBalance.innerText) - Number(expenseEl.innerText);
    }

    amount.value = "";
    assortment.value = "";
  }
}

allTransitionbtn.addEventListener("click", manageCurrentBalance);
