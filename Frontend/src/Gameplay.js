"use strict";

//Gameplay vars


BasicGame.Gameplay = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;	//	the tween manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

};

BasicGame.Gameplay.prototype = {

	create: function () {
        
        //Init
        this.physics.startSystem(Phaser.Physics.ARCADE);
        
        //Background
        /*stars = this.add.emitter(this.world.centerX, 0, 400);
        stars.width = this.world.width;
        stars.makeParticles('particle');
        stars.minParticleScale = 0.01;
        stars.maxParticleScale = 0.1;
        stars.setYSpeed(400, 1000);
        stars.setXSpeed(-10, 10);
        stars.minRotation = 0;
        stars.maxRotation = 0;
        stars.start(false, 2000, 10);*/
        
	},

	update: function () {
        
        
	}

};

