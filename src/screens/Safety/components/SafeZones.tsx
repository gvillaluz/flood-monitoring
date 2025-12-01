import { Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

type Props = {
    zone: string,
    distance: number
}

type ObjectProps = {
    values: Props[]
}

export default function SafeZones({ values }: ObjectProps) {
    return (
        <View
            className="bg-white rounded-2xl overflow-hidden p-6 gap-2"
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
                Nearest Safe Zones
            </Text>
            <View
                className='gap-2 pb-3'
            >
                {values.map((safeZone, i) => (
                    <View
                        key={i}
                        className='flex-row justify-between items-center py-3 px-3 rounded-md'
                        style={{
                            borderColor: 'rgba(34, 197, 94, 0.5)',
                            borderWidth: 0.5
                        }}
                    >
                        <View
                            className='gap-1'
                        >
                            <Text
                                className='font-roboto text-secondary_black'
                                style={{
                                    fontSize: 13
                                }}
                            >
                                {safeZone.zone}
                            </Text>
                            <Text
                                className='font-roboto text-secondary_black'
                                style={{
                                    fontSize: 10
                                }}
                            >
                                {safeZone.distance}m
                            </Text>
                        </View>
                        <TouchableOpacity
                            className='p-2 rounded-xl'
                            style={{
                                backgroundColor: 'rgba(0, 166, 62, 1)'
                            }}
                        >
                            <Ionicons 
                                name='navigate-outline'
                                size={20}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    )
}