const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager("E:\\491\\Empty--GameEngine\\crab1.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Crab(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
