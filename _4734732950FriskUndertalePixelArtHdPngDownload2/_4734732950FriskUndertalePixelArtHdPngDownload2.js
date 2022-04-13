/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _4734732950FriskUndertalePixelArtHdPngDownload2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "down",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/down.png",
        { x: 13, y: 47 }
      ),
      new Costume(
        "going down1",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/going down1.png",
        { x: 13, y: 47 }
      ),
      new Costume(
        "going down 2",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/going down 2.png",
        { x: 14, y: 47 }
      ),
      new Costume(
        "up",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/up.png",
        { x: 13, y: 47 }
      ),
      new Costume(
        "going up 2",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/going up 2.png",
        { x: 13, y: 47 }
      ),
      new Costume(
        "going up1",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/going up1.png",
        { x: 14, y: 47 }
      ),
      new Costume(
        "left",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/left.png",
        { x: 10, y: 47 }
      ),
      new Costume(
        "going left 1",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/going left 1.png",
        { x: 11, y: 47 }
      ),
      new Costume(
        "going left 2",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/going left 2.png",
        { x: 10, y: 47 }
      ),
      new Costume(
        "right",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/right.png",
        { x: 9, y: 48 }
      ),
      new Costume(
        "going right 1",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/going right 1.png",
        { x: 10, y: 48 }
      ),
      new Costume(
        "going right 2",
        "./_4734732950FriskUndertalePixelArtHdPngDownload2/costumes/going right 2.png",
        { x: 10, y: 48 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
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

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.fight == 1) {
        this.goto(-210, -130);
        this.size = 175;
      }
      while (!(this.stage.vars.fight == 0)) {
        yield;
      }
      yield;
    }
  }
}
