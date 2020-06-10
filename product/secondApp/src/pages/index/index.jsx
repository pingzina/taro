import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

import Head from '../../components/head/head'

import { AtMessage, AtButton } from 'taro-ui'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  handleClick(type) {
    Taro.atMessage({
      'message': '消息通知',
      'type': type,
    })
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <AtMessage />
        <AtButton onClick={this.handleClick.bind(this, 'success')}>
          成功消息
        </AtButton>
        <Text>Hello world!</Text>
        <Head></Head>
      </View>
    )
  }
}
