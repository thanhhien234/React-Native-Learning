import { useState } from 'react';
import { StyleSheet, Button, View, Modal, Text } from 'react-native';

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setIsModalVisible(true)} />
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)} // Required for Android back button
        //animationType="slide"  //slide, fade, none
        //presentationStyle='pageSheet' //fullScreen, pageSheet, formSheet, overFullScreen
      >
        <View style={styles.modalContentStyle}>
          <Text>Cannot implement style directly for Modal {'\n'} Wrap the modal content with a View{'\n'}</Text>
          <Text>Add transparent=true to to make it transparent and allow the modal content to overlay on top</Text>
          <Button title="Close Modal" onPress={() => setIsModalVisible(false)}/>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  modalContentStyle: {
    flex:1,
    marginVertical: 250,
    marginHorizontal: 50,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
