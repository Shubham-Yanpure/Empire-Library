console.log("hello");

// Constructor
function Book(name,author,genre){
    this.name = name;
    this.author = author;
    this.genre = genre;
}

// Display constructor
function Display(){

}

// Add methods to display prototypes
Display.prototype.add = function(book){
    console.log('helloo');
    let tableBody = document.getElementById("tableBody");

    let uiString = ` <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.genre}</td>
                    </tr> `

    tableBody.innerHTML =  tableBody.innerHTML + uiString;
}

Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function(book){
    if( (book.name.length<3) || (book.author.length<3) )
    {
        return false
    }else{
        return true
    }
}

Display.prototype.show = function(type,message){
    let msg = document.getElementById('msg');
    msg.innerHTML = `
                    <div class="alert alert-${type} alert-dismissible fade show" role="alert" style="width: 50%;">
                        <strong>Message:</strong>${message}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    `;
    setTimeout(function(){
        msg.innerHTML = '';
    },4000);
}

// Add a submit event listerners to library form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let genre;

    let actionadventure = document.getElementById('actionadventure');
    let comics = document.getElementById('comics');
    let scifi = document.getElementById('scifi');
    let historicalcultural = document.getElementById('historicalcultural');
    let other = document.getElementById('other');

    if(actionadventure.checked){
        genre = actionadventure.value;
    } else if (comics.checked){
        genre = comics.value;
    } else if (scifi.checked){
        genre = scifi.value;
    } else if (historicalcultural.checked){
        genre = historicalcultural.value;
    } else if (other.checked){
        genre = other.value;
    }

    let book = new Book(name,author,genre);
    console.log(book);

    let display = new Display();

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success',' Your book has been successfully added!');
    }else{
        display.show('danger',' Sorry! Your book cannot be added, Try again...');
    }
}