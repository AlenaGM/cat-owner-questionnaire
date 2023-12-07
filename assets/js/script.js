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
document
  .querySelector("#drycheckbox")
  .addEventListener("keypress", function (e) {
    if (
      e.key === "Enter" &&
      document.getElementById("dryfood").hasAttribute("checked", "")
    ) {
      document.getElementById("dryfood").removeAttribute("checked", "");
    } else if (e.key === "Enter") {
      document.getElementById("dryfood").setAttribute("checked", "");
    }
  });
document
  .querySelector("#wetcheckbox")
  .addEventListener("keypress", function (e) {
    if (
      e.key === "Enter" &&
      document.getElementById("wetfood").hasAttribute("checked", "")
    ) {
      document.getElementById("wetfood").removeAttribute("checked", "");
    } else if (e.key === "Enter") {
      document.getElementById("wetfood").setAttribute("checked", "");
    }
  });
document
  .querySelector("#natcheckbox")
  .addEventListener("keypress", function (e) {
    if (
      e.key === "Enter" &&
      document.getElementById("naturalfood").hasAttribute("checked", "")
    ) {
      document.getElementById("naturalfood").removeAttribute("checked", "");
    } else if (e.key === "Enter") {
      document.getElementById("naturalfood").setAttribute("checked", "");
    }
  });
document.querySelector("#maleradio").addEventListener("keypress", function (e) {
  if (
    e.key === "Enter" &&
    document.getElementById("male").hasAttribute("checked", "")
  ) {
    document.getElementById("male").removeAttribute("checked", "");
  } else {
    document.getElementById("female").removeAttribute("checked", "");
    document.getElementById("male").setAttribute("checked", "");
  }
});
document
  .querySelector("#femaleradio")
  .addEventListener("keypress", function (e) {
    if (
      e.key === "Enter" &&
      document.getElementById("female").hasAttribute("checked", "")
    ) {
      document.getElementById("female").removeAttribute("checked", "");
    } else {
      document.getElementById("male").removeAttribute("checked", "");
      document.getElementById("female").setAttribute("checked", "");
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

//4- СБРОС ФОТО КОТИКА ПРИ НАЖАТИИ НА КЛАВИШУ "СБРОСИТЬ"
document.querySelector("#resetForm").addEventListener("click", function () {
  photoPreview.innerHTML = `<img src='assets/img/cat-default.png' alt="photo"'>`;
});

//5- ОТПРАВКА ФОРМЫ
document.querySelector("#sendForm").addEventListener("click", function (event) {
  event.preventDefault();

  createCatCard();
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

const clearForm = () => {
  console.log("все чисто");
  let inputs = document.querySelectorAll("input");

  inputs.forEach(function (input) {
    input.value = "";
    if (input.type == "checkbox" || input.id == "female") input.checked = false;
    if (input.id == "male") input.checked = true;
  });

  photoPreview.innerHTML = `<img src='assets/img/cat-default.png' alt="photo"'>`;
};

//Создание КАРТОЧКИ  и ЭКЗЕМПЛЯРА котика
const createCatCard = () => {
  //1-Собираем данные
  const petname = document.getElementById("petName").value;
  const race = document.querySelector("select[name='race']").value;
  const maleFemale = document.querySelectorAll('input[name="sex"]');
  const comment = document.querySelector("#comment").value;

  let sex = "";
  let initFood = ""; //Изначально введенное значение
  let capitalFood; //Изначальное значение с большой буквы

  for (let radio of maleFemale) {
    if (radio.checked) {
      sex = radio.value;
    }
  }

  if (document.querySelector("#dryfood").checked) {
    initFood += `${document.querySelector("#dryfood").value},`;
  }

  if (document.querySelector("#wetfood").checked) {
    initFood += `${document.querySelector("#wetfood").value},`;
  }

  if (document.querySelector("#naturalfood").checked) {
    initFood += `${document.querySelector("#naturalfood").value},`;
  }

  if (initFood != "") {
    capitalFood = initFood[0].toUpperCase() + initFood.slice(1).toLowerCase();
  } else {
    capitalFood = "не указано,";
  }

  //2- Оформляем список данных: первое слово списка с большой буквы, все остальные с маленькой через запятую
  let separateFood = capitalFood.split(",");
  let food = separateFood.join(", ").slice(0, -2);

  //3- Создаем экземпляр котика
  let myCat = new Cat(petname, race, sex, food, comment, photo);

  if (petname && race && sex && food) {
    //4- Генерируем карточку и добавляем ее на страницу
    const newCard = generateCard(petname, race, sex, food, comment, photo);
    document.querySelector("#cat").appendChild(newCard);
    console.log("добавили карточку котика на страницу");

    //5- Добавляем в локальное хранилище
    localStorage.setItem(
      `Cats Collection : ${myCat.petname}`,
      JSON.stringify(myCat)
    );
    console.log("добавили котика в локальное хранилище");
  }
};

//КЛАСС КОТИК
class Cat {
  constructor(petname, race, sex, food, comment, photo) {
    this.petname = petname;
    this.race = race;
    this.sex = sex;
    this.food = food;
    this.comment = comment;
    this.photo = photo;
  }
}

//ГЕНЕРАЦИЯ И ОТРИСОВКА КАРТОЧКИ КОТИКА
const generateCard = (petname, race, sex, food, comment, photo) => {
  //Рисуем карточку
  let card = document.createElement("div");
  card.classList.add("card");

  let card__image = document.createElement("img");
  card__image.classList.add("card__image");
  card__image.src = photo ?? "assets/img/cat-lover.png";

  let card__main = document.createElement("div");
  card__main.classList.add("card__main");

  let card__info = document.createElement("div");
  card__info.classList.add("card__info");

  let card__title = document.createElement("h3");
  card__title.classList.add("card__title");
  card__title.innerText = petname;

  let card__race = document.createElement("div");
  card__race.classList.add("card__race");
  card__race.innerText = `Порода: ${race}`;

  let card__sex = document.createElement("div");
  card__sex.classList.add("card__sex");
  card__sex.innerText = `Пол: ${sex}`;

  let card__food = document.createElement("div");
  card__food.classList.add("card__food");
  card__food.innerText = `Питание: ${food}`;

  let card__text = document.createElement("p");
  card__text.classList.add("card__text");
  card__text.innerText = comment;

  let card__buttons = document.createElement("div");
  card__buttons.classList.add("card__buttons");

  let card__edit = document.createElement("button");
  card__edit.classList.add("card__edit");
  card__edit.innerHTML = "Редактировать";

  card.appendChild(card__image);
  card.appendChild(card__main);

  card__main.appendChild(card__info);
  card__main.appendChild(card__text);
  card__main.appendChild(card__buttons);

  card__info.appendChild(card__title);
  card__info.appendChild(card__race);
  card__info.appendChild(card__sex);
  card__info.appendChild(card__food);

  return card;
};
