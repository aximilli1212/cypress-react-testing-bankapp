
describe('payment', ()=>{
  it("user can make payment", ()=> {
       // Login
    cy.visit('/')
    cy.findByRole('textbox', {  name: /username/i}).type("johndoe");
    cy.findByLabelText(/password/i).type('s3cret');
    cy.findByRole('checkbox', { name: /remember me/i }).check();
    cy.findByRole('button', { name: /sign in/i }).click();

    //Check accout balance
    //click on pay button
    //search for user
    //add amount and note

  });
})
