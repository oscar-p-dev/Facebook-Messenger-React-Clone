import React from 'react'
import Group from '../Group/Group'

import "./GroupList.scss"

export default function GroupList(props) {
    return (
        <div className="GroupList">
            <div className="groupList">
                {props.groups.length === 0 ?
                    <p className="NoGroups">No Groups</p>
                    :
                    props.groups.map(group => 
                        <Group key={group.id} {...group} groupId={props.groupId}/>
                    )
                }
            </div>
        </div>
    )
}
