import GradientHeader from "@/src/components/GradientHeader"
import { ScrollView, View } from "react-native"
import DetailedReadings from "./components/DetailedReadings"
import Level from "./components/Level"

export default function DetailScreen() {
    const readings = [
        {
            time: '4:15 PM',
            meter: 15.5
        },
        {
            time: '4:00 PM',
            meter: 15.3
        },
        {
            time: '3:45 PM',
            meter: 15.0
        },
        {
            time: '3:30 PM',
            meter: 14.7
        },
        {
            time: '3:15 PM',
            meter: 14.5
        },
        {
            time: '3:00 PM',
            meter: 14.2
        }
    ]

    const peakLevel = readings.reduce((prev, curr) => (curr.meter > prev.meter ? curr : prev), readings[0])
    const lowestLevel = readings.reduce((prev, curr) => (curr.meter < prev.meter ? curr : prev), readings[0])

    return (
        <ScrollView
            className="bg-pink_white"
        >
            <GradientHeader 
                colors={['rgba(241, 83, 0, 1)', 'rgba(237, 201, 141, 1)']}
            />

            <View
                className="px-7 mt-[-60px] gap-5 pb-7"
            >
                <DetailedReadings readings={readings} />
                
                <View
                    className="flex-row justify-between items-center gap-2"
                >
                    <Level isPeak={true} values={peakLevel} />
                    <Level isPeak={false} values={lowestLevel} />
                </View>
            </View>
        </ScrollView>
    )
}