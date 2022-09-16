
import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { constants, fonts, globalStyle } from "../../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../../../App";


const Selector = () => {
    
    const { i18n, t } = useTranslation();
    const {colors,dark} = useTheme()
    const { setTheme  } = React.useContext(ThemeContext);
    const selectedLanguageCode = i18n.language;
    // const [selectedTheme, setSelectedTheme] = useState()
    const setLanguage = (code) => {
        return i18n.changeLanguage(code);
    };

    return (
      <SafeAreaView style={{flex: 1}} edges = {["top"]}>
          <View style={globalStyle.container}>
            <View style={[styles.card,{backgroundColor: colors.card}]}>
                <Text style={[globalStyle.title,{fontSize: 25, color: colors.text}]}>{t("common:languageSelector")}</Text>
                {
                    constants.LANGUAGES.map((language) => {
                        const selectedLanguage = language.code === selectedLanguageCode;
                        return (
                            <Pressable
                                key={language.code}
                                style={styles.buttonContainer}
                                disabled={selectedLanguage}
                                onPress={() => setLanguage(language.code)}
                            >
                                <Text style={[styles.text, {fontFamily: selectedLanguage?fonts.bold:fonts.regular,color: selectedLanguage ? colors.primary : colors.text}]}>
                                {language.label}
                                </Text>
                            </Pressable>
                        );
                    })
                }
            </View>
            
            <View style={[styles.card,{backgroundColor: colors.card}]}>
                <Text style={[globalStyle.title,{fontSize: 25, color: colors.text}]}>{t("common:selectTheme")}</Text>
                  <Pressable
                      style={styles.buttonContainer}
                      disabled={dark}
                      onPress={() => setTheme("dark")}
                  >
                      <Text style={[styles.text, {fontFamily: dark?fonts.bold:fonts.regular,color: dark? colors.primary : colors.text}]}>
                      {t("common:dark")}
                      </Text>
                  </Pressable>
                  <Pressable
                      style={styles.buttonContainer}
                      disabled={!dark}
                      onPress={() => setTheme("light")}
                  >
                      <Text style={[styles.text, {fontFamily: !dark?fonts.bold:fonts.regular,color: dark? colors.text : colors.primary}]}>
                      {t("common:light")}
                      </Text>
                  </Pressable>
                
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
    fontSize: 28,
    fontFamily: fonts.bold,
  },
  buttonContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.medium,
    // paddingVertical: 4,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});
export default Selector;