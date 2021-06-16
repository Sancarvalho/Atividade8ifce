import React, {useState} from 'react'
import LogoDinheiro from './icons8-dinheiro-96.png'
import './Pesquisa.css'

export default function Pesquisa (props) {

    //estado
    const [texto, setTexto] = useState(0)
    const [cor, setCor] = useState(props.cor)
    const [coinA, setCoinA] = useState(props.moedaA)
    const [resultado, setResultado] = useState('')

    //funcoes
    const atualizarValor = (event) => {
        setTexto(event.target.value)
    }
    
    const converter = async () => {
        let url = "https://economia.awesomeapi.com.br/json/all/" + coinA + "-BRL"
        let result = await fetch(url)
        let dados = await result.json()
        setResultado( parseFloat(texto) * dados[coinA].bid )
    }

    return (
        <div className="div--main" style={{backgroundColor: cor}}>
            <img src={LogoDinheiro} />
            <h5>Conversão de {coinA + '-BRL'} </h5>
            <input type="text" placeholder="Digite o valor: " onChange={atualizarValor} />
            <button onClick={converter} >Converter</button>
            <p>{resultado}</p>
        </div>
    )
}