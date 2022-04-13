/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class E83a3d03aadd42391822cc976a398e06 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "e83a3d03aadd42391822cc976a398e06",
        "./E83a3d03aadd42391822cc976a398e06/costumes/e83a3d03aadd42391822cc976a398e06.svg",
        { x: 0, y: 0 }
      ),
      new Costume(
        "e83a3d03aadd42391822cc976a398e2",
        "./E83a3d03aadd42391822cc976a398e06/costumes/e83a3d03aadd42391822cc976a398e2.svg",
        { x: 532.18608, y: 678.06871 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wiadomość1" },
        this.whenIReceiveWiadomo1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.fight == 0) {
        if (this.keyPressed("up arrow")) {
          this.y += -4;
          if (this.touching(this.sprites["Duszek2"].andClones())) {
            this.y += 4;
            this.stage.vars.cINUp = 1;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.fight == 0) {
        if (this.keyPressed("down arrow")) {
          this.y += 4;
          if (this.touching(this.sprites["Duszek2"].andClones())) {
            this.y += -4;
            this.stage.vars.characterInWallDown = 1;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.fight == 0) {
        if (this.keyPressed("left arrow")) {
          this.x += 4;
          if (this.touching(this.sprites["Duszek2"].andClones())) {
            this.x += -4;
            this.stage.vars.cINL = 1;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.effects.ghost = 99;
    this.goto(0, 0);
    while (true) {
      if (this.stage.vars.fight == 0) {
        if (this.keyPressed("right arrow")) {
          this.x += -4;
          if (this.touching(this.sprites["Duszek2"].andClones())) {
            this.x += 4;
            this.stage.vars.cINR = 1;
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveWiadomo1() {
    this.direction += 180;
    this.move(8);
  }

  *whenGreenFlagClicked5() {
    this.goto(0, -80);
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.stage.vars.fight == 0) {
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        this.visible = false;
      }
      yield;
    }
  }
}
