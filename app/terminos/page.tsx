import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos, condiciones de uso y política de privacidad del sitio de Imuko.",
};

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-balance text-4xl font-extrabold text-fg">
        Términos y condiciones
      </h1>

      <div className="glass mt-10 space-y-10 p-8 text-pretty leading-relaxed text-muted sm:p-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-fg">Quiénes somos</h2>
          <p>
            La dirección de nuestro sitio web es:{" "}
            <a
              href="https://imuko.co"
              className="text-cyan hover:underline"
            >
              https://imuko.co
            </a>
            . Al acceder y utilizar este sitio aceptas los presentes términos y
            condiciones de uso, así como las prácticas de privacidad descritas a
            continuación.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-fg">
            Qué datos personales recopilamos y por qué los recogemos
          </h2>

          <h3 className="text-xl font-semibold text-fg">Comentarios</h3>
          <p>
            Cuando los visitantes dejan comentarios en el sitio recopilamos los
            datos mostrados en el formulario de comentarios, así como la
            dirección IP del visitante y la cadena del agente de usuario del
            navegador, con el fin de ayudar a la detección de spam.
          </p>
          <p>
            Se puede proporcionar al servicio Gravatar una cadena anónima creada
            a partir de tu dirección de correo electrónico (también denominada
            hash) para comprobar si la estás utilizando. Puedes consultar la
            política de privacidad de Gravatar en{" "}
            <a
              href="https://automattic.com/privacy/"
              className="text-cyan hover:underline"
            >
              https://automattic.com/privacy/
            </a>
            . Tras la aprobación de tu comentario, tu imagen de perfil será
            visible para el público en el contexto de tu comentario.
          </p>

          <h3 className="text-xl font-semibold text-fg">Medios</h3>
          <p>
            Si subes imágenes al sitio web, debes evitar cargar imágenes con
            datos de ubicación incrustados (EXIF GPS), ya que los visitantes
            podrían descargar y extraer dichos datos de ubicación de las
            imágenes publicadas en el sitio.
          </p>

          <h3 className="text-xl font-semibold text-fg">Cookies</h3>
          <p>
            Si dejas un comentario en nuestro sitio, puedes optar por guardar tu
            nombre, dirección de correo electrónico y sitio web en cookies. Esto
            es para tu comodidad, de modo que no tengas que volver a rellenar tus
            datos cuando dejes otro comentario. Estas cookies tendrán una
            duración de un año.
          </p>
          <p>
            Si visitas nuestra página de acceso, se instalará una cookie temporal
            para determinar si tu navegador acepta cookies. Esta cookie no
            contiene datos personales y se elimina al cerrar el navegador.
          </p>
          <p>
            Cuando inicies sesión, se instalarán varias cookies para guardar tu
            información de acceso y tus opciones de visualización de pantalla.
            Las cookies de acceso permanecen durante dos días y las de opciones
            de pantalla durante un año. Si seleccionas «Recuérdame», tu sesión se
            mantendrá durante dos semanas. Si cierras la sesión de tu cuenta, las
            cookies de acceso se eliminarán.
          </p>
          <p>
            Si editas o publicas un artículo, se guardará una cookie adicional en
            tu navegador. Esta cookie no incluye datos personales y simplemente
            indica el ID del artículo que acabas de editar. Caduca después de un
            día.
          </p>

          <h3 className="text-xl font-semibold text-fg">
            Contenido incrustado de otros sitios web
          </h3>
          <p>
            Los artículos de este sitio pueden incluir contenido incrustado (por
            ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado
            de otras webs se comporta exactamente de la misma manera que si el
            visitante hubiera visitado la otra web.
          </p>
          <p>
            Estas webs pueden recopilar datos sobre ti, utilizar cookies,
            incrustar un seguimiento adicional de terceros y supervisar tu
            interacción con ese contenido incrustado, incluido el seguimiento de
            dicha interacción si tienes una cuenta y has iniciado sesión en esa
            web.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-fg">
            Cuánto tiempo conservamos tus datos
          </h2>
          <p>
            Si dejas un comentario, el comentario y sus metadatos se conservan
            indefinidamente. Esto nos permite reconocer y aprobar automáticamente
            cualquier comentario de seguimiento, en lugar de mantenerlos en una
            cola de moderación.
          </p>
          <p>
            Para los usuarios que se registren en nuestro sitio web (si los
            hubiera), también almacenamos la información personal que proporcionan
            en su perfil. Todos los usuarios pueden ver, editar o eliminar su
            información personal en cualquier momento (excepto el nombre de
            usuario, que no se puede modificar). Los administradores del sitio web
            también pueden ver y editar dicha información.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-fg">
            Qué derechos tienes sobre tus datos
          </h2>
          <p>
            Si tienes una cuenta en este sitio o has dejado comentarios, puedes
            solicitar la exportación de un archivo con los datos personales que
            tenemos sobre ti, incluyendo cualquier dato que nos hayas
            proporcionado. También puedes solicitar la eliminación de cualquier
            dato personal que conservemos sobre ti. Esto no incluye los datos que
            estamos obligados a conservar con fines administrativos, legales o de
            seguridad.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-fg">
            Dónde enviamos tus datos
          </h2>
          <p>
            Es posible que los comentarios de los visitantes sean revisados a
            través de un servicio automático de detección de spam.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-fg">
            Tu información de contacto
          </h2>
          <p>
            Para cualquier consulta relacionada con estos términos, el
            tratamiento de tus datos o el ejercicio de tus derechos, puedes
            escribirnos a{" "}
            <a
              href="mailto:talento@imuko.co"
              className="text-cyan hover:underline"
            >
              talento@imuko.co
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
