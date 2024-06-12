import React, { useState, useMemo } from "react";
import { Text, View, Image, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { PaymentStyle } from '../../styles';
import images from '../../index';
import { RouteName } from '../../routes';
import { SF } from "../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { VectorIcon, PaymentAccordian } from "../../components";
import { ScrollView } from 'react-native-virtualized-view';

const PaymentScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const PaymentStyles = useMemo(() => PaymentStyle(Colors), [Colors]);
  const [show, setShow] = useState(null);
  const toggleHandler = (index) => {
    (index === show) ? setShow(null) : setShow(index)
  };

  const Paymentdata = [
    {
      "id": 1,
      "paymentparegraph": "payment_Paregraph_Label_1",
      "image": images.Upi,
      "smalltext": "Pay_Via_Label_1",
      "walletstextset": "Wallets_Label",
    },
    {
      "id": 2,
      "paymentparegraph": "payment_Paregraph_Label_2",
      "image": images.paytem,
      "smalltext": "Pay_Via_Label_2",
    },
    {
      "id": 3,
      "paymentparegraph": "payment_Paregraph_Label_3",
      "image": images.Mobikwikimage,
      "smalltext": "Pay_Via_Label_3",
    },
  ]
  
  return (
    <View style={PaymentStyles.minstyleviewphotograpgy}>
      <ScrollView nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={PaymentStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={PaymentStyles.minflexview}>
            <View style={PaymentStyles.minviewsigninscreen}>
              <View>
                <Text style={PaymentStyles.cardtextstyle}>{t("Cards_Label")}</Text>
                <TouchableOpacity style={PaymentStyles.setflexrowarrowleft} onPress={() => navigation.navigate(RouteName.CREDIT_CARD_SCREEN)}>
                  <View style={PaymentStyles.flexrowcreditcard}>
                    <View style={PaymentStyles.iconsetborderwidth}>
                      <VectorIcon icon="AntDesign" name="creditcard" size={SF(25)} color={Colors.gray_text_color} />
                    </View>
                    <Text style={PaymentStyles.creditcardtext}>{t("Creadit_Debit_ATM_Cards_Label")}</Text>
                  </View>
                  <View>
                    <VectorIcon icon="AntDesign" name="right" size={SF(21)} color={Colors.gray_text_color} />
                  </View>
                </TouchableOpacity>
                <View style={PaymentStyles.setflexrowarrowlefttwo}>
                </View>
                <Text style={PaymentStyles.cardtextstyletwo}>{t("UPI_Label")}</Text>
                <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}>
                  <View style={PaymentStyles.iconsetborderwidth}>
                    <Image source={images.paytem} resizeMode='center' style={PaymentStyles.setbgimage} />
                  </View>
                  <Text style={PaymentStyles.creditcardtext}>{t("Paytm_UPI_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}>
                  <View style={PaymentStyles.iconsetborderwidth}>
                    <Image source={images.google} resizeMode='contain' style={PaymentStyles.setbgimage} />
                  </View>
                  <Text style={PaymentStyles.creditcardtext}>{t("Google_Pay_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}>
                  <View style={PaymentStyles.iconsetborderwidth}>
                    <Image source={images.Paypal} resizeMode='center' style={PaymentStyles.setbgimage} />
                  </View>
                  <Text style={PaymentStyles.creditcardtext}>{t("Paypal_Label")}</Text>
                </TouchableOpacity>
                <Text style={PaymentStyles.cardtextstylethree}>{t("Wallets_Label")}</Text>
                <FlatList
                  data={Paymentdata}
                  renderItem={({ item, index }) => (<PaymentAccordian item={item} index={index} show={show} setShow={setShow} onPress={() => toggleHandler(index)} />)}
                  keyExtractor={item => item.id}
                  style={PaymentStyles.flatelist}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;
