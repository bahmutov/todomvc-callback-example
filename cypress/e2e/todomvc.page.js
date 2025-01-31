export const TodoMVCPage = {
  visit() {
    cy.visit('/')
    cy.get('.loaded')
  },
}
