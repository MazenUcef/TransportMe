import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
    switch (variant) {
        case "secondary":
            return styles.secondaryBg;
        case "danger":
            return styles.dangerBg;
        case "success":
            return styles.successBg;
        case "outline":
            return styles.outlineBg;
        default:
            return styles.primaryBg;
    }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
    switch (variant) {
        case "primary":
            return styles.primaryText;
        case "secondary":
            return styles.secondaryText;
        case "danger":
            return styles.dangerText;
        case "success":
            return styles.successText;
        default:
            return styles.defaultText;
    }
};

const CustomButton = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    IconLeft,
    IconRight,
    style,
    ...props
}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, getBgVariantStyle(bgVariant), style]}
            {...props}
        >
            {IconLeft && <IconLeft />}
            <Text style={[styles.text, getTextVariantStyle(textVariant)]}>
                {title}
            </Text>
            {IconRight && <IconRight />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 999, // rounded-full equivalent
        padding: 12, // p-3 equivalent
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // for Android shadow
    },
    // Background variants
    primaryBg: {
        backgroundColor: '#0286FF',
    },
    secondaryBg: {
        backgroundColor: '#6B7280', // gray-500
    },
    dangerBg: {
        backgroundColor: '#EF4444', // red-500
    },
    successBg: {
        backgroundColor: '#10B981', // green-500
    },
    outlineBg: {
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        borderColor: '#D1D5DB', // neutral-300
    },
    // Text variants
    text: {
        fontSize: 18, // text-lg
        fontWeight: 'bold',
    },
    defaultText: {
        color: 'white',
    },
    primaryText: {
        color: 'black',
    },
    secondaryText: {
        color: '#F3F4F6', // gray-100
    },
    dangerText: {
        color: '#FEE2E2', // red-100
    },
    successText: {
        color: '#D1FAE5', // green-100
    },
});

export default CustomButton;