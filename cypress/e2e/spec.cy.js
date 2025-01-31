/// <reference types="cypress" />

import { TodoPage } from './todo.page'

it('creates a todo item', () => {
  TodoPage.reset()
  TodoPage.visit()
  TodoPage.addTodo('write code', 'newTodoId')

  cy.log('**checking the new todo item**')
  cy.get('@newTodoId').then((id) => {
    TodoPage.getTodos()
      .should('have.length', 1)
      .first()
      .should('have.attr', 'data-todo-id', id)
  })
})

it('creates a random todo item', () => {
  TodoPage.reset()
  TodoPage.visit()
  // create the random todo item
  // and confirm the element's text and the data id attribute
  TodoPage.addRandomTodo().then(({ title, id }) => {
    cy.contains('li.todo', title).should(
      'have.attr',
      'data-todo-id',
      id,
    )
  })
})
