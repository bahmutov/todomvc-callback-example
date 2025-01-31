export const TodoPage = {
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

  resetData() {
    cy.request('POST', '/reset', { todos: [] })
  },

  getTodos() {
    return cy.get('.todo-list li')
  },
}
