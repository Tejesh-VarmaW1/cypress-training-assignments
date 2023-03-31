/// <reference types="Cypress" />

export default class DemoQa {
  getWidgets() {
    return cy.get("h5").contains("Widgets");
  }

  getWidgetHeader() {
    return cy.get("div[class='main-header']");
  }

  getAutoComplete() {
    return cy.get("ul li").contains("Auto Complete");
  }

  getSingleColor() {
    return cy.get(".auto-complete__value-container").last();
  }

  getElements() {
    return cy.get(".header-text").contains("Elements");
  }

  getWebTableElement(elementValue: number) {
    cy.get(`.web-tables-wrapper :nth-child(${elementValue})`);
  }

  clickWidgets(): void {
    this.getWidgets().click();
  }

  validateWidgetHeader() {
    this.getWidgetHeader().then(function (element) {
      const text = element.text();
      cy.log(text);
      expect(text.includes("Widgets")).to.be.true;
    });
  }

  clickAutoComplete() {
    this.getAutoComplete().click();
  }

  enterSingleColorAndValidate(color: string) {
    this.getSingleColor().type(color);
  }

  clickElementsAndOption(option: string) {
    this.getElements().click().get(".menu-list").contains(option).click();
  }

  //   validateColors(color:string){
  //     this.enterSingleColor(color).each(($el, index, $list) => {
  //         if($el.text()==="India"){
  //             cy.wrap($el).click()
  //         }
  //     })
  //   }
}
