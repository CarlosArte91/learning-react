import Square from "./Square"

function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner ? 'Ganó' : 'Empate'
  const winnerClass = winner ? 'win' : ''
  const WinnerSquare = winner ? <Square>{winner}</Square> : null

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className={winnerClass}>
          {WinnerSquare}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

export default WinnerModal
