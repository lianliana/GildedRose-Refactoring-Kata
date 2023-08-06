export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

function isBackStage(item: Item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert'
}

function isAgedBrie(item: Item) {
  return item.name === 'Aged Brie'
}

function isSulfuras(item: Item) {
  return item.name === 'Sulfuras, Hand of Ragnaros'
}

function isConjured(item: Item){
  return item.name === 'Conjured'
}

function increaseQuality(item: Item) {
  item.quality += 1
}

function decreaseQuality(item: Item) {
  item.quality -= 1
}

function decreaseSellIn(item: Item) {
  item.sellIn -= 1
}

function qualityLessMaximum(item: Item) {
  return item.quality < 50
}

function updateBackStageQuality(item: Item) {
  if (qualityLessMaximum(item)) {
    increaseQuality(item)
    if (item.sellIn < 11) {
      increaseQuality(item)
    }
    if (item.sellIn < 6) {
      increaseQuality(item)
    }
    if (item.sellIn < 0) {
      item.quality = 0
    }
  }
  decreaseSellIn(item)
}

function updateAgedBrieQuality(item: Item) {
  if (qualityLessMaximum(item)) {
    increaseQuality(item)
    if (item.sellIn < 0) {
      increaseQuality(item)
    }
  }
  decreaseSellIn(item)
}

function updateSulfurasQuality(item: Item) {

}

function updateConjured(item: Item){
  if (item.quality > 0) {
    decreaseQuality(item)
    decreaseQuality(item)
  }
  decreaseSellIn(item)
  if (item.sellIn < 0) {
    decreaseQuality(item)
  }
}

function updateNormalQuality(item: Item) {
  if (item.quality > 0) {
    decreaseQuality(item)
  }
  decreaseSellIn(item)
  if (item.sellIn < 0) {
    decreaseQuality(item)
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (isBackStage(item)) {
        updateBackStageQuality(item)
      } else if (isAgedBrie(item)) {
        updateAgedBrieQuality(item)
      } else if (isSulfuras(item)) {
        updateSulfurasQuality(item)
      }else if(isConjured(item)){
        updateConjured(item)
      } else {
        updateNormalQuality(item)
      }
    }
    return this.items;
  }

}
