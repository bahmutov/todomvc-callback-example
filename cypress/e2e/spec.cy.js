/// <reference types="cypress" />

import { TodoPage } from './todo.page'

it('creates a todo item', () => {
  TodoPage.reset()
  TodoPage.visit()
  TodoPage.addTodo('write code', (id) => {
    TodoPage.getTodos()
      .should('have.length', 1)
      .first()
      .should('have.attr', 'data-todo-id', id)
  })
})
