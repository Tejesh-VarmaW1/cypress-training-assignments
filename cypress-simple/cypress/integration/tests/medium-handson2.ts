/// <reference types="Cypress" />
import Booking from "../pageObjects/Booking";

describe("Medium handson 2", function () {
  it("Booking flight", function () {
    const booking = new Booking();
    cy.visit("https://www.booking.com/");
    cy.wait(4000);
    cy.get(".b8ef7618ca > .bb0b3e18ca > .fc63351294", {
      timeout: 10000,
    }).click();
    booking.clickOnFlights();
    cy.wait(2000);
    booking.selectOneWay();
    cy.get("button[class='css-re4ebp']").click();
    booking.selectAdultPassengers(2);
    booking.selectOneChildPassenger(8);
    cy.get(".Button-module__text___UY6FX").contains("Done").click();

    booking.enterWhereFrom("MAA", "Chennai");
    booking.enterWhereTo("BLR", "Bangalore");
    booking.selectDate("24");
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
