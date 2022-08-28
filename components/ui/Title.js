import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors';

const Title = ({children}) => {
  return (
    <View>
        <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: "center",
  },
});