
//это не строка а массив на кой ты её назыв строкой
const fullString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const btn = document.querySelector('.gen__submit');

btn.addEventListener("click", function() {
	var checkboxes = document.querySelectorAll('.gen__check');
	var string = [];
	//не помню js но как понять тип переменной тут? по моему тут не правильно
	var stringNew;

	//тут не очень правильно 
	//если чекбоксы местами поменять то логика посыпится
	//лучше проверять по имени бокса и привязывать нужные символы от этого
	for (i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked == true) {
			string.push(fullString[i]);
			stringNew = stringNew + fullString[i];
		}
	}
	if (string.length == 0) {
		pass = "Выберите параметры";
	} 
	else {
		var pass ="";
		var passLength = document.querySelector('.gen__number');
		
		if (passLength.value > 25) {			
			passLength.value = 25
		}
		else if (passLength.value < 4) {
			passLength.value = 4
		} 
		
		//логику потом т.к. у меня мозг взрыв. помнить что строка не строка а массив. нужно привасти в порядок оформление
		for (i=0; i<string.length; i++) {
			var random = getRndInteger(0, string[i].length)
			var item = string[i];
			pass = pass + item[random]
		}

		for (n=string.length; n<passLength.value; n++) {
			var randomSym = getRndInteger(0, stringNew.length)
			pass = pass + stringNew[randomSym]
		}
	}
	var passArea = document.querySelector('.gen__textArea');
		passArea.value = pass;
});


//Copy button + snackbar
var copy = document.querySelector('.gen__copyButton');
copy.addEventListener("click", function () {
	var passArea = document.querySelector('.gen__textArea');
	passArea.select();
	document.execCommand("copy");
	var snackbar = document.querySelector('.gen__snackbar');
	snackbar.style.display = "block";
	setTimeout(function(){snackbar.style.display = "none";}, 2000);
	});
