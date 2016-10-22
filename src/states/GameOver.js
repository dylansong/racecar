export default class GameOver extends Phaser.State{

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
        this.game.state.start('MainMenu');
    }
}
