import ResponsiveInnerWidth from "./ResponsiveInnerWidth";


export default function MaxItemsPerPage (maxItemsPerPage, itemWidth, leftAndRightMargin, widthPercentage, row)  {
    let width = ResponsiveInnerWidth()

    for (let i = maxItemsPerPage; i > 0; i--) {
        if ((itemWidth + leftAndRightMargin) * maxItemsPerPage >= (width * widthPercentage * row) && ((maxItemsPerPage - 1) !== 1)) {
            maxItemsPerPage -= row
            console.log(maxItemsPerPage)
        } else if ((itemWidth + leftAndRightMargin) * maxItemsPerPage >= (width * widthPercentage * row) && ((maxItemsPerPage - row) <= 1)) {
            maxItemsPerPage = 1
            console.log(maxItemsPerPage)
        } else break
    }
    return maxItemsPerPage
}
