import { useState } from "react"

const useLocalization = (defaultLanguage) => {

    const [language, setLanguage] = useState(defaultLanguage)
    const languageFiles = {
        en: {
            "preset" : "Preset",
            "Name generated":"Name generated",
            "Order Alphabetically":"Order Alphabetically",
            "Regenerate":"Regenerate",
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
            "":"",
            "":"",
            "":"",
            "":"",
            "":"",
        },
        fr: {
            "preset" : "Préconfiguration",
            "Name generated":"Noms générés",
            "Order Alphabetically":"Organiser alphabetiquement",
            "Regenerate":"Regénérer",
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
            "Min Repetitions":"Répétitions minimum",
            "Max Repetitions":"Répétitions maximum",
            "End Particules":"Particules de fin",
            "Number of name generated":"Nombre à générer",
            "":"",
            "":"",
            "":"",
            "":"",
        }
    }

    const getTranslation = (key) => {
        console.log(languageFiles, language, key)
        const languageFile = languageFiles[language]
        console.log(languageFile)

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