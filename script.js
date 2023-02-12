let dataForm = document.querySelector('#data-form');
let output = document.querySelector('#output');

dataForm.after(output);

dataForm.addEventListener('click', (event) => {
    event.preventDefault()

    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.data)
        let information = data.data
        information.map(info => {
            console.log(info)
            for (let inf in info) 
            console.log(inf)
            
            let idNation = `Nation ID: ${info['ID Nation']} `;
            let idNationElement = document.createElement('p')
            idNationElement.append(idNation);

            let nation = `Nation: ${info.Nation} `;
            let nationElement = document.createElement('p')
            nationElement.append(nation);

            let year = `Year: ${info.Year} `;
            let yearElement = document.createElement('p')
            yearElement.append(year);

            let population = `Population: ${info.Population} `;
            let populationElement = document.createElement('p')
            populationElement.append(population);

            output.append(idNationElement, nationElement, yearElement, populationElement)
        })
    })
})
