/// <reference types="Cypress" />

describe("Medium handson 2", function () {
  it("Booking flight", function () {
    cy.visit("https://www.booking.com/");
    cy.wait(4000);
    cy.get(".b8ef7618ca > .bb0b3e18ca > .fc63351294", {
      timeout: 10000,
    }).click();
    cy.get("#flights").click();
    cy.wait(2000);
    cy.get("input[value='ONEWAY']").check();
    cy.get("button[class='css-re4ebp']").click();
    // for (let i = 0; i < 1; i++) {
    cy.get("button[data-ui-sr='occupancy_adults_input_plus']").click();
    // }
    // for (let i = 0; i < 1; i++) {
    cy.get("button[data-ui-sr='occupancy_children_input_plus']").click();
    // }
    cy.get("select[name='sr_occupancy_children_age_0']")
      .select(9)
      .should("have.value", 8);
    cy.get(".Button-module__text___UY6FX").contains("Done").click();
    cy.get("button[data-ui-sr='location_input_from_0']").click();
    cy.get(
      ".Text-module__root--variant-body_2___-3fYM > .Icon-module__root___DweoM"
    ).click();
    cy.get("input[placeholder='Airport or city']").type("MAA");
    cy.get(".css-1eonra > li > :nth-child(2)").each(($el, index, $list) => {
      if (cy.wrap($el).contains("Chennai")) {
        cy.wrap($el).click();
        return false;
      }
    });

    cy.get("[data-ui-sr='location_input_to_0']").click();
    cy.get("input[placeholder='Airport or city']").type("BLR");
    cy.get(".css-1eonra > li > :nth-child(2)").each(($el, index, $list) => {
      if (cy.wrap($el).contains("Bangalore")) {
        cy.wrap($el).click();
        return false;
      }
    });

    cy.get("button[data-ui-sr='segment_date_input_0']").click();
    cy.get("table >tbody >tr >td").each(($el, index, $list) => {
      let date = $el.text();
      if (date == "24") {
        cy.wrap($el).click();
        return false;
      }
    });
    cy.get(".Button-module__text___UY6FX").click();
    cy.wait(5000);
    // cy.get("#\\30  > :nth-child(1) > :nth-child(2)").each(
    //   ($el, index, $list) => {
    //     if (cy.wrap($el).contains("00:00 - 05:59")) {
    //       cy.wrap($el).click();
    //       return false;
    //     }
    //   }
    // );
    cy.get(".InputCheckbox-module__content___mk-Me").contains("17:59").click();
    cy.wait(3000);
    cy.get("div[data-testid='flight_card_carrier_0']").each(
      ($el, index, $list) => {
        let flightName = $el.text();
        if (flightName == "Air India") {
          cy.log("Air India is available");
        }
      }
    );
  });
});
