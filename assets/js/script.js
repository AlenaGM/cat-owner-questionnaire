"use strict"
//СТАРЫЙ КОД, НОВЫЙ НАЧИНАЕТСЯ С 214 СТР.
// Приведение написания имен собственных, названий улиц и т.д. к красивому виду
document.getElementById('firstName').addEventListener('change', function() {//Имя с большой буквы

    const firstName = document.getElementById('firstName').value.trim().toLowerCase();
    document.querySelector('#firstName').value = firstName[0].toUpperCase()+firstName.slice(1);//Александра
});


document.getElementById('lastName').addEventListener('change', function() {//Фамилия с большой буквы

    const initialLastName = document.getElementById('lastName').value.trim().toLowerCase();
    let lastName = initialLastName[0].toUpperCase()+initialLastName.slice(1);//Бестужев

    const doubleLastName = lastName.split("-");//На случай двойной фамилии

        if (doubleLastName.length !=2){//Стандартная ситуация: одинарная фамилия

            document.querySelector('#lastName').value = lastName;//Бестужев

        } else {//Нестандартная ситуация: двойная фамилия через дефис
            const secondLastName = doubleLastName[1];//марлинский
            const userSecondLastName = secondLastName[0].toUpperCase()+doubleLastName[1].slice(1);//Марлинский

            lastName = doubleLastName[0] + "-" + userSecondLastName;

            document.querySelector('#lastName').value = lastName;//Бестужев-Марлинский
        }
});


document.getElementById('street').addEventListener('change', function() {//Улица с большой буквы

    const street = document.getElementById('street').value.trim().toLowerCase();

    document.querySelector('#street').value = street[0].toUpperCase()+street.slice(1);//Ленина
}); // сделала только заглавную первую букву, так как очень много нестандартных вариантов типа
//"бульвар имени Карла Либкнехта и Розы Люксембург" или "5-я линия Васильевского острова"


document.getElementById('house').addEventListener('change', function() {//Дом в верхнем регистре

    document.querySelector('#house').value = document.getElementById('house').value.trim().toUpperCase();//45-А
});


document.getElementById('city').addEventListener('change', function() {//Город с большой буквы

    const initialCity = document.getElementById('city').value.trim().toLowerCase();
    let city = initialCity[0].toUpperCase()+initialCity.slice(1);//Петрозаводск

    const multCityName = initialCity.split("-");//На случай названия города из нескольких слов через дефис
    const twoCityName = initialCity.split(" ");//На случай названия города из двух слов через пробел

    if (multCityName.length == 1){//Стандартная ситуация: Петрозаводск
        document.querySelector('#city').value = city;//Петрозаводск

    } else if (multCityName.length == 2) {//Нестандартная ситуация: Йошкар-Ола
        const firstCityName = multCityName[0];//йошкар
        const secondCityName = multCityName[1];//ола

        city = firstCityName[0].toUpperCase()+multCityName[0].slice(1) + "-" + secondCityName[0].toUpperCase()+multCityName[1].slice(1);;

    } else {//Комсомольск-на-Амуре
        const firstCityName = multCityName[0];//комсомольск
        const thirdCityName = multCityName[2];//амуре

        city = firstCityName[0].toUpperCase()+multCityName[0].slice(1) + "-" + multCityName[1] + "-" + thirdCityName[0].toUpperCase()+multCityName[2].slice(1);
    };

    if (twoCityName.length == 2) {//Великий Устюг
        const firstCityName = twoCityName[0];//великий
        const secondCityName = twoCityName[1];//устюг

        city = firstCityName[0].toUpperCase()+twoCityName[0].slice(1) + " " + secondCityName[0].toUpperCase()+twoCityName[1].slice(1);
    };

    document.querySelector('#city').value = city;
});


document.getElementById('email').addEventListener('change', function() {//Эл.почта в нижнем регистре

    document.querySelector('#email').value = document.getElementById('email').value.trim().toLowerCase();
});


document.getElementById('petName').addEventListener('change', function() {//Имя кота с большой буквы

    const petName = document.getElementById('petName').value.trim().toLowerCase();

    document.querySelector('#petName').value = petName[0].toUpperCase()+petName.slice(1);//Ярик

});


// Чтобы при перемещениями между радиокнопками/чекбоксами с помощью табуляции при нажатии клавиши "ввод" выбиралась опция

document.querySelector('#drycheckbox').addEventListener('keypress', function (e) {

    if (e.key === 'Enter' && document.getElementById('dryfood').hasAttribute("checked", "")) {
        document.getElementById('dryfood').removeAttribute("checked", "");

    } else if (e.key === 'Enter'){
        document.getElementById('dryfood').setAttribute("checked", "");
    }
});

document.querySelector('#wetcheckbox').addEventListener('keypress', function (e) {

    if (e.key === 'Enter' && document.getElementById('wetfood').hasAttribute("checked", "")) {
        document.getElementById('wetfood').removeAttribute("checked", "");

    } else if (e.key === 'Enter'){
        document.getElementById('wetfood').setAttribute("checked", "");
    }
});

document.querySelector('#natcheckbox').addEventListener('keypress', function (e) {

    if (e.key === 'Enter' && document.getElementById('naturalfood').hasAttribute("checked", "")) {
        document.getElementById('naturalfood').removeAttribute("checked", "");

    } else if (e.key === 'Enter'){
        document.getElementById('naturalfood').setAttribute("checked", "");
    }
});

document.querySelector('#maleradio').addEventListener('keypress', function (e)  {

    if (e.key === 'Enter' && document.getElementById('male').hasAttribute("checked", "")) {
        document.getElementById('male').removeAttribute("checked", "");

    } else {
        document.getElementById('female').removeAttribute("checked", "");
        document.getElementById('male').setAttribute("checked", "");
    }
});


document.querySelector('#femaleradio').addEventListener('keypress', function (e)  {

    if (e.key === 'Enter' && document.getElementById('female').hasAttribute("checked", "")) {
        document.getElementById('female').removeAttribute("checked", "");

    } else {
        document.getElementById('male').removeAttribute("checked", "");
        document.getElementById('female').setAttribute("checked", "");
    }
});


// Чтобы тел. номер сразу был красивым, (в html валидация тоже есть, все по-честному)

document.querySelector('#phone').addEventListener('change', function validatePhone(){
    let phone = document.querySelector('#phone').value;

    let lengthPhone = phone.length;
    let digits=phone.split('');

    if(lengthPhone == 11){
        digits.slice(1,"", "(");
        digits.slice(5,"", ")");
        digits.slice(9,"", "-");
        digits.slice(12,"", "-");

    } else if (lengthPhone == 12){
        digits.slice(2,"", "(");
        digits.slice(6,"", ")");
        digits.slice(10,"", "-");
        digits.slice(13,"", "-");

    } else if (lengthPhone == 13){
        digits.slice(3,"", "(");
        digits.slice(7,"", ")");
        digits.slice(11,"", "-");
        digits.slice(14,"", "-");
    };

    let almostPhone = digits.join('');
    phone = '+7'+ ' (' + almostPhone.slice(-10,-7) + ') ' + almostPhone.slice(-7,-4) + '-' + almostPhone.slice(-4,-2) + '-' + almostPhone.slice(-2);

    document.querySelector('#phone').value = phone;
});


// для Preview загруженной фотографии котика
const formPhoto = document.getElementById('formPhoto');
const photoPreview = document.getElementById('photoPreview');
let photo;

formPhoto.addEventListener('change', () => {
        uploadFile(formPhoto.files[0]);
    });


function uploadFile(file) {
        let reader = new FileReader();
        reader.onload = function(e){
            photoPreview.innerHTML = `<img src='${e.target.result}' alt="photo"'>`
            photo = e.target.result;
        };

        reader.readAsDataURL(file);
};

// Чтобы при нажатии на кнопку "Сбросить" фото котика убиралось
document.querySelector("#resetForm").addEventListener('click', function(){

    location.reload();
});

// НОВЫЙ КОД 21 НЕДЕЛИ: ОТПРАВКА ФОРМЫ при нажатии на кнопку "Отправить"
document.querySelector("#sendForm").addEventListener('click', function(event){

    event.preventDefault();

    checkAll();

    if (errors == 0){

        fetch("https://httpbin.org/post",
            {
                method:'POST',
                body: new FormData(form),
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                },
            })
        .then(response => response.json())
        .catch(error => console.log(error));
    }
});

// ПРОВЕРКА ВАЛИДАЦИИ ПЕРЕД ОТПРАВКОЙ ФОРМЫ
let errors = [];

function checkValidity (input) {

    let validity = input.validity;

    if(validity.valueMissing) {
        errors.push(input.placeholder + ' is required!');
    }

    if(validity.patternMismatch) {
        errors.push(input.placeholder + ' format is not valid');
    }

    if(validity.tooLong) {
        let maxlength = getAttributeValue(input, 'maxlength');
        errors.push('Maximum number of symbols is ' + maxlength);
    }

    if(errors.length!=0){
        document.getElementById('errorsInfo').innerHTML = 'net ok';

    }else{
        document.getElementById('successMessage').innerHTML = 'vse ok';
    }

}

function checkAll() {

    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById('errorsInfo').innerHTML = errors.join('. <br>');
}

/*Проверка regex
let text = "алена-Алена-АЛЕна привет"; let pattern = /^[-а-яА-ЯёЁ\s]+$/;
let result = pattern.test(text);
console.log(result);*/


/*/НОВЫЙ КОД 19-й недели: КЛАСС КОТИК (убрано, так как не нужен на этой неделе)

document.querySelector('#sendForm').addEventListener("click", function(e) {

    e.preventDefault();

    const name = document.getElementById("petName").value;
    const race = document.querySelector("select[name='race']").value;
    const maleFemale = document.querySelectorAll('input[name="sex"]');
    const comment = document.querySelector('#comment').value;

    let sex = '';
    let initFood = '';//Изначально введенное значение
    let capitalFood;//Изначальное значение с большой буквы

    for (let radio of maleFemale) {
        if (radio.checked) {
            sex = radio.value;
        }
    }

    if(document.querySelector('#dryfood').checked){
        initFood +=`${document.querySelector('#dryfood').value},`;
    }

    if (document.querySelector('#wetfood').checked){
        initFood += `${document.querySelector('#wetfood').value},`;
    }

    if(document.querySelector('#naturalfood').checked){
        initFood += `${document.querySelector('#naturalfood').value},`;
    }

    if (initFood !=''){
        capitalFood = initFood[0].toUpperCase()+initFood.slice(1).toLowerCase();
    } else {capitalFood = 'не указано,'}

    //Оформление: первое слово списка с большой буквы, все остальные с маленькой через запятую
    let separateFood = capitalFood.split(",");
    let food = separateFood.join(", ").slice(0, -2)

    //Экземпляр котика
    let myCat = new Cat(name, race, sex, food, comment, photo);
    console.log(myCat);

    //(на будущее)
    if(name && race && sex && food && photo){
        // Генерируем карточку и добавляем ее на страницу
        const newCard = generateCard(name, race, sex, food, comment, photo)
        document.querySelector('#cat').appendChild(newCard)

        //Добавляем в хранилище
        localStorage.setItem("catsCollection", JSON.stringify(myCat));
    }

});

class Cat {
    constructor(name, race, sex, food, comment, photo) {
        this.name = name;
        this.race = race;
        this.sex = sex;
        this.food = food;
        this.comment = comment;
        this.photo = photo;
    }
}

//ГЕНЕРИРУЕМ КАРТОЧКУ (на будущее и для проверки)
const generateCard = (name, race, sex, food, comment, photo) =>{

    //Рисуем карточку
    let card = document.createElement('div')
    card.classList.add("card");

    let card__image = document.createElement('img')
    card__image.classList.add("card__image");
    card__image.src = photo

    let card__main = document.createElement('div')
    card__main.classList.add("card__main")

    let card__info = document.createElement('div')
    card__info.classList.add("card__info")

    let card__title = document.createElement('h3')
    card__title.classList.add("card__title")
    card__title.innerText = name

    let card__race = document.createElement('div')
    card__race.classList.add("card__race")
    card__race.innerText = `Порода: ${race}`

    let card__sex = document.createElement('div')
    card__sex.classList.add("card__sex")
    card__sex.innerText = `Пол: ${sex}`

    let card__food = document.createElement('div')
    card__food.classList.add("card__food")
    card__food.innerText = `Питание: ${food}`

    let card__text = document.createElement('p')
    card__text.classList.add("card__text")
    card__text.innerText = comment

    let card__buttons = document.createElement('div')
    card__buttons.classList.add("card__buttons");

    let card__edit = document.createElement('button')
    card__edit.classList.add("card__edit");
    card__edit.innerHTML="Редактировать"

    let card__del = document.createElement('button')
    card__del.classList.add("card__del");
    card__del.innerHTML="Удалить"

    card.appendChild(card__image)
    card.appendChild(card__main)

    card__main.appendChild(card__info)
    card__main.appendChild(card__text)
    card__main.appendChild(card__buttons)

    card__buttons.appendChild(card__edit)
    card__buttons.appendChild(card__del)

    card__info.appendChild(card__title)
    card__info.appendChild(card__race)
    card__info.appendChild(card__sex)
    card__info.appendChild(card__food)


    return card
}*/




