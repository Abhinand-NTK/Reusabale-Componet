import React from 'react'

const Resusable = ({data}) => {
  return (
    <div className='details'> 
        <div >
            {data.map((item,index)=>(<div className='componets' key={index}>
                <p>
                Employee No : {item.id}
                <br />
                Name : {item.Name}
                <br />
                Mail : {item.Email}
                </p>
            </div>))}
        </div>
      
    </div>
  )
}

export default Resusable

