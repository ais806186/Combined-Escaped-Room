// canvas 1 variables

// canvas 2 variables
var Paper;
var movePaperStartX;
var movePaperStartY;
var movePaperEndX;
var movePaperEndY;
var myRoom;
var PaperLocation;
var canvasNum;


//MUSIC
var ThemeSong;
var LoserSong;
var OpeningTheme;
var LastPuzzleSong;

//CANVAS 5 PUZZLE ONE ITEMS
var circle1D;
var canvas;
var stateofnumber1;
var stateofnumber2;
var stateofnumber3;
var stateofnumber4;
var stateofnumber5;
var stateofnumber6;
var stateofnumber7;
var stateofnumber8;
var stateofnumber9;

//CANVAS 8 PUZZLE TWO ITEMS

var ellipseX;
var ellipseY;

var ellipse2X; 
var ellipse2Y; 

var ellipse3X;
var ellipse3Y;

var ellipse4X;
var ellipse4Y;

var ellipse5X; 
var ellipse5Y;

var ellipse6X; 
var ellipse6Y;




var lock;
var lock2;
var lock3;
var lock4;
var lock5;
var lock6;
var lock7;
var lock8;
var lock9;
var lock10;
var lock11;
var lock12;

var permanentLock1;
var permanentLock2;
var permanentLock3;
var permanentLock4;
var permanentLock5;
var permanentLock6;

var stickLocation0X;
var stickLocation0Y;

var stickLocation1X;
var stickLocation1Y;

var stickLocation2X;
var stickLocation2Y;

var stickLocation3X;
var stickLocation3Y;

var stickLocation4X;
var stickLocation4Y;

var stickLocation5X;
var stickLocation5Y;

var stickLocation6X;
var stickLocation6Y;

var itemGrid;

//puzzle three items
var corridor;

var lock; 
// canvas 2 variables
var initialTime = 0;
var newSecond = 0;
var q = 0;
var minuteMultiplier = 0;
var reversedTime = 0;
var recordTime = false;
var nextMinute = true;




function preload()
{ 
  ThemeSong =
    loadSound('https://dl.dropbox.com/s/jqmfoua8lmye8li/ESCAPE%20ROOM%202%20Aura%20theme.mp3');
  LoserSong = 
    loadSound('https://dl.dropbox.com/s/u2cjcf5hjud4vo2/ER%20Loser.mp3');
  
  LastPuzzleSong =
    loadSound('https://dl.dropbox.com/s/je9wzew4ky4k25r/last%20Puzzle%20RUNAWAY.mp3');
  
  Paper  =       
    loadImage('https://dl.dropbox.com/s/g4mtic7qn2hug93/parchment.jpg');
  Computer1 =
    loadImage('https://dl.dropboxusercontent.com/s/jc6ntv1kj5jwbk2/mirror.png');
  OfficeBar = 
 loadImage('https://dl.dropboxusercontent.com/s/jeytn20u5u90627/First%20room%20view%202.png');
  ArrowLeft = 
    loadImage('https://dl.dropboxusercontent.com/s/nsakz2buh5r5h7z/Left%20arrow.png');
  ArrowRight =
    loadImage('https://dl.dropboxusercontent.com/s/iawoxtnncwnapx9/Right%20Arrow.png');
  HeadOfficeDoor = 
    loadImage('https://dl.dropbox.com/s/0bd58i53ngfw8a0/door.png');
  MainOffice = 
    loadImage('https://dl.dropboxusercontent.com/s/im904b7a3ziymj2/Coding%20room.png');
  HeadOffice = 
    loadImage('https://dl.dropbox.com/s/vbi76l6tch9ypu3/Office%20view%201.png');

    HeadOffice2 = 
    loadImage('https://dl.dropbox.com/s/662rmrsxi5cg068/Office%20view%202.png');
  
  
  //COMPUTER CODE
  Four =
    loadImage('https://dl.dropbox.com/s/sp67hxlu5twyqni/digital%204.jpg');
  Seven = 
    loadImage('https://dl.dropbox.com/s/ek9gxnlwccmf61h/pitch%20black.png');

//PUZZLE 1 ITEMS
  
  keypad = loadImage('https://dl.dropbox.com/s/5ifjjax7cw68ir9/num%20pads.png');
  
  one = loadImage('https://dl.dropbox.com/s/tfc2ffo9e644v5c/1.png');
  
  two = loadImage('https://dl.dropbox.com/s/ezj6sldf74iycrt/2.png')
  
  three = loadImage('https://dl.dropbox.com/s/lyvf76jzqv6ssgp/3.png');
  
  four = loadImage('https://dl.dropbox.com/s/vmsua2jm186voq5/Number_4.png');
  
  five = loadImage('https://dl.dropbox.com/s/4owe2y8tuolfhhe/number5_PNG15086.png');
  
  six = loadImage('https://dl.dropbox.com/s/h9td52ll24p6alk/Six.svg');
  
  seven = loadImage('https://dl.dropbox.com/s/k9u36gp922yop71/alphanum_number-7_simple-black_512x512.png');
  
  eight = loadImage('https://dl.dropbox.com/s/8lq5ajya38a0geq/200px-Huit.svg.png');
  
  nine = loadImage('https://dl.dropbox.com/s/1sbbu15fpk3z2ip/Neuf.svg');

//PUZZLE 2 ITEMS
  typewriter = loadImage('https://dl.dropbox.com/s/6xeth8in3lfcrx5/Typewriter%20final.png')
  a = loadImage('https://dl.dropbox.com/s/p7w72p2jevho9q1/a.png')

  e = loadImage('https://dl.dropbox.com/s/54mf7t3mlrne97f/e.png');

  d = loadImage('https://dl.dropbox.com/s/zs2y0d1xxt9mu7a/D.png');

f = loadImage('https://dl.dropbox.com/s/w8m6c8s5tcvlnk1/F.png');

h = loadImage('https://dl.dropbox.com/s/hhkx6hv7bzlemt1/h.png');

eight = loadImage('https://dl.dropbox.com/s/i0wmfipeya1dw15/8.png');

//puzzle three
 
corridor = loadImage('https://dl.dropboxusercontent.com/s/i3tlqxrhqo0vdpl/Corridor.png');
corridor2 = loadImage('https://dl.dropboxusercontent.com/s/6b18nc0dyqa15m7/Screen%20Shot%202017-05-22%20at%2012.12.50%20PM.png')
corridor3 = loadImage('https://dl.dropboxusercontent.com/s/5o3hhb22zkz0r85/Screen%20Shot%202017-05-22%20at%2012.13.07%20PM.png')
street = loadImage('https://dl.dropboxusercontent.com/s/0gusjep2ekh1j98/Street%20View.png')


alarm= loadImage('https://dl.dropboxusercontent.com/s/denaylpsul64xm4/alarm.png')
up = loadImage('https://dl.dropboxusercontent.com/s/ex6jms0hjxfolhm/uparrow.png')
down = loadImage('https://dl.dropboxusercontent.com/s/j1yoo58wrf6vvb7/downarrow.png')
right = loadImage('https://dl.dropboxusercontent.com/s/6sokst42abacjzz/leftarrow.png')
left = loadImage('https://dl.dropboxusercontent.com/s/8oxz8bwm49cgiws/rightarrow.png')


}



function setup()
{
    createCanvas(800,600);
  
    // canvas 1 variables

    // marks the location of the Paper 1
    // 1 - is original location
    // 2 - key is in transition
    // 3 - key is in user location

    PaperLocation = 1;

  
    // starting and ending locations of the paper 1
    movePaperStartX = 230;
    movePaperStartY = 270;
    movePaperEndX = 40;
    movePaperEndY = 535;

    itemgrid1X = 80;
    itemgrid1Y = 535;
  
    // which canvas is in focus by default
    canvas = 7;

    lock = false; 
    lock2 = false;

lock3 = false;
lock4 = false; 

lock5 = false; 
lock6 = false; 

lock7 = false; 
lock8 = false; 

lock9 = false;
lock10 = false;

lock11 = false;
lock12 = false;

    ellipseOrientation = 0;
    ellipse2Orientation = 0;
    ellipse3Orientation = 0;
    ellipse4Orientation = 0;
    ellipse5Orientation = 0;
    ellipse6Orientation = 0;
    

  ellipseX = 202;
  ellipseY = 545;

ellipse2X = 285;
ellipse2Y = 545;

ellipse3X = 368;
ellipse3Y = 545;
  
  ellipse4X =451
  ellipse4Y = 545

  ellipse5X = 534;
  ellipse5Y = 545; 

  ellipse6X = 617
  ellipse6Y = 545; 

  stickLocation1X = 105;
  stickLocation1Y = 282;

  stickLocation2X = 178;
  stickLocation2Y = 225;

  stickLocation3X = 200;
  stickLocation3Y = 282;
  
stickLocation4X = 250;
stickLocation4Y = 282;

stickLocation5X = 348;
stickLocation5Y = 282;

stickLocation6X = 387;
stickLocation6Y = 175;


  lockellipseOrientation = false;
  lockellipseOrientation2 = false;
  lockellipseOrientation3 = false;
  lockellipseOrientation4 = false;
  lockellipseOrientation5 = false;
    lockellipseOrientation6 = false;


  permanentLock1 = false;
  permanentLock2 = false;


}

function draw()
{
  //MUSIC
  if (ThemeSong.isPlaying() == false)
  {
    ThemeSong.play();
  }
  
  //CANVAS
    if (canvas == 1)         //HEAD OFFICE
    {
        canvas1();
    }
    else if (canvas == 2)   //MAIN OFFICE
    {
        canvas2();
    }
    else if (canvas == 3)     //OFFICE BAR
    {
        canvas3();
    }
    else if (canvas == 4)     //DOOR LOCK 
    {
        canvas4();
    }
    else if (canvas == 5)       //HEAD OFFICE
    {
        canvas5();
    }
    else if (canvas == 6)       //CODING MACHINE "PUZZLE 2"
    {
        canvas6();              
    }
    else if (canvas == 7)
    {
      canvas7();
    }
    else if(canvas == 8)
    {
      canvas8();
    }
    else if (canvas == 9)
      { 
        canvas9();
      }
      else if (canvas == 10)
      {
        canvas10();
      }
      else if(canvas == 11)
      {
        canvas11();
      }
      else if(canvas == 12)
      {
        canvas12();
      }
      else if(canvas == 13)
      {
        canvas13();
      }
    else
    {
        canvas = 1;
    }
  
   text("Mouse X "+mouseX,10,330);
  text("Mouse Y "+mouseY,10,290);



}

// Canvas 1 is HEAD OFFICE DOOR
function canvas1()
{
  background(255,255,255);
  image(HeadOfficeDoor,0,0);
  itemGrid();
      paintCanvasButtons();

  

  if (mouseX > 255 && mouseX < 270 && mouseY > 330 && mouseY < 350)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      canvas = 4;
      
    }
  }
  else
  {
    cursor(ARROW);
  }
  
    //TOOLBAR IMAGES: IF IMAGE IS ALREADY IN TOOLBAR
  if (mouseX > 50 && mouseX < 60 && mouseY > 545 && mouseY < 560)
  {
    cursor(HAND);
    if(mouseIsPressed == true && PaperLocation == 3)
    {
      image(Paper,movePaperEndX,460,100,100);
    }
  }
fill(0,0,0);
  rect(604,200,20,20);
  fill(0,0,0,0);
  rect(604,250,20,20);
  fill(0,0,0);
  rect(604,300,20,20);
  fill(0,0,0,0);
   rect(604,350,20,20);
   fill(0,0,0);
  rect(604,400,20,20);
  rect(604,450,20,20);

}


//Main office
function canvas2()
{
  background(255,255,255);
  image(MainOffice,0,0);
  itemGrid();
  paintCanvasButtons();
  fill(255,255,255);
 
  text("Get to Work!",375,200);


  // if keyLocation is 1 draw the item in the original location

  if (mouseX > 490 && mouseX < 510 && mouseY > 305 && mouseY < 330)       //SEVEN
  {
    cursor(HAND);
    if (mouseIsPressed == true && PaperLocation == 1)
    {
      image(Seven,454,270,100,100);
    }
  }
    if (mouseX > 425 && mouseX < 440 && mouseY > 255 && mouseY < 270)     //FOUR
    {
      cursor(HAND);
      if (mouseIsPressed == true && PaperLocation == 1)
      {
        image(Four,365,200,100,100);
      }
  }
  else
  {
    cursor(ARROW);
  } 


}
  
  



function canvas3()
{
   background(255,255,255);
   image(OfficeBar,0,0);
   itemGrid();
    paintCanvasButtons();

   fill(255,255,255);
   text("Take This Rookie!",188,265);
  
  
   // if PaperLocation is 1 draw the key in the original location
  if (PaperLocation == 1)
   {
     movePaperStartX = 155;
     movePaperStartY = 280;
     image(Paper,movePaperStartX,movePaperStartY,300/9,300/9);
   }
  // if PaperLocation is 2 then the key is in transit from original location to being in the "user's bag"
   else if (PaperLocation == 2)
   {
     image(Paper,movePaperStartX,movePaperStartY,300/9,300/9);

     // move the key from the starting point to the ending point
     if (movePaperStartX > movePaperEndX)
     {
       movePaperStartX = movePaperStartX - 5;
     }
     if (movePaperStartY < movePaperEndY)
     {
       movePaperStartY = movePaperStartY + 7;
     }
     if ((movePaperStartX > movePaperEndX && movePaperStartY < movePaperEndY))
     {
       PaperLocation = 3;
     }
   }
  else if (PaperLocation == 3)
  {
    
    image(Paper,movePaperEndX,movePaperEndY,300/9,300/9);
  }

   if (mouseX > 165 && mouseX < 180 && mouseY > 285 && mouseY < 300)
   {
     cursor(HAND);
     if (mouseIsPressed == true && PaperLocation == 1)
     {
       PaperLocation = 2;
     }
   }
   else
   {
     cursor(ARROW);
   }
  

  if (mouseX > 50 && mouseX < 60 && mouseY > 545 && mouseY < 560)
  {
    cursor(HAND);
    if(mouseIsPressed == true && PaperLocation == 3)
    {
      image(Paper,movePaperEndX,460,100,100);
    }

  }
}

//DOOR LOCK PAGE
function canvas4()
{
  background (255,255,255)
      paintCanvasButtons();

  if(mouseX > 250 && mouseX < 275 && mouseY > 327 && mouseY < 354 && mouseIsPressed == true)
  {
    canvas = 5;
  }
  
  itemGrid();
}

function canvas5()
{
background(102,51,0);
fill(160,160,160);
rect(160,0,500,600);
    paintCanvasButtons();

fill(0,0,0);
image(keypad,240,120,350,550);
  fill(255,255,255);
  rect(290,75,50,65);
  rect(360,75,50,65);
  rect(430,75,50,65);
  rect(500,75,50,65);
  
  if (stateofnumber1 == 1)
  {
fill(0,0,0);
textSize(50)

    text('1',305,130);
  }
  
  if (stateofnumber2 == 1)
  {
    fill(0,0,0);
textSize(50);
    text('2',443,130);
 
  }
  
  if (stateofnumber3 == 1) 
  {
    fill(0,0,0);
textSize(50);
    text('3',374,130);

 }
  
  if (stateofnumber4 == 1)
  {
    fill(0,0,0);
textSize(50);
 
    text('4',443,130) ;
  }

  if (stateofnumber5 == 1) 
  {
    fill(0,0,0);
    textSize(50);
    text('5',512,130);
  }
  
  if(stateofnumber6 == 1)
  {
    fill(0,0,0);
textSize(50);
      text('6',512,130);

  }
  
  if(stateofnumber7 == 1)
  {
    fill(0,0,0);
    textSize(50);
      text('7',374,130);

  }

  if(stateofnumber8 ==1)
  {

fill(0,0,0);
textSize(50);
   text('8',374,130);
  
  }
  
  if(stateofnumber9 == 1)
  {
  fill(0,0,0);
textSize(50);
       text('9',305,130);
  }

  textSize(10);
  paintNavigation();
  
 
  
  //keypad
  if (mouseX > 296 && mouseX < 350 && mouseY < 537 && mouseY > 493 && mouseIsPressed == true)
  {
    fill(0,0,0);
rect(296,486,55,55);
    stateofnumber1 = 0;
    stateofnumber2 = 0;
    stateofnumber3 = 0;
    stateofnumber4 = 0;
    stateofnumber5 = 0;
    stateofnumber6 = 0;
    stateofnumber7 = 0;
    stateofnumber8 = 0;
    stateofnumber9 = 0;
  }
  //key1
  if (mouseX > 300 && mouseX < 354 && mouseY < 266 && mouseY > 210 && mouseIsPressed == true && lock == false)
  {
    lock == true;


     stateofnumber1 = 1;
    stateofnumber2 = 0;
    stateofnumber3 = 1;
    stateofnumber4 = 0;
    stateofnumber5 = 0;
    stateofnumber6 = 0;
    stateofnumber7 = 0;
    stateofnumber8 = 0;
    stateofnumber9 = 0;
    fill(0,0,0);
    rect(299,208,55,55);

  }
  
  //key2
  if (mouseX > 389 && mouseX < 443 && mouseY < 262 && mouseY > 210 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(387,208,55,55);
    stateofnumber1 = 0;
    stateofnumber2 = 0;
    stateofnumber3 = 0;
    stateofnumber4 = 0;
    stateofnumber5 = 0;
    stateofnumber6 = 0;
    stateofnumber7 = 0;
    stateofnumber8 = 1;
    stateofnumber9 = 1;
  }
  
  //key3
  if (mouseX > 478 && mouseX < 532 && mouseY < 261 && mouseY > 208 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(477,208,55,55);
 stateofnumber1 = 0;
    stateofnumber2 = 1;
    stateofnumber3 = 0;
    stateofnumber4 = 0;
    stateofnumber5 = 0;
    stateofnumber6 = 0;
    stateofnumber7 = 0;
    stateofnumber8 = 1;
    stateofnumber9 = 0;

  }
  
  //key4
  if (mouseX > 296 && mouseX < 350 && mouseY < 354 && mouseY > 303 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(297,299,55,55);
 stateofnumber1 = 0;
    stateofnumber2 = 0;
    stateofnumber3 = 0;
    stateofnumber5 = 1;
    stateofnumber6 = 0;
    stateofnumber8 = 0;
  }
  
  //key5
  if (mouseX > 388 && mouseX < 444 && mouseY < 355 && mouseY > 303 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(387,299,55,55);

   stateofnumber1 = 0;
    stateofnumber2 = 0;
    stateofnumber3 = 0;
    stateofnumber4 = 1;
    stateofnumber6 = 0;
    stateofnumber7 = 1;
    stateofnumber8 = 0;
  
  }
  
  //key6
  if (mouseX > 477 && mouseX < 533 && mouseY < 355 && mouseY > 302 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(476,300,55,55);
    stateofnumber1 = 0;
    stateofnumber2 = 1;
    stateofnumber3 = 0;
    stateofnumber4 = 0;
    stateofnumber5 = 0;
    stateofnumber6 = 0;
    stateofnumber7 = 0;
    stateofnumber8 = 1;
    stateofnumber9 = 0;
  }
  
  //key7
  if (mouseX > 297 && mouseX < 353 && mouseY < 445 && mouseY > 395 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(297,392,55,55);
 stateofnumber1 = 0;
    stateofnumber2 = 0;
    stateofnumber3 = 0;
    stateofnumber5 = 0;
    stateofnumber6 = 0;
    stateofnumber7 = 0;
    stateofnumber8 = 0;
    stateofnumber9 = 1;
      }
  
  //key8
  if (mouseX > 388 && mouseX < 440 && mouseY < 447 && mouseY > 396 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(387,393,55,55);
     stateofnumber1 = 0;
    stateofnumber2 = 0;
    stateofnumber3 = 1;
    stateofnumber4 = 0;
    stateofnumber5 = 0;
    stateofnumber6 = 1;
    stateofnumber7 = 0;
    stateofnumber8 = 0;
    stateofnumber9 = 0;
  }
  
  //key9
  if (mouseX > 478 && mouseX < 530 && mouseY < 447 && mouseY > 395 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(476,393,55,55);
 stateofnumber1 = 0;
    stateofnumber2 = 0;
    stateofnumber3 = 0;
    stateofnumber4 = 1;
    stateofnumber5 = 0;
    stateofnumber6 = 0;
    stateofnumber7 = 1;
    stateofnumber8 = 0;
  }
  

  
  fill(255,255,255);
  textSize(15)
 
fill(0,0,0);
ellipse(610,110,50,50);
if(stateofnumber9 == 1 && stateofnumber7 == 1 && stateofnumber4 == 1 && stateofnumber5 == 1)
{
  fill(0,204,0);
ellipse(610,110,50,50)
  if(mouseX> 588 && mouseX< 634 && mouseY > 85 && mouseY < 134 && mouseIsPressed)
  {
    canvas = 6;
  }

}


}

// HEAD OFFICE
function canvas6()
{
  background (255,255,255)
  image(HeadOffice,0,0)

    fill(255,255,255);
  textSize(15)
  text("Mouse X "+mouseX,50,230);
  text("Mouse Y "+mouseY,50,400);

if(mouseX > 396 && mouseX < 449 && mouseY > 236 && mouseY < 256 && mouseIsPressed == true)
{
  canvas = 8;
}

image(ArrowLeft,50,100,100,50);
if(mouseX > 53 && mouseX < 145 && mouseY > 108 && mouseY < 142 && mouseIsPressed == true)
  { 
canvas = 5; 
  }

image(ArrowRight,680,100,100,50);

//rightarrow
  if(mouseX > 688 && mouseX < 775 && mouseY > 108 && mouseY < 142 && mouseIsPressed == true )
{
  canvas = 7;
}
  itemGrid();

  }



  //otherside of head office
 function canvas7()
 {
background(HeadOffice2,0,0)
  itemGrid();
 fill(255,255,255);
  textSize(15)
  text("Mouse X "+mouseX,50,230);
  text("Mouse Y "+mouseY,50,400);

if(mouseX > 467 && mouseX < 530 && mouseY > 435 && mouseY < 478 && mouseIsPressed == true)
  {   
canvas = 8;
    }

image(ArrowLeft,50,30,100,50);
if(mouseX > 53 && mouseX < 145 && mouseY > 40 && mouseY < 70 && mouseIsPressed == true)
  { 
canvas = 6; 
  }

ellipse(439,305,12,12);
ellipse(302,305,12,12);
ellipse(245,305,12,12);
ellipse(108,305,12,12);

if(mouseX > 296 && mouseX < 305 && mouseY > 300 && mouseY < 311 && mouseIsPressed == true)
{ 
  fill(0,210,0);
  ellipse(525,300,30,30);
  
  if(mouseX> 597 && mouseX < 688 && mouseY > 163 && mouseY < 319 && mouseIsPressed == true)
{
  canvas = 9;
}
}



 }
  


  // PUZZLE 2 CODE MACHINE
function canvas8()
{
    background(120,120,120);
  image(typewriter,-40,90,870,400);
  fill(0,0,0);
  itemGrid();

  image(ArrowLeft,50,30,100,50);
if(mouseX > 53 && mouseX < 145 && mouseY > 38 && mouseY < 70 && mouseIsPressed == true)
  { 
canvas = 6; 
  }

moveellipse1();
moveellipse2();
moveellipse3();
moveellipse4();
moveellipse5();
moveellipse6();

changeellipse();
changeellipse2();
changeellipse3();
changeellipse4();
changeellipse5();
changeellipse6();


   fill(0,0,0);
  text("Mouse X "+mouseX,10,330);
  text("Mouse Y "+mouseY,10,290)

  fill(0,0,0,0);
  stroke(255,255,255,0);
  ellipse(stickLocation1X,stickLocation1Y,40,40);

  ellipse(stickLocation2X,stickLocation2Y,40,40);

  ellipse(stickLocation3X,stickLocation3Y,40,40);

  ellipse(stickLocation4X,stickLocation4Y,40,40);

  ellipse(stickLocation5X,stickLocation5Y,40,40);

  ellipse(stickLocation6X,stickLocation6Y,40,40);


fill(255,0,0);
rect(110,100,40,40);
rect(200,100,40,40);
rect(290,100,40,40);
rect(380,100,40,40);
rect(470,100,40,40);
rect(560,100,40,40);
rect(660,100,70,40);

//first box
if(ellipse3X == stickLocation1X && ellipse3Y == stickLocation1Y)

{
fill(0,204,0);
rect(110,100,40,40);
}
//second answer box
if(ellipse6X == stickLocation2X && ellipse6Y == stickLocation2Y)

{
fill(0,204,0);
rect(200,100,40,40);
}
//3rd answer box
if(ellipseX == stickLocation3X && ellipseY == stickLocation3Y)

{
fill(0,204,0);
rect(290,100,40,40);
}
//4th answer box
if(ellipse5X == stickLocation4X && ellipse5Y == stickLocation4Y)

{
fill(0,204,0);
rect(380,100,40,40);
}
//5th answer box
if(ellipse4X == stickLocation5X && ellipse4Y == stickLocation5Y)

{
fill(0,204,0);
rect(470,100,40,40);
}
//6th box
if(ellipse2X == stickLocation6X && ellipse2Y == stickLocation6Y)

{
fill(0,204,0);
rect(560,100,40,40);
}

if(ellipse3X == stickLocation1X && ellipse3Y == stickLocation1Y && ellipseX == stickLocation3X && ellipseY == stickLocation3Y && ellipse4X == stickLocation5X && ellipse4Y == stickLocation5Y && ellipse2X == stickLocation6X && ellipse2Y == stickLocation6Y)
{
  fill(0,204,0)
  rect(660,100,70,40);
  if(mouseX > 662 && mouseX < 733 && mouseY > 95 && mouseY < 137 && mouseIsPressed == true)
    fill(255,255,255);
    ellipse(300,50,50,50);
    fill(0,0,0,0)
    ellipse(400,50,50,50);
    fill(0,204,0);
    ellipse(500,50,50,50);
}


}


function moveellipse1()
{
  if (permanentLock1 == false)
fill(100,100,100);
 ellipseDistance = sqrt((ellipseX-mouseX)*(ellipseX-mouseX)+(ellipseY-mouseY)*(ellipseY-mouseY))
if(ellipseDistance< 20)

    {
      if (mouseIsPressed == true && mouseButton == LEFT && lock == false && lock2 == false  &&lock3 == false && lock4 == false && lock5 == false && lock6 == false &&lock7 == false && lock8 == false)
      {
        lock = true;
      }
    }

    if (lock == true)
    {
      fill(255,0,0);
      ellipseX = mouseX;
      ellipseY = mouseY;

stickDistance = sqrt((stickLocation1X-mouseX)*(stickLocation1X-mouseX)+(stickLocation1Y-mouseY)*(stickLocation1Y-mouseY));
stickDistance2 = sqrt((stickLocation2X-mouseX)*(stickLocation2X-mouseX)+(stickLocation2Y-mouseY)*(stickLocation2Y-mouseY));
stickDistance3 = sqrt((stickLocation3X-mouseX)*(stickLocation3X-mouseX)+(stickLocation3Y-mouseY)*(stickLocation3Y-mouseY));
stickDistance4 = sqrt((stickLocation4X-mouseX)*(stickLocation4X-mouseX)+(stickLocation4Y-mouseY)*(stickLocation4Y-mouseY));
stickDistance5 = sqrt((stickLocation5X-mouseX)*(stickLocation5X-mouseX)+(stickLocation5Y-mouseY)*(stickLocation5Y-mouseY));
stickDistance6 = sqrt((stickLocation6X-mouseX)*(stickLocation6X-mouseX)+(stickLocation6Y-mouseY)*(stickLocation6Y-mouseY));


      if (stickDistance < 10)
      {
        fill(255,255,255);
        ellipseX = stickLocation1X;
        ellipseY = stickLocation1Y;
        permanentLock1 = true;
      }
      else if(stickDistance2 < 10)
      {

         fill(255,255,255);
        ellipseX = stickLocation2X;
        ellipseY = stickLocation2Y;
        permanentLock2 = true;
      }

      if(stickDistance3 < 20)
      {
        fill(255,255,255)
        ellipseX = stickLocation3X;
        ellipseY = stickLocation3Y;
        permanentLock3 = true; 
      }

      if(stickDistance4 < 10)
      {
        fill(255,255,255)
        ellipseX = stickLocation4X;
        ellipseY = stickLocation4Y;
        permanentLock4 = true; 

      }

      if(stickDistance5 < 10)
      {
         fill(255,255,255)
        ellipseX = stickLocation5X;
        ellipseY = stickLocation5Y;
        permanentLock5 = true; 

      }

      if(stickDistance6 < 10)

      {

         fill(255,255,255)
        ellipseX = stickLocation6X;
        ellipseY = stickLocation6Y;
        permanentLock6 = true; 
      }

    }

}

function moveellipse2()
{
  if (permanentLock1 == false)
fill(100,100,100);
 ellipseDistance2 = sqrt((ellipse2X-mouseX)*(ellipse2X-mouseX)+(ellipse2Y-mouseY)*(ellipse2Y-mouseY))
if(ellipseDistance2< 20)

    {
      if (mouseIsPressed == true && mouseButton == LEFT && lock == false && lock2 == false  && lock3 == false && lock4 == false && lock5 == false && lock6 == false &&lock7 == false && lock8 == false)
      {
        lock4 = true;
      }
    }

    if (lock4 == true)
    {
      fill(255,0,0);
      ellipse2X = mouseX;
      ellipse2Y = mouseY;

stickDistance = sqrt((stickLocation1X-mouseX)*(stickLocation1X-mouseX)+(stickLocation1Y-mouseY)*(stickLocation1Y-mouseY));
stickDistance2 = sqrt((stickLocation2X-mouseX)*(stickLocation2X-mouseX)+(stickLocation2Y-mouseY)*(stickLocation2Y-mouseY));
stickDistance3 = sqrt((stickLocation3X-mouseX)*(stickLocation3X-mouseX)+(stickLocation3Y-mouseY)*(stickLocation3Y-mouseY));
stickDistance4 = sqrt((stickLocation4X-mouseX)*(stickLocation4X-mouseX)+(stickLocation4Y-mouseY)*(stickLocation4Y-mouseY));
stickDistance5 = sqrt((stickLocation5X-mouseX)*(stickLocation5X-mouseX)+(stickLocation5Y-mouseY)*(stickLocation5Y-mouseY));
stickDistance6 = sqrt((stickLocation6X-mouseX)*(stickLocation6X-mouseX)+(stickLocation6Y-mouseY)*(stickLocation6Y-mouseY));


      if (stickDistance < 10)
      {
        fill(255,255,255);
        ellipse2X = stickLocation1X;
        ellipse2Y = stickLocation1Y;
        permanentLock1 = true;
      }
      else if(stickDistance2 < 10)
      {

         fill(255,255,255);
        ellipse2X = stickLocation2X;
        ellipse2Y = stickLocation2Y;
        permanentLock2 = true;
      }

      if(stickDistance3 < 20)
      {
        fill(255,255,255)
        ellipse2X = stickLocation3X;
        ellipse2Y = stickLocation3Y;
        permanentLock3 = true; 
      }

      if(stickDistance4 < 10)
      {
        fill(255,255,255)
        ellipse2X = stickLocation4X;
        ellipse2Y = stickLocation4Y;
        permanentLock4 = true; 

      }

      if(stickDistance5 < 10)
      {
         fill(255,255,255)
        ellipse2X = stickLocation5X;
        ellipse2Y = stickLocation5Y;
        permanentLock5 = true; 

      }

      if(stickDistance6 < 10)

      {

         fill(255,255,255)
        ellipse2X = stickLocation6X;
        ellipse2Y = stickLocation6Y;
        permanentLock6 = true; 
      }

    }

}

function moveellipse3()
{
  if (permanentLock1 == false)
fill(100,100,100);
 ellipseDistance3 = sqrt((ellipse3X-mouseX)*(ellipse3X-mouseX)+(ellipse3Y-mouseY)*(ellipse3Y-mouseY))
if(ellipseDistance3< 20)

    {
      if (mouseIsPressed == true && mouseButton == LEFT &&lock == false && lock2 == false  &&lock3 == false && lock4 == false && lock5 == false && lock6 == false &&lock7 == false && lock8 == false)
      {
        lock6 = true;
      }
    }

    if (lock6 == true)
    {
      fill(255,0,0);
      ellipse3X = mouseX;
      ellipse3Y = mouseY;

stickDistance = sqrt((stickLocation1X-mouseX)*(stickLocation1X-mouseX)+(stickLocation1Y-mouseY)*(stickLocation1Y-mouseY));
stickDistance2 = sqrt((stickLocation2X-mouseX)*(stickLocation2X-mouseX)+(stickLocation2Y-mouseY)*(stickLocation2Y-mouseY));
stickDistance3 = sqrt((stickLocation3X-mouseX)*(stickLocation3X-mouseX)+(stickLocation3Y-mouseY)*(stickLocation3Y-mouseY));
stickDistance4 = sqrt((stickLocation4X-mouseX)*(stickLocation4X-mouseX)+(stickLocation4Y-mouseY)*(stickLocation4Y-mouseY));
stickDistance5 = sqrt((stickLocation5X-mouseX)*(stickLocation5X-mouseX)+(stickLocation5Y-mouseY)*(stickLocation5Y-mouseY));
stickDistance6 = sqrt((stickLocation6X-mouseX)*(stickLocation6X-mouseX)+(stickLocation6Y-mouseY)*(stickLocation6Y-mouseY));


      if (stickDistance < 10)
      {
        fill(255,255,255);
        ellipse3X = stickLocation1X;
        ellipse3Y = stickLocation1Y;
        permanentLock1 = true;
      }
      else if(stickDistance2 < 10)
      {

         fill(255,255,255);
        ellipse3X = stickLocation2X;
        ellipse3Y = stickLocation2Y;
        permanentLock2 = true;
      }

      if(stickDistance3 < 20)
      {
        fill(255,255,255)
        ellipse3X = stickLocation3X;
        ellipse3Y = stickLocation3Y;
        permanentLock3 = true; 
      }

      if(stickDistance4 < 10)
      {
        fill(255,255,255)
        ellipse3X = stickLocation4X;
        ellipse3Y = stickLocation4Y;
        permanentLock4 = true; 

      }

      if(stickDistance5 < 10)
      {
         fill(255,255,255)
        ellipse3X = stickLocation5X;
        ellipse3Y = stickLocation5Y;
        permanentLock5 = true; 

      }

      if(stickDistance6 < 10)

      {

         fill(255,255,255)
        ellipse3X = stickLocation6X;
        ellipse3Y = stickLocation6Y;
        permanentLock6 = true; 
      }

    }

}

function moveellipse4()
{
  if (permanentLock1 == false)
fill(100,100,100);
 ellipseDistance4 = sqrt((ellipse4X-mouseX)*(ellipse4X-mouseX)+(ellipse4Y-mouseY)*(ellipse4Y-mouseY))
if(ellipseDistance4< 20)

    {
      if (mouseIsPressed == true && mouseButton == LEFT && lock == false && lock2 == false && lock3 == false && lock4 == false && lock5 == false && lock6 == false &&lock7 == false && lock8 == false)
      {
        lock7 = true;
      }
    }

    if (lock7 == true)
    {
      fill(255,0,0);
      ellipse4X = mouseX;
      ellipse4Y = mouseY;


stickDistance = sqrt((stickLocation1X-mouseX)*(stickLocation1X-mouseX)+(stickLocation1Y-mouseY)*(stickLocation1Y-mouseY));
stickDistance2 = sqrt((stickLocation2X-mouseX)*(stickLocation2X-mouseX)+(stickLocation2Y-mouseY)*(stickLocation2Y-mouseY));
stickDistance3 = sqrt((stickLocation3X-mouseX)*(stickLocation3X-mouseX)+(stickLocation3Y-mouseY)*(stickLocation3Y-mouseY));
stickDistance4 = sqrt((stickLocation4X-mouseX)*(stickLocation4X-mouseX)+(stickLocation4Y-mouseY)*(stickLocation4Y-mouseY));
stickDistance5 = sqrt((stickLocation5X-mouseX)*(stickLocation5X-mouseX)+(stickLocation5Y-mouseY)*(stickLocation5Y-mouseY));
stickDistance6 = sqrt((stickLocation6X-mouseX)*(stickLocation6X-mouseX)+(stickLocation6Y-mouseY)*(stickLocation6Y-mouseY));


      if (stickDistance < 10)
      {
        fill(255,255,255);
        ellipse4X = stickLocation1X;
        ellipse4Y = stickLocation1Y;
        permanentLock1 = true;
      }
      else if(stickDistance2 < 10)
      {

         fill(255,255,255);
        ellipse4X = stickLocation2X;
        ellipse4Y = stickLocation2Y;
        permanentLock2 = true;
      }

      if(stickDistance3 < 20)
      {
        fill(255,255,255)
        ellipse4X = stickLocation3X;
        ellipse4Y = stickLocation3Y;
        permanentLock3 = true; 
      }

      if(stickDistance4 < 10)
      {
        fill(255,255,255)
        ellipse4X = stickLocation4X;
        ellipse4Y = stickLocation4Y;
        permanentLock4 = true; 

      }

      if(stickDistance5 < 10)
      {
         fill(255,255,255)
        ellipse4X = stickLocation5X;
        ellipse4Y = stickLocation5Y;
        permanentLock5 = true; 

      }

      if(stickDistance6 < 10)

      {

         fill(255,255,255)
        ellipse4X = stickLocation6X;
        ellipse4Y = stickLocation6Y;
        permanentLock6 = true; 
      }

    }

}

function moveellipse5()
{
  if (permanentLock1 == false)
fill(100,100,100);
 ellipseDistance5 = sqrt((ellipse5X-mouseX)*(ellipse5X-mouseX)+(ellipse5Y-mouseY)*(ellipse5Y-mouseY))
if(ellipseDistance5< 20)

    {
      if (mouseIsPressed == true && mouseButton == LEFT && lock == false && lock2 == false && lock3 == false && lock4 == false && lock5 == false && lock6 == false &&lock7 == false && lock8 == false && lock9 == false && lock10 == false)
      {
        lock9 = true;
      }
    }

    if (lock9 == true)
    {
      fill(255,0,0);
      ellipse5X = mouseX;
      ellipse5Y = mouseY;


stickDistance = sqrt((stickLocation1X-mouseX)*(stickLocation1X-mouseX)+(stickLocation1Y-mouseY)*(stickLocation1Y-mouseY));
stickDistance2 = sqrt((stickLocation2X-mouseX)*(stickLocation2X-mouseX)+(stickLocation2Y-mouseY)*(stickLocation2Y-mouseY));
stickDistance3 = sqrt((stickLocation3X-mouseX)*(stickLocation3X-mouseX)+(stickLocation3Y-mouseY)*(stickLocation3Y-mouseY));
stickDistance4 = sqrt((stickLocation4X-mouseX)*(stickLocation4X-mouseX)+(stickLocation4Y-mouseY)*(stickLocation4Y-mouseY));
stickDistance5 = sqrt((stickLocation5X-mouseX)*(stickLocation5X-mouseX)+(stickLocation5Y-mouseY)*(stickLocation5Y-mouseY));
stickDistance6 = sqrt((stickLocation6X-mouseX)*(stickLocation6X-mouseX)+(stickLocation6Y-mouseY)*(stickLocation6Y-mouseY));


      if (stickDistance < 10)
      {
        fill(255,255,255);
        ellipse5X = stickLocation1X;
        ellipse5Y = stickLocation1Y;
        permanentLock1 = true;
      }
      else if(stickDistance2 < 10)
      {

         fill(255,255,255);
        ellipse5X = stickLocation2X;
        ellipse5Y = stickLocation2Y;
        permanentLock2 = true;
      }

      if(stickDistance3 < 20)
      {
        fill(255,255,255)
        ellipse5X = stickLocation3X;
        ellipse5Y = stickLocation3Y;
        permanentLock3 = true; 
      }

      if(stickDistance4 < 10)
      {
        fill(255,255,255)
        ellipse5X = stickLocation4X;
        ellipse5Y = stickLocation4Y;
        permanentLock4 = true; 

      }

      if(stickDistance5 < 10)
      {
         fill(255,255,255)
        ellipse5X = stickLocation5X;
        ellipse5Y = stickLocation5Y;
        permanentLock5 = true; 

      }

      if(stickDistance6 < 10)

      {

         fill(255,255,255)
        ellipse5X = stickLocation6X;
        ellipse5Y = stickLocation6Y;
        permanentLock6 = true; 
      }

    }

}


function moveellipse6()
{
  if (permanentLock1 == false)
fill(100,100,100);
 ellipseDistance6 = sqrt((ellipse6X-mouseX)*(ellipse6X-mouseX)+(ellipse6Y-mouseY)*(ellipse6Y-mouseY))
if(ellipseDistance6< 20)

    {
      if (mouseIsPressed == true && mouseButton == LEFT && lock == false && lock2 == false && lock3 == false && lock4 == false && lock5 == false && lock6 == false &&lock7 == false && lock8 == false && lock9 == false && lock10 == false&& lock11 == false && lock12 == false)
      {
        lock11 = true;
      }
    }

    if (lock11 == true)
    {
      fill(255,0,0);
      ellipse6X = mouseX;
      ellipse6Y = mouseY;


stickDistance = sqrt((stickLocation1X-mouseX)*(stickLocation1X-mouseX)+(stickLocation1Y-mouseY)*(stickLocation1Y-mouseY));
stickDistance2 = sqrt((stickLocation2X-mouseX)*(stickLocation2X-mouseX)+(stickLocation2Y-mouseY)*(stickLocation2Y-mouseY));
stickDistance3 = sqrt((stickLocation3X-mouseX)*(stickLocation3X-mouseX)+(stickLocation3Y-mouseY)*(stickLocation3Y-mouseY));
stickDistance4 = sqrt((stickLocation4X-mouseX)*(stickLocation4X-mouseX)+(stickLocation4Y-mouseY)*(stickLocation4Y-mouseY));
stickDistance5 = sqrt((stickLocation5X-mouseX)*(stickLocation5X-mouseX)+(stickLocation5Y-mouseY)*(stickLocation5Y-mouseY));
stickDistance6 = sqrt((stickLocation6X-mouseX)*(stickLocation6X-mouseX)+(stickLocation6Y-mouseY)*(stickLocation6Y-mouseY));


      if (stickDistance < 10)
      {
        fill(255,255,255);
        ellipse6X = stickLocation1X;
        ellipse6Y = stickLocation1Y;
        permanentLock1 = true;
      }
      else if(stickDistance2 < 10)
      {

         fill(255,255,255);
        ellipse6X = stickLocation2X;
        ellipse6Y = stickLocation2Y;
        permanentLock2 = true;
      }

      if(stickDistance3 < 20)
      {
        fill(255,255,255)
        ellipse6X = stickLocation3X;
        ellipse6Y = stickLocation3Y;
        permanentLock3 = true; 
      }

      if(stickDistance4 < 10)
      {
        fill(255,255,255)
        ellipse6X = stickLocation4X;
        ellipse6Y = stickLocation4Y;
        permanentLock4 = true; 

      }

      if(stickDistance5 < 10)
      {
         fill(255,255,255)
        ellipse6X = stickLocation5X;
        ellipse6Y = stickLocation5Y;
        permanentLock5 = true; 

      }

      if(stickDistance6 < 10)

      {

         fill(255,255,255)
        ellipse6X = stickLocation6X;
        ellipse6Y = stickLocation6Y;
        permanentLock6 = true; 
      }

    }

}
function changeellipse()
{
  
    if (mouseIsPressed == true && mouseButton == LEFT && lockellipseOrientation == false)
    {
  
          ellipseOrientation = 0;

      lockellipseOrientation = true;
    }
  
  if (ellipseOrientation == 0)
  {
    image(a,ellipseX-25,ellipseY-20,50,55);
  }
 
}

function changeellipse2()
{

  if(mouseIsPressed==true && mouseButton == LEFT && lockellipseOrientation2 == false)
  {
    ellipse2Orientation = 0;
    lockellipseOrientation == true;

  }
  if(ellipseOrientation == 0)
  {
    image(e,ellipse2X-25,ellipse2Y-20,50,55);
  }
}


function changeellipse3()
{

  if(mouseIsPressed==true && mouseButton == LEFT && lockellipseOrientation3 == false)
  {
    ellipse3Orientation = 0;
    lockellipseOrientation == true;

  }
  if(ellipseOrientation == 0)
  {
    image(d,ellipse3X-25,ellipse3Y-20,50,55);
  }
}

function changeellipse4()
{

  if(mouseIsPressed==true && mouseButton == LEFT && lockellipseOrientation4 == false)
  {
    ellipse4Orientation = 0;
    lockellipseOrientation == true;

  }
  if(ellipseOrientation == 0)
  {
    image(f,ellipse4X-25,ellipse4Y-20,50,55);
  }
}


function changeellipse5()
{

  if(mouseIsPressed==true && mouseButton == LEFT && lockellipseOrientation5 == false)
  {
    ellipse5Orientation = 0;
    lockellipseOrientation == true;

  }
  if(ellipseOrientation == 0)
  {
    image(h,ellipse5X-25,ellipse5Y-20,50,55);
  }
}

function changeellipse6()
{

  if(mouseIsPressed==true && mouseButton == LEFT && lockellipseOrientation6 == false)
  {
    ellipse6Orientation = 0;
    lockellipseOrientation == true;

  }
  if(ellipseOrientation == 0)
  {
    image(eight,ellipse6X-25,ellipse6Y-20,50,55);
  }
}

function canvas9()
{

background(corridor,800,600);
fill(255,255,255);
timer();
textSize(15);
  text("Mouse X "+mouseX,10,330);
  text("Mouse Y "+mouseY,10,290)

fill(0,0,0);
rect(100,150,600,80);

fill(255,255,255);
textSize(20);
text('What belongs to you but others use it more than you do?',150,200);

fill(0,0,0);
//top left
rect(150,300,150,75);

//top right
rect(450,300,150,75);

//bottom left
rect(150,400,150,75);

//bottom right
rect(450,400,150,75);

fill(255,255,255);
textSize(18);
text('laptop',170,350);

text('phone',165,450);

text('hairband',480,450);

text('your name',480,350);

fill(0,0,0,0)
stroke(80,78,41);
rect(55,69,100,25);
 

  if(mouseX > 452 && mouseX< 600 && mouseY> 301 && mouseY<375 && mouseIsPressed == true)
 
{
canvas = 10;

} 
 if(mouseX > 152 && mouseX< 299 && mouseY> 303 && mouseY<376 && mouseIsPressed == true)
 
{
canvas = 13;

} 

 if(mouseX > 153 && mouseX< 303 && mouseY> 405 && mouseY<476 && mouseIsPressed == true)
 
{
canvas = 13;

} 


  if(mouseX > 450 && mouseX< 599 && mouseY> 403 && mouseY<476 && mouseIsPressed == true)
{

  canvas = 13;
}


}

function canvas10()
{
  background(corridor2,800,600);
 timer();

   fill(0,0,0);
rect(100,150,600,80);
fill(255,255,255);
textSize(20);
text('What has a heart but no other organ?',150,200);

fill(0,0,0);
//top left
rect(150,300,150,75);

//top right
rect(450,300,150,75);

//bottom left
rect(150,400,150,75);

//bottom right
rect(450,400,150,75);

fill(255,255,255);
textSize(18);
text('a deck of cards',170,350);

text('a blobfish',165,450);

text('cupid',480,450);

text('jellyfish',480,350);


  if(mouseX > 152 && mouseX< 299 && mouseY> 303 && mouseY<376 && mouseIsPressed == true)
 
{
canvas = 11;

} 

 if(mouseX > 153 && mouseX< 303 && mouseY> 405 && mouseY<476 && mouseIsPressed == true)
 
{
canvas = 13;

} 


  if(mouseX > 450 && mouseX< 599 && mouseY> 403 && mouseY<476 && mouseIsPressed == true)
{

  canvas = 13;
}

}

function canvas11()
{
  background(corridor3,800,600);
  fill(255,255,255);
 timer();


     fill(0,0,0);
rect(100,150,600,80);
fill(255,255,255);
textSize(20);
text('What were the colors of the two bottles in the bar',150,200);

fill(0,0,0);
//top left
rect(150,300,150,75);

//top right
rect(450,300,150,75);

//bottom left
rect(150,400,150,75);

//bottom right
rect(450,400,150,75);

fill(255,255,255);
textSize(18);
text('red and green',170,350);

text('pink and green',165,450);

text('black and blue',470,450);

text('yellow and pink',460,350);


  if(mouseX > 153 && mouseX< 303 && mouseY> 405 && mouseY<476 && mouseIsPressed == true)
 
{
canvas = 12;

} 


  if(mouseX > 450 && mouseX< 599 && mouseY> 300 && mouseY<376 && mouseIsPressed == true)
{
  canvas = 13;
}

  if(mouseX > 450 && mouseX< 599 && mouseY> 403 && mouseY<476 && mouseIsPressed == true)
{

  canvas = 13;
}

}


function canvas12()
{
background(street,800,600);
fill(255,255,255);
stroke(0,0,0)
textSize(50);
text('Congratulations,',200,300);
text('YOU WON!!!',210,370);

}

function canvas13()
{
  background(0,0,0)
fill(255,255,255);
textSize(50);
text('YOU DIED!',270,300)
}

function mouseReleased()
{
    if (lock)
    {
      lock = false;
    }
  
    if (lock2)
    {
       lock2 = false;

    }
    if(lock3)
    {
      lock3 = false;

    }
    if(lock4)
    {
      lock4 = false;
    }

    if(lock5)
    {
      lock5 = false;
    }

    if(lock6)
    {
      lock6 = false;
    }
    if(lock7)
    {
      lock7 = false;
    }
    if(lock8)
      {lock8 = false;
      }

      if(lock9)
      {
        lock9 = false;
      }
      if(lock10)
      {
        lock10 = false;

      }
      if(lock11)
      {
        lock11 = false;

      }
      if(lock12)
      {
        lock12 = false;
      }

}




function itemGrid()

{

//big box
  fill(125,125,125);
  rect(0,500,800,100);
  // small box 1
  fill(50,50,50);
  rect(10,515,70,70);
//small box 2
fill(50,50,50);
  rect(90,515,70,70);
//small box 3
  fill (50,50,50);
  rect(170,515,70,70);
  
  //small box 4
  fill (50,50,50);
  rect(250,515,70,70);
  
  //small box 5 
  fill (50,50,50);
  rect(330,515,70,70);

   // small box 6
  fill(50,50,50);
  rect(410,515,70,70);

  //small box 7
fill(50,50,50);
  rect(490,515,70,70);

//small box 8
  fill (50,50,50);
  rect(570,515,70,70);
  
  //small box 9
  fill (50,50,50);
  rect(650,515,65,70);
  
  //small box 10
  fill (50,50,50);
  rect(725,515,65,70);


}

function paintNavigation()
{

}

function timer()
{
 
if (second() == 0)
  {
    if (q == 0)
    {
      minuteMultiplier = minuteMultiplier + 1;
      q = 5;
    }
  }


  if (recordTime == false)
  {
    recordTime = true;
    initialTime = second();
  }
  //                                 25..59   - 25
  newSecond = minuteMultiplier*60 + second() - initialTime;
  reversedTime = 60 - newSecond;

textSize(20);
  text("Time Remaining: "+reversedTime,60,40);

   image(alarm,10,10,50,50);
}



function paintCanvasButtons()
{
   myX = -25;
   myY = -275;
  

   // Canvas 1 button
   if (canvas == 1)
   {
     strokeWeight(5);
   }
   else
   {
     strokeWeight(1);
   }
   fill(255,255,255);
  image(ArrowLeft,myX+50,myY+300,100,50);
   fill(0,0,0);
   text("Head Office",myX+73,myY+325);
   if (canvas == 4)
   {
     
   }
   // Canvas 2 button
   if (canvas == 2)
   {
     strokeWeight(5);
   }
   else
   {
     strokeWeight(1);
   }
   fill(255,255,255);
   ellipse(myX+220,myY+325,100,50);
   fill(0,0,0);
   text("Main Office",myX+195,myY+325);

   // Canvas 3 button
   if (canvas == 3)
   {
     strokeWeight(5);
   }
   else
   {
     strokeWeight(1);
   }
   fill(255,255,255);
   image(ArrowRight,myX+290,myY+293,100,50);
   fill(0,0,0);
   text("Officer Bar",myX+315,myY+325);

   if (mouseX > myX+50 && mouseX < myX+50+100 && mouseY > myY+300 && mouseY < myY+300+50 && mouseIsPressed)
   {
     canvas = 1;
     stateOfBox = 1;
   }
  
   if (mouseX > myX+170 && mouseX < myX+170+100 && mouseY > myY+300 && mouseY < myY+300+50 && mouseIsPressed)
   {
     canvas = 2;
   } 

   if (mouseX > myX+290 && mouseX < myX+290+100 && mouseY > myY+300 && mouseY < myY+300+50 && mouseIsPressed)
   {
     canvas = 3;
     keyLocation = 1;
   }
    
}




