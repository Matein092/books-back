
 /**
 * This test have how objective update a element to the API
 */

/**
 * ARR: Arrange: Organized here are the items I need to run the tests
 */
 const baseURL = "http://localhost:8080/books";

 let bookToUpdate = {};
 
 //Correspond the element that it want add
const bookToSave = {
    id: "1333242356",
    name: "Soft Skills: The Software Developer's Life Manual",
    author: "John Sonmez",
  };
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
       bookToUpdate = result[position];
       cy.log("Book to put", bookToUpdate);
     });
 };



 //ASS: Assert

describe("Verify if it can create a element to the API", () => {
    beforeEach(() => {
      getBooks();
      bookToUpdate.name = "This is a test"
      bookToUpdate.author = "Hello, I am"
    });
    it("Allows verify if the reponds was 200 Ok and the element is update", () => {
      cy.request("PUT", `${baseURL}/${bookToUpdate.id}`,bookToUpdate).then((response) => {
        expect(response.status).to.eq(200);
        assert.isObject(response.body,"This element is object")
        expect(bookToUpdate.id).to.eq(response.body.id)
        expect(bookToUpdate.name).to.eq(response.body.name)
        expect(bookToUpdate.author).to.eq(response.body.author)

        cy.log(bookToUpdate);
      });
    });

   it("Checks what happens when a non-existing element needs to be updated. in this case the saved item", () => {
        cy.request("PUT", `${baseURL}/${bookToSave.id}`,bookToSave).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(bookToSave);
      });
    });

});










