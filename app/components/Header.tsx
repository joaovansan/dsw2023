export default function Header() {
    return (
  
        <div>
        <header
      className="text-center text-white pt-2 border-b border-[green] md:flex itens-center justify-between"
    >    
        <h4 className="text-[#00e77f] bg-[black] pt-[8px] pb-2 py-8">
        🏫UTFTECH - ESCOLA DE INFORMATICA📘
      </h4>

      <nav className="text-[white] bg-[black] pt-[8px] pb-2">
        <a className="hover:text-[#00e77f]" href="#"> 📘HOME </a>
        <a className="hover:text-[#00e77f]" href="#cursos"> 📘CURSOS </a>
        <a className="hover:text-[#00e77f]" href="#contato"> 📘CONTATO </a>
        <a className="hover:text-[#00e77f]" href="#"> 📘LOGIN </a>
      </nav>

      </header>
      </div>
    )
  
  
  }