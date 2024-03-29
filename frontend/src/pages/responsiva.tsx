import React from 'react'
import ComplexNavbar from '../component/navbar'
import { Button, Card, Checkbox, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Usuarios encontrados", "Numero de colaborador", "Departamento", "Puesto", "Hotel", "Selección"];

const TABLE_ROWS = [
    {
        user: "John Michael",
        noCola: "Manager",
        dep: "23/04/18",
        pos: "Sistemas",
        hotel: "The Fives Beach"
    },
];
function responsiva() {
    return (
        <>
            <ComplexNavbar />
            <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full mx-auto pb-6">
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Numero de colaborador:</label>
                        <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@thefives.com.mx" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Nombres:</label>
                        <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@thefives.com.mx" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Apellidos:</label>
                        <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@thefives.com.mx" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Otro:</label>
                        <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@thefives.com.mx" required />
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
                            {TABLE_ROWS.map(({  user, noCola, dep, pos, hotel }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={index}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {user}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {noCola}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {dep}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {pos}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {hotel}
                                            </Typography>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <Checkbox
                                                className="h-5 w-5 rounded-full checked:bg-blue-700 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0 "
                                                crossOrigin={undefined}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>

                <div className='flex flex-col pt-10 justify-end gap-y-4 sm:flex-row sm:flex-wrap sm:justify-end sm:gap-x-4'>
                    <Button color='blue'>Generar</Button>
                    <Button color='blue'>Buscar</Button>
                    <Button color='blue'>Editar</Button>
                    <Button variant="outlined">Cancel</Button>
                </div>


            </div>

        </>
    )
}

export default responsiva