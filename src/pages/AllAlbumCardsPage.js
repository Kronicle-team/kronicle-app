import AllPageTemplate from "../components/AllPageTemplate";
import { db } from "../config/firebase"
import {collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react"

const AllAlbumCardsPage = () => {
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
            if (card.category === "album photocard" && card.availability !== "sold") temp.push(card)
        })
        return (
            <AllPageTemplate fetchedData={temp} title={"Album photocards"}/>
        )
    }
}


export default AllAlbumCardsPage