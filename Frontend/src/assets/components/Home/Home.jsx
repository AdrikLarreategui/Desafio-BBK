import React from "react";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import './Home.css'
const logo = "/images/LOGO_BBK_Talent_Job.png";
const foto1 = "/images/foto1.jpg"
const foto2 = "/images/foto2.jpg"
const foto3 = "/images/foto3.jpg"
const foto4 = "/images/foto4.jpg"
const foto5 = "images/foto5.jpg"
const foto6 = "images/foto6.jpg"

const Home = () => {
  return (
    <>
      <img src={logo} />
      <section className="firstSection">

        <article>
          <h1>Donde el talento joven y las organizaciones se encuentran </h1>
          <p>Ayudamos a los jóvenes a encontrar un empleo y a las empresas y organizaciones a mejorar su competitividad a través del talento.</p>
          <br />
          <div className="buttons">
            <div>
              <Link to="/talent/register">
                <button className="talent">SOY TALENTO</button>
              </Link>
            </div>
            <div>
              <Link to="/company/register">
                <button className="company">SOY ORGANIZACION</button>
              </Link>

            </div>
          </div>
        </article>

        <article>
          <img src={foto1} alt="" />
        </article>
      </section>

      <h2>Una plataforma para aumentar la empleabilidad en los jóvenes</h2>
      <section className="secondSection">
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
              <Link to="/talent/register">
                <button className="talent">IMPULSA TU CARRERA PROFESIONAL</button>
              </Link>
            </div>
          </div>
        </article>

        <article>
          <article>
            <img src={foto2} alt="" />
          </article>
        </article>

      </section>
      <section className="thirdSection">
        <article className="foto3">
          <img src={foto3} alt="" />
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
            <Link to="/company/register">
              <button className="company">ENCUENTRA EL TALENTO JOVEN QUE NECESITAS</button>
            </Link>
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
      </section>
      <section className="fifthSection">

        <article>
          <article>
            <img src={foto4} alt="" />
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
              <Link to="/talent/register">
                <button className="talent">REGÍSTRATE AHORA</button>
              </Link>
            </div>
          </div>
        </article>
        <article>
          <article>
            <img src={foto5} alt="" />
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
              <Link to="/company/register">
                <button className="company">PUBLICA UNA OFERTA</button>
              </Link>
            </div>
          </div>

        </article>
      </section>
    </>
  );
};

export default Home;
