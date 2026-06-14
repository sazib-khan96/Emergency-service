
const copyBtn = document.getElementsByClassName("copy_btn");
for (let btn of copyBtn) {
  btn.addEventListener("click", function () {
    const card = this.closest(".card");
    const heading = card.querySelector(".heading").innerText;
    const number = card.querySelector(".number").innerText;

    navigator.clipboard.writeText(number);
    let copyNumber = document.querySelector(".copy_number");

    let count = parseInt(copyNumber.innerText);
    count = count + 1;
    copyNumber.innerText = count;

    btn.innerText = "Copied";

    setTimeout(function () {
      btn.innerText = "Copy";
    }, 3000);

    alert(`📋 ${heading} number copied: ${number}`);
  });
}

const heardBtn = document.getElementsByClassName("fa-regular");
for (let icon of heardBtn) {
  icon.addEventListener("click", function () {
    let heardCount = document.querySelector(".heard_icon");
    let counter = parseInt(heardCount.innerText);
    counter = counter + 1;
    heardCount.innerText = counter;
  });
}

const coinElement = document.querySelector(".coin_icon");

const callBtn = document.getElementsByClassName("call_btn");
for (let btns of callBtn) {
  btns.addEventListener("click", function () {
    const card = this.closest(".card");
    const heading = card.querySelector(".heading").innerText;
    const number = card.querySelector(".number").innerText;
    let coin = parseInt(coinElement.innerText);
    if (coin < 10) {
      alert("❌ Not enough coins to make a call.");
      return;
    }
    coin -= 10;
    coinElement.innerText = coin;

    const div = document.createElement("div");

    div.innerHTML = `
      <div class="history_child">
            <div>
            <h5>${heading}</h5>
              <p>${number}</p>
            </div>
            <div>
              <p>${new Date().toLocaleTimeString()}</p>
            </div>
          </div>
    `;

    const parent = document.querySelector(".history_parent");
    parent.appendChild(div);

    alert(`${heading} ${number}`);
  });
}

document.querySelector(".clear-btn").addEventListener("click", function () {
  const parent = document.querySelector(".history_parent");
  parent.innerHTML = "";
});
