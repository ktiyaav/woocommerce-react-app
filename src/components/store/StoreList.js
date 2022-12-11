import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import {VENDOR} from '../../config/constants';
import StoreListLoader from "../ui/loaders/StoreListLoader";
function StoresList(props) {
  return (
    <>
      <div className="storelist-title">{props.title}</div>
      {(props.stores.isLoading)
      ? <StoreListLoader></StoreListLoader>
      : <div className="store-list">
          <div className='row restaurants-nearby'>
            <div className="col-6 d-flex align-items-center pl-4"><i className="fa fa-flag" aria-hidden="true"></i>&nbsp;All stores nearby!</div>
            <div className="col-6"></div>
          </div>
          {props.stores.stores.map((store,index) => (
            <Link  to={{pathname: `/store/` + store[VENDOR.ID]}} key={store[VENDOR.ID]}>
            <div className="row store">
                <div className="col-4 store-img-col">
                <img alt={store[VENDOR.ID]} src={store[VENDOR.MOBILE_BANNER]} className="store-image" />
                </div>
                <div className="col-8 no-padding">
                <div className="title">{store[VENDOR.NAME]}</div> 
                <div className="store-description">{store[VENDOR.DESCRIPTION].replace(/<\/?[^>]+>/gi, '')}</div>
                <div className="row store-info">
                    <div className="col-3 d-flex align-items-center"><i className="fa fa-star" aria-hidden="true"></i>&nbsp; 4.3</div>
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
