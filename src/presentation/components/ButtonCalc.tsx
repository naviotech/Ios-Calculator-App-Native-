import React from 'react';
import {Pressable, Text, useWindowDimensions} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  onPress: () => void;
}
const ButtonCalc = ({
  onPress,
  label,
  color = colors.darkGray,
  doubleSize = false,
}: Props) => {
  const {width, height} = useWindowDimensions();
  const isPortrait = height > width;

  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...(isPortrait ? globalStyles.button : globalStyles.buttonHorizontal),
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
        alignItems: isPortrait
          ? doubleSize
            ? 'flex-start'
            : 'center'
          : 'center',
      })}>
      <Text
        style={{
          ...(isPortrait
            ? globalStyles.buttonText
            : globalStyles.buttonTextHorizontal),
          marginLeft: isPortrait ? (doubleSize ? 20 : 0) : 0,
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default ButtonCalc;
