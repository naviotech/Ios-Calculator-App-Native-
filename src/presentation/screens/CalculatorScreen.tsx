import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import ButtonCalc from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {width, height} = useWindowDimensions();
  const isPortrait = height > width;

  const {
    number,
    prevNumber,
    toggleSign,
    buildNumber,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View
      style={
        isPortrait
          ? globalStyles.calculatorContainer
          : globalStyles.calculatorContainerHorizontal
      }>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={
            isPortrait
              ? globalStyles.mainResult
              : globalStyles.mainResultHorizontal
          }>
          {number}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.subResult}>
          {prevNumber === '0' ? ' ' : prevNumber}
        </Text>
      </View>
      <View style={isPortrait ? globalStyles.row : globalStyles.rowHorizontal}>
        <ButtonCalc onPress={clean} label="AC" color={colors.lightGray} />
        <ButtonCalc onPress={toggleSign} label="+/-" color={colors.lightGray} />
        <ButtonCalc
          onPress={deleteOperation}
          label="del"
          color={colors.lightGray}
        />
        <ButtonCalc onPress={divideOperation} label="÷" color={colors.orange} />
      </View>

      <View style={isPortrait ? globalStyles.row : globalStyles.rowHorizontal}>
        <ButtonCalc
          onPress={() => buildNumber('7')}
          label="7"
          color={colors.darkGray}
        />
        <ButtonCalc
          onPress={() => buildNumber('8')}
          label="8"
          color={colors.darkGray}
        />
        <ButtonCalc
          onPress={() => buildNumber('9')}
          label="9"
          color={colors.darkGray}
        />
        <ButtonCalc
          onPress={multiplyOperation}
          label="x"
          color={colors.orange}
        />
      </View>

      <View style={isPortrait ? globalStyles.row : globalStyles.rowHorizontal}>
        <ButtonCalc
          onPress={() => buildNumber('4')}
          label="4"
          color={colors.darkGray}
        />
        <ButtonCalc
          onPress={() => buildNumber('5')}
          label="5"
          color={colors.darkGray}
        />
        <ButtonCalc
          onPress={() => buildNumber('6')}
          label="6"
          color={colors.darkGray}
        />
        <ButtonCalc
          onPress={subtractOperation}
          label="-"
          color={colors.orange}
        />
      </View>

      <View style={isPortrait ? globalStyles.row : globalStyles.rowHorizontal}>
        <ButtonCalc
          onPress={() => buildNumber('1')}
          label="1"
          color={colors.darkGray}
        />
        <ButtonCalc
          onPress={() => buildNumber('2')}
          label="2"
          color={colors.darkGray}
        />
        <ButtonCalc
          onPress={() => buildNumber('3')}
          label="3"
          color={colors.darkGray}
        />
        <ButtonCalc onPress={addOperation} label="+" color={colors.orange} />
      </View>

      <View style={isPortrait ? globalStyles.row : globalStyles.rowHorizontal}>
        {!isPortrait && (
          <ButtonCalc
            onPress={() => buildNumber('3.141592')}
            label="π"
            color={colors.darkGray}
            doubleSize
          />
        )}
        <ButtonCalc
          onPress={() => buildNumber('0')}
          label="0"
          color={colors.darkGray}
          doubleSize
        />

        <ButtonCalc
          onPress={() => buildNumber('.')}
          label="."
          color={colors.darkGray}
        />
        <ButtonCalc onPress={calculateResult} label="=" color={colors.orange} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
