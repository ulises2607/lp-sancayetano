import React from "react";
import Image from "next/image"; // Asegúrate de importar Image si lo necesitas
import { TiArrowForwardOutline } from "react-icons/ti";

const Success = () => {
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
          II CONGRESO DE TÉCNICOS EN LABORATORIO
        </h1>
      </div>

      {/* Success Message */}
      <div className="bg-white p-6 rounded-b-lg shadow-lg">
        <div className="flex w-full justify-center items-center text-center">
          <h4 className="text-[#297e93] font-bold text-xl">
            Inscripción registrada con éxito.
          </h4>
        </div>

        {/* Separador */}
        <div className="border-b-2 border-gray-400 pb-5"></div>
        {/* Fin Separador */}

        {/* Información adicional */}
        <div className="mt-6">
          <p className="text-gray-700">
            Enviar comprobante por Whatsapp al número: (387) - 4734054
          </p>
          <p className="text-black font-bold mt-4">
            Pago por Transferencia: (ALIAS) - insti.sancayetano.mp
          </p>
          <p className="text-black font-bold">FUNDACIÓN EDUCATIVA SALTA</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
