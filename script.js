let submitBtn = document.getElementById("submitBtn");

function makeItAngry() {
  
//   langkah pertama
    let inputText = document.getElementById("userText").value.toUpperCase();

    document.getElementById("hasil").innerText = inputText

  
}

submitBtn.addEventListener("click", makeItAngry);
