import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import AddItem, {IItem} from "./src/components/AddItem";

const App = () => {
  const [shoppingList, setShoppingList] = useState<IItem>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List"/>
      <View style={styles.contentWrapper}>
        <AddItem
          setShoppingList = {setShoppingList}
          shoppingList = {shoppingList}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
});

export default App;