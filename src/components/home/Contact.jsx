import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Contacto</h1>
            <form action="https://getform.io/f/2a62842f-2bca-4902-ad15-6f287d542f3a" method="POST" encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 w-full py-1">
                    <div className="flex flex-col">
                        <label className="text-sm py-1">Nombre</label>
                        <input className="border-2 rounded-lg p-1 flex border-gray-300" type="text" name="name" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm py-1">Numero telefónico</label>
                        <input className="border-2 rounded-lg p-1 flex border-gray-300" type="text" name="phone" />
                    </div>
                </div>
                <div className="flex flex-col py-1">
                    <label className="text-sm py-1">Correo electrónico</label>
                    <input className="border-2 rounded-lg p-1 flex border-gray-300" type="email" name="email" />
                </div>
                <div className="flex flex-col py-1">
                    <label className="text-sm py-1">Asunto</label>
                    <input className="border-2 rounded-lg p-1 flex border-gray-300" type="text" name="subject" />
                </div>
                <div className="flex flex-col py-1">
                    <label className="text-sm py-1">Mensaje</label>
                    <textarea className="border-2 rounded-lg p-4 border-gray-300"  type="text" name="message"></textarea>
                </div>
                <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
                    Enviar mensaje
                </button>
            </form>
        </div>

    )
} 

export default Contact