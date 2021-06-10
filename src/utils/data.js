export const prepareTileListData = (workData) => {
  const tileListData = []
  let skipIndex = -1
  workData.forEach((work, index) => {
    if (skipIndex === index) {
      return
    }

    const { card } = work.node;
    if (card.alignment !== 'vertical') {
      tileListData.push({
        row: [card]
      })
    } else {
      skipIndex = index + 1;
      tileListData.push({
       row: [card, workData[index + 1].node.card]
      }) 
    }
  })
  return tileListData;
}

export const filterTileListData = (allTiles, maxLimit, displayOnlyWeMade) => {
  let filteredTiles = []
  if (displayOnlyWeMade) {
    filteredTiles = allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE MADE')
  } else {
    filteredTiles = allTiles;
  }

  return maxLimit ? filteredTiles.slice(0, maxLimit) : filteredTiles;
}