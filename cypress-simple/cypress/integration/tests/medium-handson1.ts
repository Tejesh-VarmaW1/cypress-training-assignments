/// <reference types="Cypress" />
import DemoQa from "../pageObjects/DemoQa";

describe("Medium handson 1", function () {
  before(function () {
    cy.fixture("demoqa").then(function (data) {
      this.data = data;
    });
  });

  it("Demoqa widgets", function () {
    const demoQa = new DemoQa();

    //1.Navigate to https://demoqa.com/
    cy.visit(this.data.url);

    //2.Click on Widgets and check whether the header is displayed as " Widgets"
    cy.get("h5").contains("Widgets").click();
    cy.get("div[class='main-header']").contains("Widgets");

    //3.Click on Auto Complete under widgets
    cy.get("ul li").contains("Auto Complete").click();

    // 4.Type 'r' in 'single color ' text box and check whether you are getting 'Red, green and purple'(create dynamic method)
    cy.get(
      "#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container"
    ).type("r");
    cy.get(".auto-complete__menu-list").each(($el, index, $list) => {
      if ($el.text() == "Red" || "Purple" || "Green") {
        cy.log($el.text());
      }
    });

    //5.Click on "Elements" tab and click on 'Web Tables' under Elements
    cy.get(".header-text")
      .contains("Elements")
      .click()
      .get(".menu-list")
      .contains("Web Tables")
      .click();
    cy.get("#edit-record-2").click();
    cy.get("#salary").clear();
    cy.get("#salary").type("13000");
    cy.get("#submit").click();
  });
});
