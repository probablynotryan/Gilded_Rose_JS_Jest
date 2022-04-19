const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("create an object named 'aged brie'", function() {
    const gildedRose = new Shop([new Item("aged brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("aged brie");
  });
});
