## React- Mardown editor

### Overview
An online markdown editor application, created using "react-mde". The user can create, modify, and delete a note.

### Tree View
Displayed using ReacTree

![Tree](https://github.com/user-attachments/assets/b4784b18-d1ec-4fa0-903a-1e8ea0186a42)

### Components and its usage
- App: This component handles the notes storage. When the application is loaded, the notes stored in local storage are displayed. Handles split screen, implemented
  using "react-split".
- SideBar: This is displayed on the left side of the page. This displays the list of notes- each holding the title of the note. Title of the note is formed using
  the first line of the note content. The selected note is highlighted. The newly create/ modified note is displayed on top. Each note instance is provided with a
  delete icon, when clicked the respective note is deleted from the list.
- MDEditor: Using "react-mde" and "showdown", MD editor is created. The value of the selected note and the respective onChange function is called. It handles the
  display of write/ preview tab.

### Concepts used
- "react-split": Used to create a split screen using Split component.
- "react-mde", "showdown": Markdown editor is created.
- Hooks: useState, useEffect.
- Each note is identified by the ID. Using the ID, the note is updated/ deleted.

### Live Demo
(https://scrimba-krishna-v-react-mde-ls.netlify.app/)
