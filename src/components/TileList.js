import React from 'react'
import ContentWrapper from './ContentWrapper';
import styled from 'styled-components'

import { rem } from '../utils/mixins'

import Tile from './Tile';

const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;
  margin-top: ${rem(-60)};

  ${props => props.theme.mediaQueries.desktop} {
    margin-top: ${rem(-120)};
  }
`

const TileRow = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.theme.mediaQueries.desktop} {
    flex-direction: row;
  }
`

const TileList = ({tiles}) => {
  console.log({tiles})
  return (
    <StyledContentWrapper>
      {tiles.map((data => {
        return (
          <TileRow>
            {data.row.map((tileData) => <Tile tileData={tileData}/>)}
          </TileRow>
        )
      }))}
    </StyledContentWrapper>
  )
}

export default TileList