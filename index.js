function colorClock() {
  var date = new Date();
	
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hours < 10) {
	  hours = '0' + hours;
  }

  if (minutes < 10) {
	  minutes = '0' + minutes;
  }

  if (seconds < 10) {
	  seconds = '0' + seconds;
  }
	
	var hexColor = '#' + hours + minutes + seconds;

  var clockFace = hours + ':' + minutes + ':' + seconds;
	console.log(clockFace);
	

  document.getElementById("clockCounter").innerHTML = clockFace;
	document.body.style.background = hexColor;
	
	setTimeout(function() {
		colorClock();
	}, 1000);
}

colorClock();



