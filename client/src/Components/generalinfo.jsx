import React from 'react'
//import ImgUrl from '../assets/images/ImgUrl'

const generalinfo = () => {
  return (
    <div className='container'>
      
      <div className="header">
            <div><span>ADD New Property</span></div>
            <div className='headbuttons'>
                <button>BasicInfo</button>
                <button>PropertyDetail</button>
                <button>GeneralInfo</button>
                <button>LocationInfo</button>
            </div>
        </div>

        <div className='body'>
            <div className='name' placeholder='owner'>
                <span>Name</span>
                <select>
                    <option>owner1</option>
                    <option>owner2</option>
                    <option>owner3</option>
                </select>
             </div>

             <div className='number'>
                <span>Pincode</span>
                <input type='number' placeholder='number' />
            </div>

            <div className='postedby' placeholder='postedby'>
                <span>PostedBy</span>
                <select>
                    <option>post1</option>
                    <option>post2</option>
                    <option>post3</option>
                </select>
             </div>

             <div className='saletype' placeholder='SaleType'>
                <span>SaleType</span>
                <select>
                    <option>type1</option>
                    <option>type22</option>
                    <option>type3</option>
                </select>
             </div>

             <div className='featuredpackage' placeholder='featuredPakage' >
                <span>featuredPakage</span>
                <select>
                    <option>package1</option>
                    <option>package2</option>
                    <option>package3</option>
                </select>
             </div>

             <div className='ppd' placeholder='ppd'>
                <span>PPD</span>
                <select>
                    <option>ppd1</option>
                    <option>ppd2</option>
                    <option>ppd3</option>
                </select>
             </div>

             <div className='addimg'>
              //  <img src={imglogo} /><span>AddImage</span>
             </div> 


         </div>


       

        <div className='footer'>
            <button>Previous</button>
            <button>Save&Continue</button>
        </div>
    </div>
  )
}

export default generalinfo
