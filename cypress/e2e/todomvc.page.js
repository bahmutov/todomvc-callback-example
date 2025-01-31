export const TodoMVCPage = {
  reset() {
    cy.request('POST', '/reset', { todos: [] })
  },

  visit() {
    cy.visit('/')
    cy.get('.loaded')
  },

  /**
   * Adds a new todo item
   * @param {string} title
   */
  addTodo(title) {
    cy.get('.new-todo').type(`${title}{enter}`)
  },

  getTodos() {
    return cy.get('.todo-list li')
  },
}
