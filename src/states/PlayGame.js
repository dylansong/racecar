import Barrier from '../sprites/Barrier';

export default class Preload extends Phaser.State{
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
      this.add.sprite(this.world.centerX,this.world.centerY*1.58,'car');


      var enemyA = new Barrier(this.game,'enemyA',this.rnd.between(496, 542));

  //     this.physics.startSystem(Phaser.Physics.ARCADE);
  // this.world.setBounds(0, 0, 1024, 768);
  // this.bonusGroup = this.add.group();//this.group1.setAll('outOfBoundsKill',true);
  // this.enemyGroup = this.add.group();//this.group2.setAll('outOfBoundsKill',true);
  // var bonusA = this.add.sprite(this.rnd.between(10,460),256,'bonusA');
  // var bonusB = this.add.sprite(this.rnd.between(10,460),256,'bonusB');
  // this.bonusGroup.add(bonusA)
  // this.bonusGroup.add(bonusB)
  //
  //   for (var i = 0; i <2; i++){
  //     var s=this.bonusGroup.getAt(i);
  //       this.physics.arcade.enable(s);
  //       s.body.velocity.y = this.rnd.between(70, 240)*2.4;
  //       s.autoCull = true;
  //       s.checkWorldBounds = true;
  //       s.events.onOutOfBounds.add(this.resetSprite1, this);
  //   }


    }
    enterGameOver(){
        // this.game.state.start('GameOver');
    }
}
