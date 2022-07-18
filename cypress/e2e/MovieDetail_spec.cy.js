describe("Rancid Tomatillos", () => {

  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/694919", { fixture: "movieDetail" })
    cy.visit("http://localhost:3000/694919")
  })

  it("As a user, I should see the expanded details for a specific movie", () => {
    cy.get("h2").contains("Money Plane")
    cy.get("p").last().contains("2020-09-29")
    cy.get(".runtime").contains("82 min.")
  })

  it("As a user, I should be able to click the X button of the movie details page to return to home", () => {
    cy.get(".material-symbols-outlined").click()
    cy.url().should("eq", "http://localhost:3000/")
  })

})
