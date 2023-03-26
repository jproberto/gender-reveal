function playVideo() {
	hideSection("before");
	showSection("video");
	
	var playerDiv = document.getElementById("player");
	playerDiv.innerHTML = '<video id="myVideo" src="images/video.mp4" controls></video>';
  
	const video = document.getElementById('myVideo');
	  video.addEventListener('ended', function() {
		setTimeout(function() {
			revealGender();
		}, 1000);
	  });
  
}

function hideSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.style.display = "none";
}

function showSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.style.display = "block";
}

function removeClass(elementId, className) {
	document.getElementById(elementId).classList.remove(className);
}

function addClass(elementId, className) {
	document.getElementById(elementId).classList.add(className);
}

function addText(elementId, txt) {
	document.getElementById(elementId).innerHTML = txt;
}

function checkSelectedGender() {
	var selectedValue = document.getElementById("gender-select").value;
	
	if (selectedValue != "") {
		var expectedValue = "menina";
		if (selectedValue === expectedValue) {
			addText("palpite", "Como você adivinhou? 😯");
		} else {
			addText("palpite", "Por essa você não esperava! 😝");
		}
	}
}

function revealGender() {
	hideSection("video");
	showSection("after");
	removeClass("body", "background-before");
	addClass("body",  "background-after");	
	checkSelectedGender();
}

