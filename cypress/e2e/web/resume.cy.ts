/// <reference types="cypress" />

describe("Resume", () => {
  beforeEach(() => {
    cy.visit("https://resume.jlawcordova.com");
  });

  it("should contain the name of the resume owner", () => {
    cy.get("h1").contains("Junel Lawrence Cordova");
  });

  it("should show the view count", () => {
    cy.get(".view-count").contains("views");
  });
});
