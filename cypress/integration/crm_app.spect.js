describe("Prospect Screen", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should open the modal", () => {
    cy.openModal();
  });

  it("Shoud validate the lead", () => {
    cy.openModal();
    cy.contains("Validate Lead").first().click();
  });

  it("Should add a new prospect depends of the validations", () => {
    cy.openModal();
    cy.contains("Validate Lead").first().click();
    cy.contains("Add Leads").first().click();
  });

  it("Should close the modal", () => {
    cy.openModal();
    cy.get(".modal__close").click();
  });
});
