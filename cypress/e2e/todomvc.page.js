export const TodoMVCPage = {
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
}
