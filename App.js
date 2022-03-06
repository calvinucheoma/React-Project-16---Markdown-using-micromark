import React, { useState } from 'react'
import {micromark} from 'micromark'

function App() {

  const [markdown, setMarkdown] = useState('## markdown preview');
  
  return (
 
      <main>

        <section className='markdown'>

          <textarea 
            className='input' 
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            >
            </textarea>

            <article className="result">
              
              {micromark (markdown)}
            </article>

        </section>

      </main>
  )
  
}

export default App
