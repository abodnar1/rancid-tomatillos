describe('Rancid Tomatillos', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies' })
    cy.visit('http://localhost:3000/')
  });

  it('The user should be able to visit http://localhost:3000 and see a title', () => {
    cy.get('.header').contains('Rancid Tomatillos').should('be.visible')
  });

  it('The user should be able to visit http://localhost:3000 and see all movies', () => {
    cy.get('section').should('have.class', 'movie-container')
    cy.get('.movie-poster').should('have.length', 40)
  });

  it('The should be able to click on a movie card and be directed to a new URL', () => {
    cy.get('.movie-poster').first().click()
    cy.url().should('eq', 'http://localhost:3000/694919')
  });

});

// Notes from Artan:
// intercept always goes first, because we're telling it not to go to the API we have setup.
// always goes at the top

// should live here after the intercept
// .get acts like a query selector
// cy.get.first
// cy.get.click (for buttons)
// cy.url().should('eq', 'http://localhost:3000/')
// cy.get.type('string of what user is typing in')
// cy.get.array.last
// cy.get.at(indexofarray)
// cy.get('.category__header').eq(1).contains('Best Director') (eq is checking index 1)
// check for children cy.get.children
// cy.get('.nominee__card').eq(3).should('have.css', 'border', '4px solid rgb(255, 255, 0)')
