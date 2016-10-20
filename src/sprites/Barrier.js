class Barrier extends Phaser.Sprite{
  constructor(game,id,barrierPosition){
    super(game,barrierPosition,256,id);
    this.anchor.setTo(.5);
    game.add.existing(this);
    game.physics.enable(this,Phaser.Physics.ARCADE);
    this.body.velocity.y = 256;
    this.width = 20;
    // this.placeBarrier = true;
  }
  update(){

    if(this.y > (this.game.height+50)){
      this.destroy();
    }
    this.width += 10;
  }
}
export default Barrier;
