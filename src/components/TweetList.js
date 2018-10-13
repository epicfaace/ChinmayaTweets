import React,{Component} from 'react';
import {Image,ScrollView,TouchableOpacity,Button,View,Text,FlatList,StyleSheet,Platform,Animated,Easing} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class TweetList extends Component{
    titleXPos=new Animated.Value(0);
    animatedTitle=(direction=1)=>{
    Animated.timing(
        this.titleXPos,
        {toValue: direction*75,
          duration:850,
          easing:Easing.spring
        }).start(({finished})=> {
          if(finished){
            this.animatedTitle(-1*direction);
          }
        });
    }

    componentDidMount() {
      this.animatedTitle();
    }

    goToDetail=(Id)=>{
      this.props.navigation.navigate('TweetDetail',{tweetId:Id});

    }

    onBack=()=>{
      this.props.navigation.navigate('Auth');
    }
    render() {
      if(this.props.allTweets!=='empty')
      {
        const allTweets=this.props.allTweets;
        return(
          <ScrollView>
            <TouchableOpacity onPress={()=>this.onBack()} style={styles.goBack}>
                  <Text style={styles.backLink}>
                    <FontAwesome name={'sign-out'} style={styles.chevron}/>
                     Log Out
                  </Text>
            </TouchableOpacity>
            {allTweets.map(tweet=>
                <TouchableOpacity key={tweet.id} onPress={()=>this.goToDetail(tweet.id)} style={styles.tweet}>
                  <View style={styles.info}>
                    <Text style={styles.title}>{tweet.title.rendered}</Text>
                    <Text style={styles.date}>{tweet.tweet_date}</Text>
                    <Image
                          source={{uri:tweet.featured_image}}
                          style={{height:270, width:'100%'}}/>
                    <Text style={styles.content}>{tweet.content.slice(0,100)}</Text>
                  </View>
                  <View style={styles.readMore}>
                      <Text style={{color:'#999999'}} >Read More...</Text>
                  </View>
                </TouchableOpacity>
            )}
          </ScrollView>
        );
      }
      return (
        <Animated.View style={[{left:this.titleXPos}, styles.container]}>
            <Text style={styles.header}>CCMT TWEETS</Text>
        </Animated.View>
      );
    }
}



const mapStateToProps=(state)=>{
  return{allTweets:state.TweetsReducer};
}

export default connect(mapStateToProps)(TweetList);

const styles=StyleSheet.create({
    backLink:{
      color:'white',
      fontSize:20,
    },
    goBack:{
      padding:7,
      alignItems:'flex-start',
      backgroundColor:'#999999',
    },
    chevron:{
      fontSize:20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 30,
        fontWeight:'900',
        fontFamily:'Cochin'
    },
    tweet:{
        marginHorizontal:10,
        marginTop:10,
    },
    info:{
        padding:10,
        backgroundColor:"#fff",
        borderColor:"#bbb",
        borderWidth:1,
        borderTopWidth:0,
        borderBottomWidth:0,
        borderBottomStartRadius:0,
        borderBottomEndRadius:0,
        borderRadius:7,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,
    },
    image:{
        height:250,
        width:'100%',
    },
    button:{
        flexDirection:'row',
        justifyContent: 'center',
    },
    date:{
        fontSize:12,
        fontWeight:'bold',
        color:'grey',
        marginBottom:7,
    },
    readMore:{
        padding:10,
        backgroundColor:'#f2f2f2',
        borderWidth:1,
        borderColor:"#bbb",
        borderTopWidth:0,
        borderBottomStartRadius:7,
        borderBottomEndRadius:7,
    },
    content:{
        fontSize:18,
        fontFamily:Platform.OS === 'ios' ? 'cochin' : 'sans-serif-condensed',
        marginTop:10,
    },
});
