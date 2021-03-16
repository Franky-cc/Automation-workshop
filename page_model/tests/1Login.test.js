import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'
import { standard_user, problem_user} from '../data/Roles'

fixture('Login feature testing')
  .page(`https://www.saucedemo.com/`)

test('1. Login with a valid user standar_user role', async t => {
  //await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t.useRole(standard_user)
})

test('2. Login with an invalid user', async t => {
  await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
  await t.expect(LoginPage.errorMessage.exists).ok()
  await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})

test('2.1 Login with problem_user role', async t => {
  await t.useRole(problem_user)
})