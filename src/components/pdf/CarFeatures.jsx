/* eslint-disable react/prop-types */
import { View, Text } from "@react-pdf/renderer";

import Styles from "./Styles";

const CarFeatures = ({ features }) => (
  <>
    <Text style={{ ...Styles.reportSecondary, letterSpacing: 2, fontSize: 18 }}>
      Caracteristicas del Auto
    </Text>
    <View style={Styles.featuresContainer}>
      <View style={Styles.featuresBox}>
        <Text style={Styles.featuresTextPrimary}>Marca: {features.brand? features.brand : "brand"}</Text>
        <Text style={Styles.featuresTextPrimary}>Modelo: {features.model}</Text>
        <Text style={Styles.featuresTextPrimary}>Placa: {features.plate}</Text>
        <Text style={Styles.featuresTextPrimary}>KMS: {features.kms}</Text>
        <Text style={Styles.featuresTextPrimary}>Chasis: {features.chasis}</Text>
      </View>
      <View style={Styles.featuresBox}>
        <Text style={Styles.featuresTextPrimary}>Año: {features.year}</Text>
        <Text style={Styles.featuresTextPrimary}>Gas: {features.gas}</Text>
        <Text style={Styles.featuresTextPrimary}>Color: {features.color}</Text>
        <Text style={Styles.featuresTextPrimary}>Motor: {features.motor}</Text>
        <Text style={Styles.featuresTextPrimary}>Otros: {features.other ? features.other : 'Sin Otros'}</Text>
      </View>
    </View>
  </>
);

export default CarFeatures;
