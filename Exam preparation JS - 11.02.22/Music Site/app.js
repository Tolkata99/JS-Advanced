window.addEventListener('load', solve);

function solve() {
    let buttonAdd = document.getElementById('add');

    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElement = document.getElementById('price');

    let tableInformation = document.getElementById('furniture-list');

    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();

        let model = modelElement.value;
        let descriptions = descriptionElement.value
        let year = Number(yearElement.value);
        let price = Number(priceElement.value);

        if (!model || !descriptions) {
            return;
        }

        if (year <= 0 || price <= 0) {
            return;
        }

        let rowElement = document.createElement('tr');

        let modelTDElement = document.createElement('td');
        let priceTdElement = document.createElement('td');
        let actionCellElement = document.createElement('td');

        modelTDElement.textContent = model;
        priceTdElement.textContent = price.toFixed(2);

        rowElement.appendChild(modelTDElement);
        rowElement.appendChild(priceTdElement);



        let buttonMoreInfo = document.createElement('button');
        let buttonBuyIt = document.createElement('button');

        buttonMoreInfo.textContent = 'More Info';
        buttonMoreInfo.classList.add('moreBtn')
        buttonBuyIt.textContent = 'Buy it';
        buttonBuyIt.classList.add('buyBtn')

        actionCellElement.appendChild(buttonMoreInfo);
        actionCellElement.appendChild(buttonBuyIt);

        rowElement.classList.add('info')
        rowElement.appendChild(actionCellElement);

        let hideInfoElement = document.createElement('tr');


        let yearTdElement = document.createElement('td');
        let discriptionTdElement = document.createElement('td');

        yearTdElement.textContent = `Year: ${year}`;
        discriptionTdElement.textContent = `Description: ${descriptions}`;
        discriptionTdElement.setAttribute('colspan', 3);

        hideInfoElement.appendChild(yearTdElement);
        hideInfoElement.appendChild(discriptionTdElement);

      //  hideInfoElement.style.display = 'none';
        hideInfoElement.classList.add('hide');

        tableInformation.appendChild(rowElement);
        tableInformation.appendChild(hideInfoElement);

        buttonMoreInfo.addEventListener('click', (e) => {
            let nowTextContent = e.currentTarget.textContent;
            if (nowTextContent === 'More Info') {

                e.currentTarget.textContent = 'Less Info';
                hideInfoElement.style.display = 'contents';
            } else {

                e.currentTarget.textContent = 'More Info';
                hideInfoElement.style.display = 'none';
            }

        });
       

        let totalPrice = document.querySelector('.total-price');

        buttonBuyIt.addEventListener('click', (e) => {
           let priceCurrent = Number(totalPrice.textContent);
           let total = priceCurrent + price;
           totalPrice.textContent = total.toFixed(2);
           
            rowElement.remove();
            hideInfoElement.remove();
        })
    });



}
