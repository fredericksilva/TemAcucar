import React, { Component, View, TouchableOpacity } from 'react-native'
import truncate from 'truncate'
import Colors from "../Colors"
import Icon from "./Icon"
import Sentence from "./Sentence"
import UserImage from "./UserImage"

export default class TransacionMiniature extends Component {
  handleChat() {
    const { onChat, transaction } = this.props
    onChat(transaction)
  }

  render() {
    const { transaction, auth } = this.props
    const { user, last_message_text } = transaction
    const { currentUser } = auth
    return (
      <TouchableOpacity onPress={this.handleChat.bind(this)} style={{
        borderColor: Colors.ice,
        borderBottomWidth: 0.5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <UserImage size={24} source={{uri: user.image_url}} style={{marginRight: 6}} />
        <View style={{
          flexDirection: 'column',
          flex: 1,
        }}>
          <Sentence style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 10,
            color: Colors.pink,
          }}>
            { user.id === currentUser.id ? 'Eu' : `${user.first_name} ${user.last_name}` }
          </Sentence>
          <Sentence style={{
            fontSize: 9,
            color: Colors.ice,
          }}>
            { truncate(last_message_text, 50) }
          </Sentence>
        </View>
        <Icon name="keyboard-arrow-right" />
      </TouchableOpacity>
    )
  }
}