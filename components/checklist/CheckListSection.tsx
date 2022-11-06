import React from 'react'
import type { NextPage } from "next";
import CheckList from "./CheckList";
interface Props {
	checkLists: any[];
}

const CheckListSection: NextPage<Props> = ({ checkLists }) => {
	return <>
		{checkLists.map((item, index) => (
			<CheckList
				index={index}
				key={"CheckList" + item.id}
				heading={item.attributes.heading}
				list={item.attributes.list}
				icon={item.attributes.icon}
			/>
		))}
	</>

}

export default CheckListSection