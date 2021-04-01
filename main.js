canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

WDcar1_width = 120;
WDcar1_height = 70;
WDcar1_image = "White Dragon Car1.png";
WDcar1_x = 10;
WDcar1_y = 300;

GMcar2_width = 120;
GMcar2_height = 70;
GMcar2_image = "Green Machine Car2.png";
GMcar2_x = 10;
GMcar2_y = 400;

background_image = "racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    WDcar1_imgTag = new Image();
    WDcar1_imgTag.onload = uploadWDcar1;
    WDcar1_imgTag.src = WDcar1_image;

    GMcar2_imgTag = new Image();
    GMcar2_imgTag.onload = uploadGMcar2;
    GMcar2_imgTag.src = GMcar2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadWDcar1() {
    ctx.drawImage(WDcar1_imgTag, WDcar1_x, WDcar1_y, WDcar1_width, WDcar1_height);
}

function uploadGMcar2() {
    ctx.drawImage(GMcar2_imgTag, GMcar2_x, GMcar2_y, GMcar2_width, GMcar2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("Up Arrow");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("Down Arrow");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log("Left Arrow");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("Right Arrow");
    }
    if (keyPressed == '87') {
        car2_up();
        console.log("W key - up");
    }
    if (keyPressed == '83') {
        car2_down();
        console.log("S key - down");
    }
    if (keyPressed == '65') {
        car2_left();
        console.log("A key - left");
    }
    if (keyPressed == '68') {
        car2_right();
        console.log("D key - right");
    }
    if(WDcar1_x>700){
        status="Lambhorgini is the winner";
        console.log(status);
        document.getElementById("game_status").innerHTML=status;
    }
    if(GMcar2_x>700){
        status="Bugatti chiron is the winner";
        console.log(status);
        document.getElementById("game_status").innerHTML=status;
    }
    
}



function car1_up() {
    if (WDcar1_y >= 0) {
        WDcar1_y = WDcar1_y - 10;
        console.log("When up arrow is pressed, x = " + WDcar1_x + " | y = " + WDcar1_y);
        uploadBackground();
        uploadWDcar1();
        uploadGMcar2();
    }
}

function car1_down() {
    if (WDcar1_y <= 500) {
        WDcar1_y = WDcar1_y + 10;
        console.log("When down arrow is pressed, x = " + WDcar1_x + " | y = " + WDcar1_y);
        uploadBackground();
        uploadWDcar1();
        uploadGMcar2();
    }
}

function car1_left() {
    if (WDcar1_x >= 0) {
        WDcar1_x = WDcar1_x - 10;
        console.log("When left arrow is pressed, x = " + WDcar1_x + " | y = " + WDcar1_y);
        uploadBackground();
        uploadWDcar1();
        uploadGMcar2();
    }
}

function car1_right() {
    if (WDcar1_x <= 700) {
        WDcar1_x = WDcar1_x + 10;
        console.log("When right arrow is pressed, x = " + WDcar1_x + " | y = " + WDcar1_y);
        uploadBackground();
        uploadWDcar1();
        uploadGMcar2();
    }
}

function car2_up() {
    if (GMcar2_y >= 0) {
        GMcar2_y = GMcar2_y - 10;
        console.log("When W key is pressed, x = " + GMcar2_x + " | y = " + GMcar2_y);
        uploadBackground();
        uploadGMcar2();
        uploadWDcar1();
    }
}

function car2_down() {
    if (GMcar2_y <= 500) {
        GMcar2_y = GMcar2_y + 10;
        console.log("When S key is pressed, x = " + GMcar2_x + " | y = " + GMcar2_y);
        uploadBackground();
        uploadGMcar2();
        uploadWDcar1();
    }
}

function car2_left() {
    if (GMcar2_x >= 0) {
        GMcar2_x = GMcar2_x - 10;
        console.log("When A key is pressed, x = " + GMcar2_x + " | y = " + GMcar2_y);
        uploadBackground();
        uploadGMcar2();
        uploadWDcar1();
    }
}

function car2_right() {
    if (GMcar2_x <= 700) {
        GMcar2_x = GMcar2_x + 10;
        console.log("When D key is pressed, x = " + GMcar2_x + " | y = " + GMcar2_y);
        uploadBackground();
        uploadGMcar2();
        uploadWDcar1();
    }
}