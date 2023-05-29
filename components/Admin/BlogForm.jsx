import uploadFile from '../../utils/firebase/addImage'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import Loader from '../shared/loader'
import { handleDeleteImage } from '@/utils/firebase/getData'

import { toast } from 'react-toastify'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <Loader />,
})

export default function BlogForm({ setTitle, title, value, setValue, handleClick, setImage, setAlert, setLoading, image, visibleHome, setVisibleHome ,titleAr, setTitleAr ,valueAr, setValueAr , category, setCategory  }) {
 
    const [file, setFile] = useState(null)
    const uploadImage = async () => {
        setLoading(true)
        if (!file) {
            return setAlert({ isShow: true, duration: 3000, message: "Select image file to upload.", type: "error" })
        }
      //  const filePath = crypto.randomUUID() + "-" + file.name
      // file folder/name
      const filePath =`blog/${file?.name}`
        try {


// ---if there image delete old image then update new one---

if (image?.name){
   await handleDeleteImage(image)
   toast.success('old image deleted')

}



            const url = await uploadFile(file, filePath)
            console.log('IMAGE->' , url)
            setImage({  url:url , name:file.name})
        } catch (error) {
            return setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
        }
        setLoading(false)
    }
    console.log(visibleHome)
    return (
        <div className="flex flex-col justify-center items-center gap-6 w-full md:px-24 sm:px-12 px-6 h-auto mb-12 ">
            <div className="w-full">
                <input
                    className='w-full border-2 text-black font-medium rounded-md border-teal-400 py-3 px-6'
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

{/* ----Arabic Title---- */}

<div className="w-full">
                <input
                    className='w-full border-2 text-black font-medium rounded-md border-teal-400 py-3 px-6'
                    type="text"
                    placeholder="Arabic Title"
                    value={titleAr}
                    onChange={(e) => setTitleAr(e.target.value)}
                />
            </div>



            <div className="w-full h-64">
                <QuillNoSSRWrapper theme="snow" className='h-full pb-[2.5rem] border-[2.5px] text-black font-medium rounded-md border-teal-400 hover:border-blue-600' value={value} onChange={setValue} />
            </div>


{/* --------Arabic Desc-------- */}


<div className="w-full h-64">
    <p className=''>Arabic Description</p>
                <QuillNoSSRWrapper theme="snow" className='h-full pb-[2.5rem] border-[2.5px] text-black font-medium rounded-md border-teal-400 hover:border-blue-600' value={valueAr} onChange={setValueAr} />
            </div>


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



{/* ------category select------ */}


<div className="col col-lg-6 col-12 w-full">
                      <div className="form-group">
                        <label>Select Category</label>
                        <select
                          className="form-control  border-2 text-black font-medium rounded-md border-teal-400 py-3 px-6"
                          
                          onChange={(e) => setCategory(e.target.value)}
                          value={category}
                          type="text"
                          name="category"
                        >
                        <option value="no&&لايوجد">select Category</option>
                          <option value="hud&&بشرة">بشرة</option>
                          <option value="laser&&ليزر">ليزر</option>
                          <option value="tänder&&أسنان">أسنان</option>
                          <option value="kroppsvård&&عناية الجسم">عناية الجسم</option>
                          {/* <option value='5-6'>Bathroom Plumbing</option>
                                                    <option value='6:15-6:33'>Basement Plumbing</option> */}
                        </select>
                      
                      </div>
                    </div>








            <div className="w-full flex gap-4 sm:text-xl text-lg font-semibold items-center">
                Show document at home page
                <label htmlFor="AcceptConditions" className="relative sm:h-8 sm:w-14 h-6 w-12 cursor-pointer">
                    <input type="checkbox" checked={visibleHome} onChange={() => setVisibleHome(!visibleHome)} id="AcceptConditions" className="peer sr-only" />

                    <span
                        className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"
                    ></span>

                    <span
                        className="absolute inset-0 m-1 sm:h-6 sm:w-6 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-6"
                    ></span>
                </label>
            </div>
            <div className="w-full">
                <button className='inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 dark:hover:bg-teal-700 dark:hover:text-white' onClick={handleClick}>Publish</button>
            </div>
        </div>
    )
}
