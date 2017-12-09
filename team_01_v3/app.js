Stage.preload('./textures.js');

// Game logic
function Game(gameui) {

  // self
  var game = this;

  // use enhanced Stage.Math
  var Math = Stage.Math;

  // constant values
  var PLANET = 16; // planet collision radius
  var EXPLODE = 6; // explode radius
  var RELOAD = 1000; // reload time
  var LIFE = 10;

  var planet = new Planet();
  var asteroids = [];

  game.life = 0;

  // total spend time
  var time = 0;

  var nextOrbitPosition = 0;
  var nextAsteroidTime = 0;

  // start/reset game
  this.start = function() {
    time = 0;

    // nextOrbitPosition = 0;
    nextAsteroidTime = 0;

    game.life = LIFE;

    while (asteroids.length)
      asteroids.pop().remove();


    planet.add();
  };

  this.tick = function(t) {

  //   // avoid jumps
     t = Math.min(t, 100);

  //   // total time
     time += t;

    // tick all asteroids
    for (var i = asteroids.length - 1; i >= 0; i--) {
      var asteroid = asteroids[i];
      // if hit planet
      if (asteroid.tick(t, time)) {
        game.life--;
        asteroid.remove();
        asteroids.splice(i, 1);
      }
    }

    // if it's time to add next asteroid
    if ((nextAsteroidTime -= t) < 0) {
      nextAsteroidTime = Math.random(3000, 5000);
      // create an asteroid at a random angle and radius
      var a = Math.random(0, 2 * Math.PI);
      var r = Math.random(120, 180);
      var velocity = Math.random(3, 4) * (4 + time * 0.001);
      new Asteroid({
        x : r * Math.sin(a),
        y : r * Math.cos(a)
      }, velocity).add();
    }

    planet.tick(t, time);

    gameui.status(game);

    if (game.life == 0) {
      gameui.gameover();
    }
  };

  function Planet() {
    this.x = 0;
    this.y = 0;

    var ui = gameui.planet(this);

    this.add = function() {
      ui.add();
      return this;
    };

    this.remove = function() {
      ui.remove();
      return this;
    };

    this.tick = function(t, time) {
      this.life = Math.min(1, Math.max(0, Math.pow(game.life / LIFE, 2)));
      ui.update();
    };
  }

  function Asteroid(from, velocity) {
    this.x = from.x;
    this.y = from.y;

    // calculate velocity vector
    velocity = unitVect({
      x : planet.x - from.x,
      y : planet.y - from.y
    }, velocity);

    var ui = gameui.asteroid(this);

    this.add = function() {
      asteroids.push(this);
      ui.add();
      return this;
    };

    this.remove = function() {
      ui.remove();
      return this;
    };

    this.tick = function(t, time) {
      this.x += velocity.x * t / 1000;
      this.y += velocity.y * t / 1000;

      ui.update();

      return vectDist(this, planet) < PLANET;
    };
  }

  // unit vector multiplied
  function unitVect(vect, m) {
    m = m || 1;
    var length = Math.sqrt(vect.x * vect.x + vect.y * vect.y);
    return {
      x : vect.x / length * m,
      y : vect.y / length * m
    };
  }

  // distance between two point/vector
  function vectDist(a, b) {
    var x = b.x - a.x, y = b.y - a.y;
    return Math.sqrt(x * x + y * y);
  }
}

// UI
Stage(function(root) {
  var Mouse = Stage.Mouse;

  // set viewbox
  root.viewbox(100, 100);

  // add the background
  Stage.image('background').pin('align', 0.5).on('viewport', function() {
    // on viewport change scale it to fill root
    this.pin({
      scaleMode : 'out',
      scaleWidth : root.width(),
      scaleHeight : root.height()
    });
  }).appendTo(root);

  // an element which views only one child at a time
  var singleView = Stage.create().appendTo(root);
  singleView.view = function(active) {
    if (active.parent() !== this) {
      active.remove().appendTo(this);
    }
    if (!active.visible()) {
      active.show();
    }
    for (var child = this.first(); child; child = child.next()) {
      active !== child && child.visible() && child.hide();
    }
  };

  // game home view
  var homeView = Stage.create().on('viewport', function() {
    this.pin({
      width : root.width(),
      height : root.height()
    });
  }).hide().appendTo(root);

  // start button
  Stage.image('play').pin('align', 0.5).on(Mouse.CLICK, function() {
    startGame();
  }).appendTo(homeView);

  // game play view
  var playView = Stage.create().on('viewport', function() {
    this.pin({
      width : root.width(),
      height : root.height()
    });
  }).hide().appendTo(root);

  var space = Stage.create().pin('align', 0.5).appendTo(playView);

  // life number
  var life = Stage.string('digit').scale(0.8);

  // place life in a row on top-left
  Stage.row().spacing(2).pin({
    offset : 2,
    align : 0,
    handle : 0
  }).appendTo(root).append(life);

  // create a game with ui callbacks
  var game = new Game({
    status : function(game) {
      life.value(game.life);
    },
    planet : function(obj) {
      var img = Stage.image('planet').pin('handle', 0.5);
      return {
        add : function() {
          img.appendTo(space);
          this.update();
        },
        update : function() {
          img.alpha(obj.life);
        },
        remove : function() {
          img.remove();
        }
      };
    },
    asteroid : function(obj) {
      var img = Stage.image('asteroid').pin('handle', 0.5);
      return {
        add : function() {
          img.appendTo(space);
          this.update();
        },
        update : function() {
          img.offset(obj);
        },
        remove : function() {
          img.remove();
        }
      };
    },
    gameover : function() {
      gameOver();
    }
  });

  // on start game view play and start game
  function startGame() {
    game.start();
    singleView.view(playView);
  }

  // on game over view home
  function gameOver() {
    singleView.view(homeView);
  }

  // game loop
  space.tick(function(t) {
    game.tick(t);
  });

  singleView.view(homeView);
});
