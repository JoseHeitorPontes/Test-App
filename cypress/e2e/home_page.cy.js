describe("The Home Page", () => {
    it("successfully loads", () => {
        cy.visit("http://localhost:5173");
        cy.get("#new-patient");
        cy.get("#patients-table");
    });
});