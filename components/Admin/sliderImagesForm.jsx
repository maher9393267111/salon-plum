import React from 'react'

export default function SliderImagesForm({images,setImages , update =false}) {


    const handleImageChange = (e) => {
        setImages(Array.from(e.target.files));
      
      
      };
      
      
      const handleRemoveImage = (image) => {
        setImages(images.filter((i) => i !== image));
      };
      



  return (


   




    <div>


<div className="row">

<div className='text-center'>
    <h1 className='  text-2xl w-1/5  rounded-2xl  font-semibold p-2 ml-12 bg-blue-500 text-white'>Slider images</h1>
</div>


      
<div className="col-lg-12">
  <ul className="mb-0 flex flew-wrap ml-12">
    {
    // propertySelectedImgs.length > 0
    images.length > 0 
      ? images?.map((item, index) => (
          <li key={index} className="w-[189px] h-[190px]  rounded-lg p-2  list-inline-item">
            <div className="portfolio_item w-full h-full">
              <img
                className="img-fluid rounded-[50%] cover w-full h-full object-cover "
                src={update ? item?.url : URL.createObjectURL(item)}
                alt="fp1.jpg"
              />
              <div
                className="edu_stats_list"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Delete"
                data-original-title="Delete"
              >
                { !update &&
                <a onClick={() =>
                handleRemoveImage(item)
                  //  deleteImage(item.name)
                   }>
                  <span className="flaticon-garbage  cursor-pointer bg-red-400 text-white p-1 rounded-xl">Delete</span>
                </a>

    }

              </div>
            </div>
          </li>
        ))
      : undefined}

    {/* End li */}
  </ul>
</div>
{/* End .col */}


{ !update &&


<div className="col-lg-12 ml-12  my-12">
  <div className="portfolio_upload">
    <input
      type="file"
    onChange={handleImageChange}
      // onChange={multipleImage}
      multiple
      accept="image/png, image/gif, image/jpeg"
    />
    {/* <div className="icon">
      <span className="flaticon-download"></span>
    </div>
    <p>Drag and drop images here</p> */}
  </div>
</div>

}





</div>

    </div>
  )
}
