import React from 'react';
import { View, Image } from 'react-native';
import { icons } from '../constants';

const Rating = ({ containerStyle, rate }) => {
	const starComponents = [];

	for (var i = 0; i < rate; i++) {
		starComponents.push(
			<Image
				key={`full-${i}`}
				source={icons.star}
				resizeMode='cover'
				style={{ marginLeft: i == 0 ? 0 : 5, width: 15, height: 15 }}
			/>
		);
	}

	return (
		<View style={{ flexDirection: 'row', ...containerStyle }}>
			{starComponents}
		</View>
	);
};

export default Rating;
