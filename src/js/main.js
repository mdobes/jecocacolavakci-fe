import { off } from 'process';
import '../scss/styles.scss'

window.onload = async (event) => {
    let offers = document.getElementById("offers");
    if(offers){
        const offerApi = await fetch('https://jecocacolavakci.cz/api');
        offers.replaceChildren();
        const offerList = await offerApi.json();
        
        for(const offer of offerList){
        
            const today = new Date(offer.valid_to);
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();
        
            offers.insertAdjacentHTML('beforeend', `<div class="col">
            <div class="card border-0 shadow rounded-3 crystal-bg">
                <div class="card-body">
                    <h2 class="card-title">${offer.shop}</h2>
                    <p class="mb-0">${(offer.quantity > 1) ? `${offer.quantity}x` : `` }${offer.unit_amount}${offer.unit} za <span class="text-bold">${offer.price_after} Kč</span> (1${offer.unit} za ${offer.price_per_unit} Kč)<br>Do ${dd}. ${mm}. ${yyyy}</p>
                </div>
            </div>
            </div>`);
        }
    }
};