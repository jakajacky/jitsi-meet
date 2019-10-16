import React from 'react';
import {
    Animated,
    Keyboard,
    SafeAreaView,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
    Button,
    StyleSheet,
    Dimensions,
    LayoutAnimation,
    Image
} from 'react-native';
import { Header, LoadingIndicator, Text } from '../../base/react';
import GradientButton from "./GradientButton"
import { Icon } from '../../base/icons';

class JoinView extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {animationStart, animationChanged} = this.props
        return (
            <View style = { [
                styless.naviView,
                {left: animationStart?0:"100%"}
            ] }>
                <TouchableOpacity
                onPress={() => {
                    animationChanged(false)
                }}
                >
                    <Image
                    style={styless.backIcon}
                    resizeMode="contain" 
                    source={require('../../../../images/ArrowLeft.png')}
                    />
                </TouchableOpacity>
                <View style={
                    styless.containerTopView
                }>
                    <Text style={ styless.titleText }>
                        { "加入会议" }
                    </Text>
                    <Text style={ styless.contentText }>
                        { "视频在线通话系统" }
                    </Text>
                </View>

                <View style={styless.containerBottomView}>
                    
                    <GradientButton
                    text="加入会议"
                    textColor="#fff"
                    fontSize={ 15 }
                    radius={ 22 }
                    width={ Dimensions.get('window').width - 60 }
                    height={ 44 }
                    onClick={ function () {
                        alert('加入会议')
                    } }
                    ></GradientButton>
                    
                    <Text
                    style={{position:"absolute",bottom:40,color:"rgba(78, 88, 110, 1)",fontSize:12}}
                    >
                    {'All right reserved by 百视云'}
                    </Text>
                </View>
            </View>   
        )
    }
}

export default JoinView

const styless = StyleSheet.create({
    titleText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 40,
    },
    contentText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
        marginTop: 8,
        opacity: 0,
    },
    titleView: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    naviView: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 1
    },
    containerTopView: {
        marginTop: 34,
        marginLeft: 30,
    },
    containerBottomView: {
        marginLeft: 30,
        marginRight: 30,
        height: '35%',
        position: "absolute",
        bottom: 0,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    buttonView: {
        fontSize: 12,
        fontWeight: "bold"
    },
    backIcon: {
        width:18,
        height:16,
        marginTop: 58,
        marginLeft: 30,
    }
})