import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import BottomView from "../components/BottomView"
import BottomButton from "../components/BottomButton"

export default class SignUpFailed extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('SignUpFailed')
  }

  render() {
    return(
      <SimpleScreen navBar={true} navBarTitle="Já possui cadastro?" headline="Este e-mail já é cadastrado ;)">
        <TextBox style={{marginBottom: 30}}>
          Se você está cadastrado na versão antiga do Tem Açúcar, precisa criar uma nova senha.
        </TextBox>
        <Button onPress={Actions.pop}>
          Tentar outro e-mail
        </Button>
        <BottomView>
          <BottomButton onPress={Actions.requestPassword}>
            Criar nova senha
          </BottomButton>
        </BottomView>
      </SimpleScreen>
    )
  }
}
