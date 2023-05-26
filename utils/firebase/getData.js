import { collection, getDocs, query } from "firebase/firestore";

import { db } from "./index";

export default async function getDocument(doc, criterions) {
    const q = query(collection(db, doc), criterions);
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
    
}


import { doc, getDoc, getFirestore } from "firebase/firestore";



export  async function getDocBySlug(collection, id) {
    let result = null;
    let error = null;

    try {
        const docRef = doc(db, collection, id);
        const data = await getDoc(docRef);
        return { ...data.data(), id: id };
    } catch (e) {
        error = e;
    }

    return { result, error };
}
