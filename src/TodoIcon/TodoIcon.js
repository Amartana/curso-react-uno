import React from "react"
import { ReactComponent as CheckSVG } from "./check.svg"
import { ReactComponent as DelteSVG} from "./delete.svg"
import { ReactComponent as CloseSVG} from "./close.svg"

function TodoIcon(props) {
    const typesIcon = {
        'check': <CheckSVG className={`Icon-check-dvg ${props.completed && 'check-complete'}`}/>,
        'delete': <DelteSVG className="Icon-delete-dvg"/>,
        'close': <CloseSVG/>
    }
    return (
        <span
        className={`${props.type} `}
        onClick={props.onClick}
        >
        {typesIcon[props.type]}
        </span>
    )
}

export {TodoIcon}

