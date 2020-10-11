import React from 'react';
import flowchart from './flowchart.png';
import './Soal2.css';

export default function Soal2() {

   const pseudocode =
`
1     INPUT size
2
3     initialize rows <- (size * 2) - 1
4     initialize i <- size
5     initialize  j <- 1
6     initialize  k <- size - i
7
8     FOR k TO 0
9        print ' '
10    print '* '
11    FOR j to i
12       print '* '
13    IF rows <= 0
14       END program
15    ELSE IF rows <= size
16       increment i
17    ELSE
18       decrement i
19    decrement rows
20    print line break
21    JUMP to line 5
`

   return (
      <div id="Soal2" className="container">
         <h1>Pattern Print Algorithm</h1>
         <h2>Flowchart</h2>
         <hr/>
         <img src={flowchart} alt="Flowchart" width="100%" className="block-center"/>
         <h2>Description</h2>
         <hr/>
         <ol>
            <li>Ask for user with integer data type</li>
            <li>Accept user input and assign it to local variable named <code>size</code></li>
            <li>Initialize <code>rows = (size * 2) - 1</code> and <code>i = size</code></li>
            <li>Initialize <code>j = 1</code> and <code>k = size - 1</code></li>
            <li>While <code>k != 0</code>, keep printing white space (<code>' '</code>) and decrement <code>k</code> until <code>k == 0</code></li>
            <li>If <code>k == 0</code>, print asterisk and whitespace (<code>'* '</code>) and increment <code>j</code> while <code>j != i</code></li>
            <li>If <code>j == i</code>, check whether <code>rows &lt;= 0</code>. If yes, the program <b>ends here</b>. If no, continue to the next step</li>
            <li>Check whether <code>rows &lt;= size</code>. If yes, increment <code>i</code>. If no, decrement <code>i</code></li>
            <li>Decrement rows and print line break</li>
            <li>Repeat from step 4 until the program is ended</li>
         </ol>
         <h2>Pseudocode</h2>
         <hr/>
         <pre>
            <code id="pseudocode">
               {pseudocode}
            </code>
         </pre>
      </div>
   )
}
