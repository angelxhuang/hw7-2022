var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto Play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down")
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up")
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10
	console.log("Timestamp" + video.currentTime) 
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Video's current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false
		this.innerHTML = "Mute"
		console.log("Unmute")
	}
	else {
		video.muted = true
		this.innerHTML = "Unmute"
		console.log("Mute")
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("The current volume is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Add oldSchool Class");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Remove oldSchool Class");
});