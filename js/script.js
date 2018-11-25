// let answers = [],
// 		questions = [
// 		"Расскажите о себе!",
// 		"Как погода за окном?",
// 		"О чем мечтаете?"
// 		];

// for (let i = 0; i < questions.length; i++) {
// 	answers[i] = prompt(questions[i])
// }

// document.write(answers);


// let age = prompt("Enter you age?(numbers)");

// if (age > 18) {
// 	alert('You may go.')
// } else {
// 	alert('Too small(')

// };



// function SayHW() {
// 	document.write("Halo Wurd.")
// }

// SayHW();




function myFirstApp(name, age) {

	// let name = prompt("Напиши, пожалуйста, как тебя зовут"),
			// age = prompt("Напиши, пожалуйста, сколько тебе лет?");

	alert("Привет, меня зовут " + name + " и дальше будет много интересного, не переключайся!");

	function showSkills() {

		let skills = ['html', 'css', 'javascript', 'WP', 'WWW', 'php', 'PhotoShop', 'coding'],
				show = [];

		for (let i = 0; i <= skills.length; i++) {
			document.write("Я владею " + skills[i] + "! <br>")
 		}
	}

	showSkills();

	

	function checkAge() {

		if (age > 18) {
			alert("Я уже совершеннолетний!")
		} else {
			alert("Еще рановато.")
		}
	}

	checkAge();

	function calcPow(a) {

		// let a = prompt("Введи число, что бы узнать его квадрат в консоли");
		console.log(a * a);

	}

	calcPow(56);

}



myFirstApp("Ромка", 23);











