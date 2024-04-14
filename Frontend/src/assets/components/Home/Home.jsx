import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const { logo } = "../../images/LOGO_BBK_Talent_Job.png";
const { foto1 } = "../../images/1.jpg"
import './Home'


const Home = () => {
  return (
    <>
      <section className="firstSection">

        <article>
        <h1>Donde el talento joven y las organizaciones se encuentran </h1>
        <p>Ayudamos a los jóvenes a encontrar un empleo y a las empresas y organizaciones a mejorar su competitividad a través del talento.</p>
        <br />
          <div>
            <Button as={Link} to="/talent/register" variant="primary">
              Soy Talento
            </Button>
          </div>
          <div>
            <Button as={Link} to="/company/register" variant="primary">
              Soy Organización
            </Button>
          </div>
        </article>

        <article>
          <img src={logo} />{foto1}
        </article>
      </section>

      <section className="secondSection">
        <h2>Una plataforma para aumentar la empleabilidad en los jóvenes</h2>
        <article className="">
          <div>
            <h3>Da el salto al mundo laboral </h3>
            <p>
              ¿Sientes frustración por la falta de experiencia que te impide conseguir un trabajo de calidad?
            </p>
            <p>
              Da igual si todavía estás cursando tus estudios o los has terminado, te ayudamos a conseguir tu primer empleo o mejorar tus expectativas laborales. En BBK Talent Job adquirirás habilidades y competencias que te prepararán para el futuro profesional que deseas.
            </p>
            <p>

              Recibe propuestas de entidades públicas y privadas de Bizkaia, con ganas de rejuvenecer sus equipos, y que se ajustan perfectamente a tus habilidades específicas. Además, tendrás el apoyo y la orientación de nuestro Career Assistant, que te guiará en cada paso de tu proceso de búsqueda de empleo.
            </p>
            <p>
              En BBK Talent Job te ayudamos a desarrollar tu carrera profesional con recursos, asociaciones, eventos, formación y mucho más… Para que dejes de ser becario antes de dejar de ser joven.
            </p>
            <div>
              <Button as={Link} to="/talent/register" variant="primary">
                IMPULSA TU CARRERA PROFESIONAL
              </Button>
            </div>
          </div>

          <div>
            <article>
              <img src={foto1} alt="" />
            </article>

          </div>

        </article>
      </section>
      <section className="thirdSection">
        <article>
          <img src="" alt="" />
        </article>
        <article>
          <h3>
            Acelera tu innovación con el talento joven más comprometido
          </h3>
          <p>
            ¿Te gustaría atraer y retener el talento joven más comprometido de Bizkaia para revitalizar tu organización?

            Colabora con nosotros y accede a una comunidad de estudiantes y jóvenes profesionales listos para contribuir con su energía y creatividad. Para así crear equipos diversos con la vitalidad del talento junior y el expertise del talento senior.

            Busca en nuestra comunidad de talento joven y encuentra perfiles que se adapten a tus necesidades específicas. Nosotros nos encargamos del resto, proporcionándote el talento joven más prometedor para impulsar tu empresa hacia el futuro.

          </p>
          <div>
            <Button as={Link} to="/company/register" variant="primary">
              ENCUENTRA EL TALENTO JOVEN QUE NECESITAS
            </Button>
          </div>

        </article>
      </section>

      <section className="fourthSection">
        <h2>
          ¿Por qué BBK Talent Job?
        </h2>
        <p>
          Sabemos que tanto los jóvenes como las organizaciones tienen talentos y necesidades únicas. Y
          lo excepcional sucede cuando se encuentran y se unen para crear, construir y compartir
          conocimientos, crecimiento y nuevas experiencias.
        </p>

        <article>
          <article>
            <img src="" alt="" />
          </article>
          <div>
            <h3>
              ¿Quieres impulsar tu carrera
              profesional?
            </h3>
            <p>
              ¿Buscas trabajo? Si eres joven en busca de
              oportunidades laborales emocionantes ¡Regístrate
              en BBK Talent Job y encuentra el trabajo que te
              ayude a mejorar tu futuro profesional!
            </p>
            <div>
              <Button as={Link} to="/talent/register" variant="primary">
                REGÍSTRATE AHORA
              </Button>

            </div>
          </div>
        </article>
        <article>
          <article>
            <img src="" alt="" />
          </article>
          <div>
            <h3>
              ¿Eres una empresa u
              organización?
            </h3>
            <p>
              Conectamos estudiantes jóvenes talentos con tu
              empresa de manera rápida y efectiva. Publica una
              oferta de trabajo gratis en BBK Talent Job hoy ¡y
              encuentra la persona perfecta!
            </p>
            <div>
              <Button as={Link} to="/company/register" variant="primary">
                PUBLICA UNA OFERTA
              </Button>
            </div>
          </div>

        </article>
      </section>
    </>
  );
};

export default Home;
