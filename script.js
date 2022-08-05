const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const today = new Date().toLocaleDateString();
const day_long = new Date().toLocaleString('default', {weekday: 'long'});
var message;
var cat_image;

const title_container = document.getElementById("title-container");
// const fireworks = document.getElementsByClassName("lottie-firework")[0];
const cat_container = document.getElementById("cat");
const cat_images = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];


function deploy(custom_msg=null) {
	//<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_5hufvwkz.json" background="transparent" speed="1" class="lottie-firework overlay" loop></lottie-player>
	if (custom_msg) {
		document.getElementById("button").setAttribute("hidden", "");
		secondary_title.innerHTML = custom_msg;
	}

	const fireworks = document.createElement("lottie-player");
	fireworks.setAttribute("src", "https://assets3.lottiefiles.com/packages/lf20_5hufvwkz.json");
	fireworks.setAttribute("class", "lottie-firework overlay");
	fireworks.setAttribute("autoplay", "");
	fireworks.setAttribute("loop", "");
	fireworks.setAttribute("background", "transparent");
	fireworks.setAttribute("speed", "1");
	document.body.appendChild(fireworks);

	var iteration = 0;
	cat_images.forEach(async function(file_name) {
		iteration++;
		await sleep(5000*iteration*1.25-2000);
		cat_image = document.createElement("img");
		cat_image.setAttribute("src", file_name);
		cat_image.setAttribute("width", "75%");
		cat_container.appendChild(cat_image);
		console.log("Added cat image!");
	});
}
if (today.slice(0, -5) == "8/4!") {
	message = "CHARLIE'S BIRTHDAY!";
	deploy();
} else if (today.slice(0, -5) == "2/4") {
	message = "CHARLIE'S (half) BIRTHDAY!";
	deploy();
} else {
	message = "not Charlie's birthday :/";
	const button = document.createElement("button");
	button.setAttribute("onclick", "deploy('"+ day_long.toUpperCase() +"!');");
	button.setAttribute("class", "overlay");
	button.setAttribute("id", "button");
	button.innerHTML = "Celebrate Anyways!";
	title_container.appendChild(button);
}

secondary_title = document.createElement("h2");
secondary_title.innerHTML = message;
title_container.appendChild(secondary_title);
