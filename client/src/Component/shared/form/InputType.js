import React from 'react'

const InputType = ({labeltext, labelfor ,inputtype,value,onChange,name}) => {
  return (
    
       <>
       <div className="mb-3">
    <label htmlFor={labelfor} className="form-label">{labeltext}

    </label>

    <input type={inputtype} className="form-control" name={name} value = {value} onChange = {onChange} />
      
    </div>
       </>
  )
}

export default InputType
