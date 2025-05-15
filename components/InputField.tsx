import {
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    StyleSheet,
    StyleProp,
    TextStyle,
    ViewStyle,
    ImageStyle
} from "react-native";
import { InputFieldProps } from "@/types/type";

const InputField = ({
    label,
    icon,
    secureTextEntry = false,
    labelStyle,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props
}: InputFieldProps) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text
                        className="font-JakartaSemiBold"
                        style={[styles.label, labelStyle as StyleProp<TextStyle>]}
                    >
                        {label}
                    </Text>
                    <View style={[styles.inputContainer, containerStyle as StyleProp<ViewStyle>]}>
                        {icon && (
                            <Image
                                source={icon}
                                style={[styles.icon, iconStyle as StyleProp<ImageStyle>]}
                            />
                        )}
                        <TextInput
                            placeholderTextColor={"gray"}
                            className="font-JakartaSemiBold"
                            style={[styles.input, inputStyle as StyleProp<TextStyle>]}
                            secureTextEntry={secureTextEntry}
                            {...props}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        width: '100%',
    },
    label: {
        fontSize: 18,
        marginBottom: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: 'lightblue',
    },
    input: {
        borderRadius: 999,
        padding: 16,
        fontSize: 15,
        flex: 1,
        textAlign: 'left',
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
    }
});

export default InputField;