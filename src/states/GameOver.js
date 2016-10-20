export default class GameOver extends Phaser.State{
    preload(){
        // this.load.image('bg','./assets/sprites/imgout/7/7-pop.png');
        // this.load.image('bg','./assets/sprites/imgout/7/restart.png');
        // this.load.image('bg','./assets/sprites/imgout/8/8-pop.png');
        // this.load.audio('bgmusic',['./assets/audio/bgmusic.mp3','./assets/audio/bgmusic.ogg']);
        // this.load.image('successPop','./assets/sprites/imgout/7/7-pop.png');
        // this.load.image('restart','./assets/sprites/imgout/7/restart.png');
        // this.load.image('falsePop','./assets/sprites/imgout/8/8-pop.png');
        // this.load.audio('bgmusic',['./assets/audio/bgmusic.mp3','./assets/audio/bgmusic.ogg']);
        // this.load.audio('success',['./assets/audio/success.mp3']);
        // this.load.audio('false',['./assets/audio/false.mp3']);
        // this.load.audio('bonus',['./assets/audio/bonus.mp3']);
    }
    create(){
       this.game.bgmusic.pause();
       this.add.sprite(0,0,'bg');

        this.popSuccess();


    }
    popSuccess(){

        this.successPop =this.add.sprite(this.world.centerX,this.world.centerY*0.85,'successPop');
        this.successPop.anchor.setTo(.5);
        this.restartBtn = this.add.button(this.world.centerX,this.world.centerY*1.48,'restart',this.restartGame);
        this.restartBtn.anchor.setTo(.5);
        this.successMusic = this.add.audio('success');
        this.successMusic.play();
    }
    restartGame(){
        this.game.state.start('Menu1');
    }
}
