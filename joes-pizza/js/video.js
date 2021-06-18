window.onload = function() {
    //Get the video.
    var video = document.getElementById("myVideo");

    //Get the buttons.
    var playBtn = document.getElementById("playBtn");
    var pauseBtn = document.getElementById("pauseBtn");
    var seekBar = document.getElementById("seekBar");
    var volumeControl = document.getElementById("volume");
    var muteBtn = document.getElementById("muteBtn");

    //Add an event listener for the play button.
    playBtn.addEventListener("click", function(e) {
        //play the video.
        video.play();
    });

    //Add an event listener for the pause button.
    pauseBtn.addEventListener("click", function(e) {
        //pause the video
        video.pause();
    });

    //Add an event listener for the seek bar.
    seekBar.addEventListener("change", function(e) {
    	//Calculate the time in the video that playback
    	// should be moved to.
    	var time = video.duration * ( seekBar.value / 100 );

    	//Update the current time in the video.
    	video.currentTime = time;
    });

    	//Update the seek bar as the video plays.
    video.addEventListener("timeupdate", function(e) {
    	//calculate the slider value.
    	var value = ( 100 / video.duration ) *  video.currentTime;

    	//Update the slider value.
    	seekBar.value = value;
    });

     //Pause playback when the user starts seeking.
    seekBar.addEventListener("mousedown", function(e) {
    	video.pause();
    });

    //Continue playback when the user stops seeking.
    seekBar.addEventListener("mouseup", function(e) {
    	video.play();
    });

    //Add an event listener for the volume control.
    volumeControl.addEventListener("change", function(e) {
    	//Update the video volume property.
    	video.volume = volumeControl.value;
    });

    //Add event listener for the mute button.
    muteBtn.addEventListener("click", function(e) {
    	//Toggle the muted value.
    	if (video.muted == true) {
    		video.muted = false;
    		muteBtn.textContent = "Mute";
    	} else {
    		video.muted = true;
    		muteBtn.textContent = "Unmute";
    	}
    });
}
