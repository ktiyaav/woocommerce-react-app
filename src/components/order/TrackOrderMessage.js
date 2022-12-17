import React from 'react'

export default function TrackOrderMessage(props) {
  return (
    <div className="row my-account no-padding">
        <div className="col-10">
            <div className="row title">
            {props.message}
            </div>
            <div className="row desc">
            {props.description}
            </div>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center m-auto">
            <i className="fa fa-check-circle-o fs-3" aria-hidden="true"></i>
        </div>
    </div>
  )
}
