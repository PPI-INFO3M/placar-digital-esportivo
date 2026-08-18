function Time( { nome, pontos, setPontos, faltas, setFaltas, incrementar, decrementar, vencendo }) {
    return(
        <div className={vencendo ? "time vencendo" : "time"}>
            <h2 className="time-nome">{nome}</h2>
            <p className="display display-pontos">Pontos: {pontos}</p>
            <p className="display display-faltas">Faltas: {faltas}</p>

            <p className="rotulo">Pontos</p>
            <div className="botoes">
                <button className="botao" onClick={() => incrementar(pontos, setPontos, 1)}>+1</button>
                <button className="botao" onClick={() => incrementar(pontos, setPontos, 2)}>+2</button>
                <button className="botao" onClick={() => incrementar(pontos, setPontos, 3)}>+3</button>
            </div>

            <p className="rotulo">Faltas</p>
            <div className="botoes">
                <button className="botao" onClick={() => incrementar(faltas, setFaltas, 1)}>+1</button>
                <button className="botao" onClick={() => decrementar(faltas, setFaltas, 1)}>-1</button>
            </div>


        </div>
    )
}

export default Time