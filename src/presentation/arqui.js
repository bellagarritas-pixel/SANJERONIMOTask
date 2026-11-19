export function showArqui(container, navigate){

 container.innerHTML = `

        <div class="overflow-auto">Hola</div>
        <div class="overflow-hidden">Profe</div>
        <div class="overflow-visible">Aprendi</div>
        <div class="overflow-scroll">Mucho</div>
 `;
 container.addEventListener("click", (event) => {
    const link = event.target.closest("[data-view]");
    
    if (!link) return;

    event.preventDefault();

    navigate(link.dataset.view);
   
 });
}