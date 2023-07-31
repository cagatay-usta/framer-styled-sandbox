import React from 'react'
import styled from "styled-components"


const ErrorText = styled.div`
  display: flex;
  height: 100vh; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 2rem;
  font-weight: bold;

`

function NotFound() {
  return (
    <ErrorText> 
      <h1>404</h1> 
      <h1>Page Not Found</h1>
    </ErrorText>
  )
}

export default NotFound