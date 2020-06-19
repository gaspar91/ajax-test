// The very first thing that we do is to create a new instance of the XMLHttpRequest object.

var xhr = new XMLHttpRequest(); 

// XML stands for Extensible Markup Language, 
// which is similar to HTML in the way it structures its data, and it's a precursor to JSON.


// Then we have the xhr.open() method, and the first argument that we parse in is "GET".
// The second argument is the URL that we want to retrieve.
// So, in this case, it's "https://ci-swapi.herokuapp.com/api/".
// We're making a request to the Star Wars API.

xhr.open("GET","https://ci-swapi.herokuapp.com/api/");

// Now there are several different methods that we can use to communicate with a web server.
// The two that you're going to use most often are GET and POST.
// The GET method is used when we're retrieving data from the server.
// This is a standard one that a browser users when retrieving a web page.
// POST is used when we're sending data to the server, such as an uploaded file or form data.
// Since in this instance we want to retrieve data from the Star Wars API, then we're going to use the GET method.


// And then we do xhr.send() to send the request.

xhr.send();

// The main chunk of what's going on in this piece of code is in this onreadystatechange() function.
// The xhr object maintains an internal state as it's completing various parts of our request operation.
// And "readyState = 4" means that the operation has been completed.

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("data").innerHTML = this.responseText;
  }
};