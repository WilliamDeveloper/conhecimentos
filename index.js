var assuntos = [
    {
        titulo: 'Google Uteis',
        listaLinks:[
            {url:'#', descricao:'a'},
            {url:'#', descricao:'b'},
            {url:'#', descricao:'c'},
        ]
    },
    {
        titulo: 'REDE',
        listaLinks:[
            {url:'https://www.charlesproxy.com/', descricao:'monitoramento rede charles proxy 4.2.8'},

        ]
    },
    {
        titulo: 'Metadata',
        listaLinks:[
            {url:'https://www.elevenpaths.com/labstools/foca/index.html', descricao:'foca pesquisa e baixa arquivos de um site para explorar os metadados'},
            {url:'https://exiftool.org/', descricao:'ler metadata do arquivo'},
            {url:'https://www.google.com.br/maps/@-29.9886319,-51.1062833,15z', descricao:'cordenadas google'},
        ]
    }
]




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
            let templateH2 = `
                <hr>
                <h2>[==${titulo}==]</h2>
                <hr>
            `
            htmlString += templateH2

            for (let j = 0; j < sessao.listaLinks.length; j++) {
                let link = sessao.listaLinks[j]
                let linkUrl = link.url
                let linkDescricao = link.descricao

                let templateA = `<a class="badge badge-primary" href="${linkUrl}" >${linkDescricao}</a><br>`
                htmlString += templateA

            }

            elementoPrincipal.appendChild(htmlToElement(htmlString))
        }

    }
    montarPagina(assuntos)
})