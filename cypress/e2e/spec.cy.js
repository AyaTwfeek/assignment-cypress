
import PageInteractions from '../utilities/page-interactions.js';

let page = new PageInteractions();
 
describe('Testing Math Operations', function() {
 before(function() {
   cy.fixture('numbers.json').as('numbers');
   cy.fixture('operators.json').as('operators');
   cy.fixture('result-screen.json').as('resultScreen');
   cy.visit('https://www.webcargonet.com/qa-calc/');
 });

 describe('Test Multiply', function() {
   it('multiplaying 2 by 2 should equal 4', function() {
    let buttonTwo = page.getElement(this.numbers.numberTwo)
    let multiplayButton = page.getElement(this.operators.multiplay)
    let equalButton = page.getElement(this.operators.equal)
    let resultScreenText = cy.get(this.resultScreen.screen)

    buttonTwo.click()
    multiplayButton.click()
    buttonTwo.click()
    equalButton.click()
    resultScreenText.invoke("text").should("eq", "4");

   });
 });
});
