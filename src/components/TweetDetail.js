import React,{Component} from 'react';
import {Image,ScrollView,TouchableOpacity,Button,View,Text,FlatList,StyleSheet,Platform,Animated,Easing} from 'react-native';
import {connect} from 'react-redux';
class TweetDetail extends Component{
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
      const tweetId=this.props.navigation.state.params.tweetId;
      this.animatedTitle();
    }

    render() {
      if(this.props.allTweets!=='empty')
      {
        const allTweets=this.props.allTweets;
        const tweetDetail=allTweets.filter((tweet)=>tweet.id==this.props.navigation.state.params.tweetId);
        console.log(tweetDetail);
        return(
          <ScrollView>
            {tweetDetail.map(tweet=>
                <View key={tweet.id}>
                  <Image
                    source={{uri:tweet.featured_image}}
                    style={styles.image}/>
                  <View style={styles.titleView}>
                    <Text style={styles.title}>{tweet.title.rendered}</Text>
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.contentMatter}>{tweet.content}</Text>
                  </View>
                </View>
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

export default connect(mapStateToProps)(TweetDetail);


const styles=StyleSheet.create({
  content:{
    marginHorizontal:10,
    marginVertical:10,
    padding:10,
    borderColor:"#bbb",
    borderWidth:1,
    borderRadius:7,
    backgroundColor:'#476b6b',
  },
  contentMatter:{
    fontSize:18,
    fontFamily: 'Cochin',
    color:'white',
  },
  titleView:{
    alignItems:'center',
    backgroundColor:'#476b6b',
    padding:10,

  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
  },
  image:{
    height:400,
    width:'100%',
  },
});
