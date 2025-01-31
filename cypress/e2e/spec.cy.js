/// <reference types="cypress" />

import { TodoMVCPage } from './todomvc.page'

it('creates a todo item', () => {
  TodoMVCPage.reset()
  TodoMVCPage.visit()
  TodoMVCPage.addTodo('write code')
  TodoMVCPage.getTodos()
    .should('have.length', 1)
    .first()
    .should('have.attr', 'data-todo-id')
})
