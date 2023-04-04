export default class Manyavaar {
  clickMenVisitAll() {
    cy.get("a[href='/category/men']")
      .click()
      .get(".row > :nth-child(1) > :nth-child(2) > :nth-child(2) > a")
      .click();
  }

  clickCategories() {
    cy.get("h4").contains("Categories").click();
  }

  clickFirstProduct() {
    cy.get(".ProductCardTitle").first().click();
  }

  clickAddToCart() {
    cy.get("#anc-addCart").first().click();
  }

  goToCart() {
    cy.get("img[alt='Cart']").click();
    cy.get(".globalViewCart").click();
  }

  setSize(size: string) {
    cy.get(".newpdpSizeLink").contains(size).click();
  }
  setQuantity(quantity: number) {
    for (let i = 1; i < quantity; i++) {
      cy.get(".newqtyPlus").click();
    }
  }
  validateItems() {
    cy.get(".filterResultTxt").then(function (element) {
      let items = element.text();
      cy.log(items);
    });
  }
  validateProductName(productName: string) {
    cy.get(".new-pdp-proname > span")
      .contains(productName)
      .then(function () {
        cy.log("Product name is valid");
      });
  }

  validateProductCode(productCode: string) {
    cy.get(".newproCode")
      .contains(productCode)
      .then(function () {
        cy.log("Product code is valid");
      });
  }
  validateColor(color: string) {
    cy.get(".product-dlt > :nth-child(2)").then(function (element) {
      let text = element.text();
      let realText = text.split(":");
      if (realText[1].trim() == color) {
        cy.log("Product color is validated");
      }
    });
  }
  validateSize(size: string) {
    cy.get(".product-dlt > :nth-child(3)").then(function (element) {
      let text = element.text();
      let realText = text.split(":");
      if (realText[1].trim() == size) {
        cy.log("Product size is validated");
      }
    });
  }
  validateSubTotal(subTotal: string) {
    cy.get(":nth-child(1) > .col-5 > span").then(function (element) {
      let text = element.text();
      let realText = text.split(" ");
      cy.log(realText[2]);
      if (realText[2].trim() == subTotal) {
        cy.log("Sub total is validated");
      }
    });
  }
  validateOrderTotal(orderTotal: string) {
    cy.get(".cart-total-price > .col-5 > span").then(function (element) {
      let text = element.text();
      let realText = text.split(" ");
      if (realText[1].trim() == orderTotal) {
        cy.log("Order total is validated");
      }
    });
  }
}
