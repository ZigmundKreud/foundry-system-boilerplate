/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class MyItem extends Item {
  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  prepareData() {
    super.prepareData();
    console.debug("Item prepareData");
    // Get the Item's data
    const itemData = this.data;
    console.log(itemData);
    const actorData = this.actor ? this.actor.data : {};
    const data = itemData.data;
  }
}
