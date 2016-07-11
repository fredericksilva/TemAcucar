import React, { Platform, StyleSheet } from 'react-native'
import ReactNativeButton from 'apsl-react-native-button'
import Colors from "../Colors"

export default Button = (props) => (
  <ReactNativeButton 
    {...props}
    activityIndicatorColor={Colors.pink}
    textStyle={[{
      textAlign: 'center',
      color: Colors.pink,
      fontSize: 12,
      fontFamily: (Platform.OS === 'ios' ? 'Avenir' : 'Roboto'),
    }, props.textStyle]}
    disabledStyle={[{
      opacity: 0.6,
    }, props.disabledStyle]}
    style={[{
      height: 36,
      alignSelf: 'center',
      borderRadius: 24,
      paddingHorizontal: 30,
      paddingVertical: 0,
      marginBottom: 0,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.gray,
    }, props.style]}
  >
    {props.children}
  </ReactNativeButton>
)
