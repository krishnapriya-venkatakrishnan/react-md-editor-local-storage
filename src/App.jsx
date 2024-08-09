import React, { useEffect, useState } from "react";
import MDEditor from "./MDEditor";
import SideBar from "./SideBar";
import {nanoid} from "nanoid";
import Split from "react-split";

export default function App(){
    
    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("local-notes")) || [])
    const [currentNoteId, setCurrentNoteId] = useState(notes[0]?.id || "")
    const [isNoteDeleted, setIsNoteDeleted] = useState(false)

    useEffect(()=> {
        localStorage.setItem("local-notes", JSON.stringify(notes))
    }, [notes])

    useEffect(()=> {
        if (isNoteDeleted) {
            const firstId = JSON.parse(localStorage.getItem("local-notes"))
            firstId[0] ? setCurrentNoteId(firstId[0].id) : setCurrentNoteId("")
            setIsNoteDeleted(false)
        }
    }, [isNoteDeleted])

    function createNote(){
        const note = {
            id: nanoid(),
            body: "#Enter your text here"
        }
        setNotes(prevNotes => [note, ...prevNotes])
        setCurrentNoteId(note.id)
    }

    function updateNote(updNote){
        setNotes(prevNotes => {
            const newArray = []

            for (let i=0; i<prevNotes.length; i++){
                const note = prevNotes[i]
                if (note.id === currentNoteId) {
                    newArray.unshift({...note, body: updNote})
                } else {
                    newArray.push(note)
                }
            }

            return newArray
        })
    }

    function findCurrentNote(){
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function deleteNote(event, noteId){
        event.stopPropagation()
        const newArray = notes.filter(note => {
            return (note.id !== noteId) || ""
        })
        setNotes(newArray)
        setIsNoteDeleted(true)
    }

    return (
        <>
        {
        notes.length ?
        
        <Split 
        sizes = {[30, 70]}
        direction="horizontal"
        className="split-container"
        >
            <SideBar 
            notesList={notes}
            clickFn={setCurrentNoteId}
            currentNote={findCurrentNote()}
            newNoteFn={createNote}
            delNoteFn={deleteNote}/>
            <MDEditor 
            noteContent = {findCurrentNote()}
            noteChange = {updateNote}/>
        </Split>
        :
        <div className="no-notes-parent-div">
            <div className="no-notes-div">
                <h1>You have no notes</h1>
                <button onClick={createNote}>Create one now</button>
            </div>
        </div>
        }
        </>
    )
}