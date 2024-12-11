import { Dimensions } from "react-native"

const { height, width } = Dimensions.get('window')
export const theme = {
    colors: {
        primary: "#2A4D50",
        secondary: "#DDF0FF",
        tertiary: "#FF7754",
        gray: "#83829A",
        offWhite: "#F3F4F8",
        white: "#FFF", 
        black: "#000",
        lightWhite: "#FAFAFC"
    },
    sizes: {
        xSmall: 10,
        small: 12,
        medium: 16,
        large: 20,
        xLarge: 24,
        xxlarge: 44,
        width,
        height
    }
}