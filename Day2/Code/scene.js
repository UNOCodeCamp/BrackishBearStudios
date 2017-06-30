scene = new Object();

scene.image = new Image();
scene.image.src = "assets/background.png";

scene.draw = function()
{
	renderer.ctx.drawImage( scene.image, 0, 0, 500, 375 ); 
};
