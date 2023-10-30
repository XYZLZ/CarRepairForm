/* eslint-disable react/prop-types */
import { View, Text, Image } from "@react-pdf/renderer";

import Styles from "./Styles";
// import { signature } from "../../assets";

const InvoiceFooter = ({ data }) => (
  <View style={Styles.footerContainer}>
    <View>
      <Text
        style={{ ...Styles.reportSecondary, letterSpacing: 2, fontSize: 18 }}
      >
        Descripcion del trabajo
      </Text>
    </View>
    <View
      style={{
        border: "1px solid black",
        width: "100%",
        maxHeight: "600px",
        borderRadius: "4px",
        padding: "8px",
        marginBottom: 30,
      }}
    >
      <Text style={{ textAlign: "justify" }}>
        {data.message}
      </Text>
    </View>
    <Text
      style={{
        textAlign: "center",
        fontSize: 12,
        fontWeight: "extrabold",
        color: "#444",
      }}
    >
      Garantizo aseguro que soy el dueño y/o estoy autorizado por el dueño de
      este vehiculo para efectuar esta reparacion.
    </Text>
    <Text style={{ textAlign: "justify", fontSize: 10, marginBottom: 15 }}>
      Con la presente autorizo el trabajo arriba descrito junto con las piezas
      de repuestos y otros materiales necesario para efectuarlo y autorizo a
      Usted o a uno de sus empleados a operar al vehiculo arruba especificado en
      las calles o en el garaje, para probarlo y revisarlo. Asimismo otorgo el
      derecho a disponer del vehiculo arriba mencionado en caso de no pagar las
      reparaciones y repuestos autorizados para emparar asi el gasto de los
      mismos Si transcurridos (2) dias contados a partir de la fecha en la que
      se haya notificado al cliente que su vehiculo esta listo para entregar y
      no fuera retirado, el cliente debera pagar la suma de ... pesos (RD$ ...)
      diarios hasta el momento en que el vehiculo fuera retirado de la empresa
      ademas del pago del costo de reparacion.
    </Text>
    <Text
      style={{
        textTransform: "uppercase",
        fontSize: 9,
        color: "#444",
        textAlign: "center",
      }}
    >
      no somos responsables por perdidas o daños a ñps carros o articulos
      dejados en ellos en caso de incendio, robo, accidentes o cualquier otra
      causa fuera de nuestro control.
    </Text>

    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={data.clientSignature}
          style={{ width: 50, height: 50, marginLeft: 10 }}
        />
        <View style={Styles.divisionLineSignature}></View>
        <Text style={{}}>Firma del cliente/ No firma sin leerlo.</Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={data.advisorSignature}
          style={{ width: 50, height: 50, marginLeft: 10 }}
        />
        <View style={{ ...Styles.divisionLineSignature, width: "160%" }}></View>
        <Text style={{}}>Asesor del Servicio.</Text>
      </View>
    </View>
  </View>
);

export default InvoiceFooter;
