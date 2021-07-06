import React, { useEffect, Fragment } from 'react';
import './loadingcomponent.scss'
import loading from '../../assets/img/loading.gif';
import { useSelector, useDispatch } from 'react-redux';
import { DISPLAY_LOADING, HIDE_LOADING } from '../../redux/constants/LoadingConst';
import { Route } from 'react-router-dom';

export default function LoadingTemplate(props) {
    const { isLoading } = useSelector(state => state.LoadingReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: HIDE_LOADING })
        }, 3000);
        
    },[])
    
    const renderLoading = () => {
        if (isLoading) {
            return (
                <div className="bgLoading">
                    <img src={loading} alt={loading} />
                </div>
            )
        }else{
            return "";
        }
    }
    return (
        <Fragment>
            <Route path={props.path} exact render={(propsRoute) => {
                return <Fragment>
                    {renderLoading()}
                    <props.component {...propsRoute} />
                </Fragment>
            }} />

        </Fragment>
    )
}
