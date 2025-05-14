import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import axios from 'axios'
import Markdown from 'react-markdown'
import './App.css'


function App() {

  useEffect(() => {
    prism.highlightAll()
  })

  const [code, setCode] = useState("")
  const [review, setReview] = useState("")

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira-code", "Fira-mono", monospace',
                fontSize: 12,
                border: '1px solid #ddd',
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="button">Review</div>
        </div>
        <div className="right">
          <Markdown>
            {review}
          </Markdown>
        </div>
      </main>
    </>
  )
}

export default App
