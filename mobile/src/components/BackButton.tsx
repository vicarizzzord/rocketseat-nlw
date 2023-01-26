import { Touchable, TouchableOpacity } from "react-native";
import {AntDesign} from "@expo/vector-icons"
import colors from "tailwindcss/colors";
import {useNavigation} from "@react-navigation/native"

export function BackButton(){
    const {goBack} = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={goBack}
        >
            <AntDesign
                name="arrowleft"
                size={32}
                color={colors.zinc[400]}
            />

        </TouchableOpacity>
    )
}