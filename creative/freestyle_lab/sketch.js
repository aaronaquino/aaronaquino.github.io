var myFont;

// Song variables.
var currentSong, songIndex, analyzer;
var nameText, freestyleLabText;
var flexButton, shotsButton, moveButton, fallButton, pillButton, babyButton;
var isSongSelected = false;
var lrc;

// Drawing variables.
var num = 350;
var range = 300;
var ax = [];
var ay = [];
var lineWidthRange = 10;

var backgroundColors = ['#ebdfed', '#06161f', '#404755', '#babdd0', '#9e948c', '#6b686a'];
var lineColors = ['#e69bb1', '#4890b9', '#c1ae03', '#efcfd0', '#41414d', '#b2a04e'];

// Lyric variables.
var isLyricShown = false;
var currentLyric;
var countDown = 0;
var countDownDelta = 3;
var amplitudeThreshold = 0.2;
var lyricX, lyricY;


function preload() {
  myFont = loadFont('assets/OstrichSans-Black.otf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#F4F9F4');

  // Create a new Amplitude analyzer.
  analyzer = new p5.Amplitude();

  nameText = createElement('h2', 'Aaron Aquino');
  nameText.id('nameText');
  nameText.style('font-family', 'OstrichSans-Black');
  nameText.style('font-size', '48px');
  nameText.style('color', '#616161');
  nameText.position(windowWidth / 2, 10);
  nameText.center('horizontal');

  freestyleLabText = createElement('h2', 'Freestyle Lab');
  freestyleLabText.id('freestyleLabText');
  freestyleLabText.style('font-family', 'OstrichSans-Black');
  freestyleLabText.style('font-size', '60px');
  freestyleLabText.style('color', '#616161');
  freestyleLabText.position(windowWidth / 2, nameText.y);
  freestyleLabText.center('horizontal');

  flexButton = createButton('Flex');
  flexButton.id('flexButton');
  flexButton.position((windowWidth / 2) - 75 - flexButton.width / 2, 260);
  flexButton.mousePressed(flex);

  shotsButton = createButton('Shots');
  shotsButton.id('shotsButton');
  shotsButton.position((windowWidth / 2) + 75 - shotsButton.width / 2, 260);
  shotsButton.mousePressed(shots);

  moveButton = createButton('Move');
  moveButton.id('moveButton');
  moveButton.position((windowWidth / 2) - 75 - moveButton.width / 2, 360);
  moveButton.mousePressed(move);

  fallButton = createButton('Fall');
  fallButton.id('fallButton');
  fallButton.position((windowWidth / 2) + 75 - fallButton.width / 2, 360);
  fallButton.mousePressed(fall);

  pillButton = createButton('Pill');
  pillButton.id('pillButton');
  pillButton.position((windowWidth / 2) - 75 - pillButton.width / 2, 460);
  pillButton.mousePressed(pill);

  babyButton = createButton('Baby');
  babyButton.id('babyButton');
  babyButton.position((windowWidth / 2) + 75 - babyButton.width / 2, 460);
  babyButton.mousePressed(baby);
}


function hideTextAndButtons() {
  document.getElementById('nameText').style.display = 'none';
  document.getElementById('freestyleLabText').style.display = 'none';
  document.getElementById('flexButton').style.display = 'none';
  document.getElementById('shotsButton').style.display = 'none';
  document.getElementById('moveButton').style.display = 'none';
  document.getElementById('fallButton').style.display = 'none';
  document.getElementById('pillButton').style.display = 'none';
  document.getElementById('babyButton').style.display = 'none';
}


function flex() {
  isSongSelected = true;
  songIndex = 0;
  countDownDelta = 2;
  currentSong = loadSound('songs/01 Flex Your Way Out (feat. Blackbear).m4a', beginDrawing);
  hideTextAndButtons();
}


function shots() {
  isSongSelected = true;
  songIndex = 1;
  currentSong = loadSound('songs/01 Shots (feat. Broiler) [Broiler Remix].m4a', beginDrawing);
  hideTextAndButtons();
}


function move() {
  isSongSelected = true;
  songIndex = 2;
  amplitudeThreshold = 0.1;
  countDownDelta = 1;
  currentSong = loadSound('songs/07 Move Together.m4a', beginDrawing);
  hideTextAndButtons();
}


function fall() {
  isSongSelected = true;
  songIndex = 3;
  currentSong = loadSound('songs/Fall.mp3', beginDrawing);
  hideTextAndButtons();
}


function pill() {
  isSongSelected = true;
  songIndex = 4;
  currentSong = loadSound('songs/01 I Took A Pill In Ibiza (SeeB Remix).mp3', beginDrawing);
  hideTextAndButtons();
}


function baby() {
  isSongSelected = true;
  songIndex = 5;
  range = 125;
  countDownDelta = 2;
  currentSong = loadSound('songs/01 Baby (feat. Kevin Garrett).m4a', beginDrawing);
  hideTextAndButtons();
}


function beginDrawing() {
  // Prep points to draw.
  for ( var i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(30);

  // Initialize lyric analyzer.
  lrc = new Lyrics(lrcData[songIndex]);

  // Patch the input to our volume analyzer.
  analyzer.setInput(currentSong);

  getAudioContext().resume();
  currentSong.loop();
  loop();
}


function draw() {
  if (isSongSelected) {
    // Get the average (root mean square) amplitude.
    var rms = analyzer.getLevel();
    strokeWeight(1 + rms * lineWidthRange);

    background(backgroundColors[songIndex]);

    // Shift all elements 1 place to the left.
    for ( var i = 1; i < num; i++ ) {
      ax[i - 1] = ax[i];
      ay[i - 1] = ay[i];
    }

    // Put a new value at the end of the array.
    let dx = random(-range*rms, range*rms);
    ax[num - 1] += dx;
    let dy = random(-range*rms, range*rms)
    ay[num - 1] += dy;

    // Render lyrics.
    if (isLyricShown) {
      if (countDown >= 100) {
        countDown = 0;
        isLyricShown = false;
      } else {
        var baseLineColor = color(lineColors[songIndex]);
        var fadedColor = color(red(baseLineColor), green(baseLineColor), blue(baseLineColor), 100 - countDown);
        stroke(fadedColor);
        fill(fadedColor);
        countDown += countDownDelta;
        text(currentLyric, lyricX, lyricY);
      }
    } else if (abs(dx) > amplitudeThreshold * range && abs(dy) > amplitudeThreshold * range) {
      textSize(32);
      stroke(lineColors[songIndex]);
      fill(lineColors[songIndex]);

      var lyricIndex = lrc.select(currentSong.currentTime());
      if (lyricIndex != -1 && currentLyric != lrc.getLyric(lyricIndex).text) {
        isLyricShown = true;
        currentLyric = lrc.getLyric(lyricIndex).text;
        lyricX = random(20, width - 525);
        lyricY = random(20, height - 15);
        text(currentLyric, lyricX, lyricY);
        countDown += countDownDelta;
      }
    }

    // Constrain all points to the screen.
    ax[num - 1] = constrain(ax[num - 1], 0, width);
    ay[num - 1] = constrain(ay[num - 1], 0, height);

    // Draw a line connecting the points.
    var baseLineColor = color(lineColors[songIndex]);
    for ( var j = 1; j < num; j++ ) {
      var updatedLineColor = color(
        255 - j / num * (255 - red(baseLineColor)),
        255 - j / num * (255 - green(baseLineColor)),
        255 - j / num * (255 - blue(baseLineColor))); 
      stroke(updatedLineColor);
      line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    }   
  }
}


// function touchStarted() {
//   getAudioContext().resume()
// }
