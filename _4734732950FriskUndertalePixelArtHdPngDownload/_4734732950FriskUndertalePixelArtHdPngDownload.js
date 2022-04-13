/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _4734732950FriskUndertalePixelArtHdPngDownload extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "down",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/down.png",
        { x: 13, y: 47 }
      ),
      new Costume(
        "going down1",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/going down1.png",
        { x: 13, y: 47 }
      ),
      new Costume(
        "going down 2",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/going down 2.png",
        { x: 14, y: 47 }
      ),
      new Costume(
        "up",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/up.png",
        { x: 13, y: 47 }
      ),
      new Costume(
        "going up 2",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/going up 2.png",
        { x: 13, y: 47 }
      ),
      new Costume(
        "going up1",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/going up1.png",
        { x: 14, y: 47 }
      ),
      new Costume(
        "left",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/left.png",
        { x: 10, y: 47 }
      ),
      new Costume(
        "going left 1",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/going left 1.png",
        { x: 11, y: 47 }
      ),
      new Costume(
        "going left 2",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/going left 2.png",
        { x: 10, y: 47 }
      ),
      new Costume(
        "right",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/right.png",
        { x: 9, y: 48 }
      ),
      new Costume(
        "going right 1",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/going right 1.png",
        { x: 10, y: 48 }
      ),
      new Costume(
        "going right 2",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/going right 2.png",
        { x: 10, y: 48 }
      ),
      new Costume(
        "strong attack right",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/strong attack right.png",
        { x: 9, y: 48 }
      ),
      new Costume(
        "block r",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/block r.png",
        { x: 23, y: 52 }
      ),
      new Costume(
        "attack r2",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r2.png",
        { x: 21, y: 48 }
      ),
      new Costume(
        "attack r3",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r3.png",
        { x: 29, y: 48 }
      ),
      new Costume(
        "attack r4",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r4.png",
        { x: 32, y: 48 }
      ),
      new Costume(
        "attack r",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r.png",
        { x: 27, y: 48 }
      ),
      new Costume(
        "attack r5",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r5.png",
        { x: 24, y: 48 }
      ),
      new Costume(
        "attack r6",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r6.png",
        { x: 18, y: 48 }
      ),
      new Costume(
        "attack r7",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r7.png",
        { x: 14, y: 48 }
      ),
      new Costume(
        "attack r8",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r8.png",
        { x: 14, y: 48 }
      ),
      new Costume(
        "attack r11",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r11.png",
        { x: 28, y: 48 }
      ),
      new Costume(
        "attack r9",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r9.png",
        { x: 24, y: 48 }
      ),
      new Costume(
        "attack r10",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r10.png",
        { x: 19, y: 48 }
      ),
      new Costume(
        "attack r12",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r12.png",
        { x: 14, y: 48 }
      ),
      new Costume(
        "attack r13",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r13.png",
        { x: 17, y: 48 }
      ),
      new Costume(
        "attack r14",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r14.png",
        { x: 19, y: 48 }
      ),
      new Costume(
        "attack r15",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r15.png",
        { x: 14, y: 48 }
      ),
      new Costume(
        "attack r16",
        "./_4734732950FriskUndertalePixelArtHdPngDownload/costumes/attack r16.png",
        { x: 10, y: 48 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked11)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.size = 175;
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.costume = "going up1";
        yield* this.wait(0.2);
        this.costume = "up";
      }
      if (this.keyPressed("up arrow")) {
        this.costume = "going up 2";
        yield* this.wait(0.2);
        this.costume = "up";
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.size = 175;
    while (true) {
      if (this.keyPressed("down arrow")) {
        this.costume = "going down1";
        yield* this.wait(0.2);
        this.costume = "down";
      }
      if (this.keyPressed("down arrow")) {
        this.costume = "going down 2";
        yield* this.wait(0.2);
        this.costume = "down";
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.goto(0, 0);
    this.size = 175;
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.direction = -90;
        this.costume = "going right 1";
        yield* this.wait(0.15);
        this.costume = "right";
        yield* this.wait(0.15);
      }
      if (this.keyPressed("left arrow")) {
        this.costume = "going right 2";
        yield* this.wait(0.15);
        this.costume = "right";
        yield* this.wait(0.15);
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.size = 175;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.costume = "going left 1";
        yield* this.wait(0.15);
        this.costume = "left";
        yield* this.wait(0.15);
      }
      if (this.keyPressed("right arrow")) {
        this.costume = "going left 2";
        yield* this.wait(0.15);
        this.costume = "left";
        yield* this.wait(0.15);
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
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

  *whenGreenFlagClicked6() {
    while (true) {
      this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
      if (this.stage.vars.fight == 0) {
        this.goto(0, 0);
        this.size = 175;
      }
      while (!(this.stage.vars.fight == 1)) {
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    this.goto(0, 0);
    this.size = 175;
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.costume = "going up1";
        yield* this.wait(0.2);
        this.costume = "up";
      }
      if (this.keyPressed("up arrow")) {
        this.costume = "going up 2";
        yield* this.wait(0.2);
        this.costume = "up";
      }
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        this.goto(this.sprites["Duszek2"].x, this.sprites["Duszek2"].y);
      }
      yield;
    }
  }

  *whenGreenFlagClicked9() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        if (this.keyPressed("z")) {
          this.costume = "attack r2";
          yield* this.wait(0.05);
          this.costume = "attack r3";
          yield* this.wait(0.05);
          this.costume = "attack r4";
          yield* this.wait(0.05);
          this.costume = "attack r";
          yield* this.wait(0.05);
          this.costume = "attack r5";
          yield* this.wait(0.05);
          this.costume = "attack r6";
          yield* this.wait(0.05);
          this.costume = "attack r7";
          yield* this.wait(0.05);
          this.costume = "right";
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked10() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        if (this.keyPressed("c")) {
          while (!(!this.keyPressed("c") || this.keyPressed("z"))) {
            if (
              this.keyPressed("c") &&
              !this.keyPressed("z") &&
              !this.keyPressed("right arrow") &&
                !this.keyPressed("up arrow") &&
                  !this.keyPressed("left arrow") &&
                    !this.keyPressed("down arrow")
            ) {
              this.costume = "attack r8";
              yield* this.wait(0.25);
            }
            if (
              !this.keyPressed("z") &&
              this.keyPressed("c") &&
              !this.keyPressed("right arrow") &&
                !this.keyPressed("up arrow") &&
                  !this.keyPressed("left arrow") &&
                    !this.keyPressed("down arrow")
            ) {
              this.costume = "attack r11";
              yield* this.wait(0.2);
            }
            if (
              !this.keyPressed("z") &&
              this.keyPressed("c") &&
              !this.keyPressed("right arrow") &&
                !this.keyPressed("up arrow") &&
                  !this.keyPressed("left arrow") &&
                    !this.keyPressed("down arrow")
            ) {
              this.costume = "attack r9";
              yield* this.wait(0.2);
            }
            if (
              !this.keyPressed("z") &&
              this.keyPressed("c") &&
              !this.keyPressed("right arrow") &&
                !this.keyPressed("up arrow") &&
                  !this.keyPressed("left arrow") &&
                    !this.keyPressed("down arrow")
            ) {
              this.costume = "attack r10";
              yield* this.wait(0.2);
            }
            if (
              !this.keyPressed("z") &&
              this.keyPressed("c") &&
              !this.keyPressed("right arrow") &&
                !this.keyPressed("up arrow") &&
                  !this.keyPressed("left arrow") &&
                    !this.keyPressed("down arrow")
            ) {
              this.costume = "attack r12";
              this.broadcast("arrow");
              yield* this.wait(0.2);
            }
            yield;
          }
          this.costume = "attack r13";
          yield* this.wait(0.05);
          this.costume = "attack r14";
          yield* this.wait(0.05);
          this.costume = "attack r15";
          yield* this.wait(0.05);
          this.costume = "attack r16";
          yield* this.wait(0.05);
          this.costume = "right";
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked11() {
    while (true) {
      this.stage.vars.kierunek = this.direction;
      yield;
    }
  }
}
