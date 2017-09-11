# modalFileUP-js
A simple light box modal for uploading files to the server :) Forget the boring native file INPUT in HTML. 

Have you ever wished you had a more fancy way to upload files to the server using the HTML form ? 
The standard HTML file Input doesnt look attractive, giving it a light touch could make a big difference. 
A project i worked on recenly required that i came up with something nicer than the native HTML upload. 
In my best bet, i created a file upload in a jquery lightbox modal. 

The whole package consists of 4 files. File-upload.js , Modal.Css , Modal.js and test.html 
The test.html file has two different buttons. For testing purposes click on the button towards the extreme right, with the label choose file. That is the native HTML file upload button. To see the difference, you can now click on the first button labelled Trigger. It would pop up an upload dialogue. Click on the green area to upload a file(s). If the file is single, the name would be written below the green icon. Because some files have very lengthy names, there is a limit to the string length. If the file name is longer than the width of the label , it would be truncated. This does not mean the file has not been selected for upload. 
In cases where you have more than a single file selected for upload, the total number of files selected would be listed below the green upload icon. 

The submit button is the actual button that would send the file(s) to the server. Please customize the code to suit your project. Play with it. 

The test.html has been included for testing purposes. Read the code in that file and adopt it for your project. 

#How to Install 
Download the ZIP file and extract to a directory of choice. I would advice you seprate it from the project directory until you can integrate it into your existing project. 

Customize the code for integration, include it in your project, make it work and thank me later.... :) 
#Happy coding @DirtyScreen 
