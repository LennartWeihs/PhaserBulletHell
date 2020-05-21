import FightScene from "./scenes/FightScene";
import BootStep1 from "./scenes/BootStep1";
import BootStep2 from "./scenes/BootStep2";
import PauseScene from "./scenes/PauseScene";
import KeyTracker from "./scenes/KeyTracker";

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        },
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [
        BootStep1, //load json files of level
        BootStep2, //load referenced files from BootStep1
        KeyTracker, //to track keyboard input over multiple scenes
        FightScene, //main game scene
        PauseScene, //pause menu
    ],
};

//create game and set initial positions
window.game = new Phaser.Game(config);