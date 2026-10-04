import  { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
    const [code, setCode] = useState("print('Hello World')");

    const handleEditorChange = (value) => {
        setCode(value);
    };

    return (
        <div >
            <Editor
                height="300px"
                defaultLanguage="python"
                defaultValue={code}
                theme="vs-dark"
                onChange={handleEditorChange}
                options={{
                    fontSize: 10,
                    minimap: { enabled: false },
                }}
            />
        </div>
    );
};

export default CodeEditor;
