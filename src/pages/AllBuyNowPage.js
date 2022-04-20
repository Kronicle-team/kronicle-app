import AllPageTemplate from "../components/AllPageTemplate";
import { db } from "../config/firebase"
import {collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react"

const AllBuyNowPage = () => {
    const listingRef = collection(db, "listing")
    const [listing, setListing] = useState([])
    const fetchedData = () => {
        getDocs(listingRef).then((data) => {
            setListing(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        })
    }
    useEffect(() => {
        fetchedData()
    }, [])
    if (listing !== []) {
        let temp = []
        listing.map((card) => {
            if (card.product_pricing === "buy now") temp.push(card)
        })
        return (
            <AllPageTemplate fetchedData={temp} title={"Buy Now"}/>
        )
    }
}


export default AllBuyNowPage