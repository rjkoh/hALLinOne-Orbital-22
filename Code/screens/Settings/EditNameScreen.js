import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { auth, db } from '../../Firebase/Firebase';
import { updateProfile } from 'firebase/auth';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { useNavigation } from '@react-navigation/native';
import { doc, updateDoc } from "firebase/firestore"; 

// here users can edit their name
const EditNameScreen = () => {
    // stores name
    const [name, setName] = useState('')

    // to navigate between authentication stack
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <View style={styles.inputContainer}> 
            <TextInput
              // input field to type user's desired display name, which is stored as name
              placeholder="New Name"
              // input stored in state name
              value={name}
              onChangeText={text => setName(text)}
              style={styles.input}
            />
          </View>
    
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              // button that when pressed, updates user displayed name to what was input in above field
              // button writes "Confirm"
              onPress={() => {
                // if user did not input name
                if (name === '') {
                  // alert user to input
                  alert("Please fill in your name!")
                } else {
                  try {
                    // update user name on firebase
                    updateProfile(auth.currentUser, {
                      displayName: name
                    })
                    .then(async () => {
                      // update user name in firestore
                      const docRef = await updateDoc(doc(db, "users", auth.currentUser.uid), {
                        name: name,
                      });
                      // log successful update
                      console.log("Name updated with: ", name);
                      // alert user on successful update
                      alert("Name changed!");
                      // bring user back to profile page
                      navigation.navigate("Profile");
                    })
                  // push errors to user
                  } catch (e) {
                    console.error("Error changing name: ", e);
                  }
                }
              }
            }
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Confirm</Text>
            </TouchableOpacity> 
          </View>
        </KeyboardAvoidingView>
      )
    }
    
    export default EditNameScreen
    
    // styles of elements in screen
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputContainer: {
        width: '80%'
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
      },
    })