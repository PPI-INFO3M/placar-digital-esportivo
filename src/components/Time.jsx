function Time( { nome, pontos, setPontos, faltas, setFaltas, incrementar, decrementar, vencendo }) {
    return(
        <div className={vencendo ? "vencendo" : ""}>
            <h2>{nome}</h2>
            <p>Pontos: {pontos}</p>
            <p>Faltas: {faltas}</p>

            <p>Pontos</p>
            <button onClick={() => incrementar(pontos, setPontos, 1)}>+1</button>
            <button onClick={() => incrementar(pontos, setPontos, 2)}>+2</button>
            <button onClick={() => incrementar(pontos, setPontos, 3)}>+3</button>

            <p>Faltas</p>
            <button onClick={() => incrementar(faltas, setFaltas, 1)}>+1</button>
            <button onClick={() => decrementar(faltas, setFaltas, 1)}>-1</button>


        </div>
    )
}

export default Time