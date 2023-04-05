/// <reference types="cypress"/>

describe("Medium handson 4", function () {
  it("Sauce demo", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    let totalProducts: number;
    cy.get("button[class='btn btn_primary btn_small btn_inventory']")
      .eq(5)
      .click();
    cy.get("button[class='btn btn_primary btn_small btn_inventory']")
      .last()
      .click();
    cy.get(".shopping_cart_link").click();
    let itemsArr = ["Test.allTheThings() T-Shirt (Red)", "Sauce Labs Onesie"];
    cy.get(
      ".cart_list > .cart_item > .cart_item_label > a > .inventory_item_name"
    ).each(($el, index, $list) => {
      cy.wrap($el).should("have.text", itemsArr[index]);
    });
    cy.get("button[name='checkout']").click();
    cy.get("#first-name").type("Tejesh");
    cy.get("#last-name").type("Varma");
    cy.get("#postal-code").type("500001");
    cy.get("#continue").click();
    cy.get(
      ".cart_list > .cart_item > .cart_item_label > a > .inventory_item_name"
    ).each(($el, index, $list) => {
      cy.wrap($el).should("have.text", itemsArr[index]);
    });
    //Item total
    cy.get(".summary_subtotal_label").then(function (element) {
      let text = element.text();
      let realText = text.split("$");
      if (realText[1].trim() == "23.98") {
        cy.log("Item total is validated");
      }
    });
    //Tax
    cy.get(".summary_tax_label").then(function (element) {
      let text = element.text();
      let realText = text.split("$");
      if (realText[1].trim() == "1.92") {
        cy.log("Tax is validated");
      }
    });
    //Total
    cy.get(".summary_total_label").then(function (element) {
      let text = element.text();
      let realText = text.split("$");
      if (realText[1].trim() == "25.90") {
        cy.log("Total is validated");
      }
    });

    cy.get("#finish").click();
    cy.get(".complete-header").should("have.text", "Thank you for your order!");
    cy.get("div[class='complete-text']").should(
      "have.text",
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  });
});
