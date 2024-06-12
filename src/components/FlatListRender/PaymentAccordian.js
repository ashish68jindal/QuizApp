import React, { useState, useMemo } from "react";
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { PaymentStyle } from '../../styles';
import { Colors, SF } from "../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { VectorIcon } from "../../components";

const PaymentAccordian = (props) => {
    const { item, show, index, onPress, setShow } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const PaymentStyles = useMemo(() => PaymentStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View>
                <View style={PaymentStyles.setflexrowarrowleftthree}>
                    <View style={PaymentStyles.flexrowcreditcard}>
                        <View style={PaymentStyles.iconsetborderwidth}>
                            <Image source={item.image} resizeMode='center' style={PaymentStyles.setbgimage} />
                        </View>
                        <View style={PaymentStyles.settextwidth}>
                            <Text style={PaymentStyles.creditcardtext}>{t(item.smalltext)}</Text>
                            <Text style={PaymentStyles.youneedstext}>{t(item.paymentparegraph)}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => setShow(index)}>
                            {<VectorIcon icon="AntDesign" name={show === index ? 'up' : 'down'} size={SF(21)} />}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {show === index && <View>
                <View style={PaymentStyles.setparegraphviewstyle}>
                    <Text style={PaymentStyles.paregraphtextstyleset}>{t("Paytm_Summury_Label")}</Text>
                </View>
            </View>}
        </TouchableOpacity>
    )
}

export default PaymentAccordian