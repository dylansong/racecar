export default class Preload extends Phaser.State{
    preload(){
        this.load.image('greenbgLeft','./assets/images/greenbg-left.png');
        this.load.image('greenbgRight','./assets/images/greenbg-right.png');
        this.load.image('greenbg','./assets/images/greenbg.png');
        this.load.image('lineA','./assets/images/line-a.png');
        this.load.image('lineB','./assets/images/line-b.png');
        this.load.image('road','./assets/images/road.png');
        this.load.image('treeA','./assets/images/tree-a.png');
        this.load.image('treeB','./assets/images/tree-b.png');
        this.load.image('car','./assets/images/car.png');
        this.load.image('startBtn','./assets/images/start-btn.png');

        this.load.image('enemyA','./assets/images/enemy-a.png');
        this.load.image('enemyB','./assets/images/enemy-b.png');
        this.load.image('enemyC','./assets/images/enemy-c.png');
        this.load.image('bonusA','./assets/images/bonus-a.png');
        this.load.image('bonusB','./assets/images/bonus-b.png');

        this.load.image('gameRule','./assets/images/game-rule.png');
        this.load.image('scoreBg','./assets/images/scorebg.png');
        this.load.image('timeBg','./assets/images/timebg.png');
        this.load.image('gameoverWin','./assets/images/gameover-win.png');
        this.load.image('gameoverLose','./assets/images/gameover-lose.png');



    }
    create(){

      this.add.sprite(0,0,'sky');
      this.add.sprite(411,200,'cloud1');
      this.add.sprite(11,140,'cloud2');
      this.add.sprite(406,97,'cloud3');
      this.add.sprite(160,65,'cloud4');
        this.state.start('MainMenu');
    }
}
