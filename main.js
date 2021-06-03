canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["https://i.postimg.cc/bv5d35nK/racing.jpg","https://media.istockphoto.com/photos/retro-video-game-background-3d-illustration-picture-id1146551901?k=6&m=1146551901&s=612x612&w=0&h=oJsvgo3c_KWaW2cmub0Yf3fgJj5CkSUVXSNRTSa-MiE=","https://ak.picdn.net/shutterstock/videos/3634658/thumb/1.jpg"];
random_number = Math.floor(Math.random()*4);
console.log(random_number);
car_width = 100;
car_height = 90;
car_x = 10;
car_y = 10;
background_image = nasa_mars_images_array[random_number];
console.log("Background Image = "+background_image);
car_image = "https://i.postimg.cc/bph7v3kF/car1.png";
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadCar;
    car_imgTag.src = car_image;
}
function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}
function uploadCar()
{
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("Up arrow is pressed");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("Down arrow is pressed");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("Left arrow is pressed");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("Right arrow is pressed");
    }
}

function up()
{
    if(car_y >=0)
    {
        car_y = car_y - 10;
        console.log("When up arrow is pressed = " + car_x + "-" + car_y);
        uploadBackground();
        uploadCar();
    }
}
function down()
{
    if(car_y <=500)
    {
        car_y = car_y + 10;
        console.log("When down arrow is pressed = " + car_x + "-" + car_y);
        uploadBackground();
        uploadCar();
    }
}
function left()
{
    if(car_x >=0)
    {
        car_x= car_x - 10;
        console.log("When left arrow is pressed = " + car_x + "-" + car_y);
        uploadBackground();
        uploadCar();
    }
}
function right()
{
    if(car_x <=700)
    {
        car_x = car_x + 10;
        console.log("When right arrow is pressed = " + car_x + "-" + car_y);
        uploadBackground();
        uploadCar();
    }
}