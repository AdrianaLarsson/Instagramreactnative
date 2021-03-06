import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Note from './note'

// import * as firebase from 'firebase'

//     /* // Your web app's Firebase configuration */
//     const firebaseConfig = {
//         apiKey: "AIzaSyD84K4jUQwDFuE8SAW_JeggNBkbbIRz44s",
//         authDomain: "dummy-7249d.firebaseapp.com",
//         databaseURL: "https://dummy-7249d.firebaseio.com",
//         projectId: "dummy-7249d",
//         storageBucket: "dummy-7249d.appspot.com",
//         messagingSenderId: "982753767618",
//         appId: "1:982753767618:web:b79b5122faa8b7a805cb5b",
//         measurementId: "G-5HY1H69R04"
//       };
//       firebase.initializeApp(firebaseConfig);

export default class Todo extends Component {

  

  constructor(props) {
    super(props);
    this.state = {

        noteArray: [],
        noteText: ''
    };
  }


  
  render() {
    let notes = this.state.noteArray.map((val, key)=>{
        return <Note key={key} keyval={key} val={val}
                deleteMethod={()=>this.deleteNote(key)}/>
      })
      return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.headerText}>Anteckningar</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {notes}
                
            </ScrollView>

            <View style={styles.footer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder='--> Anteckning'
                    onChangeText={(noteText)=> this.setState({noteText})}
                    value={this.state.noteText}
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'>
                         
                </TextInput>
                
            </View>
            <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
           
        </View>
    );
  }
  addNote(){
    if(this.state.noteText){
        var d = new Date();
        this.state.noteArray.push({
            'date':d.getFullYear()+
            "/"+(d.getMonth()+1) +
            "/"+ d.getDate(),
            'note': this.state.noteText
        });
        this.setState({ noteArray: this.state.noteArray });
        this.setState({noteText:''});
    }
}

deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
}
}

const styles = {
    container: {
        flex: 1,
    }, header: {
        backgroundColor: '#E93E43',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#dJd',
        width: 400
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 40
    },scrollContainer: {
        flex: 1,
        marginBottom: 100
    }, footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 30,
        backgroundColor: '#2525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 60,
        height: 60,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }


}