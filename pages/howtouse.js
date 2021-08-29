import Link from 'next/link';

function main() {
    return(
        <html>

        <div className="Main">
        <head>

        <title>Pepe_Java API - Como usar</title>
        </head>

        <body>
        <font size="5">    
            <center>
                <h1>Pepe_Java</h1>

                <p>URLs:</p>
            </center>
        </font>

        <center>
        <font size="6">
        <a href="https://pepejava.vercel.app/api/date">/api/date</a><p>Receba a DATA!</p>
        </font>

        </center>

        <center>
        <font size="6">
        <a href="https://pepejava.vercel.app/api/developer">/api/developer</a><p>Vejá as informações do developer!</p>
        </font>

        </center>
        </body>

    </div>
    </html>
    )
}

export default main;