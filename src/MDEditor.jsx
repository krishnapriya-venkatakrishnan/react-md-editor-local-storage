import React, {useState} from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";

export default function MDEditor(props){
    
    const [selectedTab, setSelectedTab] = useState("write")
    
    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })
    

    return (
        <>
        <ReactMde
        value = {props.noteContent.body}
        onChange = {props.noteChange}
        selectedTab= {selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
        minEditorHeight={80}
        heightUnits="vh"
        />
        </>
    )
}