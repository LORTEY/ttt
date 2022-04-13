/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Background extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("background", "./Background/costumes/background.svg", {
        x: 526.6953900000001,
        y: 673.6801500000003
      }),
      new Costume(
        "e83a3d03aadd42391822cc976a398e2",
        "./Background/costumes/e83a3d03aadd42391822cc976a398e2.svg",
        { x: 433.602041943181, y: 179.6859649722951 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "wiadomość1" },
        this.whenIReceiveWiadomo1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wiadomość1" },
        this.whenIReceiveWiadomo2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wiadomość1" },
        this.whenIReceiveWiadomo3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenIReceiveWiadomo1() {}

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.goto(0, 0);
  }

  *whenIReceiveWiadomo2() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.goto(
        this.sprites["E83a3d03aadd42391822cc976a398e06"].x,
        this.sprites["E83a3d03aadd42391822cc976a398e06"].y
      );
      yield;
    }
  }

  *whenIReceiveWiadomo3() {
    this.direction += 180;
    this.move(8);
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.stage.vars.fight == 0) {
        this.visible = true;
      }
      yield;
    }
  }
}
