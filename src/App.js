import React from 'react';
import './App.css';
import {useState} from 'react';
import ReactMarkdown from 'react-markdown'
import defaultMardown from './Components/defaultMarkdown';
import { marked } from 'marked';
import Markdown from 'react-markdown';

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMardown);
  return (
    <div className="App">
      <body className="App-body">
        <div className='editorWrap'>
          <div className="Toolbar">
            <h2>Editor</h2>
          </div>
          <textarea id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}>

          </textarea>
        </div>
        <div className="previewWrap">
          <div className="Toolbar">
            <h2>Previewer</h2>
          </div>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
