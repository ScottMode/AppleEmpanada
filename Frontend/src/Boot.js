WebFontConfig = {
    //Load google fonts
    google: {
      families: ['Revalia']
    }
};

BasicGame = {
    thisGame: null,
    orientated: false
};

BasicGame.Boot = function (game) {
    thisGame = game;
};

BasicGame.Boot.prototype = {

    init: function () {

        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setMinMax(480, 260, 1920, 1080);
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.backgroundColor = "#000000";

        if (!this.game.device.desktop)
        {
            this.scale.forceOrientation(true, false);
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        }

    },

    preload: function () {
        
        //Load anything before preload

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        //this.load.image('preloaderBackground', 'images/preloader_background.jpg');
        //this.load.image('preloaderBar', 'images/preloader_bar.png');
        /*this.load.bitmapFont('walter', 'assets/walter_0.png', 'assets/walter.fnt');
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');*/
        
        
        //this.game.add.text(0, 0, "hack", {font:"1px GrilledCheese BTN", fill:"#FFFFFF"});
    },

    create: function () {
        
        this.state.start('Preloader');

    },

    gameResized: function (width, height) {

        // Called anytime game is resized or orientated
        //  Note that this callback is only really useful if you use a ScaleMode of RESIZE and place it inside your main game state.

    },

    enterIncorrectOrientation: function () {

        BasicGame.orientated = false;

        document.getElementById('orientation').style.display = 'block';
    },
    

    leaveIncorrectOrientation: function () {

        BasicGame.orientated = true;

        document.getElementById('orientation').style.display = 'none';
    }

};
