import { useState } from 'react'
import FollowMouse from './FollowMouse'

function App () {
  const [mounted, setMounted] = useState(false)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted followMouse component
      </button>
    </main>
  )
}

export default App
