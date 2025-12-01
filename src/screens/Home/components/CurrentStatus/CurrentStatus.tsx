import { Text, View } from "react-native";
import AlertLevel from "./components/AlertLevel";

export default function CurrentStatus() {
    return (
        <View
            className="bg-secondary_white rounded-2xl overflow-hidden p-6 gap-2"
            style={{
                borderWidth: 1,
                borderColor: 'rgba(18, 18, 18, 0.1)',
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 1,
                shadowRadius: 17.6,
                elevation: 6
            }}
        >
            <Text
                className="font-roboto font-bold text-normal text-secondary_black"
                style={{
                    lineHeight: 24
                }}
            >
                Current Status
            </Text>
            <AlertLevel bgColor="rgba(250, 204, 21, 1)" level={15.5} />
            <View
                className="flex-row justify-between flex-1"
            >
                <View
                    className="bg-primary_white h-[77px] w-[145px] rounded-2xl p-2"
                >
                    <Text
                        className="font-roboto text-normal text-secondary_black"
                    >
                        Normal
                    </Text>
                    <Text
                        className="font-bold font-roboto text-primary_black text-[34px]"
                    >
                        12m
                    </Text>
                </View>
                <View
                    className="h-[77px] w-[145px] rounded-2xl p-2"
                    style={{
                        backgroundColor: 'rgba(254, 242, 242, 1)'
                    }}
                >
                    <Text
                        className="font-roboto text-normal text-critical_red_v2"
                    >
                        Critical
                    </Text>
                    <Text
                        className="font-roboto font-bold text-[34px] text-critical_red"
                    >
                        18m
                    </Text>
                </View>
            </View>
        </View>
    )
}