/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useMatchBreakpoints } from '@pancakeswap/uikit'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  margin: 0;
  // background-color: rgb(13 4 21);
`
const StyledTop = styled.div`
  // position: absolute;
  // top: calc(20% - 20px);
  // left: calc(63% - 20px);
  // background-color: #fff;
  // box-shadow:
  //   0 0 90px 45px #fff,
  //   0 0 150px 90px rgb(165,127,57),
  //   0 0 210px 150px rgb(238,206,111);
`
const StyledBottom = styled.div`
  // position: absolute;
  // top: calc(50%);
  // left: calc(40%);
  // background-color: #fff;
  // box-shadow:
  //   0 0 90px 45px #fff,
  //   0 0 150px 90px rgb(165,127,57),
  //   0 0 210px 150px rgb(238,206,111);
`

const DoubleGlowShadow: React.FC<{ className?: string }> = ({ children, className }) => {
  const { isDesktop, isMobile } = useMatchBreakpoints()
  if (isMobile) {
    return <div className="shadow-swap">{children}</div>
  }

  return (
    <StyledWrapper>
      <StyledTop />
      <StyledBottom />
      <div>{children}</div>
    </StyledWrapper>
  )
}

export default DoubleGlowShadow
