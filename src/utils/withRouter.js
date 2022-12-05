import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';

export const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          navigate={navigate}
          location={location}
          params={params}
        />
      );
    }
  
    return ComponentWithRouterProp;
}