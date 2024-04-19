'use client'

import { Box, Typography, styled, Button } from '@mui/material'
import React, { useState } from 'react'
import MenuButton from './game-button'
import { Colors } from '../theme/colors'
import { count } from 'console'

const MainMenuFrame = styled(Box, {
    name: 'MainMenuFrameComponent',
    slot: "Root"
})(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 8px',
    background: `radial-gradient(circle, rgba(0,0,0,0.2) 10%,
    rgba(0,0,0,1)), url("images/main-menu-bg.webp")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    gap: 4,
    boxShadow: `2px 2px 16px 2px ${Colors.secondary}`
}))

function MainMenu() {
  const [selection, setSelection] = useState<string | undefined>()
  const [counter, setCounter] = useState(0)

  const handleButtonClick = (param: string) => {
    setSelection(param)
  }

  const handleIncrementCount = () => {
    setCounter(counter + 1)
  }
  const handleDecrementCount = async () => {
    setCounter((prev) => prev - 1)
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Box>{counter}</Box>
      <Button onClick={handleIncrementCount}>+</Button>
      <Button onClick={handleDecrementCount}>-</Button>
      <Typography variant='h3' textTransform='uppercase'>{selection}</Typography>
        <MainMenuFrame>
            <MenuButton title='new game' onButtonClick={handleButtonClick} />
            <MenuButton title='continue' onButtonClick={handleButtonClick} />
            <MenuButton title='options' onButtonClick={handleButtonClick} />
            <MenuButton title='quit' onButtonClick={handleButtonClick} />
        </MainMenuFrame>
    </Box>
  )
}

export default MainMenu