import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

export type ScreenProp = NativeStackScreenProps<StackParamList>;