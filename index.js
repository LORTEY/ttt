import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _4734732950FriskUndertalePixelArtHdPngDownload from "./_4734732950FriskUndertalePixelArtHdPngDownload/_4734732950FriskUndertalePixelArtHdPngDownload.js";
import E83a3d03aadd42391822cc976a398e06 from "./E83a3d03aadd42391822cc976a398e06/E83a3d03aadd42391822cc976a398e06.js";
import Background from "./Background/Background.js";
import Duszek2 from "./Duszek2/Duszek2.js";
import _4734732950FriskUndertalePixelArtHdPngDownload2 from "./_4734732950FriskUndertalePixelArtHdPngDownload2/_4734732950FriskUndertalePixelArtHdPngDownload2.js";
import Duszek1 from "./Duszek1/Duszek1.js";
import Duszek3 from "./Duszek3/Duszek3.js";
import Inventory from "./Inventory/Inventory.js";
import Inventory2 from "./Inventory2/Inventory2.js";
import Duszek4 from "./Duszek4/Duszek4.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  _4734732950FriskUndertalePixelArtHdPngDownload: new _4734732950FriskUndertalePixelArtHdPngDownload(
    {
      x: 190,
      y: -130,
      direction: -90,
      costumeNumber: 13,
      size: 175,
      visible: true
    }
  ),
  E83a3d03aadd42391822cc976a398e06: new E83a3d03aadd42391822cc976a398e06({
    x: 3.6249545254761616e-14,
    y: -80,
    direction: 0,
    costumeNumber: 2,
    size: 39.767415706802325,
    visible: false
  }),
  Background: new Background({
    x: 3.6249545254761616e-14,
    y: -80,
    direction: 0,
    costumeNumber: 1,
    size: 40.07836503232232,
    visible: false
  }),
  Duszek2: new Duszek2({
    x: 190,
    y: -130,
    direction: 90,
    costumeNumber: 1,
    size: 175,
    visible: true
  }),
  _4734732950FriskUndertalePixelArtHdPngDownload2: new _4734732950FriskUndertalePixelArtHdPngDownload2(
    {
      x: -210,
      y: -130,
      direction: 90,
      costumeNumber: 10,
      size: 175,
      visible: true
    }
  ),
  Duszek1: new Duszek1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Duszek3: new Duszek3({
    x: 221,
    y: 154,
    direction: 90,
    costumeNumber: 2,
    size: 200,
    visible: true
  }),
  Inventory: new Inventory({
    x: -151,
    y: 146,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true
  }),
  Inventory2: new Inventory2({
    x: -213,
    y: 145,
    direction: 90,
    costumeNumber: 2,
    size: 30,
    visible: true
  }),
  Duszek4: new Duszek4({
    x: -247,
    y: -110,
    direction: -90,
    costumeNumber: 1,
    size: 200,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
