import React from 'react'


export default function Friend(props){
    return <div className={props.index % 2 === 0? 'even' : 'odd'} >{props.name}</div>
}