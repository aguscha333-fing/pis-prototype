/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { API_URL } from '../config';

import Fact from './components/Fact';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

const App = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await fetch(`${API_URL}/facts`);
    const parsedRes = await res.json();
    setData(parsedRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <Text>Cat facts</Text>
          {data && data.all.map((item) => <Fact key={item._id} fact={item} />)}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
