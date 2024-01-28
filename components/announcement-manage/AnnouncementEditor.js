import React, { useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';//这个库需要npm安装

export default function AnnouncementEditor(props) {
  const [editorState,setEditorState]=useState("")
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={(editorState)=>setEditorState(editorState)}
        
        onBlur={()=>{
            //console.log()
            
            props.getContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        }}
       />
    </div>
  )
}
