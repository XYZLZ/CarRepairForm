/* eslint-disable react/prop-types */
import {View, Text} from '@react-pdf/renderer'

import Styles from './Styles'
import {CarSection} from './CompanyData'

const InvoiceNo = ({ invoice }) => (
    <>
      <View style={Styles.invoiceSection}>
        <CarSection />
        <View>
          <View style={{...Styles.invoiceDateContainer,  alignItems: "center"}}>
            <Text style={Styles.label}>Orden No:</Text>
            <Text style={Styles.invoiceDate}>{invoice.order ?? 120391823}</Text>
          </View>
          <View style={{...Styles.invoiceDateContainer, alignItems: "center"}}>
            <Text style={{...Styles.label, width: 58}}>Fecha: </Text>
            <Text style={Styles.invoiceDate}>{invoice.date}</Text>
          </View>
          <View style={{...Styles.invoiceDateContainer, alignItems: "center"}}>
            <Text style={{...Styles.label, width: 89}}>Hora: </Text>
            <Text style={Styles.invoiceDate}>{invoice.hour}</Text>
          </View>
          <View style={{...Styles.invoiceDateContainer, alignItems: "center"}}>
            <Text style={{...Styles.label, width: 70}}>Cliente: </Text>
            <Text style={Styles.invoiceDate}>{invoice.name}</Text>
          </View>
          <View style={{...Styles.invoiceDateContainer, alignItems: "center"}}>
            <Text style={{...Styles.label, width: 45}}>Card No: </Text>
            <Text style={Styles.invoiceDate}>{invoice.card_no}</Text>
          </View>
          <View style={{...Styles.invoiceDateContainer, alignItems: "center"}}>
            <Text style={Styles.label}>Telefono: </Text>
            <Text style={Styles.invoiceDate}>{invoice.phone}</Text>
          </View>
          <View style={{...Styles.invoiceDateContainer, alignItems: "center"}}>
            <Text style={Styles.label}>Celular: </Text>
            <Text style={Styles.invoiceDate}>{invoice.cellPhone}</Text>
          </View>
          <View style={{...Styles.invoiceDateContainer, alignItems: "center"}}>
            <Text style={{...Styles.label, width: 55}}>Direccion: </Text>
            <Text style={Styles.invoiceDate}>{invoice.address}</Text>
          </View>
        </View>
      </View>
    </>
  );

export default InvoiceNo;