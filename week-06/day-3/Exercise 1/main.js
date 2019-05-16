/* You can work in the html or in a separate js file. Like:
    <script>
      1. store the element that says 'The King' in the 'king' variable.
      console.log it.
      2. store 'The Businessman' and 'The Lamplighter'
      in the 'businessLamp' variable.
      console.log each of them.
      3. store 'The King' and 'The Conceited Man'
      in the 'conceitedKing' variable.
      alert them one by one.
      4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
      in the 'noBusiness' variable.
      console.log each of them.
    </script>
    OR
    <script src="queryselector-1.js"></script> */

    'use strict'

    const king=document.getElementById('b325');
    console.log('king')
    console.log(king);
    
    const businessLamp=document.getElementsByClassName('big')
    console.log('businessLamp')
    console.log(businessLamp)
    
    const conceitedKing=document.querySelectorAll('section div')
    console.log('conceitedKing')
    
    conceitedKing.forEach(e => alert(e.innerHTML))
    
    const noBusiness=document.getElementsByTagName('div')
    console.log('noBusiness')
    console.log(noBusiness)