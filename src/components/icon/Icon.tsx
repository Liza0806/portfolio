import React from "react";
import spriteSvg from "../../assets/images/spriteSvg.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?:string
    fill?: string
    stroke?: string
}


export function Icon (props: IconPropsType) {
    return (
        <svg 
        width={props.width || "88"} 
        height={props.height || "88"} 
        viewBox={props.viewBox || "0 0 88 88"} 
        fill={props.fill || "none"} 
        stroke={props.stroke || "none"} >
            <use xlinkHref={`${spriteSvg}#${props.iconId}`}>
            </use>
        </svg>
    )

}

