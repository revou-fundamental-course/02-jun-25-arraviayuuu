console.log("Javascript is Running");

function validateForm() {
  // Ambil DOM dari Id "name-input" di HTML
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

let indexBanner = 0;

showBanner();

// increment index
function nextBanner() {
  indexBanner += 1;
  showBanner();
}

function showBanner() {
  // DOM Banner
  const listImage = document.getElementsByClassName("banner-image");

  //reset index
  if (indexBanner > listImage.length - 1) {
    indexBanner = 0;
  }

  //lopping to hide all banner
  for (let i = 0; i < listImage.length; i++) {
    listImage[i].style.display = "none";
  }

  listImage[indexBanner].style.display = "block";
  console.log(listImage);
}

setInterval(nextBanner, 3000);
