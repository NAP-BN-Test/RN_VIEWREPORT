import React from 'react';
import Toast from 'react-native-simple-toast';
function NotifiToast(message: string) {
    return (
        Toast.showWithGravity(message, 5000, Toast.TOP)
    );
}

export default NotifiToast;