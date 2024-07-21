import React from "react";
import "../assets/css/chat.css";
import Footer from "./footer/footer";
import Nav from "./nav/nav";
const Chat = () => {
  return (
    <>
      <Nav />

      <body>
        <form>
          <h2>Formulario de Síntomas del Cáncer de Mama</h2>

          <label>1. ¿Cuál es su edad?</label>

          <input
            type="number"
            name="edad"
            id="edad"
            min="0"
            max="120"
            placeholder="Edad"
          />

          <label>2. ¿Menopausia?</label>

          <select name="menopausia" id="menopausia">
            <option value="si_menopausia">Sí</option>
            <option value="no_menopausia">No</option>
          </select>

          <label>3. ¿Has tenido dolor en que seno?</label>

          <select name="seno" id="seno">
            <option value="seno_derecho" name="seno_derecho">
              Derecho
            </option>
            <option value="seno_izquierdo" name="seno_izquierdo">
              izquierdo
            </option>
          </select>

          <label>4. Ubicacion</label>

          <select name="ubicacion" id="ubicacion">
            <option value="bicacion_arriba" name="bicacion_arriba">
              Arriba
            </option>
            <option value="Ubicacion_abajo" name="Ubicacion_abajo">
              Abajo
            </option>
          </select>

          <label>
            5. ¿Has experimentado cambios en la textura de la piel de tus senos,
            como hoyuelos o engrosamiento?
          </label>

          <select name="cambios" id="cambios">
            <option
              value="cambios_textura_piel_si"
              name="cambios_textura_piel_si"
            >
              Sí
            </option>
            <option
              value="cambios_textura_piel_no"
              name="cambios_textura_piel_no"
            >
              No
            </option>
          </select>

          <label>6. ¿Has notado algún bulto o masa en tus senos?</label>

          <select name="seno" id="seno">
            <option value="bulto_senos_si" name="bulto_senos_si">
              Sí
            </option>
            <option value="bulto_senos_no" name="bulto_senos_no">
              No
            </option>
          </select>

          <label>
            7. ¿Hay cambios en la apariencia de tus pezones, como retracción o
            inversión?
          </label>

          <select name="cambios" id="cambios">
            <option value="cambios_pezones_si" name="cambios_pezones_si">
              Sí
            </option>
            <option value="cambios_pezones_no" name="cambios_pezones_no">
              No
            </option>
          </select>

          <label>8. ¿Has tenido algún cambio en tu peso recientemente?</label>

          <select name="cambios_peso" id="cambios_peso">
            <option
              value="cambio_peso_si"
              class="form-control"
              name="cambio_peso_si"
            >
              Sí
            </option>
            <option
              value="cambio_peso_no"
              class="form-control"
              name="cambio_peso_no"
            >
              No
            </option>
          </select>

          <br />
          <br />

          <center>
            <input type="submit" value="Enviar" />
          </center>
        </form>
      </body>

      <br />
      <br />
      <br />
      <body>
        <form>
          <h2>Formulario de Síntomas del Cáncer de Mama</h2>

          <label>1. ¿Cuál es su edad?</label>

          <input
            type="number"
            name="edad"
            id="edad"
            min="0"
            max="120"
            placeholder="Edad"
          />

          <label>2. ¿Menopausia?</label>

          <select name="menopausia" id="menopausia">
            <option value="si_menopausia">Sí</option>
            <option value="no_menopausia">No</option>
          </select>

          <label>3. ¿Has tenido dolor en que seno?</label>

          <select name="seno" id="seno">
            <option value="seno_derecho" name="seno_derecho">
              Derecho
            </option>
            <option value="seno_izquierdo" name="seno_izquierdo">
              izquierdo
            </option>
          </select>

          <label>4. Ubicacion</label>

          <select name="ubicacion" id="ubicacion">
            <option value="bicacion_arriba" name="bicacion_arriba">
              Arriba
            </option>
            <option value="Ubicacion_abajo" name="Ubicacion_abajo">
              Abajo
            </option>
          </select>

          <label>
            5. ¿Has experimentado cambios en la textura de la piel de tus senos,
            como hoyuelos o engrosamiento?
          </label>

          <select name="cambios" id="cambios">
            <option
              value="cambios_textura_piel_si"
              name="cambios_textura_piel_si"
            >
              Sí
            </option>
            <option
              value="cambios_textura_piel_no"
              name="cambios_textura_piel_no"
            >
              No
            </option>
          </select>

          <label>6. ¿Has notado algún bulto o masa en tus senos?</label>

          <select name="seno" id="seno">
            <option value="bulto_senos_si" name="bulto_senos_si">
              Sí
            </option>
            <option value="bulto_senos_no" name="bulto_senos_no">
              No
            </option>
          </select>

          <label>
            7. ¿Hay cambios en la apariencia de tus pezones, como retracción o
            inversión?
          </label>

          <select name="cambios" id="cambios">
            <option value="cambios_pezones_si" name="cambios_pezones_si">
              Sí
            </option>
            <option value="cambios_pezones_no" name="cambios_pezones_no">
              No
            </option>
          </select>

          <label>8. ¿Has tenido algún cambio en tu peso recientemente?</label>

          <select name="cambios_peso" id="cambios_peso">
            <option
              value="cambio_peso_si"
              class="form-control"
              name="cambio_peso_si"
            >
              Sí
            </option>
            <option
              value="cambio_peso_no"
              class="form-control"
              name="cambio_peso_no"
            >
              No
            </option>
          </select>

          <br />
          <br />

          <center>
            <input type="submit" value="Enviar" />
          </center>
        </form>
      </body>

      <br />
      <br />
      <br />
      <body>
        <form>
          <h2>Formulario de Síntomas del Cáncer de Mama</h2>

          <label>1. ¿Cuál es su edad?</label>

          <input
            type="number"
            name="edad"
            id="edad"
            min="0"
            max="120"
            placeholder="Edad"
          />

          <label>2. ¿Menopausia?</label>

          <select name="menopausia" id="menopausia">
            <option value="si_menopausia">Sí</option>
            <option value="no_menopausia">No</option>
          </select>

          <label>3. ¿Has tenido dolor en que seno?</label>

          <select name="seno" id="seno">
            <option value="seno_derecho" name="seno_derecho">
              Derecho
            </option>
            <option value="seno_izquierdo" name="seno_izquierdo">
              izquierdo
            </option>
          </select>

          <label>4. Ubicacion</label>

          <select name="ubicacion" id="ubicacion">
            <option value="bicacion_arriba" name="bicacion_arriba">
              Arriba
            </option>
            <option value="Ubicacion_abajo" name="Ubicacion_abajo">
              Abajo
            </option>
          </select>

          <label>
            5. ¿Has experimentado cambios en la textura de la piel de tus senos,
            como hoyuelos o engrosamiento?
          </label>

          <select name="cambios" id="cambios">
            <option
              value="cambios_textura_piel_si"
              name="cambios_textura_piel_si"
            >
              Sí
            </option>
            <option
              value="cambios_textura_piel_no"
              name="cambios_textura_piel_no"
            >
              No
            </option>
          </select>

          <label>6. ¿Has notado algún bulto o masa en tus senos?</label>

          <select name="seno" id="seno">
            <option value="bulto_senos_si" name="bulto_senos_si">
              Sí
            </option>
            <option value="bulto_senos_no" name="bulto_senos_no">
              No
            </option>
          </select>

          <label>
            7. ¿Hay cambios en la apariencia de tus pezones, como retracción o
            inversión?
          </label>

          <select name="cambios" id="cambios">
            <option value="cambios_pezones_si" name="cambios_pezones_si">
              Sí
            </option>
            <option value="cambios_pezones_no" name="cambios_pezones_no">
              No
            </option>
          </select>

          <label>8. ¿Has tenido algún cambio en tu peso recientemente?</label>

          <select name="cambios_peso" id="cambios_peso">
            <option
              value="cambio_peso_si"
              class="form-control"
              name="cambio_peso_si"
            >
              Sí
            </option>
            <option
              value="cambio_peso_no"
              class="form-control"
              name="cambio_peso_no"
            >
              No
            </option>
          </select>

          <br />
          <br />

          <center>
            <input type="submit" value="Enviar" />
          </center>
        </form>
      </body>

      <br />
      <br />
      <br />
      <body>
        <form>
          <h2>Formulario de Síntomas del Cáncer de Mama</h2>

          <label>1. ¿Cuál es su edad?</label>

          <input
            type="number"
            name="edad"
            id="edad"
            min="0"
            max="120"
            placeholder="Edad"
          />

          <label>2. ¿Menopausia?</label>

          <select name="menopausia" id="menopausia">
            <option value="si_menopausia">Sí</option>
            <option value="no_menopausia">No</option>
          </select>

          <label>3. ¿Has tenido dolor en que seno?</label>

          <select name="seno" id="seno">
            <option value="seno_derecho" name="seno_derecho">
              Derecho
            </option>
            <option value="seno_izquierdo" name="seno_izquierdo">
              izquierdo
            </option>
          </select>

          <label>4. Ubicacion</label>

          <select name="ubicacion" id="ubicacion">
            <option value="bicacion_arriba" name="bicacion_arriba">
              Arriba
            </option>
            <option value="Ubicacion_abajo" name="Ubicacion_abajo">
              Abajo
            </option>
          </select>

          <label>
            5. ¿Has experimentado cambios en la textura de la piel de tus senos,
            como hoyuelos o engrosamiento?
          </label>

          <select name="cambios" id="cambios">
            <option
              value="cambios_textura_piel_si"
              name="cambios_textura_piel_si"
            >
              Sí
            </option>
            <option
              value="cambios_textura_piel_no"
              name="cambios_textura_piel_no"
            >
              No
            </option>
          </select>

          <label>6. ¿Has notado algún bulto o masa en tus senos?</label>

          <select name="seno" id="seno">
            <option value="bulto_senos_si" name="bulto_senos_si">
              Sí
            </option>
            <option value="bulto_senos_no" name="bulto_senos_no">
              No
            </option>
          </select>

          <label>
            7. ¿Hay cambios en la apariencia de tus pezones, como retracción o
            inversión?
          </label>

          <select name="cambios" id="cambios">
            <option value="cambios_pezones_si" name="cambios_pezones_si">
              Sí
            </option>
            <option value="cambios_pezones_no" name="cambios_pezones_no">
              No
            </option>
          </select>

          <label>8. ¿Has tenido algún cambio en tu peso recientemente?</label>

          <select name="cambios_peso" id="cambios_peso">
            <option
              value="cambio_peso_si"
              class="form-control"
              name="cambio_peso_si"
            >
              Sí
            </option>
            <option
              value="cambio_peso_no"
              class="form-control"
              name="cambio_peso_no"
            >
              No
            </option>
          </select>

          <br />
          <br />

          <center>
            <input type="submit" value="Enviar" />
          </center>
        </form>
      </body>

      <br />
      <br />
      <br />
      <body>
        <form>
          <h2>Formulario de Síntomas del Cáncer de Mama</h2>

          <label>1. ¿Cuál es su edad?</label>

          <input
            type="number"
            name="edad"
            id="edad"
            min="0"
            max="120"
            placeholder="Edad"
          />

          <label>2. ¿Menopausia?</label>

          <select name="menopausia" id="menopausia">
            <option value="si_menopausia">Sí</option>
            <option value="no_menopausia">No</option>
          </select>

          <label>3. ¿Has tenido dolor en que seno?</label>

          <select name="seno" id="seno">
            <option value="seno_derecho" name="seno_derecho">
              Derecho
            </option>
            <option value="seno_izquierdo" name="seno_izquierdo">
              izquierdo
            </option>
          </select>

          <label>4. Ubicacion</label>

          <select name="ubicacion" id="ubicacion">
            <option value="bicacion_arriba" name="bicacion_arriba">
              Arriba
            </option>
            <option value="Ubicacion_abajo" name="Ubicacion_abajo">
              Abajo
            </option>
          </select>

          <label>
            5. ¿Has experimentado cambios en la textura de la piel de tus senos,
            como hoyuelos o engrosamiento?
          </label>

          <select name="cambios" id="cambios">
            <option
              value="cambios_textura_piel_si"
              name="cambios_textura_piel_si"
            >
              Sí
            </option>
            <option
              value="cambios_textura_piel_no"
              name="cambios_textura_piel_no"
            >
              No
            </option>
          </select>

          <label>6. ¿Has notado algún bulto o masa en tus senos?</label>

          <select name="seno" id="seno">
            <option value="bulto_senos_si" name="bulto_senos_si">
              Sí
            </option>
            <option value="bulto_senos_no" name="bulto_senos_no">
              No
            </option>
          </select>

          <label>
            7. ¿Hay cambios en la apariencia de tus pezones, como retracción o
            inversión?
          </label>

          <select name="cambios" id="cambios">
            <option value="cambios_pezones_si" name="cambios_pezones_si">
              Sí
            </option>
            <option value="cambios_pezones_no" name="cambios_pezones_no">
              No
            </option>
          </select>

          <label>8. ¿Has tenido algún cambio en tu peso recientemente?</label>

          <select name="cambios_peso" id="cambios_peso">
            <option
              value="cambio_peso_si"
              class="form-control"
              name="cambio_peso_si"
            >
              Sí
            </option>
            <option
              value="cambio_peso_no"
              class="form-control"
              name="cambio_peso_no"
            >
              No
            </option>
          </select>

          <br />
          <br />

          <center>
            <input type="submit" value="Enviar" />
          </center>
        </form>
      </body>

      <br />
      <br />
      <br />
      <body>
        <form>
          <h2>Formulario de Síntomas del Cáncer de Mama</h2>

          <label>1. ¿Cuál es su edad?</label>

          <input
            type="number"
            name="edad"
            id="edad"
            min="0"
            max="120"
            placeholder="Edad"
          />

          <label>2. ¿Menopausia?</label>

          <select name="menopausia" id="menopausia">
            <option value="si_menopausia">Sí</option>
            <option value="no_menopausia">No</option>
          </select>

          <label>3. ¿Has tenido dolor en que seno?</label>

          <select name="seno" id="seno">
            <option value="seno_derecho" name="seno_derecho">
              Derecho
            </option>
            <option value="seno_izquierdo" name="seno_izquierdo">
              izquierdo
            </option>
          </select>

          <label>4. Ubicacion</label>

          <select name="ubicacion" id="ubicacion">
            <option value="bicacion_arriba" name="bicacion_arriba">
              Arriba
            </option>
            <option value="Ubicacion_abajo" name="Ubicacion_abajo">
              Abajo
            </option>
          </select>

          <label>
            5. ¿Has experimentado cambios en la textura de la piel de tus senos,
            como hoyuelos o engrosamiento?
          </label>

          <select name="cambios" id="cambios">
            <option
              value="cambios_textura_piel_si"
              name="cambios_textura_piel_si"
            >
              Sí
            </option>
            <option
              value="cambios_textura_piel_no"
              name="cambios_textura_piel_no"
            >
              No
            </option>
          </select>

          <label>6. ¿Has notado algún bulto o masa en tus senos?</label>

          <select name="seno" id="seno">
            <option value="bulto_senos_si" name="bulto_senos_si">
              Sí
            </option>
            <option value="bulto_senos_no" name="bulto_senos_no">
              No
            </option>
          </select>

          <label>
            7. ¿Hay cambios en la apariencia de tus pezones, como retracción o
            inversión?
          </label>

          <select name="cambios" id="cambios">
            <option value="cambios_pezones_si" name="cambios_pezones_si">
              Sí
            </option>
            <option value="cambios_pezones_no" name="cambios_pezones_no">
              No
            </option>
          </select>

          <label>8. ¿Has tenido algún cambio en tu peso recientemente?</label>

          <select name="cambios_peso" id="cambios_peso">
            <option
              value="cambio_peso_si"
              class="form-control"
              name="cambio_peso_si"
            >
              Sí
            </option>
            <option
              value="cambio_peso_no"
              class="form-control"
              name="cambio_peso_no"
            >
              No
            </option>
          </select>

          <br />
          <br />

          <center>
            <input type="submit" value="Enviar" />
          </center>
        </form>
      </body>

      <br />
      <br />
      <br />
      <body>
        <form>
          <h2>Formulario de Síntomas del Cáncer de Mama</h2>

          <label>1. ¿Cuál es su edad?</label>

          <input
            type="number"
            name="edad"
            id="edad"
            min="0"
            max="120"
            placeholder="Edad"
          />

          <label>2. ¿Menopausia?</label>

          <select name="menopausia" id="menopausia">
            <option value="si_menopausia">Sí</option>
            <option value="no_menopausia">No</option>
          </select>

          <label>3. ¿Has tenido dolor en que seno?</label>

          <select name="seno" id="seno">
            <option value="seno_derecho" name="seno_derecho">
              Derecho
            </option>
            <option value="seno_izquierdo" name="seno_izquierdo">
              izquierdo
            </option>
          </select>

          <label>4. Ubicacion</label>

          <select name="ubicacion" id="ubicacion">
            <option value="bicacion_arriba" name="bicacion_arriba">
              Arriba
            </option>
            <option value="Ubicacion_abajo" name="Ubicacion_abajo">
              Abajo
            </option>
          </select>

          <label>
            5. ¿Has experimentado cambios en la textura de la piel de tus senos,
            como hoyuelos o engrosamiento?
          </label>

          <select name="cambios" id="cambios">
            <option
              value="cambios_textura_piel_si"
              name="cambios_textura_piel_si"
            >
              Sí
            </option>
            <option
              value="cambios_textura_piel_no"
              name="cambios_textura_piel_no"
            >
              No
            </option>
          </select>

          <label>6. ¿Has notado algún bulto o masa en tus senos?</label>

          <select name="seno" id="seno">
            <option value="bulto_senos_si" name="bulto_senos_si">
              Sí
            </option>
            <option value="bulto_senos_no" name="bulto_senos_no">
              No
            </option>
          </select>

          <label>
            7. ¿Hay cambios en la apariencia de tus pezones, como retracción o
            inversión?
          </label>

          <select name="cambios" id="cambios">
            <option value="cambios_pezones_si" name="cambios_pezones_si">
              Sí
            </option>
            <option value="cambios_pezones_no" name="cambios_pezones_no">
              No
            </option>
          </select>

          <label>8. ¿Has tenido algún cambio en tu peso recientemente?</label>

          <select name="cambios_peso" id="cambios_peso">
            <option
              value="cambio_peso_si"
              class="form-control"
              name="cambio_peso_si"
            >
              Sí
            </option>
            <option
              value="cambio_peso_no"
              class="form-control"
              name="cambio_peso_no"
            >
              No
            </option>
          </select>

          <br />
          <br />

          <center>
            <input type="submit" value="Enviar" />
          </center>
        </form>
      </body>

      <br />
      <br />
      <br />
      <body>
        <form>
          <h2>Formulario de Síntomas del Cáncer de Mama</h2>

          <label>1. ¿Cuál es su edad?</label>

          <input
            type="number"
            name="edad"
            id="edad"
            min="0"
            max="120"
            placeholder="Edad"
          />

          <label>2. ¿Menopausia?</label>

          <select name="menopausia" id="menopausia">
            <option value="si_menopausia">Sí</option>
            <option value="no_menopausia">No</option>
          </select>

          <label>3. ¿Has tenido dolor en que seno?</label>

          <select name="seno" id="seno">
            <option value="seno_derecho" name="seno_derecho">
              Derecho
            </option>
            <option value="seno_izquierdo" name="seno_izquierdo">
              izquierdo
            </option>
          </select>

          <label>4. Ubicacion</label>

          <select name="ubicacion" id="ubicacion">
            <option value="bicacion_arriba" name="bicacion_arriba">
              Arriba
            </option>
            <option value="Ubicacion_abajo" name="Ubicacion_abajo">
              Abajo
            </option>
          </select>

          <label>
            5. ¿Has experimentado cambios en la textura de la piel de tus senos,
            como hoyuelos o engrosamiento?
          </label>

          <select name="cambios" id="cambios">
            <option
              value="cambios_textura_piel_si"
              name="cambios_textura_piel_si"
            >
              Sí
            </option>
            <option
              value="cambios_textura_piel_no"
              name="cambios_textura_piel_no"
            >
              No
            </option>
          </select>

          <label>6. ¿Has notado algún bulto o masa en tus senos?</label>

          <select name="seno" id="seno">
            <option value="bulto_senos_si" name="bulto_senos_si">
              Sí
            </option>
            <option value="bulto_senos_no" name="bulto_senos_no">
              No
            </option>
          </select>

          <label>
            7. ¿Hay cambios en la apariencia de tus pezones, como retracción o
            inversión?
          </label>

          <select name="cambios" id="cambios">
            <option value="cambios_pezones_si" name="cambios_pezones_si">
              Sí
            </option>
            <option value="cambios_pezones_no" name="cambios_pezones_no">
              No
            </option>
          </select>

          <label>8. ¿Has tenido algún cambio en tu peso recientemente?</label>

          <select name="cambios_peso" id="cambios_peso">
            <option
              value="cambio_peso_si"
              class="form-control"
              name="cambio_peso_si"
            >
              Sí
            </option>
            <option
              value="cambio_peso_no"
              class="form-control"
              name="cambio_peso_no"
            >
              No
            </option>
          </select>

          <br />
          <br />

          <center>
            <input type="submit" value="Enviar" />
          </center>
        </form>
      </body>

      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Chat;
