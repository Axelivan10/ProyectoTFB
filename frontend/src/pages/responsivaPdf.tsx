import React, { useEffect } from 'react'
import { Document, Text, Page, StyleSheet, Image, View } from '@react-pdf/renderer'
import logo from "../assets/img/logo.png";

const header = ["Id", "Marca", "Modelo", "Numero de Serie", "Tipo", "Fecha de Entrega"];

const data = [
    { id: 1, marca: 'Marca1', modelo: 'Modelo1', numeroSerie: '123456', tipo: 'Tipo1', fechaEntrega: '01/01/2024' },
    { id: 2, marca: 'Marca2', modelo: 'Modelo2', numeroSerie: '654321', tipo: 'Tipo2', fechaEntrega: '02/01/2024' },
];

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        padding: 20,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Alinea los elementos verticalmente
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        paddingTop: 10,
    },
    logo: {
        width: 210,
        height: 100,
    },
    info: {
        fontSize: 12,
        paddingTop: 10,
    },
    responsable: {
        paddingBottom: 20,
    },
    table: {
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
        paddingBottom: 20,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableHeader: {
        backgroundColor: '#f0f0f0',
    },
    tableCell: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 7,
        borderWidth: 1,
        borderColor: '#000',
    },
    tableHeaderCell: {
        fontWeight: 'bold',
    },
    textoResponsiva: {
        fontSize: 10,
        textAlign: 'justify',
    },
    textoFirma:{
        paddingTop: 30,
        fontSize: 10,
    },
});


const responsivaPdf = () => {

    return (
        <Document>
            <Page size="A4" orientation="landscape" style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.header}>
                        <Image style={styles.logo} src={logo} />
                        <Text style={styles.title}>Carta Responsiva</Text>
                        <Text style={styles.info}>Fecha de impresión: {new Date().toLocaleDateString()}</Text>
                    </View>
                    <View style={styles.responsable}>
                        <Text>Responsable: Axel Iván González</Text>
                        <Text>Departamento: Sistemas</Text>
                        <Text>Puesto: Técnico de sistemas</Text>
                    </View>
                    <View style={styles.table}>
                        <View style={[styles.tableRow, styles.tableHeader]}>
                            {header.map(item => (
                                <Text style={[styles.tableCell, styles.tableHeaderCell]}>{item}</Text>
                            ))}
                        </View>
                        {data.map(item => (
                            <View key={item.id} style={styles.tableRow}>
                                <Text style={styles.tableCell}>{item.id}</Text>
                                <Text style={styles.tableCell}>{item.marca}</Text>
                                <Text style={styles.tableCell}>{item.modelo}</Text>
                                <Text style={styles.tableCell}>{item.numeroSerie}</Text>
                                <Text style={styles.tableCell}>{item.tipo}</Text>
                                <Text style={styles.tableCell}>{item.fechaEntrega}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.textoResponsiva}>
                        <Text>Recibo de The Fives Hotels & Residences (TM Grupo Inmobiliario) los artículos referenciados en este documento en concepto de Equipamiento TIC para mi puesto de trabajo, comprometiéndome al cuidado y conservación de l mismos de acuerdo con los criterios establecidos en la POLÍTICA DE USO DE RECURSOS TIC Y TRATAMIENTO DE DATOS y a utilizarlos exclusivamente para asuntos relacionados con mi actividad laboral. Me comprometo así mismo a la devolución de los mismos en caso de que me sean requeridos</Text>
                        <Text>Me responsabilizo, en caso de extravío, daño, uso inadecuado o negligencia a pagar el costo de reparación o la reposición del equipo autorizando se descuente el importe que corresponda por medio de mi nómina. En caso de que, por causas inherentes al uso y desgaste normales del equipo, el mismo requiera cualquier reparación, me comprometo a notificar tal circunstancia a la empresa para que realice las acciones oportunas.</Text>
                        <Text>Reconozco que el equipo que se me ha proporcionado y el contenido que yo genere en él es propiedad de la empresa. Por tal razón, la empresa se reserva el derecho de auditar periódicamente y sin previo aviso tanto el estado del equipo como el contenido del mismo.</Text>
                        <Text>En caso de recibir un celular con línea telefónica de la empresa, se me ha informado de la necesidad de comunicar mis viajes con un día de antelación a soporte@thefives.com.mx con el fin de activar la disponibilidad de llamadas desde fuera de México y autorizo a que cualquier exceso de facturación en concepto de voz y/o datos por no haber realizado dicha comunicación se me descuente de la nómina.</Text>
                    </View>
                    <View style={styles.textoFirma}>
                        <Text>_______________________</Text>
                        <Text>Firma del empleado</Text>
                         </View>
                </View>
            </Page>
        </Document>
    );
}

export default responsivaPdf