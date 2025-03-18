'use client'
import React, { useRef } from 'react'
import JoditEditor from 'jodit-react';

const FormEditor = ({ contents, setContents }) => {
    const editor = useRef(null);
    const config = {
        theme: 'custom',
        height: 500,
      };

    return (
        <JoditEditor config={config} ref={editor} value={contents} tabIndex={1} onBlur={newContent => setContents(newContent)} className="jodit-editor-custom" />
    )
}
export default FormEditor