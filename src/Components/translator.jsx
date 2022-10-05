import "./translator.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Translate({text}) {

    

    const [inputText, setInputText] = useState(text);
    const [detectLanguageKey, setdetectedLanguageKey] = useState('');
    const [selectedLanguageKey, setLanguageKey] = useState('en')
    const [languagesList, setLanguagesList] = useState([])
    const [resultText, setResultText] = useState('');

    useEffect(() => {
        setInputText(text)
    }, [text])
    
    const getLanguageSource = () => {
        axios.post(`https://libretranslate.de/detect`, {
            q: inputText
        })
            .then((response) => {
                setdetectedLanguageKey(response.data[0].language)
                console.log("lan", response.data[0].language)
                let data = {
                    q : inputText,
                    source: detectLanguageKey ? detectLanguageKey : response.data[0].language,
                    target: selectedLanguageKey
                }
                axios.post(`https://libretranslate.de/translate`, data)
                .then((response) => {
                    setResultText(response.data.translatedText)
                })
            })
    }
    useEffect(() => {
        axios.get(`https://libretranslate.de/languages`)
            .then((response) => {
                console.log(response.data)
                setLanguagesList(response.data)
            }).catch((err)=> console.log(err))
    }, [])

    const languageKey = (selectedLanguage) => {
        setLanguageKey(selectedLanguage.target.value)
    }

    const translateText = () => {
        getLanguageSource();

        // let data = {
        //     q : inputText,
        //     source: detectLanguageKey,
        //     target: selectedLanguageKey
        // }
        // axios.post(`https://libretranslate.de/translate`, data)
        // .then((response) => {
        //     setResultText(response.data.translatedText)
        // })
    }

    return (
        <div>
            <div className="app-header">
                <h2 className="header">Translator</h2>
            </div>

            <div className='app-body'>
                <div>
                    <div>
                        
                        <p>Click on the Result text to add text in input box</p>
                        <textarea className="textarea"
                            placeholder='Type Text to Translate..'
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <select className="language-select" onChange={languageKey}>
                            <option>Please Select Language..</option>
                            {languagesList.map((language) => {
                                return (
                                    <option value={language.code}>
                                        {language.name}
                                    </option>
                                )
                            })}
                        </select>

                        <textarea className="textarea"
                            placeholder='Your Result Translation..'
                            value={resultText}
                        />
                        <div>
                            <button className="Button" onClick={translateText}> Translate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
