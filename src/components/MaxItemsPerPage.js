import {useEffect, useState} from "react";


export default function MaxItemsPerPage (maxItemsPerPage, itemWidth, leftAndRightMargin, widthPercentage, row)  {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    })

    for (let i = maxItemsPerPage; i > 0; i--) {
        if ((itemWidth + leftAndRightMargin) * maxItemsPerPage >= (width * widthPercentage * row) && ((maxItemsPerPage - 1) !== 1)) {
            maxItemsPerPage -= row
            console.log(maxItemsPerPage)
        } else if (maxItemsPerPage - row <= 1 || maxItemsPerPage === 1) {
            maxItemsPerPage = 1
            console.log(maxItemsPerPage)
        } else break
    }
    return maxItemsPerPage
}
