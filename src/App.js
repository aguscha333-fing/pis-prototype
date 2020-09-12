/* eslint-disable react/no-multi-comp */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar, FlatList } from 'react-native';
import { API_URL } from '../config';
import Fact from './components/Fact';

const styles = StyleSheet.create({
  maintext: {
    fontSize: 20,
    textAlign: 'center',
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

  // Function used by flatlist that indicates how the item is going to be seen
  // eslint-disable-next-line react/prop-types
  const renderItem = ({ item }) => <Fact key={item._id} fact={item} />;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.maintext}>Cat facts</Text>
        {data && (
          <FlatList
            data={data.all} // Taking the data saved from the API
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default App;
