function Book(id, isbn, title, author, publisher, type){
    this.id = id;
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.type = type;
}

$(function () {
    showBooks();
    var buttonEdit = $("#edit");
    buttonEdit.on("click" , function () {
        editBook();
    });



    function showBooks(){
        $.ajax({
            url: "/books/",
            data: {},
            type: "GET",
            dataType : "json",
            success: displayBooks,
        });
        function displayBooks(books){

            var list = $("#listBooks");
            list.empty();
            for (book of books){
                var elemList = $("<p style=\"border: solid black 1px\">");
                var pId = $("<p style=\"border: solid black 1px\">").append(book.id);
                var pIsbn = $("<p>").append(book.isbn);
                var pTitle = $("<p>").append(book.title);
                var pAuthor = $("<p>").append(book.author);
                var pPublisher = $("<p>").append(book.publisher);
                var pType = $("<p>").append(book.type);
                var deleteThis = $("<button>").data("id", book.id).text("Delete").on("click", function () {
                    var id = $(this).data("id");
                    console.log(id);
                    deleteBook(id);
                });
                var editThis = $("<button>").data("book", book).text("Edit").on("click", function () {

                    var book = $(this).data("book");
                    console.log(book);
                    $(".id").val(book.id);
                    $(".isbn").val(book.isbn);
                    $(".title").val(book.title);
                    $(".author").val(book.author);
                    $(".publisher").val(book.publisher);
                    $(".type").val(book.type);

                });

                elemList.append(pId).append(pIsbn).append(pTitle).append(pAuthor).append(pPublisher).append(pType).append(deleteThis).append(editThis);
                list.append(elemList);
            }
        }
    }
    var klick = $(".submit");
    klick.on("click", function (event) {

        var book = new Book(
            $(".id").val(),
            $(".isbn").val(),
            $(".title").val(),
            $(".author").val(),
            $(".publisher").val(),
            $(".type").val() );

        $.ajax({
            headers: {
                'Content-Type': 'application/json'
            },
            url: "/books/",
            data: JSON.stringify(
                book
            ),
            type: "POST",
            dataType : "json",
            success: showBooks,
            error: function( xhr, status,
                             errorThrown ) {},
            complete: function( xhr, status ){showBooks()}
        });
        event.preventDefault();
    });

    function deleteBook(id){
        $.ajax({
            url: "/books/"+id,
            data: {},
            type: "DELETE",
            contentType: 'application/json; charset=utf-8',
            dataType : "json",
            success: showBooks,
            complete: function( xhr, status ){showBooks()}
        });
    }

    function editBook() {
        var book = new Book(
            $(".id").val(),
            $(".isbn").val(),
            $(".title").val(),
            $(".author").val(),
            $(".publisher").val(),
            $(".type").val() );
        $.ajax({
            headers: {'Content-Type': 'application/json'},
            url: "http://localhost:8080/books/"+book.id,
            data: JSON.stringify(book), //funkcje ktora zwroci wartosc ksiazki
            type: "PUT",
            dataType : "json",
            success: showBooks,
            complete: function( xhr, status ){showBooks()}
        });
    }
});
