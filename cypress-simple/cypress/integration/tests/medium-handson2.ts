/// <reference types="Cypress" />

describe("Medium handson 2", function () {
  it("Booking flight", function () {
    cy.visit("https://www.booking.com/");
    cy.get(".b8ef7618ca > .bb0b3e18ca > .fc63351294").click();
  });
});
