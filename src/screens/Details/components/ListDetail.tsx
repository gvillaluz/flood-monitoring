import { Image, Text, View } from "react-native"

type Props = {
    time: string,
    meter: number
}

type ObjectProps = {
    readings: Props[]
}

export default function ListDetail({ readings }: ObjectProps) {
    return (
        <View
            className="gap-2"
        >
            {readings.map((detail, i) => (
                <View
                    key={i}
                    className="flex-row justify-between items-center py-2 px-4 rounded-sm"
                    style={{
                        backgroundColor: i === 0 ? 'rgba(254, 243, 199, 1)' : 'rgba(249, 250, 251, 1)',
                        borderColor: i === 0 ? 'rgba(251, 223, 110, 1)' : '',
                        borderWidth: i === 0 ? 1 : 0
                    }}
                >
                    <View
                        className="flex-row justify-between gap-4"
                    >
                        <Text
                            className="font-roboto text-normal text-tertiary_black"
                        >
                            {detail.time}
                        </Text>
                        <Text
                            className="font-roboto text-normal text-primary_black"
                        >
                            {detail.meter}m
                        </Text>
                    </View>
                    <Image 
                        source={require('../../../../assets/images/level-2.png')}
                        style={{
                            height: 25,
                            width: 25
                        }}
                        resizeMode="contain"
                    />
                </View>
            ))}
        </View>
    )
}