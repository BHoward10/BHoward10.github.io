$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();
    

    // TODO 2 - Create Platforms
    createPlatform(800, 650, 100, 10);
    createPlatform(1100, 650, 200, 10);
    createPlatform(1100, 500, 125, 10);
    createPlatform(1100, 570, 150, 10);
    createPlatform(1100, 400, 100, 10);
    createPlatform(1100, 300, 10, 500);
    createPlatform(1100, 650, 10, 100);
    createPlatform(600, 550, 100, 10);
    createPlatform(450, 450, 100, 10);
    createPlatform(300, 200, 300, 0.0001);
    createPlatform(700, 320, 200, 10);
    createPlatform(1350, 400, 50, 50, "red");

    //I made an invisible platform lol//


    // TODO 3 - Create Collectables
    createCollectable("steve", 1000, 100);
    createCollectable("max", 200, 170, 0.5, 0.7);
    createCollectable("max", 500, 300, 0.5, 0.7);
    createCollectable("max", 1150, 700, 0.5, 0.7);
    createCollectable("max", 300, 10, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 300, 2000);
    createCannon("bottom", 350, 1000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
