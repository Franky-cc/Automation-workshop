import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import { CREDENTIALS } from '../data/Constants'
import { MULTITEMS } from '../data/Constants'
import { standard_user} from '../data/Roles'

fixture('Inventory feature testing')
  .page(`https://www.saucedemo.com/`)
  .beforeEach(async t => {
    await t
      .useRole(standard_user)
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
})