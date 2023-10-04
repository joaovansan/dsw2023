export default function Banner() {
    return (

<div className="md:flex items-center flex-row-reverse bg-[#4d4d4d]">
  <div className="basis-1/2">
    <img src="/img/banner.svg" alt="Descrição da Imagem" />
  </div>
  
  <div className="basis-1/2 text-center text-[#00e77f] bg-[#4d4d4d] ">
    <h2>UTFTEC</h2>
    <h3>A MELHOR ESCOLA DE INFORMÁTICA</h3>
    <a
      className="text-[#3d3d3d] bg-white px-2 py-[4px] rounded hover:bg-[#00e77f] hover:text-white"
      href="#"
    >
      Informações
    </a>
  </div>
</div>


    )

}
  