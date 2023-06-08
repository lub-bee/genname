import { useState } from "react"

const useLocalization = (defaultLanguage) => {

    const [language, setLanguage] = useState(defaultLanguage)
    const languageFiles = {
        en: {
            "preset" : "Preset",
            "Name generated":"Name generated",
            "Order Alphabetically":"Order Alphabetically",
            "Regenerate":"Generate",
            "Copy to clipboard":"Copy to clipboard",
            "over":"over",
            "possible associations":"possible associations",
            "Copied":"Copied",
            "Settings":"Settings",
            "export":"export",
            "Import":"Import",
            "Start Particules":"Start Particules",
            "Junction Particules":"Junction Particules",
            "Enable the particules":"Enable the particules",
            "Core Particules":"Core Particules",
            "Min Repetitions":"Min Repetitions",
            "Max Repetitions":"Max Repetitions",
            "End Particules":"End Particules",
            "Number of name generated":"Number of name generated",
            "Help":"Help",
            "Close":"Close",
            "help_content_1":"To create quantity of name with a lot of possibilities of customization, the generator is divided in 4 particules (Start, Junction, Core, End). Those particules can be used in many different ways.",
            "help_content_2":"Here are the two mains :",
            "S_tart":"S",
            "s_TART":"tart",
            "J_unction":"J",
            "j_UNCTION":"unction",
            "C_ore":"C",
            "c_ORE":"ore",
            "E_nd":"E",
            "e_ND":"nd",
            "pros":"Pros : ",
            "cons":"Cons : ",
            "pro_1_1":"- Need less particules of each type to generate more various names",
            "pro_1_2":"- Can generate unexpected results",
            "pro_2_1":"- Better overall control on the results",
            "con_1_1":"- Can generate unreadable names",
            "con_2_1":"- Need bigger words dictionary to rise the number of combinations",
            "con_2_2":"- Results more predictable",
        },
        fr: {
            "preset" : "Préconfiguration",
            "Name generated":"Noms générés",
            "Order Alphabetically":"Organiser alphabetiquement",
            "Regenerate":"Générer",
            "Copy to clipboard":"Copier dans le presse-papier",
            "over":"sur",
            "possible associations":"associations possible",
            "Copied":"Copié",
            "Settings":"Options",
            "export":"exporter",
            "Import":"Importer",
            "Start Particules":"Particules de début",
            "Junction Particules":"Particules de jonction",
            "Enable the particules":"Activer ces particules",
            "Core Particules":"Particules centrales",
            "Min Repetitions":"Répétitions min",
            "Max Repetitions":"Répétitions max",
            "End Particules":"Particules de fin",
            "Number of name generated":"Nombre à générer",
            "Help":"Aide",
            "Close":"Fermer",
            "help_content_1":"Pour générer quantité de noms avec beaucoup d'options de customisation, le générateur utilise 4 particules : début, jonction, coeur, fin. Ces particules peuvent être utilisées de nombreuses manières",
            "help_content_2":"Voici les 2 methodes principales :",
            "S_tart":"D",
            "s_TART":"ébut",
            "J_unction":"J",
            "j_UNCTION":"onction",
            "C_ore":"C",
            "c_ORE":"oeur",
            "E_nd":"F",
            "e_ND":"in",
            "pros":"Points positifs : ",
            "cons":"Points Négatifs : ",
            "pro_1_1":"- Nécéssite des collections de particules moindre pour générer beaucoup plus de noms.",
            "pro_1_2":"- Génere des résultats improbable.",
            "pro_2_1":"- Meilleur controle sur les noms générés.",
            "con_1_1":"- Génère parfois des noms étranges, imprononcable ou illisible.",
            "con_2_1":"- Nécéssite des dictionnaires de mots énormes pour augmenter le nombre de combinaison.",
            "con_2_2":"- Résultats plus prévisible.",
            "":"",
        }
    }

    const getTranslation = (key) => {
        const languageFile = languageFiles[language]

        return languageFile[key] || key
    }

    const setLocal = (selectedLanguage) => {
        setLanguage(selectedLanguage)
    }

    const t = getTranslation

    return{
        language,
        getTranslation,
        setLocal,
        t
    }
}
export default useLocalization;