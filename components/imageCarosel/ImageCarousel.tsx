import React, { useState } from 'react';
import type { NextPage } from 'next';
import { motion, AnimatePresence } from 'framer-motion';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

interface Props {
	heading: string;
	images: {
		data: any[];
	}
}

const ImageCarousel: NextPage<Props> = ({ heading, images }) => {
	const [currentImage, setCurrentImage] = useState(0);

	const handlePrevious = () => {
		if (currentImage - 1 >= 0) {
			setCurrentImage((prev) => prev - 1);
		} else {
			setCurrentImage(images.data.length - 1)
		}
		console.log(currentImage);
	}
	const handleNext = () => {
		if (currentImage + 1 < images.data.length) {
			setCurrentImage((prev) => prev + 1)
		} else {
			setCurrentImage(0)
		}
		console.log(currentImage);
	}

	return <div className="py-common">
		{heading && heading.length > 0 ?
			<div className='flex justify-center '>
				<h2 className='heading container-common mb-common'>
					{heading}
				</h2>
			</div>
			: <></>
		}
		{images.data && images.data.length > 0 ?
			<div className='flex justify-center'>
				<div className='aspect-[16/9] max-w-screen-common w-full bg-white border-4 border-tertiary-50'>
					{/* <AnimatePresence> */}
					<motion.div
						key={currentImage}
						className="justify-between items-center flex bg-center bg-contain bg-no-repeat w-full h-full"
						style={{
							backgroundImage: `url(${process.env.STRAPI_BACKEND_URL +
								images.data[currentImage].attributes.url
								})`,
						}}
					>
						<button onClick={handlePrevious} className="ml-8">
							<BsFillArrowLeftCircleFill size={34} className='text-tertiary-800' />
						</button>
						<button onClick={handleNext} className="mr-8">
							<BsFillArrowRightCircleFill size={34} className='text-tertiary-800' />
						</button>

					</motion.div>
				</div>
			</div>
			: <></>
		}
	</div>
}

export default ImageCarousel;

