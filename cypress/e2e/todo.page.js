export const TodoPage = {
  visit() {
    cy.visit('/')
    cy.get('.loaded')
  },

  /**
   * Adds a new todo item
   * @param {string} title
   * @param {string} idAlias - alias to use for the new todo item id
   * @example
   *  TodoPage.addTodo('write code', 'newTodoId')
   *  cy.get('@newTodoId').should('be.a', 'string')
   */
  addTodo(title, idAlias = 'newTodoId') {
    cy.intercept('POST', '/todos').as('newTodo')
    cy.get('.new-todo').type(`${title}{enter}`)
    return cy
      .wait('@newTodo')
      .its('response.body.id')
      .should('be.a', 'string')
      .as(idAlias)
  },

  reset() {
    cy.request('POST', '/reset', { todos: [] })
  },

  getTodos() {
    return cy.get('.todo-list li')
  },
}
