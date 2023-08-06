import { Item, GildedRose } from '@/gilded-rose';

describe('Aged Brie', () => {
  it('Aged Brie should increase', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe('Aged Brie', () => {
  it('Aged Brie should increase but no more than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe('Backstage passes to a TAFKAL80ETC concert', () => {
  it('Backstage passes to a TAFKAL80ETC concert should increase', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe('Backstage passes to a TAFKAL80ETC concert', () => {
  it('Backstage passes to a TAFKAL80ETC concert should increase two when 5 - 10', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe('Backstage passes to a TAFKAL80ETC concert', () => {
  it('Backstage passes to a TAFKAL80ETC concert should increase two when 0 - 5', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });
});

describe('normalItem', () => {
  it('normalItem should decrease one', () => {
    const gildedRose = new GildedRose([new Item('normalItem', 4, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
  });
});

describe('normalItem', () => {
  it('normalItem should decrease one', () => {
    const gildedRose = new GildedRose([new Item('normalItem', 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });
});

describe('Sulfuras, Hand of Ragnaros', () => {
  it('Sulfuras should not change', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(20);
  });
});

describe('Conjured', () => {
  it('"Conjured" items degrade in Quality twice as fast as normal items', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 2, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });
});

