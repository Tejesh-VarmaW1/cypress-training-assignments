export default class ParasoftContactPage {
  getEmail() {
    return cy.get("input[name='email']");
  }

  getPageDescription() {
    return cy.get("h1");
  }

  getFirstName() {
    return cy.get("input[name='firstname']");
  }

  getLastName() {
    return cy.get("input[name='lastname']");
  }

  getCompany() {
    return cy.get("input[name='company']");
  }

  getJobTitle() {
    return cy.get("input[name='jobtitle']");
  }

  getPhoneNumber() {
    return cy.get("input[name='phone']");
  }

  getCountry() {
    return cy.get('[name="country"]');
  }

  getComments() {
    return cy.get("[name='comments']");
  }

  getContactUsButton() {
    return cy.get(".hs-button");
  }

  getErrorMsg() {
    return cy.get(".hs-error-msg");
  }

  getConfirmation() {
    return cy.get(".content > p");
  }

  validatePage(pageDescription: string): void {
    this.getPageDescription().contains(pageDescription);
  }

  validateErrorMsg(errorMsg: string): void {
    this.getErrorMsg().contains(errorMsg);
  }

  validateConfirmation(confirmationMsg: string): void {
    this.getConfirmation().contains(confirmationMsg);
  }

  enterEmail(email: string): void {
    this.getEmail().type(email);
  }

  enterFirstName(firstName: string): void {
    this.getFirstName().type(firstName);
  }

  enterLastName(lastName: string): void {
    this.getLastName().type(lastName);
  }

  enterCompany(company: string): void {
    this.getCompany().type(company);
  }

  enterJobTitle(jobTitle: string): void {
    this.getJobTitle().type(jobTitle);
  }

  enterPhoneNumber(phoneNumber: string): void {
    this.getPhoneNumber().type(phoneNumber);
  }

  enterCountry(country: string): void {
    this.getCountry().select(country);
  }

  enterComments(comments: string): void {
    this.getComments().type(comments);
  }

  clickContactUsButton(): void {
    this.getContactUsButton().click();
  }

  acceptCookies(): void {
    cy.get("#hs-eu-confirmation-button").click();
  }
}
