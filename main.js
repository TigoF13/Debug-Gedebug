let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".container-navbar");
  const currentScrollPos = window.pageYOffset;

  
  if(currentScrollPos <= 900){
    navbar.style.backgroundColor = 'transparent';
  }else{
    navbar.style.backgroundColor = '#4a2a6b'
  }

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
    
  } else {
    navbar.style.top = "-10vh";
  }

  prevScrollPos = currentScrollPos;
});

const contact = document.getElementById("contactDropdown");
const contactContent = document.getElementById("contactDropdownContent");

let isDropdownVisible = false; // Status awal dropdown
contact.addEventListener("click", () => {
    if (!isDropdownVisible) {
        contactContent.style.display = "block"; // Tampilkan dropdown
        isDropdownVisible = true;
    } else {
        contactContent.style.display = "none"; // Sembunyikan dropdown
        isDropdownVisible = false;
    }
});

document.addEventListener("click", (event) => {
    if (isDropdownVisible && event.target !== contact && event.target !== contactContent) {
        contactContent.style.display = "none";
        isDropdownVisible = false;
    }
});

contactDropdownContent.addEventListener("click", (event) => {
    event.stopPropagation();
});

function accept() {
  event.preventDefault(); 

  var userConfirmed = window.confirm("Data yang diisi akan diproses dan dapat dipastikan kebenarannya?");
  if (userConfirmed) {
    alert('Terimakasih telah mempercayakan layanan debugging kepada tim kami ')
    window.location.href = "index.html";
  } else {
    alert("Mohon untuk melengkapi data kembali");
  }
}
