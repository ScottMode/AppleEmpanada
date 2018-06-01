"use strict";

var stateTarget = '';
var music = null;


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) 
{
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function removeFromArray(array, search_term) {
    for (var i=array.length-1; i>=0; i--) {
        if (array[i] === search_term) {
            array.splice(i, 1);
            // break;       //<-- Uncomment  if only the first term has to be removed
        }
    }
}

function checkInArray(array, search_term) {
    for (var i=array.length-1; i>=0; i--) {
        if (array[i] === search_term) {
            return true;
            // break;       //<-- Uncomment  if only the first term has to be removed
        }
    }
    return false;
}

BasicGame.Manager = function (game) {
    
};

BasicGame.Manager.prototype = {
    
    create: function () {
        stateTarget = '';
    },
    
    update: function () {
        
    }
};



//BUTTON CREATION
function setButton(button, text, size, buttonSound)
{
    button.anchor.setTo(0.5, 0.5);
    button.input.useHandCursor = true;
    
    text.fontSize = size * gm.scaleP;
    text.align = 'center';
    text.anchor.setTo(0.5);
    text.fill = '#ffffff';
    
    button.width = text.width + 50 * gm.scaleP;
	button.height = text.height + 30 * gm.scaleP;
}

//TEXT CREATION
function setText(text, size, color, align)
{
    text.fontSize = size * gm.scaleP;
    text.fill = color;
    text.align = align;
    text.updateText();
}


function muteGame()
{
    if (thisGame.sound.mute)
    {
        thisGame.sound.mute = false;
    }
    else
    {
        thisGame.sound.mute = true;
    }
}

//GO TO
function goToState(state)
{
    thisGame.state.start(state);
    resetState();
}

//SHUTDOWN
function resetState()
{
    
}