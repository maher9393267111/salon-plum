import uploadFile from '../../utils/firebase/addImage'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import Loader from '../shared/loader'
import { handleDeleteImage } from '@/utils/firebase/getData'

import { toast } from 'react-toastify'


export default function HeroForm({image,setImage ,image2,setImage2 , handleClick ,setAlert ,setPageLoading}) {



    const [file, setFile] = useState(null)
    const [file2, setFile2] = useState(null)

   


    const uploadImage = async () => {
        setPageLoading(true)
        if (!file) {
            return setAlert({ isShow: true, duration: 3000, message: "Select image file to upload.", type: "error" })
        }
      //  const filePath = crypto.randomUUID() + "-" + file.name
      // file folder/name
      const filePath =`hero/${file?.name}`
        try {


// ---if there image delete old image then update new one---

if (image?.name){
   await handleDeleteImage(image)
   toast.success(' hero old image deleted')

}



            const url = await uploadFile(file, filePath)
            console.log('IMAGE->' , url)
            setImage({  url:url , name:file.name})
        } catch (error) {
            return setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
        }
        setPageLoading(false)
    }



    const uploadImage2 = async () => {
        setPageLoading(true)
        if (!file2) {
            return setAlert({ isShow: true, duration: 3000, message: "Select image file to upload.", type: "error" })
        }
      //  const filePath = crypto.randomUUID() + "-" + file.name
      // file folder/name
      const filePath =`hero/${file2?.name}`
        try {


// ---if there image delete old image then update new one---

if (image2?.name){
   await handleDeleteImage(image2)
   toast.success('hero old image2 deleted')

}



            const url = await uploadFile(file2, filePath)
            console.log('IMAGE->' , url)
            setImage2({  url:url , name:file2.name})
        } catch (error) {
            return setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
        }
        setPageLoading(false)
    }





  return (
    <div>

<div>

    
<div className='w-full my-4'>
                <div className="w-full flex">
                    <input
                        type="file"
                        id="file"
                        name=""
                        className='text-black font-medium rounded-md border-teal-400 py-3 px-6 border-2 border-r-0 rounded-r-none'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button type='button' className="rounded-l-none  inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 dark:hover:bg-teal-700 dark:hover:text-white" onClick={uploadImage}>
                        Upload Image
                    </button>
                </div>




                <div className='text-xl font-cutiveMono text-center py-2'>or</div>
                <div className='w-full'>
                    <input className='w-full border-2 text-black font-medium rounded-md border-teal-400 py-3 px-6'
                        type="text"
                        placeholder="Image url" onChange={e => setImage({...image,url:e.target.value})} value={image?.url} />
                </div>
            </div>






{/* -------Image Two ----- */}

<div className='w-full my-4'>
                <div className="w-full flex">
                    <input
                        type="file"
                        id="file2"
                        name=""
                        className='text-black font-medium rounded-md border-teal-400 py-3 px-6 border-2 border-r-0 rounded-r-none'
                        onChange={(e) => setFile2(e.target.files[0])}
                    />
                    <button type='button' className="rounded-l-none  inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 dark:hover:bg-teal-700 dark:hover:text-white" onClick={uploadImage2}>
                        Upload Image Two
                    </button>
                </div>




                <div className='text-xl font-cutiveMono text-center py-2'>or</div>
                <div className='w-full'>
                    <input className='w-full border-2 text-black font-medium rounded-md border-teal-400 py-3 px-6'
                        type="text"
                        placeholder="Image url" onChange={e => setImage2({...image,url:e.target.value})} value={image2?.url} />
                </div>
            </div>



            <div className="w-full">
                <button className='inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 dark:hover:bg-teal-700 dark:hover:text-white' onClick={handleClick}>Publish</button>
            </div>



</div>






    </div>
  )
}
