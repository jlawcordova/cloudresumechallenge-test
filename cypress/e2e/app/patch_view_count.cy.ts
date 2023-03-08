/// <reference types="cypress" />

describe("PATCH /view-count", () => {
  it("should return the view count in its response body", () => {
    // https://on.cypress.io/request
    cy.request({
      method: "PATCH",
      url: "https://api-resume.jlawcordova.com/view-count",
    }).should((response) => {
      expect(response.status).to.eq(200);
      var body = JSON.parse(response.body);
      expect(body).property("viewCount").to.be.a("string");
    });
  });
});
