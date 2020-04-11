///<reference types='cypress' />
import * as todo from "../../page-objects/todo-page-export-function";

describe('visula validation',() => {

    before(()=>{
        todo.navigate()
        //cy.visit('http://todomvc-app-for-testing.surge.sh/?different-title-color');
    })
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'TodoMVC App',
            testName: 'Applitool Eye with Cypress',
            browser: [ 
                { width: 800, height: 600, name: 'firefox' },
                { width: 800, height: 600, name: 'chrome'  },
                { deviceName: 'iPhone X', screenOrientation: 'landscape'}
            ],

        })
    })
    afterEach(() => {
        cy.eyesClose()
    })
    after(()=> { cy.wait(10000)})
    it('should look good', () => {
        cy.eyesCheckWindow('empty todo list')
        todo.addTodo('Clean room')
        todo.addTodo('Cypres')
        cy.eyesCheckWindow('two todo')
        todo.toggleTodo(0)
        cy.eyesCheckWindow('mark as completed')
    })
})