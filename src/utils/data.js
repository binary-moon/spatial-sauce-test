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