//Data
const fullString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
//Random function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
//Generator
const btn = document.querySelector('.gen__submit');

btn.addEventListener("click", function() {
	var checkboxes = document.querySelectorAll('.gen__check');
	var string = "";
	for (i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked == true) {
			string = string + fullString[i];
		}
	}
	if (string == "") {
		pass = "Выберите параметры";
	} else {
	var pass ="";
	var passLength = document.querySelector('.gen__number');
		
	if (passLength.value > 25) {			
		passLength.value = 25
	} else if (passLength.value < 4) {
		passLength.value = 4
	} 
	
		for (n=0; n<passLength.value; n++) {
			var random = getRndInteger(0, string.length)
			pass = pass + string[random]
			}
		}
		var passArea = document.querySelector('.gen__textArea');
		passArea.value = pass;
});
//Copy button
var copy = document.querySelector('.gen__copyButton');
copy.addEventListener("click", function () {
		var passArea = document.querySelector('.gen__textArea');		
    passArea.select();
    document.execCommand("copy");
});