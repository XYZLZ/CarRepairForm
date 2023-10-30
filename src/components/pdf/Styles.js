import { StyleSheet } from "@react-pdf/renderer";

const Styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },

  titleContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 24,
  },
  reportTitle: {
    color: "#000",
    letterSpacing: 4,
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
  },

  reportSecondary: {
    color: "gray",
    letterSpacing: 2,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },

  carSectionContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    // marginTop: "3rem",
  },

  carSectionImage: {
    width: "65%",
  },

  invoiceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  invoiceNoContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  invoiceDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: "bold",
  },
  label: {
    width: 60,
    alignSelf: "center"
  },

  headerContainer: {
    marginTop: 36,
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: "Helvetica-Oblique",
    fontWeight: "bold",
  },

  // * Caracteristicas del auto
  featuresContainer: {
    flexDirection: "column",
    gap: "10px",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  featuresBox: {
    flexDirection: "row",
    gap: "10px",
  },

  featuresTextPrimary: {
    fontSize: 12,
    color: "#444",
    fontWeight: "light",
  },

  // * Division de linea
  divisionLine: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginBottom: 15,
  },

  divisionLineSignature: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginBottom: 15,
  },

  // * Autorizacion de reparacion

  authContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  authText: {},

  // * Footer del PDF

  footerContainer: {
    flexDirection: "column",
    marginTop: 60,
  },
  footerTitle: {
    fontSize: 12,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default Styles;
