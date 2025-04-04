const objetoAnimais = {
    "animais": [
        {
            "id": 1,
            "nome": "Leão",
            "tipo": "Mamífero",
            "habitat": "Savana"
        },
        {
            "id": 2,
            "nome": "Pinguim",
            "tipo": "Ave",
            "habitat": "Pólo Sul"
        },
        {
            "id": 3,
            "nome": "Cobra",
            "tipo": "Réptil",
            "habitat": "Floresta Tropical"
        }
    ]
};

const novoAnimal = {
    "id": 4,
    "nome": "Elefante",
    "tipo": "Mamífero",
    "habitat": "Savana"
};
objetoAnimais.animais.push(novoAnimal);

const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2);
if (animalParaModificar) {
    animalParaModificar.habitat = "Oceano Antártico";  
}

const indiceAnimalParaRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalParaRemover !== -1) {
    objetoAnimais.animais.splice(indiceAnimalParaRemover, 1);
}

const novaStingJsonAnimais = JSON.stringify(objetoAnimais);

console.log("Objeto JavaScript Resultante das Operações:");
console.log(objetoAnimais);