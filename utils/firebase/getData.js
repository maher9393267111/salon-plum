import { collection, getDocs, query } from "firebase/firestore";
import { deleteObject ,ref } from "firebase/storage";
import { db ,storage } from "./index";


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



export const handleDelete = async (blog) => {
    try {
      //setLoading(true);

      console.log("blog object CLICKEDDDDD", blog);

      await deleteDoc(doc(db, "blog", blog.id));

    //   blog.image.forEach(async (img) => {
        console.log("image is Name:🔷️🔶️🔷️🔶️ " + img);

        const desertRef = ref(storage, `images/${img?.name}`);
        await deleteObject(desertRef);
        //toast.success("Blog image Deleted  successfully");
    //   });

      console.log("Document successfully deleted!");
   //   toast.success("Blog deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error removing document: ", error);
    //  toast.error({ message: error });

    //  setLoading(false);
    }
  };




  // Delete Old image when Update 


  export const handleDeleteImage = async (img) => {
    try {
      //setLoading(true);

      console.log("blog object CLICKEDDDDD", img);

  

    
        console.log("image is Name:🔷️🔶️🔷️🔶️ " + img);

        const desertRef = ref(storage, `blog/${img?.name}`);
        await deleteObject(desertRef);
  

      console.log("Document successfully deleted!");

      
    } catch (error) {
      console.error("Error removing document: ", error);
    
    }
  };