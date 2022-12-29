import React from 'react';

const MediaCard = ({mediaData}) => {
    return (
        <div>
           <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
	<img src={mediaData.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-xl font-semibold tracking-wide">{mediaData.description}</h2>
			<p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Read more</button>
	</div>
</div>
        </div>
    );
};

export default MediaCard;