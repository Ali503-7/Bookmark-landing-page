let head_img = document.querySelector(".head-links-mobile img")
let mobile_menu = document.querySelector(".mobile-menu")
let close = document.querySelector(".close")
let header_img = document.querySelector(".head-img")
let header_links = document.querySelector(".head-links")
let mobile_click = document.querySelector(".mobile-menu .main ul")

mobile_click.onclick = () => {
  mobile_menu.style.width = "0%"
  header_img.style.opacity = "1"
  header_links.style.opacity = "1"
  setTimeout(() => {
    mobile_menu.style.display = "none"
  }, 400);
}

head_img.onclick = () => {
  setTimeout(() => {
    mobile_menu.style.display = "grid"
  }, 50);
  setTimeout(() => {    
    mobile_menu.style.width = "100%"
    header_img.style.opacity = "0"
    header_links.style.opacity = "0"
  }, 100);
}

close.onclick = () => {
  mobile_menu.style.width = "0%"
  header_img.style.opacity = "1"
  header_links.style.opacity = "1"
  setTimeout(() => {
    mobile_menu.style.display = "none"
  }, 400);
}


// slider

let def_ex = document.querySelector(".def-ext ul")

let book = document.querySelector(".book")
let search = document.querySelector(".search")
let share = document.querySelector(".share")

let first = document.querySelector(".simple")
let mid = document.querySelector(".speedy")
let last = document.querySelector(".easy")


function defult() {
  book.classList = "book center sec-con"
  search.classList = "search right"
  share.classList = "share right"

  first.classList = "border-bottom"
  mid.classList = 'speedy'
  last.classList = 'easy'
}

defult()

function speedy() {
  book.classList = "book left"
  search.classList = "search center sec-con"
  share.classList = "share right"

  mid.classList = 'border-bottom'
  first.classList = "simple"
  last.classList = 'easy'
}

function easy() {
  book.classList = "book left"
  search.classList = "search left"
  share.classList = "share center sec-con"

  last.classList = 'border-bottom'
  first.classList = "simple"
  mid.classList = 'speedy'
}


def_ex.onclick = (links) => {
  if (links.target.classList == "speedy") {
    speedy()
  } else if (links.target.classList == "easy") {
    easy()
  } else {
    defult()
  }
}


// Q&A


let qusetion = document.querySelectorAll(".question .img-text")
let qusetion_img = document.querySelectorAll(".question .img-text img")
let Anser = document.querySelectorAll(".ansers")

function hidden(i) {
    Anser[i].classList.add("height-0")
    qusetion_img[i].classList.add("img-filter-off")
}

function show(i) {
    Anser[i].classList.add("height-1")
    qusetion_img[i].classList.add("img-filter")
}

class_reset = () => {
  Anser.forEach(an => {
    an.classList = "ansers height-0 "
  });

  qusetion_img.forEach(img => {
    img.classList = ""
  })
}

class_reset()

for (let i = 0; i < qusetion.length; i++) {
  qusetion[i].onclick = (e) => {
    if (qusetion_img[i].classList == "") {
      show(i)
    } else {
      hidden(i)
      class_reset()
    }
  }
}


// email reglar expration

let input = document.querySelector("input")
let button = document.querySelector("footer button")
let f_img = document.querySelector("footer .input img")
let f_p = document.querySelector("footer .input p")

function T_show() {
  f_img.classList.add("img-show")
  f_p.classList.add("alert-show")
  input.classList.add("input-shadow")
};
function F_show() {
  f_img.classList.remove("img-show")
  f_p.classList.remove("alert-show")
  input.classList.remove("input-shadow")
};

function ValidateEmail(mail) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!input.value.match(regex)) {
    T_show()
    setTimeout(() => {
      F_show()
    }, 5000);
  } else {
    input.value = ""
  }
}

button.onclick = () => {
  ValidateEmail(input.value)
}

