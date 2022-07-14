describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})


//API CALLS (testing)
// 1)
// A) As a user, I should be able to navigate back to the home page and to the details through URL. (happy)
// B) As a user, I should be redirected to error message. (sad)

//2)
// A) As a user, I should be able to click the X button of the movie details page to return to home. (happy)
// B) As a user, I should be redirected to an error message.
