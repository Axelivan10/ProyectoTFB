import { Injectable } from '@nestjs/common';
import * as ldap from 'ldapjs';

@Injectable()
export class AuthService {

  constructor() {}

  authentication(AuthEntity): Promise<boolean> {
    const { username, password } = AuthEntity;
    const userDN = `CN=${username},OU=Users,OU=Tic,OU=SERVICIOS_CORPORATIVOS,DC=TMMXTF,DC=LOCAL`; // Reemplaza con el DN del usuario en tu directorio LDAP

    return new Promise((resolve, reject) => {
      

      const client = ldap.createClient({
        url: 'ldap://172.25.55.251:389', // Reemplaza con la URL de tu servidor LDAP y su puerto
      });

      client.on('error', (err) => {
        console.error('Error en la conexión LDAP:', err);
      });

      client.once('connect', () => {
        console.log('Conexión LDAP establecida correctamente.');
      });


      client.bind(userDN, password, (err) => {
        if (err) {
          console.error('Error al autenticar:', err);
          client.unbind();
          reject(err);
        } else {
          console.log('Autenticación exitosa');
          client.unbind(() => {
            console.log('Conexión cerrada');
          });
          resolve(true);
        }
      });
    });
}

}



// constructor() {
//   this.client = ldap.createClient({
//     url: 'ldap://172.29.9.55:389',
//   });

//   this.client.on('error', (err) => {
//     console.error('Error en la conexión LDAP:', err);
//   });

//   this.client.once('connect', () => {
//     console.log('Conexión LDAP establecida correctamente.');
//   });
// }

// async authentication(AuthEntity): Promise<boolean> {
//   const baseDN = 'DC=TMMXTF,DC=LOCAL';
//   const { user, password } = AuthEntity;
//   const userDN = `cn=${user},${baseDN}`;
//   // console.log(AuthEntity)

//   return new Promise<boolean>((resolve, reject) => {
//   this.client.bind(userDN, password, (err: Error | null) => {
//       if (err) {
//           console.error('Error al intentar autenticar:', err);
//           reject(err);
//       } else {
//           console.log('Autenticación exitosa.');
//           resolve(true);
//       }
//   });
// });
  
// }




// async authentication(AuthEntity): Promise<boolean> {
    
//   return new Promise((resolve, reject) => {
    
//     const client = ldap.createClient({
//       url: 'ldap://172.25.55.251:389',
//     });

//     client.on('error', (err) => {
//       console.error('LDAP connection error:', err);
//       reject(err);
//     });

//     const { user, password } = AuthEntity;
//     const baseDN = 'dc=TMMXTF,dc=LOCAL';

//     client.bind("TMMXTF/admin.rcuytun", "P4rt1cul4rCuy7un", (err) => {
//       if (err) {
//         console.error('LDAP authentication failed:', err);
//         reject(err);
//       } else {
//         console.log('LDAP authentication successful');
//         resolve(true);
//       }
//       client.unbind();
//     }
//     );
    
//   });
// }



//admin.rcuytun P4rt1cul4rCuy7un
//







// async authentication(AuthEntity): Promise<boolean> {
    
//   //AQUI ES LA CONEXION PARA EL ACCESS DIRECTORY
//   const ldapClient = ldap.createClient({
//     url: 'ldap://172.25.55.251:389', // Cambiar por la URL de tu servidor LDAP
//     tlsOptions: {}, // Opciones TLS si es necesario
//     bindDN: 'cn=TMMXTF/pp10', // Usuario root para conexión LDAP
//     bindCredentials: 'Dokka28@2023', // Contraseña del usuario root
//     connectTimeout: 3000, // Tiempo de espera de conexión en milisegundos
//   });

//   //HACE LA VERIFICACION SI SE PUDO CONECTAR AL SERVIDOR CON LAS CREDENCIALES ROOT
//   return new Promise<boolean>((resolve) => {
//     ldapClient.on('error', (err) => {
//       console.error('Error de conexión LDAP axel:', err);
//       ldapClient.unbind(); // Cerrar la conexión LDAP
//       resolve(false); // No se pudo conectar
//     });

//     ldapClient.on('connect', () => {
//       console.log('Conexión al servidor LDAP exitosa');
//       ldapClient.unbind(); // Cerrar la conexión LDAP
//       resolve(true); // Conexión exitosa
//     });
//   });

//   const { user, password } = AuthEntity;

//   return new Promise<boolean>((resolve, reject) => {
//     ldapClient.bind("axgonzalez", "Dokka28@2023", (err) => {
//       if (err) {
//         console.error('Error de autenticación LDAP:', err);
//         resolve(false); // Autenticación fallida
//       } else {
//         console.log('Usuario autenticado correctamente');
//         resolve(true); // Autenticación exitosa
//       }
//       ldapClient.unbind(); // Cerrar la conexión LDAP
//     });
//   });
// }
