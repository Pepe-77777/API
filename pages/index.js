import Link from 'next/link'

function Home() {
    return(
        <html>

        <div className="Main">
        <head>

        <title>Pepe_Java API - Inicio</title>
        </head>

        <body>
        <font size="5">    
            <center>
                <h1>Pepe_Java</h1>

                <p>Sejá bem vindo ao Pepe_Java API!</p>
            </center>
        </font>

        <center>
        <p>Coisas que talvez você use</p>

        <font size="6">
        <link href="/howtouse/"><a>Como usar</a></link>
        </font>

        </center>
        </body>

    </div>
    </html>
    )
}

export default Home;
