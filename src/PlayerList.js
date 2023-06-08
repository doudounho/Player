import React from 'react'
import Player from './Player'
import { players } from './players'
const PlayerList = () => {
  return (
    <div>
      {
        players.map((player)=><Player name={player.name} equipe={player.equipe} numero={player.numero} nationalite={player.Nationalite} image={player.image
        } />)
      }
    </div>
  )
}

export default PlayerList