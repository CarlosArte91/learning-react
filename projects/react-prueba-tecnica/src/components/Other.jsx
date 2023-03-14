import { useCatImage } from '../hooks/useCatImage'

export function Other () {
  const { imageUrl } = useCatImage({ fact: 'Random fact' })

  return (
    <>
      {imageUrl && (
        <img
          style={{ width: '300px', height: 'auto' }}
          src={imageUrl}
          alt='Loading ramdon image'
        />
      )}
    </>
  )
}
