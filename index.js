var dados = [
    {
        titulo: 'Google Uteis',
        listaLinks:[
            {linkUrl:'#', linkDescricao:'a'},
            {linkUrl:'#', linkDescricao:'b'},
            {linkUrl:'#', linkDescricao:'c'},
        ]
    },
    {
        titulo: 'Google Uteis2',
        listaLinks:[
            {linkUrl:'#', linkDescricao:'a'},
            {linkUrl:'#', linkDescricao:'b'},
            {linkUrl:'#', linkDescricao:'c'},
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

    function htmlToElement(htmlStr) {
        var template = document.createElement('template');
        htmlStr = htmlStr.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = htmlStr;
        return template.content;
    }

    var html="<li>text and html</li><br>";
    var e=htmlToElement(html);
    console.log(e)

    function montarPagina(parametros) {
        let elementoPrincipal = document.querySelector('.principal')

        for (let i = 0; i < parametros.length; i++) {
            let htmlString = ''
            let sessao = parametros[i]
            let titulo = sessao.titulo
            let templateH2 = `<h2>${titulo}</h2>`
            htmlString += templateH2

            for (let j = 0; j < sessao.listaLinks.length; j++) {
                let link = sessao.listaLinks[j]
                let linkUrl = link.linkUrl
                let linkDescricao = link.linkDescricao

                let templateA = `<a class="badge badge-primary" href="${linkUrl}" >${linkDescricao}</a>`
                htmlString += templateA

            }

            elementoPrincipal.appendChild(htmlToElement(htmlString))
        }

    }
    montarPagina(dados)
})