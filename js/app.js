// Enemies our player must avoid
var Enemy = function(x, y, s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.s = s;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 707) {
      var someSpeed = Math.floor(Math.random() * 4 + 1);
      this.speed = (60 + (score > 0 ? score / 20 : score)) * someSpeed;
    }
    var enemyXleftMax = this.x - 70;
    var enemyXRightMax = this.x +70;
    var enemyYTopMax = this.y - 60;
    var enemyYBottomMax = this.y + 60;
    if (player.x > enemyXleftMax && player.x < enemyXRightMax && player.y > enemyYTopMax && player.y < enemyYBottomMax && player.y);
      //losing console.console.log();
      player.resetPosition();
      lives--;
      updateView('you died. ' + lives + ' live(s) remaining...');
      if (lives === 0) {
        alert('game over...');
        player.resetPosition();
        is_game_over = true;
        updateView('you died. ' + lives + ' live(s) remaining...');
      }
    }
  };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.handleInput = function(dt) {};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
