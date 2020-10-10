import React from 'react'

export default function Soal1() {
   return (
      <div id="Soal1" className="container">
         <form>
            <label htmlFor="Soal1--character-input">Input one character:</label>
            <input id="Soal1--character-input" type="text" maxlength="1"/>
            <button type="submit">Add</button>
         </form>
      </div>
   )
}
