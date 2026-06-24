// ==UserScript==
// @name     Anonyme Script 365493
// @version  1
// @match    <all_urls>
// @grant    none
// ==/UserScript==
// ==UserScript==
// @name         createStuff
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Créer vos équipements sur Dofus DB
// @author       Simon-dev95
// @match        https://beta.dofusdb.fr/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Fonction pour extraire les données d'équipement à partir du code HTML
    function extractEquipmentData() {
        var name = $("input[name=name]").val();
        var level = parseInt($("select[name=level] option:selected").val());
        var items = [];
        $(".item-row").each(function() {
            var id = $(this).find(".item-id").text().trim();
            var amount = parseInt($(this).find(".quantity").text().trim());
            items.push({"id": id, "amount": amount});
        });
        return {name: name, level: level, items: items};
    }

    // Fonction pour convertir l'objet Javascript en chaine de caractères pour la requête POST
    function toPostData(data) {
        var params = [];
        for (var key in data) {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        return params.join('&');
    }

    // Fonction pour créer votre équipement sur Dofus DB
    function createEquipment() {
        var equipmentData = extractEquipmentData();
        var req = new XMLHttpRequest();
        req.open('POST', 'https://beta.dofusdb.fr/tools/stuff/creator', true);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send(toPostData(equipmentData));
    }

    // Affichage pour créer votre équipement
    $("body").append('<button id="create-equipment">Créer mon équipement</button>');
    $("#create-equipement").on("click", function() {
        createEquipment();
    });
})();

