const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("create an object named 'aged brie'", function() {
    const gildedRose = new Shop([new Item("aged brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("aged brie");
  });

  it("create an object named 'Sulfuras, Hand of Ragnaros' with a quality of 80", function() {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});
