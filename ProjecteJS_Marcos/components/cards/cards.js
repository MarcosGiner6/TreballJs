export {CardTemplate};

function CardTemplate() {
  
let cardTemplate=document.createElement('div');
cardTemplate.classList.add('card');
cardTemplate.innerHTML= `
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
`
return cardTemplate;
}
