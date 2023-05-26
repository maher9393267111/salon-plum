import { storage } from '@/utils/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const uploadFile = (file, filePath) => {
  return new Promise( async (resolve, reject) => {
    const storageRef = ref(storage, filePath)
    try {
        await uploadBytes(storageRef, file)
        const url  =await getDownloadURL(storageRef)
        console.log('IMAGEE--->' ,url)
        resolve(url)
    } catch (error) {
        reject(error)
    }
  } )
}

export default uploadFile