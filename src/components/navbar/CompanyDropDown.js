import React from 'react'

const CompanyDropDown = (props) => {
  return (
    <div className="[&>*]:inline mx-2">
      <a > {props.text} </a>
    </div>
  )
}

export default CompanyDropDown