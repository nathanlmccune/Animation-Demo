class raptor_easy {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./raptor_easy.png"), 0, 0, 55, 56, 5, 0.2);
    };
    update(){

    };
    draw (ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 25,25);
    };
}
