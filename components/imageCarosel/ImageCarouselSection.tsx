import React from 'react';
import type { NextPage } from 'next';
import ImageCarousel from './ImageCarousel';

interface Props {
	imageCarousels: any[];
}

const ImageCarouselSection: NextPage<Props> = ({ imageCarousels }) => {

	return <>
		{imageCarousels.map(item =>
			<ImageCarousel
				key={"image-carousel" + item.id}
				heading={item.attributes.heading}
				images={item.attributes.images}
			/>
		)}
	</>
}

export default ImageCarouselSection;