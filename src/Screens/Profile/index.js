
import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { colors, globalStyle } from "../../theme";
import { SafeAreaView } from "react-native-safe-area-context";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ur", label: "Urdu" },
];

const Selector = () => {
    
    const { i18n } = useTranslation();
    const selectedLanguageCode = i18n.language;
    
    const setLanguage = (code) => {
        return i18n.changeLanguage(code);
    };

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}} edges = {["top"]}>
          <View style={globalStyle.container}>
            <View style={styles.card}>
              <Text style={[globalStyle.title,{fontSize: 25, color: colors.text}]}>Language</Text>
                {
                    LANGUAGES.map((language) => {
                        const selectedLanguage = language.code === selectedLanguageCode;
                        return (
                            <Pressable
                                key={language.code}
                                style={styles.buttonContainer}
                                disabled={selectedLanguage}
                                onPress={() => setLanguage(language.code)}
                            >
                                <Text
                                  style={[selectedLanguage ? styles.selectedText : styles.text]}
                                >
                                {language.label}
                                </Text>
                            </Pressable>
                        );
                    })
                }
            </View>
          </View>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#444",
    fontSize: 28,
    fontWeight: "600",
  },
  buttonContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: "#000",
    paddingVertical: 4,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: "600",
    color: "tomato",
    paddingVertical: 4,
  },
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 10,
    padding: 20
  }
});
export default Selector;