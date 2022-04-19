import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase"

const postBid = async (id, bid) => {
  try {
    await updateDoc(doc(db, "listing", id), {
      price: bid
    });
  } catch (e) {
    console.log(e.message)
  }
}

export {postBid}