function playVideo() {
  var playerDiv = document.getElementById("player");
  playerDiv.innerHTML = '<div id="player-iframe"></div>';
  
  var player = new YT.Player("player-iframe", {
    height: "450",
    width: "900",
    videoId: "jhFDyDgMVUI",
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
	hideSection("before");
	showSection("video");
	event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    setTimeout(function() {
		revealGender();
	}, 1000);
  }
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

