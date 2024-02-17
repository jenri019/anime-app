import React from 'react'
import { CharacterHeader } from './CharacterHeader'
import { CharacterList } from './CharacterList'

export const CharacterListContainer = () => {
  return (
    <div>
      <CharacterHeader />
      <CharacterList />
    </div>
  )
}
