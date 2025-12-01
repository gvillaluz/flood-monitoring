import GradientHeader from "@/src/components/GradientHeader";
import { ScrollView, View } from "react-native";
import Contacts from "./components/Contacts";
import SafeZones from "./components/SafeZones";

export default function SafetyScreen() {
    const safeZones = [
        {
            zone: 'Concepcion Elementary School',
            distance: 1.2
        },
        {
            zone: 'Barangay Hall Complex',
            distance: 1.8
        },
        {
            zone: 'Cathedral',
            distance: 2.1
        }
    ]

    const contacts = [
        {
            name: 'Emergency Hotline',
            number: '911'
        },
        {
            name: 'Red Cross',
            number: '143'
        },
        {
            name: 'Bureau of Fire Protection',
            number: '(02) 8426-0219'
        },
        {
            name: 'Philippine National Police',
            number: '117'
        }
    ]

    return (
        <ScrollView
            className="bg-pink_white"
        >
            <GradientHeader 
                colors={['rgba(0, 153, 100, 1)', 'rgba(82, 216, 70, 1)']}
            />

            <View
                className="px-7 mt-[-60px] gap-5 pb-7"
            >
                <SafeZones values={safeZones} />
                <Contacts contacts={contacts} />
            </View>
        </ScrollView>
    )
}