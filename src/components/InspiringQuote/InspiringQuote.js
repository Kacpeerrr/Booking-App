import { useState, useEffect, useLayoutEffect } from "react"

const quotes = [
"Podróże otwierają umysł.",
"Nie jesteśmy ludźmi, którzy tylko oddychają, jesteśmy ludźmi, którzy podróżują!",
"Najlepszą rzeczą w podróżowaniu jest spotkanie nowych ludzi i odkrywanie nowych miejsc.",
"Nie zbieraj rzeczy, zbieraj wspomnienia.",
"Życie jest krótkie, a świat jest szeroki. Podróżuj i doświadczaj.",
"Podróże to jedyne, co kupujesz, co cię bogaci."
]

const styles = {
    position: 'absolute',
    padding: '10px',
    top: '20px',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    fontStyle: 'italic'
}

function InspiringQuote(props) {

    const [quote, setQuote] = useState('Wczytywanie cytatów')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //pobieranie
        setLoading(false)
    })

    useLayoutEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }, [loading])

    return (
        <p style={styles}>{quote}</p>
    )
}

export default InspiringQuote