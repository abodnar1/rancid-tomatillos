describe("Rancid Tomatillos", () => {

  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", { fixture: "movieDetail" })
    cy.visit('http://localhost:3000/')
    cy.visit('http://localhost:3000/694919')
  });

  it('As a user, I should see the expanded details for a specific movie', () => {
    cy.get("h2").contains("Money Plane")
    cy.get("p").last().contains("2020-09-29")
    cy.get(".runtime").contains("82 min.")
  });


});

//API CALLS (testing)
// 1)
// A) As a user, I should be able to navigate back to the home page and to the details through URL. (happy)


//2)
// A) As a user, I should be able to click the X button of the movie details page to return to home. (happy)
