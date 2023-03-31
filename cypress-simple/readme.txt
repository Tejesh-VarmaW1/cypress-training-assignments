Hands-on _ 1 

1. Navigate to https://www.parasoft.com/contact/ 
2. verify text is present - 'Contact us to learn how Parasoft’s automated software testing solutions can help you save time and money without compromising quality.' 
3. Enter the Email as -test 
4. Enter random text for the field like Firstname, lastname, company, job title, phone number, comments 
5. Enter couintry as India 
6. Click on submit 
7. verify the Error meesage for Email Field 
8. Enter the Email as test123@gmail.com and click on submit 
9. verify confirmation message is displayed 

// cy.get(".rt-tbody :nth-child(7)").each(($el, index, $list) => {
    //   cy.get(".rt-td > .action-buttons > .mr-2").eq(index).click();
    //   let text;
    //   cy.get("#firstName").then(function (element) {
    //     text = element.text();
    //   });
    //   if (text == "Alden") {
    //     cy.get("#salary").clear();
    //     cy.get("#salary").type("13000");
    //     cy.get("#submit").click();
    //   } else {
    //     cy.get(".close").click();
    //   }
    // });