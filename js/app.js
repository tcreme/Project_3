let numberOfLives = 3;

// Enemies our player must avoid
let Enemy = function Enemy (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y + 55; //center
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundry = this.step * 5;
    this.resetPosition = this.step - 200;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

// if enemy is not passed boundry
    if (this.x < this.boundry) {
      // Move forward
      //increment x by speed * dt
      this.x += this.speed * dt;
    }
    else {
      //reset pos to start
      this.x = this.resetPosition;
      this.speed = (1 + Math.random()) * 180;
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
let Player = function Player() {
    this.sprite = 'images/char-cat-girl.png';
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = (this.jump * 4) + 55;
    this.x = this.startX;
    this.y = this.startY;
    this.winner = false;

};


// This class requires an update(), render() and
Player.prototype.update = function() {
  //check for collisions
  for(let enemy of allEnemies) {
    // Did player x and y collide with enemy?
    if (this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)) {
      this.reset();
      numberOfLives--;
      showLives();
    }
  }
  // Check winner here?
    // Was the final tile reached?
    if(this.y === 55) {
      this.winner = true;
    }
};


// draws player sprite on current x and y coords
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// Reset player
Player.prototype.reset = function(){
  // Set x and y to their starting points
    this.y = this.startY;
    this.x = this.startX;
}


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
let player = new Player();
let enemy1 = new Enemy(-101, 0, 200);
let enemy2 = new Enemy(-101, 83, 300);
let enemy3 = new Enemy((-101*2.5), 166, 300);

// Place all enemy objects in an array called allEnemies
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);
console.log(allEnemies);

// Place the player object in a variable called player
window.player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function showLives(){
  let charDOM = document.querySelector('.character');
    if (numberOfLives == 3) {
      charDOM.innerHTML = `<li><i class = "iconCharacter"></i><img src="images/char-cat-girl.png"></li>
                          <li><i class = "iconCharacter"></i><img src="images/char-cat-girl.png"></li>
                          <li><i class = "iconCharacter"></i><img src="images/char-cat-girl.png"></li>`;
    } else if (numberOfLives == 2) {
      charDOM.innerHTML = `<li><i class = "iconCharacter"></i><img src="images/char-cat-girl.png"></li>
                          <li><i class = "iconCharacter"></i><img src="images/char-cat-girl.png"></li>`
    } else if (numberOfLives == 1) {
      charDOM.innerHTML = `<li><i class = "iconCharacter"></i><img src="images/char-cat-girl.png"></li>`
    } else {
        charDOM.innerHTML = ``;
    }
}
