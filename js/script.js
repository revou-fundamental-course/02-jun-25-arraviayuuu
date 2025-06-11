console.log("Javascript is Running");

function validateForm() {
  console.log("Validate Form is Calling");
  const nameInput = document.getElementById("name-input");
  console.log(nameInput.value);
  if (nameInput.value == "") {
    // action ketika value kosong
    alert("Harap untuk isi nama anda");
  } else {
    // action ketika value tidak kosong
    alert(`Hai ${nameInput.value}`);
  }
}
