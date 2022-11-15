import React from 'react'
import type { NextPage } from "next";
import CheckList from "./CheckList";
interface Props {
	checkLists: any[];
}

const CheckListSection: NextPage<Props> = ({ checkLists }) => {
	return <div className=''>
		{checkLists.map((item, index) => (
			<CheckList
				index={index}
				key={"CheckList" + item.id}
				heading={item.attributes.heading}
				list={item.attributes.list}
				icon={item.attributes.icon}
			/>
		))}
	</div>

}

export default CheckListSection