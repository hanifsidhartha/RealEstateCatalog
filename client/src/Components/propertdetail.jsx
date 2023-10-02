import React from 'react'

const propertdetail = () => {
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

            <div className='Length'>
                <span>Length</span>
                <input type='number' placeholder='Example:1000' />
            </div>
            <div className='breadth'>
                <span>Breadth</span>
                <input type='number' placeholder='Example:1000' />
            </div>
            <div className='Area'>
                <span>Area</span>
                <input type='number' placeholder='Example:7500' />
            </div>

            <div className='areaunit' placeholder='areaunit'>
                <span>AreaUnit</span>
                <select>
                    <option>unit1</option>
                    <option>unit2</option>
                    <option>unit3</option>
                </select>
             </div>

             <div className='no_of-BHK' placeholder='no.ofBHK'>
                <span>No.OF BHK</span>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
             </div>

             <div className='no.ofFloor' placeholder='No.of Floor'>
                <span>No.Of Floor</span>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
             </div>
             <div className='Attached' placeholder='Attached'>
                <span>Attached</span>
                <select>
                    <option>post1</option>
                    <option>post2</option>
                    <option>post3</option>
                </select>
             </div>

             <div className='lift' placeholder='lift'>
                <span>Lift</span>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
             </div>
             <div className='carparking' placeholder='carparking'>
                <span>Carparking</span>
                <select>
                    <option>gate1</option>
                    <option>gate2</option>
                    <option>gate3</option>
                </select>
             </div>
             <div className='facing' placeholder='facing'>
                <span>Facing</span>
                <select>
                    <option>East</option>
                    <option>North</option>
                    <option>South</option>
                    <option>West</option>
                </select>
             </div>
             <div className='electricity' placeholder='Example:phase2'>
                <span>Electricity</span>
                <input type='text' />;
             </div>







            </div>








            <div className='footer'>
                <button>Previous</button>
                <button>Add Property</button>
            </div>


        </div>
    )
}

export default propertdetail
