//import { StateContext } from "@/context/stateContext";
import { StateContext } from '@/utils/context/index'
import { db } from '@/utils/firebase';
import getBlogCount from "@/utils/firebase/getBlogCount";
import { addDoc, collection } from "firebase/firestore";
import moment from "moment/moment";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Loader from "../shared/loader";
import BlogForm from "./BlogForm";
import SideMenu from "./SideMenu";
import { toast } from 'react-toastify';
import SliderImagesForm from './sliderImagesForm';
import uploadFile from '@/utils/firebase/addImage';
function AddBlog() {
  const { setAlert, user, pageLoading = true } = useContext(StateContext)
  const [value, setValue] = useState("");
  const [valueAr, setValueAr] = useState("");
  const [title, setTitle] = useState("");
  const [price ,setPrice] = useState(0)
  const [titleAr, setTitleAr] =useState('')
  const [image, setImage] = useState({url:'' ,name:''})
  const [images ,setImages]  = useState([])
  const [image2, setImage2] = useState({url:'' ,name:''})
  const [loading, setLoading] = useState(false)
  const [visibleHome, setVisibleHome] = useState(false)
  const [category, setCategory] = useState('')
  
  const { replace } = useRouter()
  const handleClick = async () => {
    setLoading(true)


    console.log('images length: ' + images.length ,images)

    const firebaseImages = [];
    await Promise.all(
      images?.map(async (image) => {
        // const fbStorageRef = storageRef(storage, `images/${image.name}`);
        // const uploadTask = await uploadBytes(fbStorageRef, image);
        // const downloadURL = await getDownloadURL(uploadTask.ref);
        const filePath = `/slider/${image?.name}`
        const downloadURL = await uploadFile(image, filePath)
        firebaseImages.push({url:downloadURL , name:image.name});
        toast.success(`Images successfully`)
      })
    );




    try {
      // if (visibleHome) const count = 
      const data = visibleHome ? {
        title,
        titleAr,
        description: value,
        descriptionAr:valueAr,
        image: image,
        image2:image2,
        slider:firebaseImages,
        category: category,
        price: price,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        index: await getBlogCount() + 1
      } : {
        title,
        description: value,
        image: image,
        image2:image2,
        slider:firebaseImages,
        price: price,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      }

// if (category === ''){
//   toast.error({message:'Please select category'})

// return
// }
  




      await addDoc(collection(db, 'blog'), data)
      setTitle("")
      setImage("")
      setValue("")
      setVisibleHome(false)
      setAlert({ isShow: true, duration: 3000, message: "Blog added successfully.", type: "success" })
    } catch (error) {
      setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })

    }
    setLoading(false)
  }
  if (pageLoading) {

    return (
      <div className="bg-blue-200 h-screen w-full fixed top-0 flex justify-center items-center z-50">
        <div>
          <div role="status">
            <svg className="mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 dark:fill-teal-300 fill-teal-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    )
  }
  if (!pageLoading && user === null) {
    replace('/admin/login')
    return (
      <div className="bg-blue-200 h-screen w-full fixed top-0 flex justify-center items-center z-50">
        <h1 className="font-cutiveMono text-3xl">
          Sorry You Are Not Logged In
        </h1>
      </div>
    )
  }
  return (
    <div>
      <SideMenu />
      {loading && <Loader />}

<SliderImagesForm images={images} setImages={setImages} />

      <BlogForm {...{ setTitle, title, value, setValue, handleClick, setImage, setAlert, setLoading, image, visibleHome, setVisibleHome ,titleAr, setTitleAr ,valueAr, setValueAr , category, setCategory ,image2, setImage2 ,price,setPrice }} />
    </div>
  )
}

export default AddBlog