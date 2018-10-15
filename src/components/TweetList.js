import React,{Component} from 'react';
import {Image,Dimensions,ScrollView,TouchableOpacity,Button,View,Text,FlatList,StyleSheet,Platform,Animated,Easing} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from '../containers/SearchBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TweetItem from './TweetItem'

const width=Dimensions.get('window').width;
const newWidth=Platform.OS === 'ios' ? width*0.2 : width*0.2;

class TweetList extends Component{
    titleXPos=new Animated.Value(0);
    animatedTitle=(direction=1)=>{
    Animated.timing(
        this.titleXPos,
        {toValue: direction*newWidth,
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
          <View style={styles.mainContainer}>
            <View style={styles.search}>
              <SearchBar/>
            </View>
            <TouchableOpacity onPress={()=>this.onBack()} style={styles.goBack}>
                  <Text style={styles.backLink}>
                    <FontAwesome name={'sign-out'} style={styles.chevron}/>
                     Log Out
                  </Text>
            </TouchableOpacity>
            <View style={styles.scrollContainer}>
              <FlatList
                data={allTweets}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <TweetItem onPress={()=>this.goToDetail(item.id)} tweet={item}/>}
                />
            </View>
          </View>
        );
      }
      if(this.props.searchTweets!=='empty')
      {
        const searchTweets=this.props.searchTweets;
        console.log(searchTweets);
        return(
          <View style={styles.mainContainer}>
            <View style={styles.search}>
              <SearchBar/>
            </View>
            <TouchableOpacity onPress={()=>this.onBack()} style={styles.goBack}>
                  <Text style={styles.backLink}>
                    <FontAwesome name={'sign-out'} style={styles.chevron}/>
                     Log Out
                  </Text>
            </TouchableOpacity>
            <View style={styles.scrollContainer}>
              <FlatList
                data={searchTweets}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <TweetItem onPress={()=>this.goToDetail(item.id)} tweet={item}/>}
                />
            </View>
          </View>
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
  return{allTweets:state.TweetsReducer ,searchTweets:state.SearchReducer}
}

export default connect(mapStateToProps)(TweetList);

const styles=StyleSheet.create({
    mainContainer:{
      backgroundColor:'#e6e6e6',
    },
    scrollContainer:{
      marginBottom:180,
    },
    goBack:{
      padding:7,
      backgroundColor:'#999999',
      alignItems:'flex-end',
    },
    backLink:{
      color:'white',
      fontSize:12,
    },
    chevron:{
      fontSize:16,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 30,
    },
    button:{
        flexDirection:'row',
        justifyContent: 'center',
    },
    search:{
      marginBottom:15,
    },

});
