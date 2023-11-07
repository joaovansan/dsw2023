export default async function ListCourse(){
    const ( rows ) = await sql'SELECT * from courses'; 
    return (
        <div>
            <h1 classname="text-center"> Listar de Cursos </h1>

            <table>
                <thead>

                <tr><td>Titulo do curso</td> <td>Descrição</td></tr>
                                                        
                </thead>

                <tbody>
                    
                    <tr><td>Linha2 Coll</td> <td>Linha2 Col2</td></tr>


                </tbody>
        ]


            </table>


        </div>




    )




}