import React from 'react'
import ComplexNavbar from '../component/navbar'
import { Button, Card, Checkbox, Typography } from "@material-tailwind/react";

function addUser() {
    return (
        <>
            <ComplexNavbar />
            <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
                <div className='border border-gray-500 rounded-xl p-6 mb-12'>
                    <div>
                        <h2 className='text-center mb-6 font-semibold pb-2'>Generales del usuario</h2>
                    </div>
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
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre para mostrar:</label>
                            <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@thefives.com.mx" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Usuario:</label>
                            <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@thefives.com.mx" required />
                        </div>

                    </div>
                </div>

                <div className='border border-gray-500 rounded-xl p-6'>
                    <div>
                            <h2 className='text-center mb-6 font-semibold pb-2'>Organización</h2>
                    </div>
                    <div className="w-full mx-auto pb-6">
                        <div className="mb-5">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Puesto:</label>
                            <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@thefives.com.mx" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Departamento:</label>
                            <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@thefives.com.mx" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Empresa:</label>
                            <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@thefives.com.mx" required />
                        </div>
                        <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Jefe difecto:</label>
                            <div className='flex gap-4'>
                            <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@thefives.com.mx" required />
                            <Button color='blue'>Buscar Jefe Directo</Button>
                            
                            </div>
                            </div>
    

                    </div>
                </div>
            </div>

        </>
    )
}

export default addUser