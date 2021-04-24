var dados = [
    {
        titulo: 'Google Uteis',
        listaLinks:[
            {link:'', descricao:''}
        ]
    }
]

//
// <h2>==REDE==</h2>
//     <a class="badge badge-primary" href="https://www.charlesproxy.com/" >monitoramento rede charles proxy 4.2.8</a>
//
//
// <h2>==Metadata==</h2>
//     <a class="badge badge-primary" href="https://www.elevenpaths.com/labstools/foca/index.html" >monitoramento rede charles proxy 4.2.8</a>
// <p> foca pesquisa e baixa arquivos de um site para explorar os metadados -
// <p> ler metadata do arquivo - https://exiftool.org/
// <p> cordenadas google - https://www.google.com.br/maps/@-29.9886319,-51.1062833,15z
//
// <h2>==info navegador==</h2>
// <p> informacao sobre quem ta usando o navegador - https://www.navegg.com/politica-de-privacidade/seu-perfil/
// <p> informacao ID unica do browser na internet - https://amiunique.org/
//
// <h2>Google Uteis</h2>
// <a class="badge badge-primary" href="https://myaccount.google.com/lesssecureapps" >ativar seguranca de apps na conta google</a>


$(document).ready(function () {
    console.log('documento carregadoo')

    function montarPagina(parametros) {
        let elemento = document.querySelector('.principal')

        let titulo = parametros[0].titulo
        let link = parametros[0].listaLinks[0]
        console.log('titulo', titulo, link)
        elemento.appendChild()
    }
    montarPagina(dados)
})