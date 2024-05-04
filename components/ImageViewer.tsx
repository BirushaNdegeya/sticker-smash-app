import { StyleSheet, Image } from "react-native";
import PlaceholderImage from '../assets/images/background-image.png';

const ImageViewer = () => {
    return (
        <Image
            source={PlaceholderImage}
            style={styles.image}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})

export default ImageViewer;