import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import Event from './components/Event';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';



// name image type 

// 2 events in a page

// no loading button, autoload

export default function App() {

  const [events, setEvents] = useState([{ "_id": "123", "event_image": null, "event_name": "Hello", "event_type": "Hello 2" }])
  const [pageno,setPageno] = useState(-1)

  const  getUsers =async () => {
    await axios.get(`${process.env.EXPO_PUBLIC_API_URL}${pageno}`, {
      headers: {
        Authorization: process.env.EXPO_PUBLIC_BTOKEN
      }
    }).then(response => setEvents(response.data.data));
  }

  const loadMore = ()=>{
    setPageno(pageno+1);
  }

  useEffect(() => {
    getUsers();
  }, [pageno])

  return (
    <View style={styles.container}>
      {console.log(pageno)}
      <View style={styles.topbar}>
        <Text style={styles.head}>View your Events here</Text>
      </View>
      <FlatList
        data={events}
        renderItem={({ item }) => <Event item={item} />}
        keyExtractor={(item) => item._id}
        ListFooterComponent={<Loader/>}
        onEndReached={loadMore}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: "8%",
    
  },
  topbar: {
    height: "7%",
    backgroundColor: "#E7DECB",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  head:{
    fontWeight:"bold",
    fontSize:20
  }

});
