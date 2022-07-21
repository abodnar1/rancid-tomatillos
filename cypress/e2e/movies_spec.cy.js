describe("Rancid Tomatillos", () => {

  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", { fixture: "movies" })
    cy.visit("http://localhost:3000/")
  })

  it("The user should be able to visit http://localhost:3000 and see a title", () => {
    cy.get(".header").contains("Rancid Tomatillos").should("be.visible")
  })

  it("The user should be able to visit http://localhost:3000 and see all movies", () => {
    cy.get("section").should("have.class", "movie-container")
    cy.get(".movie-poster").should("have.length", 40)
  })

  it("The should be able to click on a movie card and be directed to a new URL", () => {
    cy.get(".movie-poster").first().click()
    cy.url().should("eq", "http://localhost:3000/694919")
  })

})
