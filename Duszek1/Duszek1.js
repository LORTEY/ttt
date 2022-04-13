/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Duszek1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Duszek1/costumes/kostium1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Duszek1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.fight == 0) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.effects.ghost = 99;
    this.goto(0, 0);
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.fight = 0;
  }
}
