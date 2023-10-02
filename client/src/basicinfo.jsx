import React from "react";
import { Button, Textfield } from '@material-ui/core'


export default function basicinfo() {
    return (
        <div className="container">

            <div className="header">
                <div><span>ADD New Property</span></div>
                <div className='headbuttons'>
                    <button>BasicInfo</button>
                    <button>PropertyDetail</button>
                    <button>GeneralInfo</button>
                    <button>LocationInfo</button>
                </div>
            </div>


            <div className="body">

            <div className='propertytype' placeholder='propertytype'>
                <span>PropertyType</span>
                <select>
                    <option>type1</option>
                    <option>type2</option>
                    <option>type3</option>
                </select>
             </div>
             <div className='negotable' placeholder='negotable'>
                <span>Negotable</span>
                <select>
                    <option>type1</option>
                    <option>type2</option>
                    <option>type3</option>
                </select>
             </div>
             <div className='price'>
                <span>Price</span>
                <input type='number' placeholder='Ex:10000' />
            </div>

            <div className='ownership' placeholder='ownership'>
                <span>OwnerShip</span>
                <select>
                    <option>type1</option>
                    <option>type2</option>
                    <option>type3</option>
                </select>
             </div>

             <div className='propertage' placeholder='PropertyAge'>
                <span>PropertyAge</span>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
             </div>

             <div className='propertyapproved' placeholder='PropertyApproved'>
                <span>PropertyApproved</span>
                <select>
                    <option>yes</option>
                    <option>no</option>
                </select>
             </div>
             <div className='description'>
                <span>PropertyDescription</span>
                <input type='text' placeholder='feedback' />
            </div>

             

            </div>




            <div className='footer'>
                <button>Previous</button>
                <button>Save&Continue</button>
            </div>


        </div>
    )
}