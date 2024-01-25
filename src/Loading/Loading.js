import React from "react"
import { CgSandClock } from "react-icons/cg";
import './Loading.css';

function Loading() {
    return(
        <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text"><em>Cargando...</em></p>
        <span className="LoadingTodo-deleteIcon"></span>
        <CgSandClock color='grey' size={20}/>
      </div>
    )
}


export { Loading };