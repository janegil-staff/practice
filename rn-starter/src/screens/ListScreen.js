import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1', age: 20},
    {name: 'Friend #2', age: 20},
    {name: 'Friend #3', age: 20},
    {name: 'Friend #4', age: 20},
    {name: 'Friend #5', age: 20},
    {name: 'Friend #6', age: 20},

  ]
  return (
    <FlatList keyExtractor={(friend) => friend.name}  data={friends} renderItem={({item}) => {
      return <Text style={styles.textStyle}>{item.name}</Text>
    }} />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})
export default ListScreen