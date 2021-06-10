import React from 'react'
import ContentWrapper from './ContentWrapper';
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { prepareTileListData, filterTileListData } from '../utils/data'

import Tile from './Tile';

const TileRow = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.theme.mediaQueries.tablet} {
    flex-direction: row;
  }

  a {
    flex: 1;
  }
`

const TileList = ({ className, maxLimit, displayOnlyWeMade }) => {
  const queryData = useStaticQuery(graphql`
    {
      allOurWorkJson {
        edges {
          node {
            slug
            title
            isExternal
            card {
              slug
              tag
              title
              client
              background
              alignment
              externalLink
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
  filteredTiles = filterTileListData(allTiles, maxLimit, displayOnlyWeMade)
  const tileListData = prepareTileListData(filteredTiles);
  
  return (
    <ContentWrapper className={className}>
      {tileListData.map(((data, index) => {
        return (
          <TileRow key={index}>
            {data.row.map((tileData) => {
              console.log({tileData})
              const { slug, externalLink } = tileData
              if (!externalLink) {
                return (
                  <Link to={`/our-work/${slug}`}>
                    <Tile tileData={tileData} key={tileData.id} displayOnlyWeMade />
                  </Link>
                )
              }
              return (
                <a href={externalLink} target="_blank">
                  <Tile tileData={tileData} key={tileData.id} displayOnlyWeMade />
                </a>
              )
            })}
          </TileRow>
        )
      }))}
    </ContentWrapper>
  )
}

export default TileList