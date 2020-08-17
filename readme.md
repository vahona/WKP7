### Generality of the weekend project.


## 1. In a few sentences,  explain the structure of your project.

   - First I creat an object
   - Grabing some element which I might I need
   - Creating function to generate to load the book and creating html
   - Create an empty array
   - Fuction to generate the new book and grabing some element which icluding the new book
   - Add event listener to the form
   - Creat function for deleting the book, which is does not working. 

## 2. If you had more time, what area of your project would you improve?

   - If I had more time, I would probably debage my code in adding book which is strange because it add 2 books at the same time when I add the second book
   - To make my code responsive
   - Then I would look for the causing error in my code, "preventDefault not found";

## 3. Did you learn anything new while working on this project?

   - This is the time that I fully confident to use map methode which I did not understand before.

## 4. What was the most challenging part for you?

   - To use the right methode in one event.
   - To fully understand what the real requirement.


## 5. Would you like a new explanation about a specific topic?

   - Could you please explain more about filter, reduce if it is possible.
   - Also could you please explain more about "dispatchEvent" if it is possible.

## 6. Any other comments?

   - When we did small exercise about map, filter, reduce ..., It seems clear but when it comes to the big project I don't know when I should use them.





# WKP7 - Library

### Hey team!

Hope you are ready for a new challenge. I have a nice one for you this week. We're going to build a library management application. The application will consist on a form to add a book, and a table listing all the books. After submitting the form, the new book will appear on the book table.

### Here is the mockup of our library app.

![assets/wkp7-library.png](assets/wkp7-library.png)

[You can also access the design through figma.](https://www.figma.com/file/FoD2jZb5oOGZvTUMop0nbA/WKP7?node-id=1%3A2)

### A book needs those attributes :

-   A title
-   An author
-   A genre (Mystery, Thriller, Fiction, Non-fiction, Fantasy, Design, Memoirs...)
-   A number of pages
-   A status (Read or not)

### Requirements :

-   When users load the app for the first time, a list of 3 books minimum should already be present on the list. The list will always be generated dynamically with some state in the javascript.
-   Users should be able to change the read attribute status by clicking the checkbox (and the changes will be reflected in the app state)
-   Users should be able to delete a book from the list by clicking the trash icon (and reflect that in the app state as well)
-   When a user come back to the app with the same browser, they should see the same book list as it was, before they left the app. Save the current book list to your browser's _Local Storage_.

### Tips :

-   Focus on the features first, and if you have some time left, try to replicate this design.
-   Start by choosing the book data structure, and create a few of them in the code.
-   Focus on your basic app functionality first, and then try to save the state of your app to _Local Storage_.
-   I suggest you to look back to the Shopping List exercise we did together (Video 57). There is a lot of similarities between the exercise and this project 😉

### Good luck team 🙌
