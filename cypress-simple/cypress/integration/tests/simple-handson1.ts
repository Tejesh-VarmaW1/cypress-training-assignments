/// <reference types="Cypress" />
import ParasoftContactPage from "../pageObjects/ParasoftContactPage";

describe("Simple handson", function () {
  before(function () {
    cy.fixture("parasoft").then(function (data) {
      this.data = data;
    });
  });

  it("Parasoft contact page", function () {
    const parasoftContactPage = new ParasoftContactPage();
    cy.visit(this.data.url);
    parasoftContactPage.acceptCookies();
    parasoftContactPage.validatePage(this.data.pageDescription);
    parasoftContactPage.enterEmail("test");
    parasoftContactPage.enterFirstName(this.data.firstname);
    parasoftContactPage.enterLastName(this.data.lastname);
    parasoftContactPage.enterCompany(this.data.company);
    parasoftContactPage.enterJobTitle(this.data.job_title);
    parasoftContactPage.enterPhoneNumber(this.data.phone_number);
    parasoftContactPage.enterCountry(this.data.country);
    parasoftContactPage.enterComments(this.data.comments);
    parasoftContactPage.validateErrorMsg(this.data.errorMsg);
    parasoftContactPage.getEmail().clear();
    parasoftContactPage.enterEmail(this.data.email);
    parasoftContactPage.clickContactUsButton();
    parasoftContactPage.validateConfirmation(this.data.confirmationMsg);
  });
});
