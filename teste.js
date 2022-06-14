import React from 'react';
import { FlatList, SafeAreaView, View, Text } from 'react-native';

const DATA = [
  { id: 0, title: "Primeiro item" },
  { id: 1, title: "Segundo item" },
  { id: 2, title: "Terceiro item" },
  { id: 3, title: "Quarto item" }
]

function Item(props) {
  return (
    <View style={{ height: 30, backgroundColor: '#AFC', padding: 10, margin: 10 }}>
      <Text>{props.title}</Text>
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={it => <Item title={it.item.title} />}
        keyExtractor={it => it.id}
      >

      </FlatList>
    </SafeAreaView>
  );
}

// renderItem={it => <Item title={it.item.title} />}
renderItem={it => <Text>{it.item.title}</Text>}
