import { useEffect, useState } from 'react'

function FollowMouse () {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  console.log('estoy en la funcion')

  const handleMove = (event) => {
    const { clientX, clientY } = event
    // console.log('handleMove', { clientX, clientY })
    setPosition({ x: clientX, y: clientY })
  }

  useEffect(() => {
    // console.log('Efecto', { enable })
    console.log('componente montado')

    // const handleMove = (event) => {
    //   const { clientX, clientY } = event
    //   console.log('handleMove', { clientX, clientY })
    // }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      console.log('componente desmontado')
    }
  }, [enable])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

export default FollowMouse
