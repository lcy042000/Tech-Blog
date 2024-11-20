'use client'

import React from 'react'
import styled from 'styled-components'

const Contailner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  font-size: x-large;
`

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return <Contailner>My Page!</Contailner>
}
