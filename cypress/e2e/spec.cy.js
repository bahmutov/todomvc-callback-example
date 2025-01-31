/// <reference types="cypress" />

it('creates a todo item', () => {
  cy.request('POST', '/reset', { todos: [] })
  cy.visit('/')
  cy.get('.loaded')
  cy.get('.new-todo').type('write code{enter}')
  cy.get('.todo-list li')
    .should('have.length', 1)
    .first()
    .should('have.attr', 'data-todo-id')
})
