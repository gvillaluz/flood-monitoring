import { Text, TouchableOpacity } from "react-native";

export default function StartBtn() {
    return (
        <TouchableOpacity
            className="bg-primary_white rounded-2xl w-full p-5"
        >
            <Text
                className="text-center font-roboto text-normal font-bold text-primary_blue"
            >
                Get Started
            </Text>
        </TouchableOpacity>
    )
}