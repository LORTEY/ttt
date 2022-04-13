/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Duszek3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Duszek3/costumes/kostium1.svg", {
        x: 10,
        y: 10
      }),
      new Costume("kostium2", "./Duszek3/costumes/kostium2.svg", {
        x: 10,
        y: 10
      })
    ];

    this.sounds = [new Sound("pop", "./Duszek3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.costume = "kostium1";
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber == 1) {
      this.costume = "kostium2";
      this.stage.vars.fight = 1;
    } else {
      this.costume = "kostium1";
      this.stage.vars.fight = 0;
    }
  }
}
