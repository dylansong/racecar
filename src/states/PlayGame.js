import Barrier from '../sprites/Barrier';

export default class PlayGame extends Phaser.State{
    preload(){
    }
    create(){


      this.add.sprite(0,0,'sky');
      this.add.sprite(411,200,'cloud1');
      this.add.sprite(11,140,'cloud2');
      this.add.sprite(406,97,'cloud3');
      this.add.sprite(160,65,'cloud4');
      this.add.sprite(0,203,'greenbgLeft');
      this.add.sprite(614,143,'greenbgRight');
      this.add.sprite(0,256,'greenbg');
      this.add.sprite(55,244,'treeA');
      this.add.sprite(850,252,'treeB');
      this.add.sprite(0,256,'road');
      this.add.sprite(471,266,'lineA');
      this.car = this.add.sprite(this.world.centerX,this.world.centerY*1.58,'car');

      this.add.sprite(318,38,'scoreBg');
      this.add.sprite(541,38,'timeBg');

      this.car.inputEnabled = true;
	    this.car.input.enableDrag();
	    this.car.input.allowVerticalDrag = false;



    }
    enterGameOver(){
        this.game.state.start('GameOver');
    }
}
