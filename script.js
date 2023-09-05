 const myLibrary = [];

        function book(title, author, pages, readStatus) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.readStatus = readStatus;
        }

        function addBookToLibrary(book) {
            myLibrary.push(book);
        }

        const hobbit = new book('The Hobbit', 'Someone', 256, 'Yes');
        const harryPotter = new book('Harry Potter', 'J.K. Rowling', 345, 'No');
        const box = document.querySelector('.box-main');

        addBookToLibrary(hobbit);
        addBookToLibrary(harryPotter);

        function createBookCard(book) {
            const div = document.createElement('div');
            div.classList.add('card');

            const bookTitle = document.createElement('div');
            bookTitle.className = 'book-title';
            bookTitle.textContent = book.title;

            const bookAuthor = document.createElement('div');
            bookAuthor.className = 'book-author';
            bookAuthor.textContent = 'Author: ' + book.author;

            const bookPages = document.createElement('div');
            bookPages.className = 'book-pages';
            bookPages.textContent = 'Pages: ' + book.pages;

            const readStatus = document.createElement('div');
            readStatus.className = 'book-status';
            readStatus.textContent = 'Read: ' + book.readStatus;

            div.appendChild(bookTitle);
            div.appendChild(bookAuthor);
            div.appendChild(bookPages);
            div.appendChild(readStatus);

            return div;
        }

        // Display existing library books
        myLibrary.forEach(book => {
            const bookCard = createBookCard(book);
            box.appendChild(bookCard);
        });

        console.log(myLibrary[0]);
        console.log(myLibrary[1]);

        // Get references to the elements
        const showDialogButton = document.getElementById("showDialog");
        const favDialog = document.getElementById("favDialog");
        const cancelButton = document.getElementById("cancelBtn");
        const confirmButton = document.getElementById("confirmBtn");
        const output = document.querySelector("output");
        const bookNameInput = document.getElementById("book_name");
        const bookAuthorInput = document.getElementById("book_author");
        const bookPagesInput = document.getElementById("book_pages");
        const readStatusYesInput = document.getElementById("read_status_yes");
        const readStatusNoInput = document.getElementById("read_status_no");

        // Event listener for the "Show the dialog" button
        showDialogButton.addEventListener("click", () => {
            // Clear previous input values
            bookNameInput.value = "";
            bookAuthorInput.value = "";
            bookPagesInput.value = "";
            readStatusYesInput.checked = false;
            readStatusNoInput.checked = false;

            // Show the dialog
            favDialog.showModal();
        });

        // Event listener for the "Cancel" button
        cancelButton.addEventListener("click", () => {
            // Close the dialog
            favDialog.close();
        });

        // Event listener for the form submission
        myForm.addEventListener("submit", (event) => {
            // Prevent the default form submission behavior
            event.preventDefault();
        
            // Get input values
            const bookName = bookNameInput.value;
            const bookAuthor = bookAuthorInput.value;
            const bookPages = bookPagesInput.value;
            const readStatus = readStatusYesInput.checked ? "Yes" : "No";
        
            // Create a new book object
            const newBook = new book(bookName, bookAuthor, bookPages, readStatus);
        
            // Add the new book to your library
            addBookToLibrary(newBook);
        
            // Create a book card for the new book and append it to the box
            const bookCard = createBookCard(newBook);
            box.appendChild(bookCard);
        
            // Close the dialog
            favDialog.close();
        });