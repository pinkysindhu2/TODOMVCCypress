///<reference types='cypress' />

import {
    navigate, 
    addTodo, 
    validateTodoText, 
    valiadteToggleSate, 
    validateNumberOfTodosShown, 
    validateTodoCompletedState, 
    clearCompleted, 
    toggleTodo
} from "../../page-objects/todo-page-export-function"

describe('todo actions', () => {

    beforeEach(() => {
        // todoPage.navigate()           
        // todoPage.addTodo("Clean room")
        navigate()
        addTodo("Clean room")
    
    })
    it('should add a new todo to the list', () => {
        // todoPage.validateTodoText(0, 'Clean room')
        // todoPage.valiadteToggleSate(0, false)
        validateTodoText(0, 'Clean room')
        valiadteToggleSate(0, false)
    })
    it('should mark a todo as completed', () => {
        //cy.get('.toggle').should('not.be.checked').click().should('be.checked');
        // todoPage.toggleTodo(0)
        // todoPage.validateTodoCompletedState(0, true)
        toggleTodo(0)
        validateTodoCompletedState(0, true)
    })
    it('should clear completed todo', () => {
       
        // todoPage.toggleTodo(0)
        // todoPage.clearCompleted()
        // todoPage.validateNumberOfTodosShown(0)
        toggleTodo(0)
        clearCompleted()
        validateNumberOfTodosShown(0)
    })
})
