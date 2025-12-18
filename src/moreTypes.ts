let response: any = "42";

let numericlen: number = (response as string).length

// forcefully assinging the data type using "as" keyword
// lets take one more example

type Book = {
    name : string;
}

let bookString = '{"name": "The lost of us"}';
let bookObj = JSON.parse(bookString) as Book;

console.log(bookObj.name);

// this is called type assertion

