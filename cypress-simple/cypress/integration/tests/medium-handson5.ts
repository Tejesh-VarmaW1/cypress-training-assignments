/// <reference types="cypress"/>

describe("Medium handson 5", function () {
  it("Sauce demo", function () {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    cy.get("button").contains("Bank Manager Login").click();
    cy.get("button").contains("Add Customer").click();
    cy.get("input[placeholder='First Name']").type("Tejesh");
    cy.get("input[placeholder='Last Name']").type("Varma");
    cy.get("input[placeholder='Post Code']").type("517501");
    cy.get("button[type='submit']").click();
    cy.get("button").contains("Open Account").click();
    cy.get("#userSelect").select("Tejesh Varma");
    cy.get("#currency").select("Rupee");
    cy.get("button").contains("Process").click();
    cy.get("button").contains("Customers").click();
    cy.get(":nth-child(5) > button").last().click();
  });
});
