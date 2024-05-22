const LoginPage = require('../pages/Login.page')

describe("Demo Tests", () =>
{
    it("Login Test",async ()=>
    {
        browser.url("https://the-internet.herokuapp.com/login")

       LoginPage.login('tomsmith','SuperSecretPassword!')
        LoginPage.checkMessage('You logged into a secure area!')
    })
})