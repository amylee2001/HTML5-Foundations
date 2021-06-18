window.onload = function() {
	var adCanvas = document.getElementById("adCanvas");

	if (adCanvas.getContext) {
		// Initialize a 2d drawing context.
		var ctx = adCanvas.getContext("2d");

		//Draw on thr Canvas
		var img = new Image();
		img.onload = function() {
			ctx.drawImage(img,0,0);
			drawAdvert();
		}
		img.src = "background.png";
	}

	function drawAdvert() {
		// Create the Background Rectangle
		ctx.fillStyle = "rgba(0,0,0,0.4)";
		ctx.fillRect(0,0,600,150);

		// Add the text styling
		ctx.font = "Bold 32px Georgia";
		ctx.textAlign = "center";
		ctx.fillStyle = "#FFFFFF";

		// Calculate the positions for the text
		var textX = (adCanvas.width / 2) - 80;
		var textY = (adCanvas.height / 2);

		// Add the "New York's Best Pizza" text
		ctx.fillText("New York's Best Pizza", textX, textY - 10);

		//Update the font and add the "Joe's Pizza Co." text
		ctx.font = "Italic 22px Georgia";
		ctx.fillText("Joe's Pizza Co.", textX, textY + 25);

		// Add the separator line
		var lineLength = 360;
		var lineY = (adCanvas.height / 2) + 0.5;

		ctx.beginPath();
		ctx.moveTo(40, lineY);
		ctx.lineTo((lineLength + 40), lineY),
		ctx.lineWidth = 1.0;
		ctx.strokeStyle = "rgba(255,225,255,0.4)";
		ctx.stroke();

		// Create a Linear Gradient for the Circle
		var linGrad = ctx.createLinearGradient(0,0,0,160);
		linGrad.addColorStop(0, "#009A00");
		linGrad.addColorStop(1, "#085A00");

		// Save the context
		  ctx.save();

		//Set a shadow 
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 10;
		ctx.shadowColor = "rgba(0,0,0,0.8)";

		// Draw the offer circle
		ctx.beginPath();
		ctx.arc(525, 75, 80, 0, Math.PI*2, true);
		ctx.fillStyle = linGrad;
		ctx.fill();

		// Restore the saved context
      		ctx.restore();

		// Add the Offer text
		var offerTextX = (adCanvas.width - 75);
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "24px Georgia";
		ctx.fillText("10% OFF", offerTextX, 55);
		ctx.fillText("your first", offerTextX, 84);
		ctx.fillText("meal", offerTextX, 113);
	}
}
