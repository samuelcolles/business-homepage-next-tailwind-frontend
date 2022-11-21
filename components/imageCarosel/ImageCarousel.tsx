import React, { useState } from 'react';
import type { NextPage } from 'next';
import { motion, AnimatePresence } from 'framer-motion';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { SlFrame } from 'react-icons/sl';

interface Props {
	heading: string;
	images: {
		data: any[];
	}
}
const ImageCarousel: NextPage<Props> = ({ heading, images }) => {
	const [[next, currentImage], setCurrentImage] = useState([true, 0]);
	const [showNav, setShowNav] = useState(false);

	const handlePrevious = () => {

		if (currentImage - 1 >= 0) {
			setCurrentImage([false, currentImage - 1])
		} else {
			setCurrentImage([false, images.data.length - 1])
		}



	}
	const handleNext = () => {
		if (currentImage + 1 < images.data.length) {
			setCurrentImage([true, currentImage + 1])
		} else {
			setCurrentImage([true, 0]);
		}
	}
	const handleShowNav = () => {
		if (images.data.length <= 1) return;
		setShowNav(true);
	}
	const handleHideNav = () => {
		if (images.data.length <= 1) return;
		setShowNav(false);
	}

	return <div className="py-common divider-common px-4">
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
				<div className='max-w-screen-common w-full border-4 border-tertiary-50' >
					<div className='relative aspect-[16/9] w-full bg-white overflow-hidden'
						onMouseEnter={handleShowNav}
						onMouseLeave={handleHideNav}
					>
						<AnimatePresence initial={false}>
							<motion.div
								key={currentImage}
								className="bg-center bg-contain bg-no-repeat w-full h-full block absolute"
								style={{
									backgroundImage: `url(${process.env.STRAPI_BACKEND_URL +
										images.data[currentImage].attributes.url
										})`,
								}}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							/>
						</AnimatePresence>
						{showNav ?
							<>
								<motion.button
									onTap={handlePrevious}
									className="absolute image-carousel-button sm:left-10 left-2 z-50"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									whileHover={{ scale: 1.3 }}
									whileTap={{ scale: 0.9 }}
								>
									<BsFillArrowLeftCircleFill className='text-tertiary-800 h-8 w-8' />
								</motion.button>

								<motion.button
									onTap={handleNext}
									className="absolute image-carousel-button sm:right-10 right-2 z-50"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									whileHover={{ scale: 1.3 }}
									whileTap={{ scale: 0.9 }}
								>
									<BsFillArrowRightCircleFill className='text-tertiary-800 h-8 w-8' />
								</motion.button>
								<motion.a
									className="absolute bottom-2 right-2 sm:bottom-10 sm:right-10 z-50"
									href={process.env.STRAPI_BACKEND_URL + images.data[currentImage].attributes.url}
									target="_blank"
									rel="noopener noreferrer"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									whileHover={{ scale: 1.3 }}
									whileTap={{ scale: 0.9 }}
								>
									<SlFrame className='text-tertiary-800 h-8 w-8' />
								</motion.a>
							</>
							: <></>
						}
					</div>
				</div>
			</div>
			: <></>
		}
	</div>
}

export default ImageCarousel;

