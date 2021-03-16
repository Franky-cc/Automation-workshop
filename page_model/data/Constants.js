import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
  VALID_USER:{
    USERNAME:process.env.USERNAME1,
    PASSWORD:process.env.PASSWORD
  },
  INVALID_USER:{
    USERNAME:process.env.USERNAME2,
    PASSWORD:process.env.PASSWORD
  }
}

export const MULTITEMS = {
  NAVCOUNT:{
    navCount:'3'
  },
  ITEMADDED:{
    itemName1:'Sauce Labs Backpack',
    itemName2:'Sauce Labs Bike Light',
    itemName3:'Sauce Labs Bolt T-Shirt'
  }
}

export const USERINFO = {
  USERINFO:{
    firstname:'Francis',
    lastname:'automation',
    zipcode:'97970'
  }
}
