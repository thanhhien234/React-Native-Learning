import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{backgroundColor:"blue"}}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;
