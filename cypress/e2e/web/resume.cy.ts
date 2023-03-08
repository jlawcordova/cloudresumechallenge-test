/// <reference types="cypress" />

describe("Resume", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should contain the name of the resume owner", () => {
    cy.get("h1").should("contain", "Junel Lawrence Cordova");
  });

  it("should increase the view count when visited", () => {
    var viewCount: number;

    cy.get(".view-count").then((content) => {
      viewCount = parseInt(content[0].innerText.split(" ")[0]);
    });

    // Revisit the same page to increase the view count.
    cy.visit("/");
    cy.get(".view-count").then((content) => {
      var newViewCount = parseInt(content[0].innerText.split(" ")[0]);
      cy.wrap(newViewCount).should("be.greaterThan", viewCount);
    });
  });
});
