import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem, View } from '@tarojs/components'

import './head.less'

class Head extends Component {
    render() {
        return (
            <View>hiohoijo</View>    
            // <Swiper
            //     className='test-h'
            //     indicatorColor='#999'
            //     indicatorActiveColor='#333'
            //     vertical={false}
            //     circular
            //     indicatorDots
            //     autoplay>
            //     <SwiperItem>
            //         <View className='demo-text-1 img'>1</View>
            //     </SwiperItem>
            //     <SwiperItem>
            //         <View className='demo-text-2 img'>2</View>
            //     </SwiperItem>
            //     <SwiperItem>
            //         <View className='demo-text-3 img'>3</View>
            //     </SwiperItem>
            // </Swiper>
        )
    }
}

export default Head;
