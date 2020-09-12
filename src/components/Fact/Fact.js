import React from 'react';
import {object} from 'prop-types';
import {Text, View,} from 'react-native';

import styles from './Fact.styles';

const Fact = ({fact: {_id, text, upvotes}}) => (
    <View key={_id} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View>
        <Text>Upvotes</Text>
        <Text>{upvotes}</Text>
      </View>
    </View>
);

Fact.propTypes = {
  fact: object.isRequired,
};

export default Fact;
