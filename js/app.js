// Enemies our player must avoid
var Enemy = function Enemy (x, y, s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundry = this.step * 5;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

// if enemy is not passed boundry
    if (this.x < this.step * 5) {
      // Move forward
      //increment x by speed * dt
      this.x += 200 * dt;
    }
    //else {
      //reset pos to start
    //};


    // this.x += this.speed * dt;
    // if (this.x > 707) {
    //   var someSpeed = Math.floor(Math.random() * 4 + 1);
    //   this.speed = (60 * someSpeed);
    // }
    // var enemyXleftMax = this.x - 70;
    // var enemyXRightMax = this.x +70;
    // var enemyYTopMax = this.y - 60;
    // var enemyYBottomMax = this.y + 60;
    // if (player.x > enemyXleftMax && player.x < enemyXRightMax && player.y > enemyYTopMax && player.y < enemyYBottomMax && player.y);
    //   //losing console.console.log();
    //   player.resetPosition();
    //   lives--;
    //   updateView('you died. ' + lives + ' live(s) remaining...');
    //   if (lives === 0) {
    //     alert('game over...');
    //     player.resetPosition();
    //     is_game_over = true;
    //     updateView('you died. ' + lives + ' live(s) remaining...');
    // }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function Player() {
    this.sprite = 'images/char-cat-girl.png';
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = (this.jump * 5) - 20;
    this.x = this.startX;
    this.y = this.startY;

// This class requires an update(), render() and

};

// draws player sprite on current x and y coords
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Player.prototype.resetPosition = function(){
//   this.x = 303;
//   this.y = 404;
//};


// a handleInput() method.
Player.prototype.handleInput = function(input) {

    switch (input) {
      case 'left':
        if (this.x > 0) {
            this.x -= this.step;
        }
        break;
      case 'up':
        if (this.y > this.jump) {
            this.y -= this.jump;
        }
        break;
      case 'right':
        if (this.x < this.step * 4) {
            this.x += this.step;
        }
        break;
      case 'down':
        if (this.y < this.jump * 4) {
            this.y += this.jump;
        }
        break;
    }
}

// Now instantiate your objects.
var enemy1 = new Enemy(-80, 60 + 80 * 0, (Math.floor(Math.random() * 4 + 1) *60));
var enemy2 = new Enemy(-80, 60 + 80 * 0, (Math.floor(Math.random() * 4 + 1) *60));
var enemy3 = new Enemy(-80, 60 + 80 * 0, (Math.floor(Math.random() * 4 + 1) *60));
var player = new Player();

// Place all enemy objects in an array called allEnemies
const allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
window.player = new Player();
window.enemy  = new Enemy();


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
