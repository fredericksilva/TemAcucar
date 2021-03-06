import React, { Component, View, Platform } from 'react-native'
import HtmlRender from 'react-native-html-render'

import Colors from "../Colors"
import Sentence from "./Sentence"

export default class HtmlSentence extends Component {
  renderNode(node) {
    const { name, children } = node
    const boldStyle = (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Black' } : { fontWeight: 'bold' })
    const italicStyle = (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Oblique' } : { fontStyle: 'italic' })
    let text
    let style = {}
    if (name === 'text') {
      text = node.text
    } else if (name === 'b') {
      text = children[0].text
      style = boldStyle
    } else if (name === 'i') {
      text = children[0].text
      style = italicStyle
    }
    return (
      <Sentence {...this.props} style={[style, this.props.style]}>
        { text }
      </Sentence>
    )
  }

  render() {
    const { children } = this.props
    return (
      <Sentence {...this.props} >
        <HtmlRender
          value={children}
          renderNode={this.renderNode.bind(this)}
        />
      </Sentence>
    )
  }
}
