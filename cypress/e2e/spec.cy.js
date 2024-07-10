//Implementing end to end testing of buying an red iphone 15 plus  & iPhone 14 plus 128 gb on amazon
const baseURL = 'https://amazon.in'
const searchField = '#twotabsearchtextbox'
const capacityCheckbox = '.a-size-base.a-color-base' 
const btnAddToCaart = '[id="a-autoid-1-announce"]'
const btnViewCart = '[id="a-autoid-1-announce"]'
const btnProceedToCheckOut = '[data-feature-id="proceed-to-checkout-action"]'

describe('Amazon e2e', () => {


  it('User wanto Buy iPhone 15 plus 128 gb', () => {
    cy.viewport(1920, 1080)
    cy.visit(baseURL)
    cy.reload()
    cy.get(searchField).type('iPhone 15 Plus').type('{enter}')
    cy.get(capacityCheckbox).contains('128').click()
    cy.get(btnAddToCaart).eq(0).click()
    cy.wait(5000)
    cy.get(btnViewCart).dblclick()
    cy.contains('Go to Cart').click()
    cy.get(btnProceedToCheckOut).click()
  })

  it('User wants to Buy iPhone 14 plus 128 gb', () => {
    cy.viewport(1920, 1080)
    cy.visit(baseURL)
    cy.reload()
    cy.get(searchField).type('iPhone 14 Plus').type('{enter}')
    cy.get(capacityCheckbox).contains('128').click()
    cy.get(btnAddToCaart).eq(0).click()
    cy.wait(5000)
    cy.get(btnViewCart).dblclick()
    cy.contains('Go to Cart').click()
    cy.get(btnProceedToCheckOut).click()
  })

})

//need to login to perform more actions
