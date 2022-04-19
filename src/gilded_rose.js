class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        this.items[i].quality = 80;
        continue;
      }

      if (this.items[i].name === 'Aged Brie') {
        this.items[i].quality = Math.min(50, this.items[i].quality + 1);
        continue;
      }

      if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'){
        if (this.items[i].sellIn <= 0) {
          this.items[i].quality = 0;
        } else {
          this.items[i].quality = Math.min(50, this.items[i].quality + (this.items[i].sellIn < 11) ? (this.items[i].sellIn < 6) ? 4 : 3 : 1)
        }
        continue;
      }

      if (this.items[i].name.includes('Conjured')) {
        this.items[i].quality = Math.max(0, this.items[i].quality - 2); // this is assuming quality degrading doesn't double again after sellIn date has exceeded
        continue;
      }

      this.items[i].quality = Math.max(0, this.items[i].quality - (this.items[i].sellIn < 1) && 2 || 1)

    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
