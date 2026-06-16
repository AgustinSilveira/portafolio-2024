import ProjectItem from './Projectitem';
import React from "react";
import products from '../../img/products.jpg';
import wallet from '../../img/wallet.jpg';
import chat from '../../img/chat.jpg';
import dondeestas from '../../img/donde-estas.jpeg';
import lmconstrucciones from '../../img/lmconstrucciones.png'; 

const Projects = () => {
  // Datos estructurados de tus proyectos de estudio
  const academicProjects = [
    {
      id: "products",
      img: products,
      title: "Administrador de productos",
      url: "https://prodtasks.vercel.app/auth",
      year: "2024",
      isPublished: true,
      description: "Esta aplicación web ha sido diseñada para facilitar la gestión de mis productos de una manera visual y fácil de comprender. Proporciona a los usuarios la capacidad de visualizar sus productos en detalle de forma sencilla.",
      techs: ["html", "css", "tailwind", "typescript"]
    },
    {
      id: "wallet",
      img: wallet,
      title: "Billetera virtual",
      url: "https://wallet-v1-5.vercel.app/welcome",
      year: "2024",
      isPublished: true,
      description: "Esta aplicación web permite realizar transferencias de dinero ficticio mediante códigos QR. Es fácil de usar, con una visualización atractiva. El usuario ingresa un monto, que se convierte en un QR, y el destinatario solo necesita escanearlo para completar la transacción de manera sencilla.",
      techs: ["html", "css", "tailwind", "typescript", "ionic"]
    },
    {
      id: "chat",
      img: chat,
      title: "Chat en tiempo real",
      url: "https://chat-app-liard-gamma.vercel.app/",
      year: "2025",
      isPublished: true,
      description: "Esta aplicación, con un diseño responsive adaptado a computadoras y dispositivos móviles, ofrece un sistema de mensajería en tiempo real para dialogar con diferentes usuarios registrados en la aplicación.",
      techs: ["firebase", "react", "tailwind", "javascript"]
    },
    {
      id: "dondeestas",
      img: dondeestas,
      title: "Animales perdidos en tiempo real",
      url: "https://donde-estas.vercel.app",
      year: "2025",
      isPublished: true,
      description: "Con esta aplicación, podemos ver un mapa en tiempo real con todos los animales perdidos en ese momento.",
      techs: ["firebase", "react", "tailwind", "javascript"]
    }
  ];

  // Diccionario de SVGs para evitar repeticiones en el código
  const svgIcons = {
    html: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="#bdbdbd" d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"></path><path fill="#b71c1c" d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"></path><path fill="#dd2c00" d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"></path><path fill="#bdbdbd" d="M24 5.996L24 15.504 32.578 34 36.987 34z"></path><path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z"></path><path fill="#bdbdbd" d="M24 24H30V28H24z"></path><path fill="#eee" d="M18 24H24V28H18z"></path></svg>,
    css: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><circle cx="24" cy="24" r="9" fill="#448aff"></circle><circle cx="37" cy="11" r="4" fill="#448aff"></circle><path fill="#448aff" d="M41.706,14.715c-0.842,1.064-2.034,1.836-3.405,2.139C39.379,19.007,40,21.429,40,24 c0,8.837-7.163,16-16,16S8,32.837,8,24S15.163,8,24,8c2.571,0,4.993,0.621,7.145,1.699c0.303-1.371,1.075-2.564,2.139-3.405 C30.509,4.835,27.354,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20C44,20.646,43.165,17.491,41.706,14.715 z"></path></svg>,
    tailwind: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path></svg>,
    typescript: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path></svg>,
    ionic: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="#f06292" d="M39.867,25.956c-1.538,0.008-2.87,0.377-3.986,0.928c-0.408-0.815-0.822-1.532-0.891-2.065 c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87c-0.006-0.079-0.096-0.456-0.983-0.463 c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.26,0.761-0.366,1.311c-0.155,0.804-1.771,3.673-2.688,5.173 c-0.3-0.586-0.555-1.102-0.608-1.51c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87 c-0.006-0.079-0.096-0.456-0.983-0.463c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.185,0.781-0.366,1.311 c-0.182,0.529-2.329,5.314-2.892,6.555c-0.287,0.632-0.536,1.14-0.712,1.486c-0.001-0.001-0.001-0.002-0.001-0.002 s-0.011,0.023-0.029,0.062c-0.151,0.295-0.24,0.458-0.24,0.458s0.001,0.002,0.003,0.006c-0.12,0.217-0.248,0.418-0.311,0.418 c-0.044,0-0.133-0.577,0.019-1.369c0.32-1.66,1.087-4.248,1.08-4.338c-0.004-0.046,0.143-0.497-0.501-0.733 c-0.626-0.229-0.849,0.153-0.906,0.154c-0.055,0.001-0.096,0.135-0.096,0.135s0.697-2.911-1.33-2.911 c-1.268,0-3.024,1.387-3.889,2.644c-0.546,0.298-1.715,0.936-2.954,1.617c-0.476,0.262-0.962,0.529-1.423,0.783 c-0.031-0.035-0.063-0.069-0.095-0.104c-2.459-2.623-7.003-4.478-6.811-8.005c0.07-1.282,0.516-4.658,8.733-8.752 c6.731-3.354,12.12-2.431,13.051-0.386c1.33,2.923-2.88,8.354-9.87,9.138c-2.663,0.299-4.066-0.734-4.415-1.118 c-0.367-0.405-0.422-0.423-0.559-0.347c-0.223,0.124-0.082,0.481,0,0.694c0.209,0.543,1.065,1.506,2.525,1.986 c1.285,0.422,4.412,0.653,8.193-0.81c4.236-1.638,7.543-6.196,6.571-10.005c-0.988-3.874-7.412-5.148-13.492-2.988 C12.44,9.332,8.523,11.35,5.706,13.984c-3.349,3.132-3.883,5.859-3.663,6.998c0.782,4.048,6.361,6.684,8.595,8.637 c-0.11,0.061-0.214,0.118-0.308,0.17c-1.12,0.554-5.373,2.78-6.437,5.131c-1.207,2.667,0.192,4.581,1.118,4.839 c2.869,0.798,5.813-0.638,7.396-2.998c1.582-2.359,1.389-5.432,0.663-6.834c-0.009-0.017-0.019-0.034-0.028-0.052 c0.289-0.171,0.584-0.345,0.876-0.517c0.57-0.335,1.13-0.647,1.615-0.911c-0.272,0.744-0.471,1.637-0.574,2.926 c-0.122,1.514,0.499,3.471,1.311,4.241c0.358,0.339,0.788,0.347,1.06,0.347c0.945,0,1.376-0.786,1.851-1.716 c0.582-1.14,1.099-2.468,1.099-2.468s-0.648,3.586,1.118,3.586c0.644,0,1.291-0.835,1.58-1.26c0.001,0.005,0.001,0.007,0.001,0.007 s0.017-0.028,0.05-0.083c0.067-0.102,0.105-0.167,0.105-0.167s0.001-0.007,0.003-0.019c0.259-0.449,0.833-1.473,1.693-3.162 c1.112-2.182,2.178-4.916,2.178-4.916s0.099,0.668,0.424,1.774c0.191,0.65,0.597,1.369,0.918,2.059 c-0.258,0.358-0.416,0.563-0.416,0.563s0.001,0.004,0.004,0.011c-0.206,0.274-0.437,0.569-0.679,0.857 c-0.878,1.045-1.923,2.239-2.063,2.583c-0.165,0.406-0.126,0.704,0.193,0.945c0.233,0.175,0.647,0.203,1.08,0.174 c0.789-0.053,1.343-0.249,1.617-0.368c0.427-0.151,0.924-0.388,1.39-0.731c0.861-0.633,1.38-1.538,1.33-2.738 c-0.028-0.661-0.238-1.316-0.505-1.934c0.078-0.112,0.156-0.226,0.235-0.34c1.357-1.984,2.41-4.164,2.41-4.164 s0.099,0.668,0.424,1.774c0.164,0.559,0.489,1.17,0.781,1.768c-1.276,1.037-2.067,2.242-2.342,3.032 c-0.508,1.462-0.11,2.124,0.636,2.275c0.338,0.068,0.816-0.087,1.175-0.239c0.447-0.148,0.984-0.395,1.486-0.764 c0.861-0.633,1.689-1.519,1.639-2.718c-0.023-0.546-0.171-1.088-0.372-1.608c1.082-0.451,2.482-0.701,4.266-0.493 c3.827,0.447,4.577,2.836,4.434,3.836c-0.144,1-0.946,1.55-1.215,1.716c-0.268,0.166-0.35,0.224-0.328,0.347 c0.033,0.179,0.157,0.173,0.386,0.134c0.315-0.053,2.009-0.813,2.082-2.659C46.089,28.509,43.844,25.935,39.867,25.956z M10.37,35.9 c-1.268,1.383-3.038,1.905-3.798,1.465c-0.82-0.475-0.495-2.511,1.06-3.979c0.948-0.894,2.172-1.718,2.984-2.225 c0.185-0.111,0.456-0.274,0.786-0.472c0.055-0.031,0.086-0.048,0.086-0.048l-0.001-0.002c0.064-0.038,0.129-0.077,0.196-0.118 C12.25,32.61,11.701,34.449,10.37,35.9z M19.605,29.623c-0.441,1.076-1.365,3.83-1.928,3.682c-0.483-0.127-0.777-2.22-0.096-4.28 c0.342-1.037,1.074-2.276,1.504-2.757c0.692-0.774,1.454-1.027,1.639-0.713C20.959,25.955,19.882,28.948,19.605,29.623z M27.234,33.263c-0.187,0.098-0.359,0.159-0.438,0.112c-0.059-0.035,0.077-0.164,0.077-0.164s0.954-1.027,1.33-1.494 c0.219-0.272,0.472-0.595,0.748-0.955c0.002,0.036,0.003,0.072,0.003,0.107C28.952,32.099,27.764,32.929,27.234,33.263z M33.111,31.923c-0.14-0.099-0.116-0.42,0.343-1.421c0.18-0.393,0.592-1.054,1.306-1.686c0.083,0.26,0.133,0.509,0.132,0.741 C34.883,31.105,33.779,31.683,33.111,31.923z"></path></svg>,
    firebase: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"></path><path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"></path><path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"></path><path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"></path></svg>,
    javascript: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path></svg>,
    react: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-11.5 -10.232 23 20.463"><circle r="2.05" fill="#61dafb"/><g fill="none" stroke="#61dafb" stroke-width="1"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>,
    next: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 180 180"><path fill="#000" d="M90 0a90 90 0 1 0 90 90A90 90 0 0 0 90 0Zm34 130.63-40.45-52.38v52.38H72.18V54.49h11.37l38.2 49.52V54.49h11.37v76.14Zm-4.09-54.66a5 5 0 0 1-4.32-2.51l-4.14-5.4a4.91 4.91 0 0 1 .45-6.42 5 5 0 0 1 6.84.48l4.14 5.4a4.94 4.94 0 0 1-.48 6.42 5 5 0 0 1-2.49 1.03Z"/></svg>
  };

  return (
    <div id="projects" className="max-w-[1240px] m-auto md:pl-20 p-4 py-16 transition-all duration-300">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#001b5e] tracking-tight mb-4">
        Proyectos
      </h1>
      <p id='info-project' className="text-center text-gray-600 max-w-[800px] m-auto py-4 text-base md:text-lg leading-relaxed">
        Estos son solo algunos ejemplos de mi trabajo. Cada proyecto refleja mi compromiso
        con la excelencia y mi deseo constante de aprender y mejorar. Estoy disponible para discutir 
        en detalle cualquier solución específica que despierte tu interés.
      </p>

      {/* ================= SECCIÓN: PROYECTOS REALES ================= */}
      <div className="mt-16 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#001b5e] border-b-4 border-indigo-500 inline-block pb-2">
          Proyectos Reales
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Soluciones de software deployed en producción enfocadas en resolver necesidades de mercado reales.
        </p>
      </div>

      {/* Grid optimizado para Proyectos Reales */}
      <div className="grid sm:grid-cols-2 lg:gap-16 gap-8 mb-20">
        
        {/* Único Proyecto Real: LM Construcciones */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-2 border border-gray-100 transform hover:-translate-y-1">
          <a href="https://lmconstrucciones.com.uy" target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl">
            {/* Se usa ProjectItem reutilizando la imagen importada */}
            <ProjectItem
              img={lmconstrucciones}
              title={
                <div className="w-full">
                  <div className="flex justify-between items-center w-full mb-1">
                    <span className="text-gray-800 text-lg md:text-xl font-bold group-hover:text-[#001b5e] transition-colors">
                      LM Construcciones
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-green-600 rounded-full">
                      2026
                    </span>
                  </div>
                  <p className="text-xs font-medium text-emerald-600 tracking-wide mt-0.5 uppercase">
                    Despliegue Comercial Activo
                  </p>
                </div>
              }
              description={
                <div className="mt-2">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                    Sitio web corporativo optimizado para una empresa constructora en Uruguay. Cuenta con una interfaz moderna y fluida para la visualización de proyectos arquitectónicos, catálogo de servicios y un canal directo de cotizaciones para clientes.
                  </p>
                  <div className="flex gap-3 items-center pt-3 border-t border-gray-100">
                    <div className="hover:scale-110 transition-transform duration-200">{svgIcons.react}</div>
                    <div className="hover:scale-110 transition-transform duration-200">{svgIcons.next}</div>
                    <div className="hover:scale-110 transition-transform duration-200">{svgIcons.tailwind}</div>
                  </div>
                </div>
              }
            />
          </a>
        </div>

      </div>

      {/* ================= SECCIÓN: TIEMPO DE ESTUDIO ================= */}
      <div className="mt-16 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#001b5e] border-b-4 border-indigo-300 inline-block pb-2">
          Proyectos Académicos
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Desarrollos e integraciones construidos durante mi etapa académica y de investigación técnica.
        </p>
      </div>

      {/* Grid de proyectos de estudio */}
      <div id='info-cards' className="grid sm:grid-cols-2 lg:gap-16 gap-8">
        {academicProjects.map((project) => (
          <div key={project.id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-2 border border-gray-100 transform hover:-translate-y-1">
            <a href={project.url} target='_blank' rel="noreferrer">
              <ProjectItem
                img={project.img}
                title={
                  <div className="w-full">
                    <div className="flex justify-between items-center w-full mb-1">
                      <span className="text-gray-800 text-lg md:text-xl font-bold group-hover:text-[#001b5e] transition-colors">
                        {project.title}
                      </span>
                      <span className="text-sm font-semibold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md">
                        {project.year}
                      </span>
                    </div>
                    {project.isPublished && (
                      <p className="text-xs font-medium text-indigo-500 tracking-wide mt-0.5">
                        Creado en tiempo de estudio
                      </p>
                    )}
                  </div>
                }
                description={
                  <div className="mt-2">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-3 items-center pt-3 border-t border-gray-100">
                      {project.techs.map((tech) => (
                        <div key={tech} className="hover:scale-110 transition-transform duration-200">
                          {svgIcons[tech] || null}
                        </div>
                      ))}
                    </div>
                  </div>
                }
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;