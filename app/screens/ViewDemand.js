import React, { Component, View } from 'react-native'

import Colors from "../Colors"
import Sentence from "../components/Sentence"
import DemandHeader from "../components/DemandHeader"
import DemandButtons from "../components/DemandButtons"

export default class ViewDemand extends Component {
  componentWillReceiveProps(nextProps) {
    const { onViewCreatedTransaction, dashboard } = nextProps
    const { creatingTransaction, createTransactionError } = dashboard
    const oldCreatingTransaction = this.props.dashboard.creatingTransaction
    if (oldCreatingTransaction && !creatingTransaction && !createTransactionError) {
      onViewCreatedTransaction()
      return
    }
    const { onDashboard, dashboard: { demands } } = nextProps
    const oldDemands = this.props.dashboard.demands
    if (demands.length !== oldDemands.length && oldDemands.length > 0) {
      onDashboard()
    }
  }

  render() {
    const { demand, dashboard, onFlagDemand, onCreateTransaction, onRefuseDemand } = this.props
    const { demands } = dashboard
    const { description } = demand
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
      }}>
        <View style={{
          alignSelf: 'stretch',
          paddingHorizontal: 10,
        }}>
          <View style={{
            flex: 1,
            alignSelf: 'stretch',
          }}>
            <DemandHeader demand={demand} />
          </View>
        </View>
        <Sentence style={{
          fontSize: 12,
          margin: 20,
        }}>
          {description}
        </Sentence>
        <DemandButtons
          demand={demand}
          demands={demands}
          onFlagDemand={onFlagDemand}
          onCreateTransaction={onCreateTransaction}
          onRefuseDemand={onRefuseDemand}
        />
      </View>
    )
  }
}
