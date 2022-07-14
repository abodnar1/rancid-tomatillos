describe("Rancid Tomatillos", () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('The user should be able to visit http://localhost:3000 and see all movie posters', () => {
    cy.contains("h1", "Rancid Tomatillos");
  });
});

// 1)
// A) As a user, I should be able to visit http://localhost:3000 and see a title & movies displayed. (happy)
// B) As a user, I should receive an error message if there are no movies to display (Sad)

// 2)
// A) As a user, I should be able to click on a movie card and be directed to a new URL (MovieDetail ID). (happy)
// B) As a user, I should receive an error message. (Sad)
