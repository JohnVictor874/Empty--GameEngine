class Crab {
	constructor(game) {
		this.image = new Image();  // Create an Image object
		this.image.src = "crab1.png";  // Set the source path
		this.game = game
		this.animator = new Animator(this.image, 0, 0, 215, 80, 9, 0.1);

		
		this.x = 0;
		this.y = 0;
		this.speed = 50;
	}

	update() {
		this.x += this.game.clockTick * this.speed;
		if (this.x > 1024) this.x = 0;
	}

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

	}
}
