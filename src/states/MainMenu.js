export default class MainMenu extends Phaser.State{
    preload(){
    }
    create(){

      this.add.sprite(411,200,'cloud1');
      this.add.sprite(11,140,'cloud2');
      this.add.sprite(406,97,'cloud3');
      this.add.sprite(160,65,'cloud4');
      this.add.sprite(0,0,'sky');



        this.startBtn = this.add.button(this.world.centerX,this.world.centerY*1.625,'startBtn',this.startGame);
        this.startBtn.anchor.setTo(.5);


    }
    startGame(){
        this.game.state.start('PlayGame');
    }
}
