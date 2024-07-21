/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../assets/css/dashboard_user.css"; // Asegúrate de importar tu archivo de estilos si es necesario
// Import picture
import img1 from "../assets/images/imagen1.png";
import img2 from "../assets/images/imagen2.png";
import img3 from "../assets/images/imagen3.png";
import img4 from "../assets/images/imagen4.png";
import img5 from "../assets/images/imagen5.png";
import img11 from "../assets/images/imagen11.png";
import img7 from "../assets/images/imagen7.png";
import img8 from "../assets/images/imagen8.png";
import img9 from "../assets/images/imagen9.png";
import img10 from "../assets/images/imagen10.png";

// Import Component
import Footer from "./footer/footer";

//Import Menu

import Nav from "./nav/nav";

//Content

const Dashboard = () => {
  return (
    <>
      <Nav />
      <h1>Síntomas del cáncer de mama</h1>

      <p style={{ display: "flex", marginLeft: "50px", marginRight: "70px" }}>
        El cáncer de mama es una enfermedad en la cual las células de la mama se
        multiplican sin control. Existen distintos tipos de cáncer de mama. El
        tipo de cáncer de mama depende de qué células de la mama se vuelven
        cancerosas. La mayoría de los cánceres de mama comienzan en los
        conductos o en los lobulillos. El cáncer de mama puede diseminarse fuera
        de la mama a través de los vasos sanguíneos y los vasos linfáticos.
        Cuando el cáncer de mama se disemina a otras partes del cuerpo, se dice
        que ha hecho metástasis. Aquí te presentamos algunos de los síntomas más
        comunes del cáncer de mama y sus definiciones:
      </p>
      <div id="symptoms" className="cards-container">
        <div className="card">
          <img
            src={img1}
            alt="Irritación o hundimientos en la piel de la mama"
          />
          <h2>Irritación o hundimientos en la piel de la mama</h2>
          <p className="definition">
            Este cambio puede ser causado por varios factores, incluyendo la
            menstruación, la maternidad, cambios en el peso y ciertos
            medicamentos. Sin embargo, un cambio significativo que no está
            relacionado con estos factores podría ser un signo de cáncer de
            mama.
          </p>
          <a
            href="https://www.medicalnewstoday.com/articles/es/hoyuelos-por-cancer-de-mama#:~:text=%C2%BFQu%C3%A9%20son%20los%20hoyuelos%3F,como%20c%C3%A1ncer%20de%20mama%20inflamatorio."
            target="_blank"
            rel="noreferrer"
          >
            Más información
          </a>
        </div>
        <div className="card">
          <img
            src={img5}
            alt="Enrojecimiento o descamación en la zona del pezón o la mama"
          />
          <h2>Enrojecimiento o descamación en la zona del pezón o la mama</h2>
          <p className="definition">
            Este cambio puede incluir hoyuelos, enrojecimiento, descamación o
            engrosamiento de la piel del seno. Estos cambios pueden ser síntomas
            de cáncer de mama, aunque también pueden ser causados por otros
            problemas de salud.
          </p>
          <a
            href="https://www.breastcancer.org/es/afecciones-mamarias-benignas/eccema-pezon"
            target="_blank"
            rel="noreferrer"
          >
            Más información
          </a>
        </div>
        <div className="card">
          <img src={img2} alt="Hundimiento del pezón o dolor en esa zona" />
          <h2>Hundimiento del pezón o dolor en esa zona</h2>
          <p className="definition">
            Este síntoma puede ser causado por varios factores, incluyendo la
            menstruación, la maternidad, cambios en el peso y ciertos
            medicamentos. Sin embargo, un cambio significativo que no está
            relacionado con estos factores podría ser un signo de cáncer de
            mama.
          </p>
          <a
            href="https://www.bbc.com/mundo/noticias-39578310"
            target="_blank"
            rel="noreferrer"
          >
            Más información
          </a>
        </div>
        <div className="card">
          <img
            src={img4}
            alt="Secreción del pezón, que no sea leche, incluso de sangre"
          />
          <h2>Secreción del pezón, que no sea leche, incluso de sangre</h2>
          <p className="definition">
            Este síntoma puede ser causado por varios factores, incluyendo la
            menstruación, la maternidad, cambios en el peso y ciertos
            medicamentos. Sin embargo, un cambio significativo que no está
            relacionado con estos factores podría ser un signo de cáncer de
            mama.
          </p>
          <a
            href="https://www.mayoclinic.org/es/diseases-conditions/galactorrhea/symptoms-causes/syc-20350431#:~:text=La%20secreci%C3%B3n%20por%20el%20pez%C3%B3n,c%C3%A1ncer%20de%20mama%20no%20diagnosticado."
            target="_blank"
            rel="noreferrer"
          >
            Más información
          </a>
        </div>
        <div className="card">
          <img src={img3} alt="Dolor en cualquier parte de la mama" />
          <h2>Dolor en cualquier parte de la mama</h2>
          <p className="definition">
            Este síntoma puede ser causado por varios factores, incluyendo la
            menstruación, la maternidad, cambios en el peso y ciertos
            medicamentos. Sin embargo, un cambio significativo que no está
            relacionado con estos factores podría ser un signo de cáncer de
            mama.
          </p>
          <a
            href="https://medlineplus.gov/spanish/ency/article/003152.htm#:~:text=Hay%20muchas%20causas%20posibles%20para,antes%20del%20periodo%20es%20normal."
            target="_blank"
            rel="noreferrer"
          >
            Más información
          </a>
        </div>
        <div className="card">
          <img src={img7} alt="Dolor en cualquier parte de la mama" />
          <h2>Aumento de la sensibilidad en la mama.</h2>
          <p className="definition">
            El aumento de la sensibilidad en la mama puede ser un síntoma de
            cáncer de mama, pero no es el síntoma más común. El síntoma más
            común del cáncer de mama es un bulto o engrosamiento en la mama.
            Otros síntomas posibles del cáncer de mama incluyen: Cambios en la
            piel de la mama, como enrojecimiento, descamación, hundimientos o
            hoyuelos. Secreción del pezón, especialmente si es de color rojo,
            verdoso o amarillento. Hundimiento del pezón o del área alrededor
            del pezón. Dolor en la mama o la axila. Cambios en el tamaño o la
            forma de la mama.
          </p>
          <a
            href="http://ilitiaginecologia.com/conoce-tus-mamas/"
            target="_blank"
            rel="noreferrer"
          >
            Más información
          </a>
        </div>
        <div className="card">
          <img src={img8} alt="Dolor en cualquier parte de la mama" />

          <h2>Un bulto o engrosamiento en la mama</h2>
          <p className="definition">
            es un engrosamiento o protuberancia que se palpa diferente del
            tejido mamario circundante. Un bulto puede ser descubierto por la
            propia mujer o por el médico durante una exploración clínica
            rutinaria. Los bultos en las mamas son relativamente frecuentes y,
            por lo general, son benignos.
          </p>
          <a
            href="https://www.bbc.com/mundo/noticias-39578310"
            target="_blank"
            rel="noreferrer"
          >
            Más información
          </a>
        </div>

        <div className="card">
          <img src={img9} alt="Dolor en cualquier parte de la mama" />
          <h2>Cambio en el tamaño o la forma de la mama.</h2>
          <p className="definition">
            s cualquier diferencia en el seno de lo que es habitual para una
            mujer en particular. Durante el ciclo menstrual, muchas mujeres
            tienen variaciones en el tamaño de los senos o más sensibilidad,
            generalmente causada por cambios en los niveles de las hormonas
            estrógeno y progesterona.
          </p>
          <a
            href="http://ilitiaginecologia.com/conoce-tus-mamas/"
            target="_blank"
            rel="noreferrer"
          >
            Más información
          </a>
        </div>

        <div className="card">
          <img src={img10} alt="Dolor en cualquier parte de la mama" />
          <h2>Hinchazón de los ganglios linfáticos de la axila o el cuello.</h2>
          <p className="definition">
            Los ganglios linfáticos son responsables de filtrar el líquido
            linfático y detectar los cambios químicos que indican que existe
            infección. Cuando estos puntos de filtro se encuentran en la axila,
            los médicos pueden llamarlos ganglios linfáticos axilares. Debido a
            que los ganglios linfáticos axilares están cerca de los senos, con
            frecuencia son el primer lugar donde se propaga el cáncer de mama si
            se mueve más allá del tejido mamario.
          </p>
          <a
            href="https://www.medicalnewstoday.com/articles/es/ganglios-linfaticos-axilares-y-cancer-de-mama"
            target="_blank"
            rel="noreferrer"
          >
            Más información
          </a>
        </div>

        <div className="card">
          <img src={img11} alt="Dolor en cualquier parte de la mama" />

          <h2>Sensación de ardor o hormigueo en la mama o el pezón</h2>
          <p className="definition">
            La sensación de ardor o hormigueo en la mama o el pezón puede ser un
            signo de cáncer de mama, pero también puede ser causada por otras
            afecciones, como la neuropatía diabética, la mastopatía
            fibroquística o la infección del pezón.En el caso del cáncer de
            mama, la sensación de ardor o hormigueo puede ser causada por el
            crecimiento del tumor o por la compresión de los nervios.
          </p>
          <a
            href="https://www.cancer.org/es/cancer/tipos/cancer-de-seno/pruebas-de-deteccion-y-deteccion-temprana-del-cancer-de-seno/signos-y-sintomas-del-cancer-de-seno.html"
            target="_blank"
            rel="noreferrer"
          >
            Más información
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Dashboard;
