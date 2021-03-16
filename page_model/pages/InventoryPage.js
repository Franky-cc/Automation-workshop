import { Selector } from 'testcafe'
import { MULTITEMS } from '../data/Constants'
import { t } from 'testcafe'

class InventoryPage {
  constructor(){
      this.pageTitle= Selector('#product_label')
      this.addToCart = Selector('.btn_primary.btn_inventory')
      this.menu = Selector('.bm-burger-button')
      this.logout = Selector('.bm-item-list a#logout_sidebar_link.bm-item.menu-item')
      this.cart = Selector('.shopping_cart_container svg.svg-inline--fa.fa-shopping-cart.fa-w-18.fa-3x')
      this.totalItems = Selector('.fa-layers-counter.shopping_cart_badge')
     
  }
  async openMenu(){
    await t
      .click(this.menu)
      .click(this.logout)
  }
  async openCart(){
    await t
      .click(this.cart)
  }
  async addItemToCart(){
    await t
      .click(this.addToCart)
  }
  async addMultipleItemsToCart() {
    await t
    const navCount = MULTITEMS.NAVCOUNT.navCount; //total items to add  
    for (let i = 0; i < navCount; i++) {
      await t.click(this.addToCart) 
    }
  }

}

export default new InventoryPage()