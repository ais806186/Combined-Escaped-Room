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


function preload()
{ 
  ThemeSong =
    loadSound('https://dl.dropbox.com/s/jqmfoua8lmye8li/ESCAPE%20ROOM%202%20Aura%20theme.mp3')
  LoserSong = 
    loadSound('https://dl.dropbox.com/s/u2cjcf5hjud4vo2/ER%20Loser.mp3')
  
  LastPuzzleSong =
    loadSound('https://dl.dropbox.com/s/je9wzew4ky4k25r/last%20Puzzle%20RUNAWAY.mp3')
  
  Paper  =       
    loadImage('https://dl.dropbox.com/s/g4mtic7qn2hug93/parchment.jpg')
  Computer1 =
    loadImage('https://dl.dropboxusercontent.com/s/jc6ntv1kj5jwbk2/mirror.png')
  OfficeBar = 
 loadImage('https://dl.dropboxusercontent.com/s/jeytn20u5u90627/First%20room%20view%202.png')
  ArrowLeft = 
    loadImage('https://dl.dropboxusercontent.com/s/nsakz2buh5r5h7z/Left%20arrow.png')
  ArrowRight =
    loadImage('https://dl.dropboxusercontent.com/s/iawoxtnncwnapx9/Right%20Arrow.png')
  HeadOfficeDoor = 
    loadImage('https://dl.dropbox.com/s/0bd58i53ngfw8a0/door.png')
  MainOffice = 
    loadImage('https://dl.dropboxusercontent.com/s/im904b7a3ziymj2/Coding%20room.png')
  HeadOffice = 
    loadImage('https://dl.dropbox.com/s/vbi76l6tch9ypu3/Office%20view%201.png')
  
  //COMPUTER CODE
  Four =
    loadImage('https://dl.dropbox.com/s/sp67hxlu5twyqni/digital%204.jpg')
  Seven = 
    loadImage('https://dl.dropbox.com/s/ek9gxnlwccmf61h/pitch%20black.png')
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
  
    // which canvas is in focus by default
    canvas = 2;
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
    else
    {
        canvas = 1;
    }
    paintCanvasButtons();
  
  text(""+mouseX+","+mouseY+"",15,150);
}

// Canvas 1 is HEAD OFFICE DOOR
function canvas1()
{
  background(255,255,255);
  image(HeadOfficeDoor,0,0);
  itemGrid();
  
  

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
}

function canvas2()
{
  background(255,255,255);
  image(MainOffice,0,0);
  itemGrid();

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
    if (mouseX > 425 && mouseX < 440 && mouseY > 255 && mouseY < 270)     //FUR
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
  image()
  itemGrid();
}


// HEAD OFFICE
function canvas5()
{
  background (255,255,255)
  image(HeadOffice,0,0)
  itemGrid();
  
  
}

  // PUZZLE 2 CODE MACHINE
function canvas6()
{
  background (255,255,255)
  image(HeadOffice,0,0)
  itemGrid();

}




function itemGrid()
{
  // background for item grid
  fill(50,50,50);
  rect(10,510,800-20,600-20);
  
  // left most box
  fill(125,125,125);
  rect(20,520,70,70);

  // middle most box
  fill(125,125,125);
  rect(20+80,520,70,70);

  // right most box
  fill(125,125,125);
  rect(20+80*2,520,70,70);

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




