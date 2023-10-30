/* eslint-disable react/prop-types */
import { View, Text } from "@react-pdf/renderer";

import Styles from "./Styles";

const AuthFeatures = ({ features }) => (
  <View style={{ marginTop: 40 }}>
    <Text style={{ ...Styles.reportSecondary, letterSpacing: 2, fontSize: 18 }}>
      Autorizacion de reparacion
    </Text>
    <View style={Styles.authContainer}>
      {features.authorizations.map(item => (
        <Text key={item}>{item}</Text>
      ))}
    </View>
  </View>
);

export default AuthFeatures;
