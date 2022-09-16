import { Dimensions, Text, View } from 'react-native';

export default {
    SCREEN_WIDTH: Dimensions.get('screen').width,
    SCREEN_HEIGHT: Dimensions.get('screen').height,
    LANGUAGES: [
        { code: "en", label: "English" },
        { code: "fr", label: "Français" },
    ],
    categories: ["General","Social","Crime","Political","Food", "Covid","Education","Sports","Entertainment"],
    DATE_FORMATE: "dddd, d MMM YYYY",
}