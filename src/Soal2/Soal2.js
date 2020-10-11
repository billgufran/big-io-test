import React from 'react';
import flowchart from './flowchart.png';

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
         <img src={flowchart} alt="Flowchart" width="900" className="block-center"/>
         <h2>Pseudocode</h2>
         <hr/>
         <pre>
            <code>
               {pseudocode}
            </code>
         </pre>
      </div>
   )
}
