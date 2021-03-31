import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  optionAdd: boolean;
  setOptionAdd(option: boolean): void;
  optionAddText: string;
  optionRemoveText: string;
}

const SelectOption = ({
  optionAdd,
  setOptionAdd,
  optionAddText,
  optionRemoveText,
}: Props) => {
  return (
    <View style={styles.optionContainer}>
      <TouchableOpacity
        style={optionAdd === true ? styles.optionAdd : styles.default}
        onPress={() => setOptionAdd(true)}
      >
        <Text
          style={[
            styles.globalText,
            { color: optionAdd === true ? '#40923F' : '#39393A' },
          ]}
        >
          {optionAddText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={optionAdd === true ? styles.default : styles.optionRemove}
        onPress={() => setOptionAdd(false)}
      >
        <Text
          style={[
            styles.globalText,
            { color: optionAdd === false ? '#BB4E4E' : '#39393A' },
          ]}
        >
          {optionRemoveText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectOption;
