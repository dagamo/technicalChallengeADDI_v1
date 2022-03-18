Cypress.Commands.add("openModal", () => {
  cy.get(".container-table:first");
  cy.contains("Add Prospects").click();
});
