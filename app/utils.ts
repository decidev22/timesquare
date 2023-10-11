
export const itemsDivider = (items: string[]) => {
    let firstSelection = []
    let secondSelection = []
    let thirdSelection = []
    if (items?.length > 2 ) {
        for (let i= 0; i < items.length; i++) {
          if (i < Math.floor(items.length/3)) {
            firstSelection.push(items[i])
          }
          else if (i >= Math.ceil(items.length/3*2)) {
            thirdSelection.push(items[i])
          } else {
            secondSelection.push(items[i])
          }
        }
      }
      return [firstSelection, secondSelection, thirdSelection]
}