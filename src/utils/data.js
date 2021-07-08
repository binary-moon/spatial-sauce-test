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

export const filterTileListData = (allTiles, displayOnlyWeMade, maxLimit, randomize) => {
  let weMadeTiles = []
  let weExpoloredTiles = []
  let weLoveTiles = []
  let weSaidTiles = []

  if (!displayOnlyWeMade) {
    weMadeTiles = allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE MADE').filter(item => item.node.card.isFeatured)
    weMadeTiles = randomize ? shuffle(weMadeTiles) : weMadeTiles
    let weMadeTiles1 = weMadeTiles.slice(0, 2)
    let weMadeTiles2 = weMadeTiles.slice(2, 4)

    weExpoloredTiles = allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE EXPLORED')
    weExpoloredTiles = randomize ? shuffle(weExpoloredTiles) : weExpoloredTiles
    weExpoloredTiles = weExpoloredTiles.slice(0, 1)

    weLoveTiles = allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE LOVE')
    weLoveTiles = randomize ? shuffle(weLoveTiles) : weLoveTiles
    weLoveTiles = weLoveTiles.slice(0, 1)

    weSaidTiles = allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE SAID')
    weSaidTiles = randomize ? shuffle(weSaidTiles) : weSaidTiles
    weSaidTiles = weSaidTiles.slice(0, 1)

    return [...weMadeTiles1, ...weExpoloredTiles, ...weLoveTiles, ...weSaidTiles, ...weMadeTiles2]
  } else {
    if (maxLimit) {
      weMadeTiles = shuffle(allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE MADE')).slice(0, maxLimit)
    } else {
      weMadeTiles = allTiles.filter(item => item.node.card.tag.toUpperCase() === 'WE MADE')
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