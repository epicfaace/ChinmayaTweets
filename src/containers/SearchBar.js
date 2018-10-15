import React,{Component} from 'react';
import {Button,Modal,Text,View,TouchableHighlight,TextInput,StyleSheet,TouchableOpacity,Platform,Dimensions,Picker} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchTweets} from '../actions';
import debounce from 'lodash.debounce';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={
            searchTerm:'',
            multiLine:true,
            filterDisplay:false,
            filter:'All'
        }
    }

    width=Dimensions.get('window').width;
    halfWidth=this.width/1.8;
    quarterWidth=this.width/2.7;

    setFilter=(title)=>{
      this.setState({filter:title});
      this.setState({filterDisplay:!this.state.filterDisplay})
    }


    debounceSearchDeals=debounce(this.props.searchTweets,300);
    handleChange=(searchTerm)=>{
      this.setState({searchTerm},()=>{
        this.debounceSearchDeals(this.state.searchTerm);
      });
    }

    render(){
      const filter=[
        {
            title:'All',
        },
        {
            title:'Video',
        },
        {
            title:'Post',
        },
      ]
        return(
          <View style={styles.mainContainer}>

            <Modal
              visible={this.state.filterDisplay}
              onRequestClose={() =>alert('Modal has been closed.')}
              animationType={"slide"} transparent={true}>
              <View style={styles.modal}>
                <Text style={{alignItems:'center',fontWeight:'bold'}}>Pick Filter</Text>
                {filter.map((value,index)=>{
                  return <TouchableHighlight style={{padding:20}} key={index} onPress={()=>this.setFilter(value.title)}>
                    <Text>{value.title}</Text>
                  </TouchableHighlight>
                })}
                <TouchableHighlight onPress={()=>this.setState({filterDisplay:!this.state.filterDisplay})} style={{padding:20}}>
                  <Text style={{color:'#999'}}>Cancel</Text>
                </TouchableHighlight>
              </View>
            </Modal>

            <TouchableHighlight onPress={()=>this.setState({filterDisplay:!this.state.filterDisplay})} style={[styles.leftContainer, {width:this.quarterWidth}]}>
              <View style={{flexDirection:'row'}}>
                <FontAwesome name={'angle-down'} style={{fontSize:20,marginRight:5}}/>
                <Text style={styles.filter}>Filter: {this.state.filter}</Text>
              </View>
            </TouchableHighlight>

            <View style={[styles.rightContainer, {width:this.halfWidth}]}>
                <FontAwesome name={'search'} style={styles.searchIcon}/>
                <TextInput
                    placeholder='Search...'
                    value = {this.state.searchTerm}
                    multiline={false}
                    underlineColorAndroid="transparent"
                    style={styles.input}
                    onChangeText={this.handleChange}
                />
            </View>
          </View>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({searchTweets},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);

const styles=StyleSheet.create({
    input:{
        fontFamily:"Times New Roman",
        fontSize:20,
        padding:10,
        textAlign:'left',

        marginRight:40,
    },
    mainContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#e6e6e6',
    },
    rightContainer:{
      flexDirection:'row',
      backgroundColor:'#d1e0e0',
      borderRadius:8,
      marginRight:10
    },
    searchIcon:{
      marginTop: Platform.OS === 'ios' ? 12:15,
      marginLeft:12,
      fontSize:15,
      color:'#3366cc'
    },
    leftContainer:{
      backgroundColor:'#d1e0e0',
      borderRadius:8,
      marginLeft:10,
      padding:10,
    },
    filter:{
      fontFamily:"Times New Roman",
      fontSize:18,
      color:"#8c8c8c"
    },
    modal:{
      height:'100%',
      width:'100%',
      backgroundColor:"#e6e6e6",
      padding:20,
      alignItems:'center',
      marginTop:Platform.OS === 'ios' ?105:80,
    },

});
