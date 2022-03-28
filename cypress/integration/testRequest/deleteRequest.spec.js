/**
 * This test have how objective delete a element to the API
 */

/**
 * ARR: Arrange: Organized here are the items I need to run the tests
 */
 const baseURL = "http://localhost:8080/books";

 let bookToDelete = {};
 
 /**
  * ACT: Act :
  * Here the methods or functions that you want to test are called,
  * in other words the behaviors of the application are called
  */
 
 // syntax: cy.request(method, url, body)
 const getBooks = () => {
   let position = 0;
   cy.request("GET", `${baseURL}`)
     .its("body")
     .then((result) => {
       position = Math.floor(Math.random() * result.length);
       bookToDelete = result[position];
       console.log(bookToDelete);
       cy.log("Book to delete", bookToDelete);
     });
 };
 
 //ASS: Assert
 
 describe("Verify if it can delete an element to the API", () => {
   beforeEach(() => {
     getBooks();
   });
   it("Check if the responses were 200 ok and the item is deleted", () => {
     cy.request("DELETE", `${baseURL}/${bookToDelete.id}`).then((response) => {
       expect(response.status).to.eq(200);
       cy.log(bookToDelete);
     });
   });
 
   it("check what happens when you try to delete a non-existing element", () => {
     cy.request({
       method: "DELETE",
       url: `${baseURL}` + "/" + 121212121212,
       failOnStatusCode: false,
     }).then((response) => {
       expect(404).to.eq(response.status);
       assert.notEqual(response.status, "200");
       expect(response.body.error).to.eq("NOT FOUND");
     });
   });
 });
 