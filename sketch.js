var bR = 0; 
var bG = 0; 
var bB = 0;
let can2;
let nul1 = 0;
//var col = 0;
let bgslide;
let = rMax = 130, gMax = 210, bMax = 145;

//drawlloop------------------------------------
let r, g, b;
let c_diam;
let colour_rMin, colour_rMax;
let c_alpha;
let diam_randomMin;
let diam_randomMax;
//end------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  can2 = createGraphics(windowWidth, windowWidth);
  can2.background(0);
  can2.clear();  
  
  ///drawloop-----------------------------------
    colour_rMin = 0;
    colour_rMax = 255;
    c_alpha = 100;
    diam_randomMin = 30
    diam_randomMax = 60
  //end------------------------------------------
}

function draw() {
 bR = map(mouseX, nul1, windowWidth, rMax, nul1);
 bG = map(mouseX, nul1, windowWidth, nul1, gMax);
 bB = map(mouseX, nul1, windowWidth, nul1, bMax);
  //bgslide = map(mouseX, 0, 1366, 0, 255);
  //col = mouseX;
  //col = bgslide;
  background(bR, bG, bB); 

  //drawloop----------------------------------------------------
  r = random(colour_rMin, colour_rMax + 1);
	g = random(colour_rMin, colour_rMax + 1);
	b = random(colour_rMin, colour_rMax + 1);
	c_diam = random(diam_randomMin, diam_randomMax);
  
  can2.noStroke();
	can2.fill(r, g, b, c_alpha);
  if (mouseIsPressed)
	can2.circle(mouseX, mouseY, c_diam);
  //end---------------------------------------------------------- 
  image(can2, 0, 0);
}

// function rightClicked() {
//   can2.clear();
// }


