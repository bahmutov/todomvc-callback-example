export const TodoPage = {
  visit() {
    cy.visit('/')
    cy.get('.loaded')
  },

  /**
   * Adds a new todo item
   * @param {string} title
   * @param {Function?} callback
   */
  addTodo(title, callback) {
    cy.intercept('POST', '/todos').as('newTodo')
    cy.get('.new-todo').type(`${title}{enter}`)
    if (callback) {
      cy.wait('@newTodo')
        .its('response.body.id')
        .should('be.a', 'string')
        .then(callback)
    } else {
      cy.wait('@newTodo')
        .its('response.body.id')
        .should('be.a', 'string')
    }
  },

  reset() {
    cy.request('POST', '/reset', { todos: [] })
  },

  getTodos() {
    return cy.get('.todo-list li')
  },
}
