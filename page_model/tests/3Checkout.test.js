import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import { CREDENTIALS } from '../data/Constants'
import { USERINFO } from '../data/Constants'

fixture('Cart page feature testing')
  .page(`https://www.saucedemo.com/`)
  .beforeEach(async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await InventoryPage.addMultipleItemsToCart();
    await InventoryPage.openCart();
    await CartPage.Checkout();
  })

  test('7.1 Continue with missing all information', async t => {
    await CheckoutPage.Continue();
    await t.expect(CheckoutPage.errorMessage.exists).ok()
    await t.expect(CheckoutPage.errorMessage.innerText).eql('Error: First Name is required')
  })

  test('7.2 Continue with missing last name information', async t => {
    await t
    .typeText(CheckoutPage.lblfirstname, USERINFO.USERINFO.firstname)
    .typeText(CheckoutPage.lblpostalCode, USERINFO.USERINFO.zipcode)
    await CheckoutPage.Continue();
    await t
    .expect(CheckoutPage.errorMessage.exists).ok()
    .expect(CheckoutPage.errorMessage.innerText).eql('Error: Last Name is required')
  })

  test('7.3 Continue with missing zip code information', async t => {
    await t
    .typeText(CheckoutPage.lblfirstname, USERINFO.USERINFO.firstname)
    .typeText(CheckoutPage.lbllastname, USERINFO.USERINFO.lastname)
    await CheckoutPage.Continue();
    await t
    .expect(CheckoutPage.errorMessage.exists).ok()
    .expect(CheckoutPage.errorMessage.innerText).eql('Error: Postal Code is required')
  })

  test('8 Fill user information', async t => {
    await t
    .typeText(CheckoutPage.lblfirstname, USERINFO.USERINFO.firstname)
    .typeText(CheckoutPage.lbllastname, USERINFO.USERINFO.lastname)
    .typeText(CheckoutPage.lblpostalCode, USERINFO.USERINFO.zipcode)
    await CheckoutPage.Continue();
  })

  test('9 Final order items', async t => {
    await t
    .typeText(CheckoutPage.lblfirstname, USERINFO.USERINFO.firstname)
    .typeText(CheckoutPage.lbllastname, USERINFO.USERINFO.lastname)
    .typeText(CheckoutPage.lblpostalCode, USERINFO.USERINFO.zipcode)
    await CheckoutPage.Continue();
    await OverviewPage.VerifyItems();
  })

  test('10 Complete a purchase', async t => {
    await t
    .typeText(CheckoutPage.lblfirstname, USERINFO.USERINFO.firstname)
    .typeText(CheckoutPage.lbllastname, USERINFO.USERINFO.lastname)
    .typeText(CheckoutPage.lblpostalCode, USERINFO.USERINFO.zipcode)
    await CheckoutPage.Continue();
    await OverviewPage.VerifyItems();
    await OverviewPage.Finish();
    await t
  })