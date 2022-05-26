//Data
const fullString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
//Random function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
//Generator v1
// const btn = document.querySelector('.gen__submit');

// btn.addEventListener("click", function() {
// 	var checkboxes = document.querySelectorAll('.gen__check');
// 	var string = "";
// 	for (i=0; i<checkboxes.length; i++) {
// 		if (checkboxes[i].checked == true) {
// 			string = string + fullString[i];
// 		}
// 	}
// 	if (string == "") {
// 		pass = "Выберите параметры";
// 	} else {
// 	var pass ="";
// 	var passLength = document.querySelector('.gen__number');
		
// 	if (passLength.value > 25) {			
// 		passLength.value = 25
// 	} else if (passLength.value < 4) {
// 		passLength.value = 4
// 	} 
	
// 		for (n=0; n<passLength.value; n++) {
// 			var random = getRndInteger(0, string.length)
// 			pass = pass + string[random]
// 			}
// 		}
// 		var passArea = document.querySelector('.gen__textArea');
// 		passArea.value = pass;
// });

//Generator_v2
const btn = document.querySelector('.gen__submit');

btn.addEventListener("click", function() {
	var checkboxes = document.querySelectorAll('.gen__check');
	var string = [];
	var stringNew;

	for (i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked == true) {
			string.push(fullString[i]);
			stringNew = stringNew + fullString[i];
		}
	}

	if (string.length == 0) {
		pass = "Выберите параметры";
	} else {
	var pass ="";
	var passLength = document.querySelector('.gen__number');
		
	if (passLength.value > 25) {			
		passLength.value = 25
	} else if (passLength.value < 4) {
		passLength.value = 4
	} 
	
	for (i=0; i<string.length; i++) {
		var random = getRndInteger(0, string[i].length)
		var item = string[i];
		pass = pass + item[random]
		}
	};
		for (n=string.length; n<passLength.value; n++) {
			var randomSym = getRndInteger(0, stringNew.length)
			pass = pass + stringNew[randomSym]
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
		setTimeout(function(){
  	  snackbar.style.display = "none";
		}, 2000);
	});