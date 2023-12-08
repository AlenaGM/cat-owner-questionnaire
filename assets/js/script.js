"use strict";

//1- ПРИВЕДЕНИЕ НАПИСАНИЯ ИМЕН СОБСТВЕННЫХ К КРАСИВОМУ ВИДУ

//1.1- Имя с большой буквы (Александра, Анна-Мария)
document.getElementById("firstName").addEventListener("change", function () {
  const firstNames = document.getElementById("firstName").value;
  document.querySelector("#firstName").value = capitalizeNames(firstNames);
});

//1.2- Фамилия с большой буквы (Петров, Петров-Водкин)
document.getElementById("lastName").addEventListener("change", function () {
  const lastNames = document.getElementById("lastName").value;
  document.querySelector("#lastName").value = capitalizeNames(lastNames);
});

//1.3- Кличка кота с большой буквы (Мурзик, Франсуа-Ксавье)
document.getElementById("petName").addEventListener("change", function () {
  const petNames = document.getElementById("petName").value;
  document.querySelector("#petName").value = capitalizeNames(petNames);
});

const capitalizeNames = function (name) {
  const names = name.trim().toLowerCase().split("-");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  return namesUpper.join("-");
};

//1.4- Улица с большой буквы
// сделала только заглавную первую букву, так как очень много нестандартных вариантов типа
//"бульвар имени Карла Либкнехта и Розы Люксембург" или "5-я линия Васильевского острова"
document.getElementById("street").addEventListener("change", function () {
  const street = document.getElementById("street").value.trim().toLowerCase();
  document.querySelector("#street").value =
    street[0].toUpperCase() + street.slice(1); //Ленина
});

//1.5- Дом в верхнем регистре (45-А)
document.getElementById("house").addEventListener("change", function () {
  document.querySelector("#house").value = document
    .getElementById("house")
    .value.trim()
    .toUpperCase();
});

//1.6- Город с заглавной буквы, заглавные буквы в составных названиях
//(Петрозаводск, Великий Устюг, Йошкар-Ола, Комсомольск-на-Амуре, Ла Рош-сюр-Форон)
document.getElementById("city").addEventListener("change", function () {
  const cityParts = document
    .getElementById("city")
    .value.trim()
    .toLowerCase()
    .split(" ");

  const cityUpper = [];
  for (const part of cityParts) {
    cityUpper.push(part[0].toUpperCase() + part.slice(1));
  }

  const city = cityUpper.join(" ");
  const cityIndex = city.lastIndexOf("-") + 1;

  document.querySelector("#city").value =
    city.slice(0, cityIndex) +
    city[cityIndex].toUpperCase() +
    city.slice(cityIndex + 1);
});

//1.7- Эл.почта в нижнем регистре
document.getElementById("email").addEventListener("change", function () {
  document.querySelector("#email").value = document
    .getElementById("email")
    .value.trim()
    .toLowerCase();
});

//1.8- Красивый номер мобильного тел.
document.querySelector("#phone").addEventListener("change", function () {
  let phone = document.querySelector("#phone").value;
  let digits = phone.split("");

  if (phone.length == 10) {
    digits.splice(0, "", "(");
    digits.splice(4, "", ")");
    digits.splice(8, "", "-");
    digits.splice(11, "", "-");
  } else if (phone.length == 11) {
    digits.splice(1, "", "(");
    digits.splice(5, "", ")");
    digits.splice(9, "", "-");
    digits.splice(12, "", "-");
  } else if (phone.length == 12) {
    digits.splice(2, "", "(");
    digits.splice(6, "", ")");
    digits.splice(10, "", "-");
    digits.splice(13, "", "-");
  }

  let almostPhone = digits.join("");
  document.querySelector("#phone").value = "+7" + almostPhone.slice(-14);
});

//2- UX: ПРИ ПЕРЕМЕЩЕНИЯМИ МЕЖДУ РАДИОКНОПКАМИ/ЧЕКБОКСАМИ С ПОМОЩЬЮ ТАБУЛЯЦИИ ПРИ НАЖАТИИ "ВВОД" ВЫБИРАЕТСЯ ОПЦИЯ
const dryfood = document.querySelector("#dryfood");
const wetfood = document.querySelector("#wetfood");
const naturalfood = document.querySelector("#naturalfood");

const male = document.querySelector("#male");
const female = document.querySelector("#female");

document
  .querySelector("#drycheckbox")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter" && dryfood.hasAttribute("checked", "")) {
      dryfood.removeAttribute("checked", "");
    } else if (e.key === "Enter") {
      dryfood.setAttribute("checked", "");
    }
  });

document
  .querySelector("#wetcheckbox")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter" && wetfood.hasAttribute("checked", "")) {
      wetfood.removeAttribute("checked", "");
    } else if (e.key === "Enter") {
      wetfood.setAttribute("checked", "");
    }
  });

document
  .querySelector("#natcheckbox")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter" && naturalfood.hasAttribute("checked", "")) {
      naturalfood.removeAttribute("checked", "");
    } else if (e.key === "Enter") {
      naturalfood.setAttribute("checked", "");
    }
  });

document.querySelector("#maleradio").addEventListener("keypress", function (e) {
  if (e.key === "Enter" && male.hasAttribute("checked", "")) {
    male.removeAttribute("checked", "");
  } else {
    female.removeAttribute("checked", "");
    male.setAttribute("checked", "");
  }
});

document
  .querySelector("#femaleradio")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter" && female.hasAttribute("checked", "")) {
      female.removeAttribute("checked", "");
    } else {
      male.removeAttribute("checked", "");
      female.setAttribute("checked", "");
    }
  });

//3- PREVIEW ЗАГРУЖЕННОЙ ФОТОГРАФИИ КОТИКА
const formPhoto = document.getElementById("formPhoto");
const photoPreview = document.getElementById("photoPreview");
let photo;

formPhoto.addEventListener("change", () => {
  uploadFile(formPhoto.files[0]);
});

function uploadFile(file) {
  let reader = new FileReader();
  reader.onload = function (e) {
    photoPreview.innerHTML = `<img src='${e.target.result}' alt="photo"'>`;
    photo = e.target.result;
  };

  reader.readAsDataURL(file);
}

//4- СБРОС ФОТО КОТИКА И ДАННЫХ ФОРМЫ ПРИ НАЖАТИИ НА КЛАВИШУ "СБРОСИТЬ"
document.querySelector("#resetForm").addEventListener("click", function () {
  photoPreview.innerHTML = `<img src='assets/img/cat-default.png' alt="photo"'>`;
});

//5- ОТПРАВКА ФОРМЫ
document.querySelector("#sendForm").addEventListener("click", function (event) {
  event.preventDefault();

  createCatInstance();
  checkValidity();
  sendForm();
  clearForm();
});

const sendForm = () => {
  fetch("https://httpbin.org/post", {
    method: "POST",
    // eslint-disable-next-line
    body: new FormData(form),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(console.log("отправили форму"))
    .then(() => addSuccess())
    .catch((error) => {
      addFail();
      console.log(error.value);
    });
};

function addSuccess() {
  document.getElementById(
    "successMessage"
  ).innerHTML = `Информация о вашем котике отправлена!`;
}

function addFail() {
  document.getElementById(
    "failMessage"
  ).innerHTML = `Информация не была отправлена! Проверьте, правильно ли заполнены поля анкеты`;
}

function checkValidity() {
  console.log("все верно");
}

function clearForm() {
  console.log("все чисто");
  document.querySelector("#form").reset();

  let inputs = document.querySelectorAll("input");

  inputs.forEach(function (input) {
    if (input.type == "checkbox" || input.id == "female") {
      input.removeAttribute("checked", "");
    }
    if (input.id == "male") {
      input.addAttribute("checked", "");
    }
  });

  photoPreview.innerHTML = `<img src='assets/img/cat-default.png' alt="photo"'>`;
}

//6- СОЗДАНИЕ ЭКЗЕМПЛЯРА КОТИКА, ВЫВОД В КОНСОЛЬ И СОХРАНЕНИЕ В LOCAL STORAGE
const createCatInstance = () => {
  //1-Собираем данные
  const petname = document.getElementById("petName").value;
  const race = document.querySelector("select[name='race']").value;
  const comment = document.querySelector("#comment").value;

  let sex = "";
  let food = [];

  const dryfood = document.querySelector("#dryfood");
  const wetfood = document.querySelector("#wetfood");
  const naturalfood = document.querySelector("#naturalfood");

  for (let radio of document.querySelectorAll('input[name="sex"]')) {
    if (radio.checked) {
      sex = radio.value;
    }
  }

  if (dryfood.checked) {
    food.push(dryfood.value);
  }

  if (wetfood.checked) {
    food.push(wetfood.value);
  }

  if (naturalfood.checked) {
    food.push(naturalfood.value);
  }

  //2- Создаем экземпляр котика и выводим его в консоль
  let myCat = new Cat(petname, race, sex, food, comment, photo);
  console.log("Экземпляр котика:", myCat);

  //3- Добавляем в локальное хранилище
  localStorage.setItem(
    `Cats Collection : ${myCat.petname}`,
    JSON.stringify(myCat)
  );
  console.log("добавили котика в локальное хранилище");
};

//КЛАСС КОТИК
class Cat {
  constructor(petname, race, sex, food, comment, photo) {
    this.petname = petname;
    this.race = race || "порода не выбрана";
    this.sex = sex;
    this.food = food;
    this.comment = comment || "нет комментариев";
    this.photo = photo || "фото не загружено";
  }
}
