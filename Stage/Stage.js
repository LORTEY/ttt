/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("tło1", "./Stage/costumes/tło1.svg", { x: 240, y: 180 }),
      new Costume("Stars", "./Stage/costumes/Stars.png", { x: 480, y: 360 }),
      new Costume("background", "./Stage/costumes/background.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.mojaZmienna = 0;
    this.vars.characterInWallDown = 1;
    this.vars.cINUp = 1;
    this.vars.cINR = 1;
    this.vars.cINL = 1;
    this.vars.fight = 1;
    this.vars.con = 0;
    this.vars.kierunek = -90;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.vars.fight == 1) {
        this.costume = "background";
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.vars.fight == 0) {
        this.costume = "Stars";
      }
      yield;
    }
  }
}
