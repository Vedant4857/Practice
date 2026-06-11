import { StyleSheet, Text, View, Image } from "react-native";
import photo from "../assets/img/logo_icon.png";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.uestimg} />
      <Text style={[styles.title, { color: "Blue" }]}>Uest School</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>School ERP</Text>

      <View style={styles.card}>
        <Text>Login</Text>
      </View>
      <Link href="/about" style={styles.link}>
        About Page
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact Page
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  uestimg: {
    height: 80,
    width: 80,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    color: "blue",
  },
});
