import React,{ useState } from 'react';
import { StyleSheet, Text, TextInput,View,TouchableOpacity,ScrollView,Dimensions,Picker,KeyboardAvoidingView,Platform,TouchableWithoutFeedback} from 'react-native';
import DatePicker from 'react-native-datepicker';


const config = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}

export default function Question() {
  const [selectedValue, setSelectedValue] = useState("Datepicker");
  const [value, onChangeText] = React.useState('');
  const [date, setDate] = useState();
    return (
      <View style={styles.container}>
     
        {/* <View style={styles.container1}>
         */}
        <View style={styles.container2}>
        <Text style={styles.styleText}>Select Question Type*</Text>
        </View>
        <View style={styles.container3}>
        <Picker
        selectedValue={selectedValue}
        style={{ height:25,color: "#722f9e",fontSize: 16, width: 250,textAlign:"center", }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Datepicker" value="Datepicker" />
        <Picker.Item label="Radio" value="Radio" />
        <Picker.Item label="Dropdown" value="Dropdown" />
        
      </Picker>
        </View>
        
      {selectedValue==="Datepicker" ?
      // <View >
      // <Text >Select Question Type</Text>
      // </View>
      <ScrollView>
      <KeyboardAvoidingView
   // adjust the value here if you need more padding
  style = {{ flex: 1 ,paddingTop:30,paddingBottom:30,}}
  behavior = "padding" >
        
        <Text style={styles.styleText}>Add Question*</Text>
        
      <TextInput
      style={{ height: 80, borderColor: 'gray',width: 255,justifyContent: 'flex-start',marginLeft:config.deviceWidth * 0.1,paddingTop:0, borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <View style={styles.container2} ><Text style={styles.styleText}>Add Text*</Text>
  
  <DatePicker
        style={{width: 200,padding:5}}
        date={date}
        mode="date"
        placeholder="2022-06-01"
        format="YYYY-MM-DD"
        minDate="2018-06-01"
        maxDate="2022-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
         
        }}
        onDateChange={(date) =>setDate(date) }
      />  
  </View>
   </KeyboardAvoidingView>
   </ScrollView>
      :
      <Text>Not Fine.</Text>
        }
        <TouchableOpacity  style={styles.styleButton1}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      marginTop:20,
      
    },
    container1: {
      flex: 1,
      
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    container2:{
      flexDirection:'column',
      padding:10,
      borderColor:'black',
      // margin: 15,
      // borderWidth:1,
      marginLeft: config.deviceWidth * 0.1,
      
      width : config.deviceWidth * 0.8
      
    },
    container3:{
      flexDirection:'column',
      padding:10,
      borderColor:'#722f9e',
      borderWidth:1,
      // margin: 15,
      marginLeft: config.deviceWidth * 0.1,
      marginBottom:16,
      width : config.deviceWidth * 0.8
      
    },
    container4:{
      flexDirection:'column',
      // padding:10,
      // borderColor:'#722f9e',
      // borderWidth:1,
      // margin: 15,
      marginLeft: config.deviceWidth * 0.5,
      marginBottom:16,
      width : config.deviceWidth * 0.8
      
    },
    styleText:{

      fontSize: 16,
      color: "#722f9e",
      fontWeight: "normal",
      textAlign:"center",
    },
    styleButton1: {
      backgroundColor: "#009688",
      borderRadius: 10,
      padding: 10,
      marginLeft: config.deviceWidth * 0.1,
      marginBottom:16,
      width : config.deviceWidth * 0.8
    },
    buttonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }

    
  });
  