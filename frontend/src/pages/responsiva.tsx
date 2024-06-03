import ComplexNavbar from '../component/navbar'
import { Button, Card, CardFooter, Checkbox, Typography } from "@material-tailwind/react";
import ResponsivaPdf from '../pages/responsivaPdf';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import { getComputersRelation, getUserResponsiva, postSendData, putUpdatedData } from '../api/responsivas.api';
import { useEffect, useState } from 'react';

const TABLE_HEAD = ["Selección", "Usuarios encontrados", "Numero de colaborador", "Departamento", "Puesto", "Hotel",];


interface userInterface {
    id: number;
    registration_number: string;
    name: string;
    firstname: string;
    realname: string;
}

function responsiva() {
    const [data, setData] = useState([]);
    const [responseUser, setResponseUser] = useState<userInterface[]>([]);
    const [numeroColaborador, setNumeroColaborador] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [isActiveRadio, setIsActiveRadio] = useState(0);
    const [activeButton, setActiveButton] = useState(false);
    const [foundUser, setFoundUser] = useState<userInterface | null>(null);
    const [pdfData, setPdfData] = useState([]);

    // PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 6;
    const indexOfLast = currentPage * usersPerPage;
    const indexOfFirst = indexOfLast - usersPerPage;
    const currentData = responseUser.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(responseUser.length / usersPerPage);

useEffect(()=>{
    if(isActiveRadio!=0){
        console.log(isActiveRadio)
        responsivaPrint()
    }
},[isActiveRadio])

// useEffect(()=>{
//    console.log(responseUser)
//    console.log("aqui", responseUser)
// },[isActiveRadio])

    const prueba = async () => {
        const responseUsers = await getUserResponsiva()
        setData(responseUsers.data)
        console.log(data)
    }

    const handleInputChange = (inputName: string, value: string) => {
        switch (inputName) {
            case 'numeroColaborador':
                if (value === '' || /^\d+$/.test(value)) {
                    setNumeroColaborador(value);
                    if (value && !activeButton) {
                        setNombres('');
                        setApellidos('');
                        setNombreUsuario('')
                    }
                }
                break;
            case 'nombres':
                if (value === '' || /^[\p{L}\s,'-]+$/u.test(value)) {
                    setNombres(value);
                    if (value && !activeButton) {
                        setNumeroColaborador('');
                        setNombreUsuario('');
                    }
                }
                break;
            case 'apellidos':
                if (value === '' || /^[\p{L}\s,'-.]+$/u.test(value)) {
                    setApellidos(value);
                    if (value && !activeButton) {
                        setNumeroColaborador('');
                        setNombreUsuario('');
                    }
                }
                break;
            case 'nombreUsuario':
                if (value === '' || /^[\p{L}\s,'-]+$/u.test(value)) {
                    setNombreUsuario(value);
                    if (value && !activeButton) {
                        setNombres('');
                        setApellidos('');
                        setNumeroColaborador('')
                    }
                }
                break;
            default:

                break;
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            searchData();
        }
    };

    const searchData = async () => {
        const data = [];

        if (numeroColaborador) {
            data.push({ key: 'numeroColaborador', value: numeroColaborador });
        }
        if (nombres) {
            data.push({ key: 'nombres', value: nombres });
        }
        if (apellidos) {
            data.push({ key: 'apellidos', value: apellidos });
        }
        if (nombreUsuario) {
            data.push({ key: 'nombreUsuario', value: nombreUsuario });
        }

        console.log(data);

        if(nombres.length >= 3 || apellidos.length >= 3 || numeroColaborador.length >= 1 || nombreUsuario.length >= 3){
            const responseUsers = await postSendData(data)
            setResponseUser(Array.isArray(responseUsers.data) ? responseUsers.data : [responseUsers.data]);
        }else{
            setResponseUser([])
        }
    };

    const editData = () => {
        if (isActiveRadio !== null) {
                const user = responseUser.find(user => user.id === isActiveRadio);
            if (user) {
                setFoundUser(user);
                setNumeroColaborador(user.registration_number)
                setNombres(user.firstname)
                setApellidos(user.realname)
                setNombreUsuario(user.name)
                setActiveButton(true);
            } else {
                console.log('Select an user');
                setNumeroColaborador("")
                setNombres("")
                setApellidos("")
                setNombreUsuario("")
            }
            
        }
    };

    const saveData = async () => {

        const variable = await putUpdatedData(numeroColaborador,nombres, apellidos, nombreUsuario);
        console.log(variable.data)
        setActiveButton(false)
        setNumeroColaborador("")
        setNombres("")
        setApellidos("")
        setNombreUsuario("")
        setIsActiveRadio(0)
        setResponseUser([])
        setFoundUser(null);
    };

    const cancelData= () => {
        setResponseUser([])
        setNumeroColaborador("")
        setNombres("")
        setApellidos("")
        setNombreUsuario("")
        setActiveButton(false)
        setIsActiveRadio(0)
        setCurrentPage(1)
    };

    const handleInputChangeCheckbox = (id:number) => {
        isActiveRadio === id ? setIsActiveRadio(0) : setIsActiveRadio(id);
    };

    const responsivaPrint = async () => {
        const value = await getComputersRelation(isActiveRadio)
        console.log(value.data)
        setPdfData(value.data);
    }
    
    return (
        <>
            <ComplexNavbar />
            <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full mx-auto pb-6">
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Numero de colaborador:</label>
                        <input value={numeroColaborador} onKeyPress={handleKeyPress} onChange={(e) => handleInputChange('numeroColaborador', e.target.value)}
                            type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="" maxLength={5} required />

                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Nombres:</label>
                        <input value={nombres} onKeyPress={handleKeyPress} onChange={(e) => handleInputChange('nombres', e.target.value)} type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="" maxLength={20} required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Apellidos:</label>
                        <input value={apellidos} onKeyPress={handleKeyPress} onChange={(e) => handleInputChange('apellidos', e.target.value)} type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="" maxLength={20} required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre de usuario:</label>
                        <input value={nombreUsuario} onKeyPress={handleKeyPress} onChange={(e) => handleInputChange('nombreUsuario', e.target.value)} type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="" maxLength={20} required />
                    </div>

                </div>

                <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map(
                                ({ id, registration_number, name, firstname, realname,
                                }) => (
                                    <tr key={id}>
                                        {name ? <td className="p-4 border-b border-blue-gray-50">
                                            <Checkbox onChange={(e) =>
                                                handleInputChangeCheckbox(id)
                                            }
                                                className="h-5 w-5 rounded-full checked:bg-blue-700 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0 "
                                                crossOrigin={undefined}
                                                checked={isActiveRadio === id}
                                            />
                                        </td> : ''}
                                        
                                        <td className="bg-white p-4 border-b border-blue-gray-50">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {name ? name : ''}
                                            </Typography>
                                        </td>
                                        <td className="bg-white p-4 border-b border-blue-gray-50">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {registration_number ? registration_number : ''}
                                            </Typography>
                                        </td>
                                        <td className="bg-white p-4 border-b border-blue-gray-50">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {firstname ? firstname : ''}
                                            </Typography>
                                        </td>
                                        <td className="bg-white p-4 border-b border-blue-gray-50">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {realname? realname: ''}
                                            </Typography>
                                        </td>
                                        <td className="bg-white p-4 border-b border-blue-gray-50">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                ""
                                            </Typography>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                        <Typography variant="small" color="blue-gray" className="font-normal text-colorRoyalton">
                            {totalPages === 0 ? `Página ${currentPage} de 1` : `Página ${currentPage} de ${totalPages}`}
                        </Typography>
                        <div className="flex gap-2">
                            <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} variant="outlined" size="sm">Anterior</Button>
                            <Button onClick={() => {
                                if (currentPage < totalPages) {
                                    setCurrentPage(currentPage + 1);
                                }
                            }} disabled={currentPage === totalPages} variant="outlined" size="sm">Siguiente</Button>
                        </div>
                    </CardFooter>
                    
                </Card>

                <div className="flex flex-col pt-10 justify-end gap-y-4 sm:flex-row sm:flex-wrap sm:justify-end sm:gap-x-4 pb-6">
                    {isActiveRadio? (
                        <PDFDownloadLink  document={<ResponsivaPdf data={pdfData} />} fileName="Responsiva.pdf">
                        <Button onClick={responsivaPrint} className="w-full sm:w-32 h-12" color="blue">
                            GENERAR
                        </Button>
                    </PDFDownloadLink>
                    ) : null}

                    <Button
                        disabled={activeButton ? true : false}
                        onClick={searchData}
                        className="w-full sm:w-32 h-12"
                        color="blue"
                    >
                        Buscar
                    </Button>
                    <Button onClick={editData} className="w-full sm:w-32 h-12" color="blue">
                        Editar
                    </Button>
                    {activeButton && foundUser && isActiveRadio === foundUser.id ? (
                        <Button onClick={saveData} className="w-full sm:w-32 h-12" color="blue">
                            Guardar
                        </Button>
                    ) : null}
                    <Button onClick={cancelData} className="w-full sm:w-32 h-12" variant="outlined">
                        Cancelar
                    </Button>
                </div>

            </div>
        </>
    )
}

export default responsiva

