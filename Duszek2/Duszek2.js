/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Duszek2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Duszek2/costumes/kostium1.png", {
        x: 11,
        y: 24
      })
    ];

    this.sounds = [new Sound("pop", "./Duszek2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 99;
    while (true) {
      if (
        this.touching(
          this.sprites["E83a3d03aadd42391822cc976a398e06"].andClones()
        )
      ) {
        this.broadcast("wiadomość1");
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.goto(
        this.sprites["_4734732950FriskUndertalePixelArtHdPngDownload"].x,
        this.sprites["_4734732950FriskUndertalePixelArtHdPngDownload"].y
      );
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        if (this.keyPressed("up arrow")) {
          this.y += 4;
          if (
            this.touching(this.sprites["Duszek1"].andClones()) ||
            this.touching(
              this.sprites[
                "_4734732950FriskUndertalePixelArtHdPngDownload2"
              ].andClones()
            )
          ) {
            this.y += -4;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        if (this.keyPressed("down arrow")) {
          this.y += -4;
          if (
            this.touching(this.sprites["Duszek1"].andClones()) ||
            this.touching(
              this.sprites[
                "_4734732950FriskUndertalePixelArtHdPngDownload2"
              ].andClones()
            )
          ) {
            this.y += 4;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        if (this.keyPressed("left arrow")) {
          this.x += -4;
          if (
            this.touching(this.sprites["Duszek1"].andClones()) ||
            this.touching(
              this.sprites[
                "_4734732950FriskUndertalePixelArtHdPngDownload2"
              ].andClones()
            )
          ) {
            this.x += 4;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        if (this.keyPressed("right arrow")) {
          this.x += 4;
          if (
            this.touching(this.sprites["Duszek1"].andClones()) ||
            this.touching(
              this.sprites[
                "_4734732950FriskUndertalePixelArtHdPngDownload2"
              ].andClones()
            )
          ) {
            this.x += -4;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        this.goto(210, -130);
        this.size = 175;
      }
      while (!(this.stage.vars.fight == 0)) {
        yield;
      }
      yield;
    }
  }
}
