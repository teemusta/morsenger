import React, { useEffect, useState } from 'react'

const morseTable: Record<string, string> = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '!': '-.-.--',
    '-': '-....-',
    '/': '-..-.',
    '@': '.--.-.',
    '(': '-.--.',
    ')': '-.--.-',
}

const translateMorseToChar = (morseText: any) => {
    if (!morseText.length) {
        return ''
    }
    return morseTable[morseText] || 'no match'
}

const translateCharToMorse = (translatedText: any) => {
    console.log('translateCharToMorse')
}

// interface TranscriberProps {
//     morseText: any
// }

const Transcriber: React.FC = () => {
    const [morseText, setMorseText] = useState<string | null>('')
    const [translatedText, setTranslatedText] = useState<string | null>(null)
    const [buttonPressStartTime, setButtonPressStartTime] = useState(0)
    const [translation, setTranslation] = useState<string | string>('')
    useEffect(() => {
        setTranslation(translateMorseToChar(morseText))
    }, [morseText])

    const onButtonDown = () => {
        setButtonPressStartTime(Date.now())
    }

    const onTranslateToChar = () => {
        setTranslatedText(morseText)
    }

    const onButtonUp = () => {
        const startDT = buttonPressStartTime
        if (!startDT) {
            return
        }
        const endDT = Date.now()
        const char = endDT - startDT > 300 ? '-' : '.'

        setMorseText(morseText + char)
    }

    const onWipeWriting = () => {
        setMorseText('')
    }

    console.log(morseText)
    console.log(translation)

    return (
        <>
            <h1>Morsenger</h1>

            <div>
                <div>Morse: {morseText}</div>
                <div>Prediction: {translation}</div>
                <div>Text: {translatedText}</div>
            </div>
            <div>-</div>
            <div>
                <button onMouseDown={onButtonDown} onMouseUp={onButtonUp}>
                    Tap here to morse
                </button>
                <div>-</div>
                <button onClick={onWipeWriting}>reset writing</button>
                <div>-</div>

                <button onClick={onTranslateToChar}>Translate to character</button>
                <div>-</div>

                <button onClick={translateCharToMorse}>Translate to morse</button>
            </div>
        </>
    )
}

export default Transcriber
