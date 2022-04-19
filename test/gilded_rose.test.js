const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("create an object named 'Aged Brie' that increases in quality by 1", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it("create an object named 'Aged Brie' that does not exceed a quality of 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("create an object named 'Sulfuras, Hand of Ragnaros' with a quality of 80", function() {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});
