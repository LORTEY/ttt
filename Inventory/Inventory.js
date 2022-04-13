/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Inventory extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Inventory/costumes/kostium1.svg", {
        x: 92.92833937853109,
        y: 116.7593188135593
      }),
      new Costume("kostium2", "./Inventory/costumes/kostium2.png", {
        x: 183,
        y: 239
      })
    ];

    this.sounds = [new Sound("pop", "./Inventory/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.fight == 0) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        this.visible = true;
      }
      yield;
    }
  }
}
