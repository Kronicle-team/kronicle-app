/***************************************************************************************
 *    Title: Saving Data
 *    Author: Firebase
 *    Date: 4 May 2022
 *    Availability: https://firebase.google.com/docs/database/admin/save-data (Accessed 4 April 2022)
 *
 ***************************************************************************************/

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const postBid = async (id, bid) => {
  try {
    await updateDoc(doc(db, "listing", id), {
      price: bid,
    });
  } catch (e) {
    console.log(e.message);
  }
};

const updateAvailability = async (id, status) => {
  try {
    await updateDoc(doc(db, "listing", id), {
      availability: status,
    });
  } catch (e) {
    console.log(e.message);
  }
};

export { postBid, updateAvailability };
