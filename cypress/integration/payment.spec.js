
describe('payment', ()=>{
  it("user can make payment", ()=> {
       // Login
    cy.visit('/')
    cy.findByRole('textbox', {  name: /username/i}).type("johndoe");
    cy.findByLabelText(/password/i).type('s3cret');
    cy.findByRole('checkbox', { name: /remember me/i }).check();
    cy.findByRole('button', { name: /sign in/i }).click();

    // check account balance
    let oldBalance;
    cy.get('[data-test=sidenav-user-balance]').then($balance => oldBalance = $balance.text());

    // click on new button
    cy.findByRole('button', { name: /new/i }).click();

    // search for user
    cy.findByRole('textbox').type('devon becker');
    cy.findByText(/devon becker/i).click();

    //search for user
    //add amount and note

  });
})
