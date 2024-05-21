/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'
import DoubleGlowShadow from 'components/DoubleGlowShadow'

export const BodyWrapper = styled(Card)`
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  z-index: 1;
  background: none;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
