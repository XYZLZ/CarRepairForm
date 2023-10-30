/* eslint-disable react/prop-types */
import { useEffect } from "react";
import {
  Document,
  Page,
  View,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";
import {useNavigate} from 'react-router-dom'

import AuthFeatures from './pdf/AuthFeatures'
import CarFeatures from './pdf/CarFeatures'
import InvoiceNo from './pdf/InvoiceNo'
import {BillTo, InvoiceTitle} from './pdf/CompanyData'
import InvoiceFooter from './pdf/InvoiceFooter'

import Styles from './pdf/Styles'
import { Logo } from "../assets";
// import {formValues} from '../mocks/options'
const data = JSON.parse(localStorage.getItem('repairData')) || null;




const DocPDF = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (data === null) {
      navigate('/');
    }
  }, []);

  return (
    <PDFViewer style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Document>
        <Page size={"A3"} style={Styles.page}>
          <Image style={Styles.logo} src={Logo} />
          <InvoiceTitle title="Ruddy s.r.l" />
          <InvoiceNo invoice={data} />
          <BillTo />
          <View style={Styles.divisionLine}></View>
          <CarFeatures features={data} />
          {/* <View style={Styles.divisionLine}></View> */}
          <AuthFeatures features={data} />
          <View style={Styles.divisionLine}></View>

          <InvoiceFooter data={data} />
        </Page>
      </Document>
    </PDFViewer>
  );
};



export default DocPDF;
