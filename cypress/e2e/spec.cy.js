/// <reference types="cypress" />

it('creates a todo item', () => {
  cy.request('POST', '/reset', { todos: [] })
  cy.visit('/')
  cy.get('.loaded')
})
