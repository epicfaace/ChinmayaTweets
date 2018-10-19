import React,{Component} from 'react';
import {Image,Dimensions,ScrollView,TouchableOpacity,Button,View,Text,FlatList,StyleSheet,Platform,Animated,Easing} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from '../containers/SearchBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TweetItem from './TweetItem';
import LogOutHeader from './LogOutHeader';


class TweetList extends Component{
    titleXPos=new Animated.Value(0);
    animatedTitle=(direction=1)=>{
    const width=Dimensions.get('window').width-230;
    Animated.timing(
        this.titleXPos,
        {toValue: direction*(width/2),
          duration:700,
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

    onlogout=()=>{
      this.props.navigation.navigate('Auth');
    }

    render() {
      if(this.props.allTweets!=='empty')
      {
        const allTweets=this.props.allTweets;
        return(
          <View style={styles.mainContainer}>
            <LogOutHeader onlogout={()=>this.onlogout()}/>
            <View style={styles.search}>
              <SearchBar/>
            </View>
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
            <LogOutHeader onBack={()=>this.onBack()}/>
            <View style={styles.search}>
              <SearchBar/>
            </View>
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
            <Text style={styles.header}>Chinmaya Echoes</Text>
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
      marginTop:Platform.OS === 'ios' ?20:0,
      marginBottom:Platform.OS === 'ios' ?30:35,
    },
    scrollContainer:{
      marginBottom:150,
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
      marginBottom:10,
    },

});
