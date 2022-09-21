/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Context } from "../index";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/const";
import {useAuthState} from "react-firebase-hooks/auth"
import { privateRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
    const {auth}= useContext(Context)
    const [user] = useAuthState(auth)
    return user ?
    (
        <Switch>
            {privateRoutes.map(({path, Component}) => {
             return <Route key={path} path={path} component={Component} />
            })}
            <Redirect to={CHAT_ROUTE}/>
        </Switch>
    )
    :
    (   
        <Switch>
            {publicRoutes.map(({path, Component}) => {
             return <Route key={path} path={path} component={Component} />
            })}
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
        )
}

export default AppRouter;