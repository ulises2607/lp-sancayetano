"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { TiArrowForwardOutline } from "react-icons/ti";
import Loading from "./loading";

const CourseForm = () => {
  const router = useRouter();
  const [dataForm, setDataForm] = useState({});
  const [deshabilidado, setDeshabilitado] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDeshabilitado(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    setDataForm(data);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Email sent successfully", result);

        setIsLoading(true);
        router.push("/curso-inscripcion/success");
      } else {
        const error = await response.json();
        console.error("Error sending email", error);
      }
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Header */}
      <div className="bg-[#297e93] p-6 rounded-t-lg">
        <div className="flex justify-center items-center text-center w-full space-x-4">
          <Image src="/LogoNav.png" alt="Logo" width={50} height={50} />
          <h2 className="text-[#ebf5f6] font-bold w-[90%] tracking-wider">
            INSTITUTO SAN CAYETANO N° 8092
          </h2>
        </div>
        <h1 className="text-[#ebf5f6] text-center text-3xl font-bold mt-4 tracking-wider">
          III CONGRESO DE TECNICOS EN LABORATORIO
        </h1>
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded-b-lg shadow-lg">
        <h3 className="text-[#297e93] font-bold mb-4">FICHA DE INSCRIPCION</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:flex md:items-center justify-end pr-2 font-bold text-gray-700 min-w-[25%]">
              Nombre y Apellido <span className="ml-3">:</span>
            </label>
            <input
              name="fullname"
              type="text"
              className="mt-1 md:mt-0 block bg-[#f4f4f4] w-full border border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:flex md:items-center justify-end pr-2 font-bold text-gray-700 min-w-[25%]">
              Fecha de Nacimiento <span className="ml-3">:</span>
            </label>
            <input
              required
              name="bornDate"
              type="date"
              className="mt-1 md:mt-0 block bg-[#f4f4f4] w-full border border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-transparent"
            />
          </div>
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:flex md:items-center justify-end pr-2 font-bold text-gray-700 min-w-[25%]">
              D.N.I. <span className="ml-3">:</span>
            </label>
            <input
              required
              name="D.N.I."
              type="number"
              className="mt-1 md:mt-0 block bg-[#f4f4f4] w-full border border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-transparent"
            />
          </div>
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:flex md:items-center justify-end pr-2 font-bold text-gray-700 min-w-[25%]">
              Domicilio <span className="ml-3">:</span>
            </label>
            <input
              required
              name="Domicilio"
              type="text"
              className="mt-1 md:mt-0 block bg-[#f4f4f4] w-full border border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-transparent"
            />
          </div>
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:flex md:items-center justify-end pr-2 font-bold text-gray-700 min-w-[25%]">
              Telefono <span className="ml-3">:</span>
            </label>
            <input
              required
              name="Telefono"
              type="number"
              className="mt-1 md:mt-0 block bg-[#f4f4f4] w-full border border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-transparent"
            />
          </div>
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:flex md:items-center justify-end pr-2 font-bold text-gray-700 min-w-[25%]">
              Email <span className="ml-3">:</span>
            </label>
            <input
              required
              name="Email"
              type="email"
              className="mt-1 md:mt-0 block bg-[#f4f4f4] w-full border border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-transparent"
            />
          </div>
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:flex md:items-center justify-end pr-2 font-bold text-gray-700 min-w-[25%]">
              Profesion <span className="ml-3">:</span>
            </label>
            <input
              required
              name="Profesion"
              type="text"
              className="mt-1 md:mt-0 block bg-[#f4f4f4] w-full border border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-transparent"
            />
          </div>
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:flex md:items-center justify-end pr-2 font-bold text-gray-700 min-w-[25%]">
              Estudiante <span className="ml-3">:</span>
            </label>
            <input
              required
              name="Estudiante"
              type="text"
              className="mt-1 md:mt-0 block bg-[#f4f4f4] w-full border border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-transparent"
            />
          </div>

          {/* Separador */}
          <div className="border-b-2 border-gray-400 pb-5"></div>
          {/* Fin Separador */}

          {/* Tipo de asistente */}
          <div className="p-10 pb-5 flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex gap-3">
              <label className="block text-gray-700">Asistente:</label>
              <input
                id="asistente"
                name="Tipo de Asistente"
                type="radio"
                value="Asistente"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-950 checked:bg-teal-600 checked:before:bg-teal-600 hover:before:opacity-10"
              />
            </div>
            <div className="flex gap-3">
              <label className="block text-gray-700">Disertante:</label>
              <input
                id="disertante"
                name="Tipo de Asistente"
                type="radio"
                value="Disertante"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-950 checked:bg-teal-600 checked:before:bg-teal-600 hover:before:opacity-10"
              />
            </div>
            <div className="flex gap-3">
              <label className="block text-gray-700">
                Presentacion de poster:
              </label>
              <input
                id="gral-public"
                name="Tipo de Asistente"
                type="radio"
                value="Presentacion de poster."
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-950 checked:bg-teal-600 checked:before:bg-teal-600 hover:before:opacity-10"
              />
            </div>
          </div>

          <div className="flex w-full justify-center items-center text-center">
            {deshabilidado ? (
              <div className="flex justify-center items-center space-x-1 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-[#297e93] to-[#1f5f6a] border border-transparent transform hover:border-white transition-transform duration-300 ease-in-out">
                <svg
                  fill="none"
                  className="w-6 h-6 animate-spin"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                <div className="p-3">Enviando...</div>
              </div>
            ) : (
              <button
                type="submit"
                className="flex justify-center m-4 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-[#297e93] to-[#1f5f6a] border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-300 ease-in-out"
                disabled={deshabilidado}
              >
                Inscribirme
              </button>
            )}
          </div>

          {/* Separador */}
          <div className="border-b-2 border-gray-400"></div>
          {/* Fin Separador */}

          <div className="mt-6">
            <div className="flex gap-2 items-center">
              <TiArrowForwardOutline className="size-5 text-white bg-[#297e93] rounded-full heartbeat" />
              <h4 className="text-black font-bold text-xl">Inversión:</h4>
            </div>
            <p className="text-gray-700">Alumnos: $10.000</p>
            <p className="text-gray-700">Profesionales Técnicos: $18.000</p>
            <p className="text-gray-700">Publico en Gral.: $1.000</p>
            <p className="text-gray-700">
              Enviar comprobante por Whatsapp al número: (387) - 4734054
            </p>
            <p className="text-black font-bold mt-4">
              Pago por Transferencia: (ALIAS) - insti.sancayetano.mp
            </p>
            <p className="text-black font-bold">FUNDACION EDUCATIVA SALTA</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
