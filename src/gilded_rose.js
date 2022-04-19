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


    //   if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.items[i].quality > 0) {
    //         this.items[i].quality = this.items[i].quality - 1;
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1;
    //       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].sellIn < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //         if (this.items[i].sellIn < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   this.items[i].sellIn = this.items[i].sellIn - 1;
    //   if (this.items[i].sellIn < 0) {

    //       if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].quality > 0) {
    //             this.items[i].quality = this.items[i].quality - 1;
    //       } else {
    //         this.items[i].quality = this.items[i].quality - this.items[i].quality;
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1;
    //       }
    //     }
    //   }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
