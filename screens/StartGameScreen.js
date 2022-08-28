import { StyleSheet, View, TextInput, Alert } from 'react-native'
import React,{useState} from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
      <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={() => {
                const chosenNum = parseInt(enteredNumber);
                console.log(chosenNum);
                if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
                  //show alert
                  console.log("reached");
                  Alert.alert(
                    "Invalid number!",
                    "Number has to be a number between 1 and 99.",
                    [
                      {
                        text: "Okay",
                        style: "destructive",
                        onPress: resetInputHandler,
                      },
                    ]
                  );
                }
                onPickNumber(chosenNum);
                console.log("Valid number!");
              }}
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonContainer: {
    flex: 1,
  },
});