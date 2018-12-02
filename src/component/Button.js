import React, {Component} from 'react'

export default function Button(props){ 
        return(
            <React.Fragment>
                <input value={props.value} type={props.type} onClick={props.button}/>
            </React.Fragment>
        );
    };
