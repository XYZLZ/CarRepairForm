/* eslint-disable react/prop-types */
import {View, Text, Image} from '@react-pdf/renderer'

import Styles from './Styles'
import {CarImage} from '../../assets'

const InvoiceTitle = ({ title }) => (
    <View style={Styles.titleContainer}>
      <Text style={Styles.reportTitle}>{title}</Text>
      <Text style={Styles.reportSecondary}>
        Todo tipo de piezas para automoviles
      </Text>
    </View>
  );
  
  
  
  const BillTo = () => (
    <View style={Styles.headerContainer}>
      <Text style={Styles.billTo}>Datos de la compañia:</Text>
      {/* <Text>{'invoice.company'}</Text> */}
      <View style={{...Styles.invoiceDateContainer, justifyContent: "flex-start"}}>
      <Text style={Styles.label}>{"Direccion: "}</Text>
      <Text style={Styles.invoiceDate}>{"Tunti Caceres No. 232. Villa Juana"}</Text>
      </View>
      <View style={{...Styles.invoiceDateContainer, justifyContent: "flex-start"}}>
      <Text style={Styles.label}>{"Telefono: "}</Text>
      <Text style={Styles.invoiceDate}>{"809-547-1719 / 809-732-0996"}</Text>
      </View>
      <View style={{...Styles.invoiceDateContainer, justifyContent: "flex-start"}}>
      <Text style={Styles.label}>{"RNC: "}</Text>
      <Text style={Styles.invoiceDate}>{"130-01589-9"}</Text>
      </View>
    </View>
  );

  const CarSection = () => (
    <View style={Styles.carSectionContainer}>
      <Image src={CarImage} style={Styles.carSectionImage} />
    </View>
  );

export {InvoiceTitle, BillTo, CarSection};