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

  it("create an object named 'Sulfuras, Hand of Ragnaros' with a unchangable quality of 80", function() {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  it("create an object named 'Backstage passes to a TAFKAL80ETC concert' that increases by 4", function() {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });

  it("create an object named 'Backstage passes to a TAFKAL80ETC concert' that increases by 1", function() {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it("create an object named 'Backstage passes to a TAFKAL80ETC concert' that increases by 3", function() {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });
  it("create an object named 'Fancy Shoe' who's quality decreases by 1", function() {
    const gildedRose = new Shop([new Item('Fancy Shoe', 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5);
  });
  it("create an object named 'Fancy Shoe' who's quality decreases by 2", function() {
    const gildedRose = new Shop([new Item('Fancy Shoe', 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });
  it("create an object named 'Conjured Mana Cake' who's quality decreases by 2", function() {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });
  it("create an object named 'Conjured Mana Cake' who's quality decreases by 4", function() {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', -1, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

});
