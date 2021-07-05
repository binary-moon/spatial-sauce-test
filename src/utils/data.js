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

export const filterTileListData = (allTiles, displayOnlyWeMade, maxLimit) => {
  let weMadeTiles = []
  let weExpoloredTiles = []
  let weLoveTiles = []
  let weSaidTiles = []

  if (!displayOnlyWeMade) {
    weMadeTiles = shuffle(allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE MADE').filter(item => item.node.card.isFeatured)).slice(0, 4)
    weExpoloredTiles = shuffle(allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE EXPLORED')).slice(0, 1)
    weLoveTiles = shuffle(allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE LOVE')).slice(0, 1)
    weSaidTiles = shuffle(allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE SAID')).slice(0, 1)

    return [...weMadeTiles, ...weExpoloredTiles, ...weLoveTiles, ...weSaidTiles]
  } else {
    if (maxLimit) {
      weMadeTiles = shuffle(allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE MADE')).slice(0, maxLimit)
    } else {
      weMadeTiles = shuffle(allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE MADE'))
    }

    return weMadeTiles;
  }
}

const shuffle = (array) => {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}