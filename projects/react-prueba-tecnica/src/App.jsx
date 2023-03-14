import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: 'auto', justifyContent: 'center', alignItems: 'center' }}>
      <h2>App de gatitos</h2>
      <button onClick={handleClick}>Get new cat</button>
      {fact && <p style={{ width: '60%' }}>{fact}</p>}
      {imageUrl && (
        <img
          style={{ width: '300px', height: 'auto' }}
          alt={`Image extracted usig this text ${fact}`}
          src={imageUrl}
        />
      )}
    </main>
  )
}

export default App
