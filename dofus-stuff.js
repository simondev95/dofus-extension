(function() {
    'use strict';

    // Fonction pour créer vos équipements sur Dofus DB
    function createStuff(stuff) {
        var req = new XMLHttpRequest();
        req.open('POST', 'https://beta.dofusdb.fr/tools/stuff/creator', true);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send(toPostData(stuff));
    }

    // Fonction pour convertir l'objet Javascript en chaine de caractères pour la requête POST
    function toPostData(data) {
        var params = [];
        for (var key in data) {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        return params.join('&');
    }

    // Affichage pour créer votre équipement L'équipment est à titre d'exemple.
    $("body").append('<button id="create-equipment">Créer mon équipement</button>');
    $("#create-equipement").on("click", function() {
        var stuff = {
            "name": "Forgelance",
            "level": 200,
            "items": [
                {
                    "id": 16358, // Epée de Feu de L'Ombre +30
                    "amount": 1
                },
                {
                    "id": 16410, // Bouclier de Feu de L'Ombre +25
                    "amount": 1
                },
                {
                    "id": 17893, // Plaque de Maître Forgeron +30
                    "amount": 1
                },
                {
                    "id": 16411, // Lance de Feu de L'Ombre +25
                    "amount": 1
                },
                {
                    "id": 17900, // Cuisses de Feu de L'Ombre +25
                    "amount": 1
                },
                {
                    "id": 16408, // Gants de Fer +30
                    "amount": 1
                },
                {
                    "id": 17901, // Casque d'Élémentaliste +30
                    "amount": 1
                },
                {
                    "id": 16409, // Bâton de Feu de l'Élémentaliste +25
                    "amount": 1
                },
                {
                    "id": 16413, // Main de Foudre +25
                    "amount": 1
                },
                {
                    "id": 17899, // Anneau de L'Élémentaliste +30
                    "amount": 1
                },
                {
                    "id": 16414, // Bottes de Feu de l'Élémentaliste +30
                    "amount": 1
                }
            ]
        };
        createStuff(stuff);
    });
})();

    createStuff(stuff);
})();
```
