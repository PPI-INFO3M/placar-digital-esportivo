function NomeTimes({ nomeTime1, setNomeTime1, nomeTime2, setNomeTime2 }) {
    return(
        <div className="nomes">
            <label className="campo-nome"> Nome do time 1:
                <input
                className="input-nome"
                type="text"
                value={nomeTime1}
                onChange={(e) => setNomeTime1(e.target.value)} />
            </label>
            <label className="campo-nome">
                Nome do time 2:
                <input
                className="input-nome"
                type="text"
                value={nomeTime2}
                onChange={(e) => setNomeTime2(e.target.value)} />
            </label>
        </div>
    )
}

export default NomeTimes