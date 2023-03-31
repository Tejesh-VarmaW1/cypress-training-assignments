/// <reference types="Cypress" />
import "cypress-real-events/support";

describe("Medium handson 2", function () {
  it("Booking flight", function () {
    cy.visit("https://www.manyavar.com/");
    cy.get("a[href='/category/men']")
      .click()
      .get(".row > :nth-child(1) > :nth-child(2) > :nth-child(2) > a")
      .click();
    cy.get(".accordianTitle0sFilters").click();
    cy.get("input[type='checkbox']").contains("Indo Western").check();
    cy.get("input[type='checkbox']").contains("Sherwani").check();
  });
});
