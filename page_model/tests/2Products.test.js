import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import { CREDENTIALS } from '../data/Constants'
import { MULTITEMS } from '../data/Constants'

fixture('Products page feature testing')
  .page(`https://www.saucedemo.com/`)
  .beforeEach(async t => {
    await t
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  })

test('3. Logout from products page', async t => {
    await InventoryPage.openMenu();
})

test('4. Navigate to the shopping page', async t => {
  await InventoryPage.openCart();
})

test('5. Add a single item to the shopping cart', async t => {
  await InventoryPage.addItemToCart();
})

test('6. Add multiple items to the shopping cart', async t => {
  await InventoryPage.addMultipleItemsToCart();
  await t.expect(InventoryPage.totalItems.exists).ok()
  await t.expect((InventoryPage.totalItems).innerText).eql(MULTITEMS.NAVCOUNT.navCount);

 /* const value = await InventoryPage.totalItems.innerText;
  console.log('Total items ' + value) //verifies value*/ 
})