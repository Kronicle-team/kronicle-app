import AllPageTemplate from "../components/AllPageTemplate";
import { db } from "../config/firebase"
import {collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react"

const AllPage = () => {
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
        return (
            <AllPageTemplate fetchedData={listing} title={"All"}/>
        )
    }
}


export default AllPage