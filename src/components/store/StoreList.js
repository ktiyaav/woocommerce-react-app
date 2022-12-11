import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import {VENDOR} from '../../config/constants';
function StoresList(props) {
console.log(props)
console.log(VENDOR.ID)
  return (
    <>
      <div className="storelist-title">{props.title}</div>
      {(props.stores.isLoading)
      ? <div>loading</div>
      : <div className="store-list">
          {props.stores.stores.map((store,index) => (
            <Link  to={{pathname: `/store/` + store[VENDOR.ID]}}>
            <div className="row store" key={store[VENDOR.ID]}>
                <div className="col-4 store-img-col">
                <img alt={store[VENDOR.ID]} src={store[VENDOR.MOBILE_BANNER]} className="store-image" />
                </div>
                <div className="col-8 no-padding">
                <div className="title">{store[VENDOR.NAME]}</div> 
                <div className="store-description">{store[VENDOR.DESCRIPTION].replace(/<\/?[^>]+>/gi, '')}</div>
                <div className="row store-info">
                    <div className="col-3 d-flex align-items-center"><i class="fa fa-star" aria-hidden="true"></i>&nbsp; 4.3</div>
                    <div className="col-4">15 MINS</div>
                    <div className="col-5 d-flex align-items-end">₹ 200 FOR TWO</div>
                </div>
                </div>
            </div> 
            </Link>
          ))}
        </div>
      }  
    </>
  );
}

export default StoresList;
