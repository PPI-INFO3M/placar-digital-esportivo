function NomeTimes({ nomeTime1, setNomeTime1, nomeTime2, setNomeTime2 }) {
    return(
        <label>
            Nome do time 1:
            <input 
            type="text"
            value={nomeTime1}
            onChange={(e) => setNomeTime1(e.target.value)} />
        </label>

        <label>
            Nome do time 2:
            <input 
            type="text"
            value={nomeTime2}
            onChange={(e) => setNomeTime2(e.target.value)} />
        </label>
    )
}

export default NomeTimes