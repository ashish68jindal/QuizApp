import React, { useMemo, useEffect } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, } from "react-native";
import { PaymentSuccessfully } from '../../styles';
import images from '../../index';
import { Colors, SH } from "../../utils";
import { Container, Spacing } from "../../components";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { RouteName } from "../../routes";

const PaymentSuccessFully = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const PaymentSuccessfullys = useMemo(() => PaymentSuccessfully(Colors), [Colors]);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      navigation.navigate(RouteName.HOME_TAB);
      clearInterval(interval);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <View style={PaymentSuccessfullys.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={PaymentSuccessfullys.contentContainerStyle}>
          <View style={PaymentSuccessfullys.keybordtopviewstyle}>
            <View style={PaymentSuccessfullys.minflexview}>
              <View style={PaymentSuccessfullys.minviewsigninscreen}>
                <TouchableOpacity style={PaymentSuccessfullys.imagecebter}>
                  <Image source={images.PaymentSuccessFul} resizeMode='contain' style={PaymentSuccessfullys.paymentsuccesfullimg} />
                </TouchableOpacity>
                <Spacing space={SH(50)} />
                <View style={PaymentSuccessfullys.textcenterview}>
                  <Text style={PaymentSuccessfullys.textcenterpayment}>{t("PAYMENT_SUCCESSFUL_Label")}</Text>
                </View>
                <Text style={PaymentSuccessfullys.textcenterpaymenttwo}>{t("Your_Payment_processed_Label")}</Text>
                <TouchableOpacity>
                  <Text style={PaymentSuccessfullys.burgeritemname}></Text>
                </TouchableOpacity>
                <View style={PaymentSuccessfullys.flexrowcoffitext}>
                  <TouchableOpacity>
                    <Text style={PaymentSuccessfullys.totalamountpaid}>{t("TOTAL_AMOUNT_PAID_Label")}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={PaymentSuccessfullys.proicetextset}>{t("20_Label")}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={PaymentSuccessfullys.flexrowcoffitext}>
                  <Text style={PaymentSuccessfullys.totalamountpaid}>{t("PAYED_BY_Label")}</Text>
                  <Text style={PaymentSuccessfullys.proicetextset}>{t("PAYTM_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PaymentSuccessfullys.flexrowcoffitexttwo}>
                  <Text style={PaymentSuccessfullys.totalamountpaid}>{t("TRANCATION_DATE_Label")}</Text>
                  <Text style={PaymentSuccessfullys.proicetextset}>{t("Payment_Tiem_Label")}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
export default PaymentSuccessFully;
