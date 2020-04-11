//Module in Javascript
///<reference types='cypress' />
export class todoPage{  
    navigate(){
       cy.visit("http://todomvc-app-for-testing.surge.sh/")
   }

   addTodo(todoText){
        cy.get('.new-todo').type(todoText + "{enter}")
    }

    toggleTodo(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }

    showOnlyCompletedTodos(){
        cy.contains('Completed').click()
    }

    showOnlyActiveTodos(){
        cy.contains('Active').click()
    }

    showAllTodos(){
        cy.contains('All').click()
    }

    clearCompleted(){
        cy.contains('Clear completed').click() 
    }

    validateNumberOfTodosShown(expectedNumberOfTodos){
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
    }

    validateTodoCompletedState(todoIndex, shouldBeCompleted){
        //cy.get('.todo-list li').should('have.class', 'completed') 
        const txt = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
        txt.should(`${shouldBeCompleted ? '':'not.'}have.css`, 'text-decoration-line', 'line-through')
    }

    validateTodoText(todoIndex, expectedtext){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedtext)
    }

    valiadteToggleSate(todoIndex, shouldBeToggled){
        const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
        label.should(`${shouldBeToggled ? '': 'not.' }be.checked`)
    }
}