import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, SectionList} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Footer = ({title}) => (
  <View style={styles.footer}>
    <View style={styles.footerBar}></View>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      style={{flex: 1, backgroundColor: 'blue'}}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
      ListFooterComponent={<Footer />}
    />
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 200,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
  },
  header: {
    fontSize: 12,
    backgroundColor: '#fff',
  },
  footerBar: {
    position: 'absolute',
    backgroundColor: 'yellow',
    top: 0,
    width: '100%',
    height: 20,
  },
  title: {
    fontSize: 14,
  },
  footer: {
    position: 'relative',
    fontSize: 32,
    height: 1054,
    marginBottom: -1000,
    backgroundColor: 'red',
  },
});
