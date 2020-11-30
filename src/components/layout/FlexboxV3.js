import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor='#FF801A' lado={20} />
            <Quadrado cor='#50D1F6' lado={30} />
            <Quadrado cor='#DD22C1' lado={40} />
            <Quadrado cor='#8312ED' lado={50} />
            <Quadrado cor='#36C9A7' lado={60} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})