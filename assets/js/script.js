"use strict"
/*
document.querySelector("#sendForm").addEventListener("click", function(event) {
    event.preventDefault();
});*/

// для Preview загруженной фотографии котика
const formPhoto = document.getElementById('formPhoto');
const photoPreview = document.getElementById('photoPreview');

formPhoto.addEventListener('change', () => {
        uploadFile(formPhoto.files[0]);
    });


function uploadFile(file) {

        var reader = new FileReader();
        reader.onload = function(e){
            photoPreview.innerHTML = `<img src='${e.target.result}' alt="photo"'>`
        };

        reader.readAsDataURL(file);
};

// Чтобы при нажатии на кнопку "Сбросить" фото котика убиралось
document.querySelector("#resetForm").addEventListener('click', function(){
    location.reload();
});

// Приведение написания имен собственных и названий улиц и городов к красивому виду
document.getElementById('firstName').addEventListener('change', function() {//Имя с большой буквы
    let initialFirstName = document.getElementById('firstName').value.trim();
    let firstName = initialFirstName[0].toUpperCase()+initialFirstName.slice(1);//Мария

    document.querySelector('#firstName').value = firstName;
});

document.getElementById('lastName').addEventListener('change', function() {//Фамилия с большой буквы
    let initialLastName = document.getElementById('lastName').value.trim();
    let lastName = initialLastName[0].toUpperCase()+initialLastName.slice(1);//Петрова

    const doubleLastName = lastName.split("-");//На случай двойной фамилии

        if (doubleLastName.length !=2){//Стандартная ситуация: одинарная фамилия
            //Выводим результат в инпут
            document.querySelector('#lastName').value = lastName;//Петрова

        } else {//Нестандартная ситуация: двойная фамилия через дефис
            const secondLastName = doubleLastName[1];//водкина
            const userSecondLastName = secondLastName[0].toUpperCase()+doubleLastName[1].slice(1);//Водкина

            lastName = doubleLastName[0] + "-" + userSecondLastName;

            //Выводим результат в инпут
            document.querySelector('#lastName').value = lastName;//Петрова-Водкина
        }
});

document.getElementById('street').addEventListener('change', function() {//Улица с большой буквы
    let initialStreet = document.getElementById('street').value.trim();
    let street = initialStreet[0].toUpperCase()+initialStreet.slice(1);//Ленина

    document.querySelector('#street').value = street;
}); // сделала только заглавную первую букву, так как очень много нестандартных вариантов типа
//"бульвар имени Карла Либкнехта и Розы Люксембург" или "5-я линия Васильевского острова"

document.getElementById('city').addEventListener('change', function() {//Город с большой буквы

    let initialCity = document.getElementById('city').value.trim();
    let city = initialCity[0].toUpperCase()+initialCity.slice(1);//Петрозаводск

    const multCityName = initialCity.split("-");//На случай названия города из нескольких слов через дефис
    const twoCityName = initialCity.split(" ");//На случай названия города из двух слов через пробел

    if (multCityName.length == 1){//Стандартная ситуация: Петрозаводск
        document.querySelector('#city').value = city;//Петрозаводск

    } else if (multCityName.length == 2) {//Нестандартная ситуация: Йошкар-Ола
        const firstCityName = multCityName[0];//йошкар
        const finalFirstCityName = firstCityName[0].toUpperCase()+multCityName[0].slice(1);//Ола

        const secondCityName = multCityName[1];//ола
        const finalSecondCityName = secondCityName[0].toUpperCase()+multCityName[1].slice(1);//Ола

        city = finalFirstCityName + "-" + finalSecondCityName;

    } else {
        console.log('hihihi');//Комсомольск-на-Амуре
        const firstCityName = multCityName[0];//комсомольск
        const finalFirstCityName = firstCityName[0].toUpperCase()+multCityName[0].slice(1);//Комсомольск

        const thirdCityName = multCityName[2];//амуре
        const finalThirdCityName = thirdCityName[0].toUpperCase()+multCityName[2].slice(1);//Амуре

        city = finalFirstCityName + "-" + multCityName[1] + "-" +finalThirdCityName;
    };

    if (twoCityName.length == 2) {//Нестандартная ситуация: Минеральные Воды
        const firstCityName = twoCityName[0];//минеральные
        const finalFirstCityName = firstCityName[0].toUpperCase()+twoCityName[0].slice(1);//Минеральные

        const secondCityName = twoCityName[1];//воды
        const finalSecondCityName = secondCityName[0].toUpperCase()+twoCityName[1].slice(1);//Воды

        city = finalFirstCityName + " " + finalSecondCityName;
    };

    document.querySelector('#city').value = city;
});

document.getElementById('petName').addEventListener('change', function() {//Имя кота с большой буквы
    let initialPetName = document.getElementById('petName').value.trim();
    let petName = initialPetName[0].toUpperCase()+initialPetName.slice(1);//Мария

    document.querySelector('#petName').value = petName;
});

//Чтобы при перемещениями между радиокнопками/чекбоксами с помощью табуляции при нажатии ввод выбиралась опция

document.querySelector('#drycheckbox').addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && document.getElementById('dryfood').hasAttribute("checked", "")) {
        document.getElementById('dryfood').removeAttribute("checked", "");
    } else if (e.key === 'Enter'){
        document.getElementById('dryfood').setAttribute("checked", "");
    } else {
        console.log('просто нужно было сюда что-то запихать');
    }
});

document.querySelector('#wetcheckbox').addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && document.getElementById('wetfood').hasAttribute("checked", "")) {
        document.getElementById('wetfood').removeAttribute("checked", "");
    } else if (e.key === 'Enter'){
        document.getElementById('wetfood').setAttribute("checked", "");
    } else {
        console.log('просто нужно было сюда что-то запихать');
    }
});

document.querySelector('#natcheckbox').addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && document.getElementById('naturalfood').hasAttribute("checked", "")) {
        document.getElementById('naturalfood').removeAttribute("checked", "");
    } else if (e.key === 'Enter'){
        document.getElementById('naturalfood').setAttribute("checked", "");
    } else {
        console.log('просто нужно было сюда что-то запихать');
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

//Чтобы тел. номер сразу был красивым, но в html валидация тоже есть

document.querySelector('#phone').addEventListener('change', function validatePhone(){
    const phone = document.querySelector('#phone').value;

    var lengthPhone = phone.length;
    var tt=phone.split('');

    if(lengthPhone == 11){
        tt.splice(1,"", "(");
        tt.splice(5,"", ")");
        tt.splice(9,"", "-");
        tt.splice(12,"", "-");

    } else if (lengthPhone == 12){
    tt.splice(2,"", "(");
    tt.splice(6,"", ")");
    tt.splice(10,"", "-");
    tt.splice(13,"", "-");

    } else if (lengthPhone == 13){
    tt.splice(3,"", "(");
    tt.splice(7,"", ")");
    tt.splice(11,"", "-");
    tt.splice(14,"", "-");
    };

    let almostPhone = tt.join('');
    document.querySelector('#phone').value = '+7'+ almostPhone.slice(-14);
});


