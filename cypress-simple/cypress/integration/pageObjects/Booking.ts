export default class Booking {
  clickOnFlights() {
    cy.get("#flights").click();
  }
  selectOneWay() {
    cy.get("input[value='ONEWAY']").check();
  }
  selectAdultPassengers(adults: number) {
    for (let i = 0; i < adults - 1; i++) {
      cy.get("button[data-ui-sr='occupancy_adults_input_plus']").click();
    }
  }
  selectOneChildPassenger(childAge: number) {
    for (let i = 0; i < 1; i++) {
      cy.get("button[data-ui-sr='occupancy_children_input_plus']").click();
    }
    cy.get("select[name='sr_occupancy_children_age_0']")
      .select(childAge + 1)
      .should("have.value", childAge);
  }

  enterWhereFrom(airport3DigitCode: string, city: string) {
    cy.get("button[data-ui-sr='location_input_from_0']").click();
    cy.get(
      ".Text-module__root--variant-body_2___-3fYM > .Icon-module__root___DweoM"
    ).click();
    cy.get("input[placeholder='Airport or city']").type(airport3DigitCode);
    cy.get(".css-1eonra > li > :nth-child(2)").each(($el, index, $list) => {
      if (cy.wrap($el).contains(city)) {
        cy.wrap($el).click();
        return false;
      }
    });
  }

  enterWhereTo(airport3DigitCode: string, city: string) {
    cy.get("[data-ui-sr='location_input_to_0']").click();
    cy.get("input[placeholder='Airport or city']").type(airport3DigitCode);
    cy.get(".css-1eonra > li > :nth-child(2)").each(($el, index, $list) => {
      if (cy.wrap($el).contains(city)) {
        cy.wrap($el).click();
        return false;
      }
    });
  }
  selectDate(date: string) {
    cy.get("button[data-ui-sr='segment_date_input_0']").click();
    cy.get("table >tbody >tr >td").each(($el, index, $list) => {
      let dateValue = $el.text();
      if (dateValue == date) {
        cy.wrap($el).click();
        return false;
      }
    });
    cy.get(".Button-module__text___UY6FX").click();
  }
}
