import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

export default function App(props) {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
