import { Text, View, StyleSheet, Image } from "react-native";
import photo from "../assets/img/logo_icon.png";

const logged = () => {
  return (
    <View style={styles.overall}>
      <Image source={photo} style={styles.uestimg} />
      <Text>Welcome Vedant Shekhar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overall: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  uestimg: {
    height: 60,
    width: 60,
  },
});

export default logged;
