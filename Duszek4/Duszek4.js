/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Duszek4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Duszek4/costumes/kostium1.png", {
        x: 12,
        y: 1
      })
    ];

    this.sounds = [new Sound("pop", "./Duszek4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "arrow" }, this.whenIReceiveArrow),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenIReceiveArrow() {
    this.createClone();
  }

  *whenGreenFlagClicked() {
    this.size = 200;
    this.visible = false;
  }

  *startAsClone() {
    this.size = 200;
    this.visible = true;
    this.goto(
      this.sprites["_4734732950FriskUndertalePixelArtHdPngDownload"].x,
      this.sprites["_4734732950FriskUndertalePixelArtHdPngDownload"].y
    );
    this.y += 20;
    this.direction = this.stage.vars.kierunek;
    for (let i = 0; i < 30; i++) {
      this.move(20);
      yield;
    }
    this.deleteThisClone();
  }
}
