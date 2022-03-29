import {useEffect, useState} from "react";


export default function MaxItemsPerPage (maxItemsPerPage, itemWidth, leftAndRightMargin)  {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    })

    for (let i = maxItemsPerPage; i > 0; i--) {
        if ((itemWidth + leftAndRightMargin) * maxItemsPerPage >= (width * 0.8)) {
            maxItemsPerPage --
        } else break
    }
    return maxItemsPerPage
}
