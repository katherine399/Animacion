
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/fondo.png');
        game.load.spritesheet('walle', 'assets/images/walle.png', 118, 170.5, 8);
        game.load.spritesheet('eva', 'assets/images/eva.png', 181, 260, 6);
        game.load.audio('sonido', 'assets/sounds/walle.mp3');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.walle = game.add.sprite(-100, 550, 'walle');
        this.walle.animations.add('walk', [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7],1,true);
        this.walle.animations.play("walk");
        this.eva = game.add.sprite(-100, 150, 'eva');
        this.eva.animations.add('walk', [0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5],1,true);
        this.eva.animations.play("walk");
        sonido = game.add.audio('sonido');

        sonido.play('', 0, 0.5, true);
        
    },
    update: function() {
        console.log("update");
        this.walle.x += 2;
        this.eva.x += 2;
        if (this.walle.x == 1210){
            this.walle = game.add.sprite(-100, 550, 'walle');
            this.walle.animations.add('walk', [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7],1,true);
            this.walle.animations.play("walk");
        }
        if (this.eva.x == 1210){
            this.eva = game.add.sprite(-100, 150, 'eva');
            this.eva.animations.add('walk', [0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5],1,true);
            this.eva.animations.play("walk");
        }

        
    }
}

var game = new Phaser.Game(1200, 960, Phaser.CANVAS);
var sonido;
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");