export default function Seccion9(){

  return(
      <> 


<div className="flex center-vertical esp-25-top pointer desplegable space-between pointer" onclick="$('#seccion9').toggle();">
    <h2>Sección 9: PROYECTO - Calculadora de propinas con TypeScript</h2>
    <span className="cambiaicono ico_chevron_down esp-10-right" title=""></span>
  </div>

  <div id="seccion9">
    <div className="row">
      <div className="col-12">

        &lt;-- Bloque desplegable interior--&gt;
        <div className="flex center-vertical esp-25-top pointer desplegable-interior space-between pointer oscuro" onclick="$('#seccion9-104105').toggle();">
          <h3>104. El Proyecto que vamos a construir / 105. Creando el proyecto</h3>
          <span className="cambiaicono ico_chevron_down_blanco ico20 esp-5-right" title=""></span>
        </div>
        <div id="seccion9-104105">

          <div className="flex block-m">
            <img className="w-50 w-100-m esp-5-right" src="./src/assets/img/s1-02.jpg" alt="Calculadora de proyectos" />
            <div className="w-50 w-100-m">
              <p >Esta calculadora de propinas y consumos es un proyecto 100% TS, con nuestra carpeta de Data, algunos Helpers, Hook personalizado, archivo de Types. Todos los proyectos de ahora en adelante.</p>
              <p>Vemos un botón de Guardar orden, para que el restaruante tenga un control de las ventas diarias (como aún no hemos visto APIS simularemos que lo almacena en algún sitio.</p>
              <p>Este proyecto va a ser 100% TypeScript desde el inicio (no vamos a escribir js y después convertirlo sino directamente ts), estaremos practicando mucho sobre el state, custom hook y demás.</p>
            </div>
          </div>
          
          <p className="esp-15-top esp-0-bottom"><span className="naranja">Creamos proyecto nuevo:</span></p>
              <ul>
                <li>Tengo todos mis proyectos de React dentro de <strong>Curso React</strong> así que me ubico ahí y para crearlo</li>
                <li><span className="destacado">npm create vite@latest</span> crea el proyecto con la última versión de vite</li>
                <li>Lo nombro <strong>calculadora_propinas</strong></li>
                <li>Elijo framework <span className="destacado">React</span></li>
                <li>Elijo variante <span className="destacado">TypeScript + SWC</span> (puede que a futuro ya no salga "SWC" porque es el compilador que van a usar)</li>
                <li>Nos ubicamos en el nuevo directorio creado <strong>calculadora_propinas</strong> e instalamos las dependencias del proyecto con <span className="destacado">npm install</span></li>
                <li>Abrimos nuestro proyecto en Visual Studio Code (con botón derecho agrego la nueva carpeta en el área de trabajo)</li>
                <li>Arrancamos el servidor de desarrollo con <span className="destacado">npm run dev</span> --&gt; <a href="http://localhost:5174/" target="blank">http://localhost:5174/</a> (<a href="http://localhost:5173/" target="blank">http://localhost:5173/</a> la suelo usar para el manual)</li>
              </ul>
              <img src="./src/assets/img/105.png" alt="" />

              <p><span className="destacado">Hagamos limpieza de algunos archivos</span>:</p>
              <ul>
                <li>Eliminamos el .svg: public&gt;<strong>vite.svg</strong></li>
                <li>Eliminamos la carpeta entera assets: src&gt;<strong>assets</strong></li>
                <li>Eliminamos la css: src&gt;<strong>App.css</strong></li>
                <li>Limpiamos src&gt;<strong>App.tsx</strong> dejandolo así:                        
                <pre>
                  <code className="language-js">
                  function App() &lcub;

                  return (
                    &lt;&gt;
                    &lt;h1&gt;Hola mundo&lt;/h1&gt;
                    &lt;/&gt;
                  )
                  &rcub;

                  export default App
                  </code>
                </pre>
                </li>
                <li>Eliminamos todo el contenido de la css src&gt;<strong>index.css</strong></li>
                <li>Dejamos como está el src&gt;<strong>main.tsx</strong>. Importante la llamada que aquí se hace a nuestra css <strong>index.css</strong> porque vamos a instalar el framework <span className="destacado">TailwindCSS</span>
                <pre data-line="2"><code className="language-js">
                  import &lcub; StrictMode &rcub; from &apos;react&apos;
                  import &lcub; createRoot &rcub; from &apos;react-dom/client&apos;
                  import &apos;./index.css&apos;
                  import App from &apos;./App.tsx&apos;
                  
                  createRoot(document.getElementById(&apos;root&apos;)!).render(
                    &lt;StrictMode&gt;
                      &lt;App /&gt;
                    &lt;/StrictMode&gt;&comma;
                  )
                </code></pre>
                </li>
              </ul>

        </div>
        &lt;-- Fin bloque desplegable interior--&gt;

        &lt;-- Bloque desplegable interior--&gt;
        <div className="flex center-vertical esp-25-top pointer desplegable-interior space-between pointer oscuro" onclick="$('#seccion9-XX').toggle();">
          <h3>XXXXXXXXXXXXX</h3>
          <span className="cambiaicono ico_chevron_down_blanco ico20 esp-5-right" title=""></span>
        </div>
        <div id="seccion9-XX" style="display:none">
          <p></p>

        </div>
        &lt;-- Fin bloque desplegable interior--&gt;

        &lt;-- Bloque desplegable interior--&gt;
        <div className="flex center-vertical esp-25-top pointer desplegable-interior space-between pointer oscuro" onclick="$('#seccion9-XX').toggle();">
          <h3>XXXXXXXXXXXXX</h3>
          <span className="cambiaicono ico_chevron_down_blanco ico20 esp-5-right" title=""></span>
        </div>
        <div id="seccion9-XX" style="display:none">
          <p></p>

        </div>
        &lt;-- Fin bloque desplegable interior--&gt;

        &lt;-- Bloque desplegable interior--&gt;
        <div className="flex center-vertical esp-25-top pointer desplegable-interior space-between pointer oscuro" onclick="$('#seccion9-XX').toggle();">
          <h3>XXXXXXXXXXXXX</h3>
          <span className="cambiaicono ico_chevron_down_blanco ico20 esp-5-right" title=""></span>
        </div>
        <div id="seccion9-XX" style="display:none">
          <p></p>

        </div>
        &lt;-- Fin bloque desplegable interior--&gt;

        &lt;-- Bloque desplegable interior--&gt;
        <div className="flex center-vertical esp-25-top pointer desplegable-interior space-between pointer oscuro" onclick="$('#seccion9-XX').toggle();">
          <h3>XXXXXXXXXXXXX</h3>
          <span className="cambiaicono ico_chevron_down_blanco ico20 esp-5-right" title=""></span>
        </div>
        <div id="seccion9-XX" style="display:none">
          <p></p>

        </div>
        &lt;-- Fin bloque desplegable interior--&gt;


      </div>
    </div>&lt;--Fin row--&gt;
  
  </div>
  &lt;-- Fin div colapsable--&gt;
  </>
    )
}