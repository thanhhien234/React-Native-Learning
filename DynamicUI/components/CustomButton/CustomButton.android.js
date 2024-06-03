import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{backgroundColor:"red"}}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;