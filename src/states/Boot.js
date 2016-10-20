export default class Boot extends Phaser.State{
    preload(){
        this.stage.backgroundColor = '#fff';
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        this.load.image('sky','./assets/images/sky.png');
        this.load.image('cloud1','./assets/images/cloud-1.png');
        this.load.image('cloud2','./assets/images/cloud-2.png');
        this.load.image('cloud3','./assets/images/cloud-3.png');
        this.load.image('cloud4','./assets/images/cloud-4.png');
    }
    create(){
        this.state.start('Preload');
    }
}
