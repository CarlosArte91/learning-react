import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    id: 1,
    userName: 'kikobeats',
    name: 'Kiko Beats',
    isFollowing: true,
  },
  {
    id: 2,
    userName: 'CarlosArteCruz',
    name: 'Carlos Arturo Cruz',
    isFollowing: true,
  },
  {
    id: 3,
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false,
  },
  {
    id: 4,
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false,
  }
]

export function App() {
  return (
    <section className='App'>
      {users.map(({ id, userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={id}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
