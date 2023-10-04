export default function Courses() {
    return (
        
<main className="grid gap-4 md:grid-cols-2">
  
  <div className="sm:col-span-2 mt-4 text-center">
    <h2 id="cursos"> CONHEÇA NOSSOS CURSOS </h2>
  </div>

  <div className="bg-[#4d4d4d] rounded-md pb-2 grid-cols-3">
    <a href="curso_html.html">
      <img src="/img/html.svg" alt="" />
      <div className="text-white text-center">
        <h3>Curso de HTML </h3>
        <p>O curso é realizado por profissionais...</p>
      </div>
    </a>
  </div>
  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="curso_css.html">
      <img src="/img/css.svg" alt="" />
      <div className="text-white text-center">
        <h3>Curso de CSS</h3>
        <p>O curso é realizado por profissionais...</p>
      </div>
    </a>
  </div>

  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="curso_js.html">
      <img src="/img/js.svg" alt="" />
      <div className="text-white text-center">
        <h3>Curso de J.S</h3>
        <p>O curso é realizado por profissionais...</p>
      </div>
    </a>
  </div>

  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="curso_design.html">
      <img src="/img/design.svg" alt="" />
      <div className="text-white text-center">
        <h3>Curso de DESIGN</h3>
        <p>O curso é realizado por profissionais...</p>
      </div>
    </a>
  </div>

  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="curso_games.html">
      <img src="/img/games.svg" alt="" />
      <div className="text-white text-center">
        <h3>Curso de Jogos Digitais </h3>
        <p>O curso é realizado por profissionais...</p>
      </div>
    </a>
  </div>

  <div className="bg-[#4d4d4d] rounded-md pb-2s">
    <a href="curso_robot.html">
      <img src="/img/robot.svg" alt="" />
      <div className="text-white text-center">
        <h3>Curso de ROBOTICA</h3>
        <p>O curso é realizado por profissionais...</p>
      </div>
    </a>
  </div>
</main>
    )
    }