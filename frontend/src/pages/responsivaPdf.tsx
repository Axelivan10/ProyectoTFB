import React, { useEffect } from 'react'
import { Document, Text, Page, StyleSheet, Image, View } from '@react-pdf/renderer'
import logo from "../assets/img/logo.png";

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 14,
    paddingTop: 10,
  },
  responsable: {
    paddingTop: 40,
    fontSize: 12,
  },
  table: {
    marginTop: 25,
    width: '100%',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontSize: 16,
  },
  tableCell: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 10,
    textAlign: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden',
    wordBreak: 'break-word',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  textoResponsiva: {
    fontSize: 10,
    textAlign: 'justify',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    fontSize: 14,
    marginTop: 'auto',
  },
  footerDate: {
    fontStyle: 'italic',
    fontSize: 8,
    marginLeft: 20,
  },
  signature: {
    textAlign: 'right',
    fontSize: 12,
  },
  textoFirmaEmpleado: {
    paddingTop: 10,
  },
  textoLine: {
    marginTop: 10,
    marginRight: 20,
  },
});

interface EstadoDatos {
  autoupdatesystems_id: number;
  comment: string;
  computertypes_id: number;
  contact: string;
  contact_num: string;
  date_creation: string;
  date_mod: string;
  entities_id: number;
  groups_id: number;
  groups_id_tech: number;
  id: number;
  is_deleted: number;
  is_dynamic: number;
  is_recursive: number;
  is_template: number;
  last_boot: string;
  last_inventory_update: string;
  locations_id: number;
  manufacturer: {
    comment: string;
    date_creation: string;
    date_mod: string;
    id: number;
    name: string;
  };
  model: {
    comment: string;
    date_creation: string;
    date_mod: string;
    depth: number;
    id: number;
    is_half_rack: number;
    name: string;
    picture_front: string | null;
    picture_rear: string | null;
    pictures: string | null;
    power_connections: number;
    power_consumption: number;
    product_number: string | null;
    required_units: number;
    weight: number;
  };
  infocom: {
    alert: number;
    bill: string | null;
    budgets_id: number;
    businesscriticities_id: number;
    buy_date: Date | null;
    comment: string | null;
    date_creation: string; 
    date_mod: string; 
    decommission_date: string; 
    delivery_date: string | null;
    delivery_number: string | null;
    entities_id: number;
    id: number;
    immo_number: string | null;
    inventory_date: string; 
    is_recursive: number;
    itemtype: string;
    order_date: Date | null;
    order_number: string | null;
    sink_coeff: number;
    sink_time: number;
    sink_type: number;
    suppliers_id: number;
    use_date: Date | null;
    value: string; 
    warranty_date: Date | null;
    warranty_duration: number;
    warranty_info: string | null;
    warranty_value: string; 
  };
  name: string;
  networks_id: number;
  otherserial: string | null;
  serial: string;
  states_id: number;
  template_name: string | null;
  ticket_tco: string;
  user: {
    api_token: string | null;
    api_token_date: string | null;
    auths_id: number;
    authtype: number;
    backcreated: string | null;
    begin_date: string | null;
    comment: string;
    cookie_token: string;
    cookie_token_date: string;
    csv_delimiter: string | null;
    date_creation: string;
    date_format: string | null;
    date_mod: string;
    date_sync: string;
    default_central_tab: string | null;
    default_dashboard_assets: string | null;
    default_dashboard_central: string | null;
    default_dashboard_helpdesk: string | null;
    default_dashboard_mini_ticket: string | null;
    default_requesttypes_id: string | null;
    display_count_on_home: string | null;
    display_options: string | null;
    duedatecritical_color: string | null;
    duedatecritical_less: string | null;
    duedatecritical_unit: string | null;
    duedateok_color: string | null;
    duedatewarning_color: string | null;
    duedatewarning_less: string | null;
    duedatewarning_unit: string | null;
    end_date: string | null;
    entities_id: number;
    firstname: string;
    fold_menu: string | null;
    fold_search: string | null;
    followup_private: string | null;
    groups_id: number;
    highcontrast_css: string | null;
    id: number;
    is_active: number;
    is_deleted: number;
    is_deleted_ldap: number;
    is_ids_visible: string | null;
    itil_layout: string | null;
    keep_devices_when_purging_item: string | null;
    language: string | null;
    last_login: string;
    list_limit: string | null;
    locations_id: number;
    lock_autolock_mode: string | null;
    lock_directunlock_notification: string | null;
    mobile: string | null;
    name: string;
    names_format: string | null;
    nickname: string | null;
    notification_to_myself: string | null;
    number_format: string | null;
    page_layout: string | null;
    palette: string | null;
    password: string;
    password_forget_token: string | null;
    password_forget_token_date: string | null;
    password_last_update: string | null;
    pdffont: string | null;
    personal_token: string | null;
    personal_token_date: string | null;
    phone: string;
    phone2: string | null;
    picture: string | null;
    plannings: string | null;
    priority_1: string | null;
    priority_2: string | null;
    priority_3: string | null;
    priority_4: string | null;
    priority_5: string | null;
    priority_6: string | null;
    privatebookmarkorder: string | null;
    profiles_id: number;
    realname: string;
    refresh_views: string | null;
    registration_number: string;
    richtext_layout: string | null;
    savedsearches_pinned: string | null;
    set_default_requester: string | null;
    set_default_tech: string | null;
    show_count_on_tabs: string | null;
    show_jobs_at_login: string | null;
    sync_field: string;
    task_private: string | null;
    task_state: string | null;
    timeline_action_btn_layout: string | null;
    timeline_date_format: string | null;
    timeline_order: string | null;
    timezone: string | null;
    use_flat_dropdowntree: string | null;
    use_mode: number;
    user_dn: string;
    users_id_supervisor: number;
    users_id_tech: number;
    uuid: string;
    category: {
      comment: string;
      date_creation: string;
      date_mod: string;
      id: number;
      name: string;
    };
    title: {
      comment: string;
      date_creation: string;
      date_mod: string;
      id: number;
      name: string;
    };
  };
}
  
const responsivaPdf = (props: { data: any }) => {
    
    const { data } = props;
    const user = data[0]?.user || {};
    const dateDelivery = data[0]?.infocom || {}

    useEffect(()=>{
      console.log(data[0]?.infocom[0]?.delivery_date)
      console.log(dateDelivery)
    },[data])

    const responsableName = user.firstname + " " + user.realname || 'Nombre no disponible';
    const departmentName = user.category?.name || 'Nombre no disponible';
    const positionName = user.title?.name || 'Nombre no disponible';
   

    const header = ['ID', 'Fabricante', 'Nombre', 'Serial', 'Fecha de entrega'];
  
    // Divide las inserciones en grupos de 4
    const chunkData = (array: any, size: number) => {
      const chunkedArr = [];
      for (let i = 0; i < array.length; i += size) {
        chunkedArr.push(array.slice(i, i + size));
      }
      return chunkedArr;
    };
  
    const paginatedData = chunkData(data, 4);
  
    return (
      <Document>
        {paginatedData.map((chunk, index) => (
          <Page key={index} size="A4" orientation="landscape" style={styles.page}>
            <View style={styles.section}>
              <View style={styles.header}>
                <View style={styles.responsable}>
                  <Text>Responsable: {responsableName}</Text>
                  <Text>Departamento: {departmentName}</Text>
                  <Text>Puesto: {positionName}</Text>
                </View>
                <Text style={styles.title}>Carta Responsiva</Text>
                <Image style={styles.logo} src={logo} />
              </View>
              <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                  {header.map((item, index) => (
                    <Text key={index} style={[styles.tableCell, styles.tableHeaderCell]}>{item}</Text>
                  ))}
                </View>
                {chunk.map(({ id, manufacturer, name, serial }: EstadoDatos) => (
                  <View key={id} style={styles.tableRow}>
                    <Text style={styles.tableCell}>{id || 'N/A'}</Text>
                    <Text style={styles.tableCell}>{manufacturer.name || 'N/A'}</Text>
                    <Text style={styles.tableCell}>{name || 'N/A'}</Text>
                    <Text style={styles.tableCell}>{serial || 'N/A'}</Text>
                    <Text style={styles.tableCell}>{dateDelivery[index]?.delivery_date || "-"}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.textoResponsiva}>
                <Text>Recibo de The Fives Hotels & Residences (TM Grupo Inmobiliario) los artículos referenciados en este documento en concepto de Equipamiento TIC para mi puesto de trabajo, comprometiéndome al cuidado y conservación de los mismos de acuerdo con los criterios establecidos en la POLÍTICA DE USO DE RECURSOS TIC Y TRATAMIENTO DE DATOS y a utilizarlos exclusivamente para asuntos relacionados con mi actividad laboral. Me comprometo así mismo a la devolución de los mismos en caso de que me sean requeridos</Text>
                <Text>Me responsabilizo, en caso de extravío, daño, uso inadecuado o negligencia a pagar el costo de reparación o la reposición del equipo autorizando se descuente el importe que corresponda por medio de mi nómina. En caso de que, por causas inherentes al uso y desgaste normales del equipo, el mismo requiera cualquier reparación, me comprometo a notificar tal circunstancia a la empresa para que realice las acciones oportunas.</Text>
                <Text>Reconozco que el equipo que se me ha proporcionado y el contenido que yo genere en él es propiedad de la empresa. Por tal razón, la empresa se reserva el derecho de auditar periódicamente y sin previo aviso tanto el estado del equipo como el contenido del mismo.</Text>
                <Text>En caso de recibir un celular con línea telefónica de la empresa, se me ha informado de la necesidad de comunicar mis viajes con un día de antelación a soporte@thefives.com.mx con el fin de activar la disponibilidad de llamadas desde fuera de México y autorizo a que cualquier exceso de facturación en concepto de voz y/o datos por no haber realizado dicha comunicación se me descuente de la nómina.</Text>
              </View>
            </View>
            <View style={styles.footer}>
              <Text style={styles.footerDate}>Fecha de impresión: {new Date().toLocaleDateString()}</Text>
              <View style={styles.signature}>
                <Text style={styles.textoLine}>_______________________</Text>
                <Text style={styles.textoFirmaEmpleado}>Firma del colaborador</Text>
              </View>
            </View>
          </Page>
        ))}
      </Document>
    );
};
  
  
  

export default responsivaPdf