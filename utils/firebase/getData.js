import { collection, getDocs, query ,doc, getDoc, getFirestore  } from "firebase/firestore";
import { deleteObject ,ref  ,deleteDoc} from "firebase/storage";
import { storage ,db } from "./index";


export default async function getDocument(doc, criterions) {
    const q = query(collection(db, doc), criterions);
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
    
}




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





export const handleDelete = async(blog) => {
    try {
      //setLoading(true);

      console.log("blog object CLICKEDDDDD", blog?.id);

      await deleteDoc(doc(db, "blog", blog.id));

    //   blog.image.forEach(async (img) => {
        console.log("image is Name:🔷️🔶️🔷️🔶️ " );

        const desertRef = ref(storage, `blog/${blog?.image?.name}`);
        await deleteObject(desertRef);
        //toast.success("Blog image Deleted  successfully");
    //   });

      console.log("Document successfully deleted!");
   //   toast.success("Blog deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error removing document: ", error?.message);
    //  toast.error({ message: error });

    //  setLoading(false);
    }
  };



  
  export const deleteDocument = async(document, id)=> {
      let result = null;
      let error = null;
      '8R0uXK4adS7UyruStjoH'
  console.log(document ,id)
      try {
          //const docRef = doc(db, document, id);
          //const response = await deleteDoc(docRef);
        const response = await  deleteDoc(doc(db, document, id))
          
        const desertRef = ref(storage, `blog/${document.img?.name}`);
        await deleteObject(desertRef);
          result = response;
      } catch (e) {
          error = e;
          console.log('error' ,error)
      }
  
      return { result, error };
  }
  





  // Delete Old image when Update 


  export const handleDeleteImage = async (img ,from=null) => {
    try {
      //setLoading(true);

      console.log("blog object CLICKEDDDDD", img);

  

    
        console.log("image is Name:🔷️🔶️🔷️🔶️ " + img);

        const desertRef = ref(storage, `${from ? from : 'blog'}/${img?.name}`);
        await deleteObject(desertRef);
  

      console.log("Document successfully deleted!");

      
    } catch (error) {
      console.error("Error removing document: ", error);
    
    }
  };