const addTechButton = document.getElementById('add-tech');
const submitButton = document.getElementById('submit');
const tecnologiasContainer = document.getElementById('tecnologias-container');


function adicionarTecnologia() {
    const divTechGroup = document.createElement('div');

    
    const inputTech = document.createElement('input');
    inputTech.type = 'text';
    inputTech.placeholder = 'Nome da Tecnologia';


    const radioGroup = document.createElement('div');

    const radio1 = document.createElement('input');
    radio1.type = 'radio';
    radio1.name = 'experiencia' + tecnologiasContainer.children.length;
    radio1.value = '0-2 anos';
    const label1 = document.createElement('label');
    label1.textContent = '0-2 anos';
    
    const radio2 = document.createElement('input');
    radio2.type = 'radio';
    radio2.name = 'experiencia' + tecnologiasContainer.children.length;
    radio2.value = '3-4 anos';
    const label2 = document.createElement('label');
    label2.textContent = '3-4 anos';

    const radio3 = document.createElement('input');
    radio3.type = 'radio';
    radio3.name = 'experiencia' + tecnologiasContainer.children.length;
    radio3.value = '5+ anos';
    const label3 = document.createElement('label');
    label3.textContent = '5+ anos';

    radioGroup.appendChild(radio1);
    radioGroup.appendChild(label1);
    radioGroup.appendChild(radio2);
    radioGroup.appendChild(label2);
    radioGroup.appendChild(radio3);
    radioGroup.appendChild(label3)
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = function() {
        divTechGroup.remove();
    };

    divTechGroup.appendChild(inputTech);
    divTechGroup.appendChild(radioGroup);
    divTechGroup.appendChild(removeButton);

    tecnologiasContainer.appendChild(divTechGroup);
}


addTechButton.addEventListener('click', adicionarTecnologia);


submitButton.addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const tecnologias = [];
    

    const techGroups = tecnologiasContainer.children
    for (let i = 0; i < techGroups.length; i++) {
        const techGroup = techGroups[i]
        const techName = techGroup.querySelector('input[type="text"]').value
        const experiencia = techGroup.querySelector('input[type="radio"]:checked')?.value

        if (techName && experiencia) {
            tecnologias.push({ tecnologia: techName, experiencia })
        }
    }

    const desenvolvedor = {
        nome: nome,
        tecnologias: tecnologias
    };


    console.log(desenvolvedor)


    document.getElementById('nome').value = ''
    tecnologiasContainer.innerHTML = ''
});