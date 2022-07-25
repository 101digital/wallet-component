import { CryptoTransferOutVerifyPasscodeComponentProps } from './types';
import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import useMergeStyles from './styles';
import { Button, OTPField } from 'react-native-theme-component';
import { OTPFieldRef } from 'react-native-theme-component/src/otp-field';
import { PasscodeModal } from './components';

const CryptoTransferOutVerifyPasscodeComponent = ({
  props,
  style,
}: CryptoTransferOutVerifyPasscodeComponentProps) => {
  const [value, setValue] = useState<string>('');
  const { onSwitchToVerifyOTP, onConfirmed } = props || {};
  const [isShowPasscodeModel, setIsShowPasscodeModel] = useState<boolean>(true);
  const styles = useMergeStyles(style);
  const otpRef = useRef<OTPFieldRef>();

  useEffect(() => {
    if (value && value.length === 6) {
      handleCompleteInputOTP();
    }
  }, [value]);

  const onConfirm = () => {
    console.log('on confirm verify passcode');
    onConfirmed && onConfirmed();
  };

  const handleCompleteInputOTP = () => {
    console.log('on complete input otp');
  };

  const onClosePasscodeModel = () => {
    setIsShowPasscodeModel(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.pageTitle}>
          {'Please enter the in-app passcode'}
        </Text>
        <View style={styles.pageSubTitleView}>
          <Text style={styles.pageSubTitle}>
            {
              'Enter the 6-digit in-app passcode generated by your UnionDigital App.'
            }
          </Text>
        </View>
        <View style={styles.content}>
          <OTPField
            ref={otpRef}
            cellCount={6}
            onChanged={setValue}
            style={{
              focusCellContainerStyle: { borderBottomColor: '#1EBCE8' },
            }}
          />
          <View style={styles.rowCenter}>
            <TouchableOpacity
              style={styles.receiveOTPOptionBtn}
              onPress={onSwitchToVerifyOTP}
            >
              <Text style={styles.receiveOTPOptionLabel}>
                Receive OTP via SMS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.actionWrapper}>
        <Button label="Continue" onPress={onConfirm} />
      </View>
      <PasscodeModal
        isVisible={isShowPasscodeModel}
        onClose={onClosePasscodeModel}
        passcode={'327891'}
      />
    </SafeAreaView>
  );
};

export default CryptoTransferOutVerifyPasscodeComponent;
