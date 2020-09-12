/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {API_URL} from './config';
import Fact from './src/components/Fact';

const App = () => {
  const fetchData = async () => {
    const res = await fetch(`${API_URL}/facts`);
    const parsedRes = await res.json();
    setData(parsedRes);
  };

  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

   //Function used by flatlist that indicates how the item is going to be seen
  const renderItem = ({item}) => (
    <Fact key={item._id} fact={item} />
  )
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <Text style={styles.maintext} >Cat facts</Text>
          {data &&     
                  <FlatList 
                      data={data.all} //Taking the data saved from the API
                      renderItem={renderItem}
                      keyExtractor={(item) => item._id}
                  />   
          }
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  maintext: {
    fontSize: 20,
    textAlign: 'center' ,
  },
});

export default App;
