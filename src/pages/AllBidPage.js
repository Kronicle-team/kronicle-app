/***************************************************************************************
 *    Title: Get data with Cloud Firestore
 *    Author: Firebase
 *    Date: May 6, 2022
 *    Code version: <code version>
 *    Availability: https://firebase.google.com/docs/firestore/query-data/get-data
 *
 ***************************************************************************************/

import AllPageTemplate from "../components/AllPageTemplate";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const AllBidPage = () => {
  const listingRef = collection(db, "listing");
  const [listing, setListing] = useState([]);
  const fetchedData = () => {
    getDocs(listingRef).then((data) => {
      setListing(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };
  useEffect(() => {
    fetchedData();
  }, []);
  if (listing !== []) {
    let temp = [];
    listing.map((card) => {
      if (card.product_pricing === "bid now" && card.availability !== "sold")
        temp.push(card);
    });
    return <AllPageTemplate fetchedData={temp} title={"Bid now"} />;
  }
};
export default AllBidPage;
