import React from 'react'
import ContentWrapper from './ContentWrapper';
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { prepareTileListData, filterTileListData } from '../utils/data'

import Tile from './Tile';

const TileRow = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.theme.mediaQueries.tablet} {
    flex-direction: row;
  }
`

const TileList = ({ className, maxLimit }) => {
  const queryData = useStaticQuery(graphql`
    {
      allOurWorkJson {
        edges {
          node {
            slug
            title
            card {
              slug
              tag
              title
              client
              background
              alignment
              url
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const allTiles = queryData.allOurWorkJson.edges
  let filteredTiles = []
  if (maxLimit) {
    filteredTiles = filterTileListData(allTiles, maxLimit)
  }

  const tileListData = prepareTileListData(maxLimit ? filteredTiles : allTiles);
  
  return (
    <ContentWrapper className={className}>
      {tileListData.map(((data, index) => {
        return (
          <TileRow key={index}>
            {data.row.map((tileData) => <Tile tileData={tileData} key={tileData.id} />)}
          </TileRow>
        )
      }))}
    </ContentWrapper>
  )
}

export default TileList