import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';

const TextIconButton = ({
	label,
	icon,
	customContainerStyle,
	customLabelStyle,
	onPress,
}) => {
	return (
		<TouchableOpacity
			style={{
				flexDirection: 'row',
				height: 60,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: SIZES.radius,
				backgroundColor: COLORS.white,
				...customContainerStyle,
			}}
			onPress={onPress}>
			<Text
				style={{ marginRight: SIZES.base, ...FONTS.h2, ...customLabelStyle }}>
				{label}
			</Text>

			<Image source={icon} style={{ width: 25, height: 25 }} />
		</TouchableOpacity>
	);
};

export default TextIconButton;
