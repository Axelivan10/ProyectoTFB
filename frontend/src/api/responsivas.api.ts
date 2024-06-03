import axios from "axios";
const BASE_URL = 'http://localhost:3000';


export const getUserResponsiva = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/responsivas/getusers`, { });
    return response;

  } catch (error) {
    throw new Error('ERROR');
  }
}

// export const getUserResponsivaById = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/responsivas/getusers:id`, { });
//     return response;

//   } catch (error) {
//     throw new Error('ERROR');
//   }
// }

export const getComputersRelation = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/responsivas/getComputersRelation/${id}`);
    return response;
  } catch (error) {
    throw new Error('ERROR');
  }
}

export const postSendData = async (user: {}) => {
  
  try {
    const response = await axios.post(`${BASE_URL}/responsivas/postUser`, {
      user
    });
    
    return response;

  } catch (error) {
    throw new Error('Data Fail');
  }
}

export const putUpdatedData = async (numeroColaborador: string, nombres: string, apellidos:string, nombreUsuario:string) => {
  
  try {
    const response = await axios.put(`${BASE_URL}/responsivas/updateUser`, {
      registration_number: numeroColaborador,
      firstname: nombres,
      realname: apellidos,
      name: nombreUsuario,
    });
    
    return response;

  } catch (error) {
    throw new Error('Data Fail');
  }
}
