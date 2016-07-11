import React, { View } from 'react-native'

export default FormFooter = ({ children }) => (
  <View style={{
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 24,
  }}>
    {children}
  </View>
)
