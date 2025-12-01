import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'rgba(43, 106, 237, 1)',
                tabBarStyle: {
                    height: 80,
                    paddingTop: 8
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                }
            }}
        >
            <Tabs.Screen 
                name="home" 
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
                }} 
            />
            <Tabs.Screen 
                name="details" 
                options={{
                    title: 'Details',
                    tabBarIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
                }} 
            />
            <Tabs.Screen 
                name="safety" 
                options={{
                    title: 'Safety',
                    tabBarIcon: ({ color, size }) => <Ionicons name="shield" color={color} size={size} />
                }} 
            />
            <Tabs.Screen 
                name="ai" 
                options={{
                    title: 'AI',
                    tabBarIcon: ({ color, size }) => <Ionicons name="hardware-chip" color={color} size={size} />
                }} 
            />
        </Tabs>
    )
}