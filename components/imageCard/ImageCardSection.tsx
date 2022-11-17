import React from 'react'
import type { NextPage } from 'next'
import ImageCardGrid from './ImageCardGrid';

interface Props {
	imageCardGrids: any[];
}

const ImageCardSection: NextPage<Props> = ({ imageCardGrids }) => {
	return <div>
		{imageCardGrids.map(item =>
			<ImageCardGrid
				key={"image-card-grid" + item.id}
				heading={item.attributes.heading}
				subheading={item.attributes.subheading}
				cards={item.attributes.cards}
			/>
		)};
	</div>
}

export default ImageCardSection