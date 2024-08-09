import React from "react";

export default function SideBar(props){
    
    const notesIndex = props.notesList.map(note => {
        return (
            <div key={note.id} 
            className={props.currentNote.id === note.id ? "highlight" : ""}
            onClick={() => props.clickFn(note.id)}
            >
                <h2 className="note-title">{note.body.split("\n")[0]}</h2>

                <button className="del-btn"
                onClick={() => props.delNoteFn(event, note.id)}>-</button>

            </div>
        )
    })

    return (
        <div className="sidebar-container">
            <div className="top">
                <h1 className="title">Notes</h1>
                <button className="new-btn"
                onClick={() => props.newNoteFn()}>+</button>
            </div>
            <div className="note-title-container">
                {notesIndex}
            </div>
        </div>
    )
}