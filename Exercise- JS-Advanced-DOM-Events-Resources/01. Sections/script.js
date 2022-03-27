function create(words) {
   let parentlement = document.getElementById('content');

   for(word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(word); 

     
      p.appendChild(text);
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click',function(e) {
         p.style.display = 'block';
      })
   

      parentlement.appendChild(div);
   }

}