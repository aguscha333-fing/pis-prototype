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
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Dimensions
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
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
  const renderItem =  ( {item} ) => (
    <Fact key={item._id} fact={item} />
  )
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <Text style={styles.maintext} >Cat facts</Text>
          { data &&     
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
  container: {
    justifyContent: "flex-start",
  },

  maintext: {
    fontSize: 20,
    textAlign: 'center' ,
  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },

  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
