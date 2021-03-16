import { Selector } from 'testcafe'
import { MULTITEMS } from '../data/Constants'
import { t } from 'testcafe'

class OverviewPage {
    constructor() {
        this.item_added_Name1 = Selector('#item_4_title_link')
        this.item_added_Name2 = Selector('#item_0_title_link')
        this.item_added_Name3 = Selector('#item_1_title_link')
        this.btnFinish = Selector('.btn_action.cart_button')
        this.btnCancel = Selector('.cart_cancel_link.btn_secondary')
        
    }
    async Finish(){
        await t
          .click(this.btnFinish)
    }
    async Cancel(){
        await t
          .click(this.btnCancel)
    }

    async VerifyItems(){
        await t    
        .expect(this.item_added_Name1.innerText).eql(MULTITEMS.ITEMADDED.itemName1)
        .expect(this.item_added_Name2.innerText).eql(MULTITEMS.ITEMADDED.itemName2)
        .expect(this.item_added_Name3.innerText).eql(MULTITEMS.ITEMADDED.itemName3)
    }
}

export default new OverviewPage()