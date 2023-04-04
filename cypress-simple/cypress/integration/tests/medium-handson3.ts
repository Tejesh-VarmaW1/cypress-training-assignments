/// <reference types="Cypress" />
import Manyavaar from "../pageObjects/manyavaar";
describe("Medium handson 3", function () {
  it("Wedding shopping", function () {
    let manyavar = new Manyavaar();
    cy.visit("https://www.manyavar.com/");
    manyavar.clickMenVisitAll();
    cy.wait(6000);
    manyavar.validateItems();
    manyavar.clickCategories();

    cy.get("#\\30 sFilters > .unstyled > :nth-child(4) > label").click();
    cy.get("#\\30 sFilters > .unstyled > :nth-child(14) > label").click();
    manyavar.clickFirstProduct();
    manyavar.validateProductName("Cream Jacquard Kurta Set");
    manyavar.validateProductCode("CPOSK399-303");
    manyavar.setSize("XL");
    manyavar.setQuantity(10);
    manyavar.clickAddToCart();
    cy.wait(5000);
    manyavar.goToCart();
    cy.wait(5000);
    manyavar.validateColor("Beige");
    manyavar.validateSize("XL");
    //quantity
    // cy.get('.product-dlt > :nth-child(4)').contains()
    manyavar.validateSubTotal("7998.00");
    manyavar.validateOrderTotal("7998.00");
  });
});

// if (cy.wrap($el).contains("Shrewani")) {
//     cy.wrap($el).check();
//   } else

// cy.get(".accordianDescription > ul li")
// .should("be.visible")
// .each(($el, index, $list) => {
//   let text = $el.text();
//   let realText = text.split("(");
//   if (realText[0] == "Indo Western") {
//     cy.wrap($el).click();
//     return false;
//   }
// });
("XL");
("Beige");
("7998.00");
