var assuntos = [
    {
        titulo: 'Google Uteis',
        listaLinks:[
            {url:'https://myaccount.google.com/lesssecureapps', descricao:'ativar seguranca de apps na conta google.'},
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
    },
    {
        titulo: 'info Navegador',
        listaLinks:[
            {url:'https://www.navegg.com/politica-de-privacidade/seu-perfil/', descricao:'informacao sobre quem ta usando o navegador'},
            {url:'https://amiunique.org/', descricao:'informacao ID unica do browser na internet'},
        ]
    },
    {
        titulo: 'Info sobre IPs',
        listaLinks:[
            {url:'https://registro.br/tecnologia/ferramentas/whois/?search=177.18.158.93', descricao:'informacoes sobre o dominio ou ip'},
            {url:'https://www.whois.com/whois/177.18.158.93', descricao:'informacoes sobre o dominio ou ip'},
            {url:'https://www.cdnperf.com/tools/cdn-latency-benchmark', descricao:'teste ping no mundo'},
            {url:'https://www.maxmind.com/en/home', descricao:'pesquisar informacoes geograficas do ip'},
            {url:'https://www.skyhook.com',  descricao:'localizacao onde fica a rede wifi no mundo'   },
            {url:'https://wigle.net', descricao:'localizacao onde fica a rede wifi no mundo opensource'},
            {url:'https://www.google.com.br/maps/@-29.9886319,-51.1062833,15z', descricao:'cordenadas google'},
            {url:'javascript:navigator.geolocation.getCurrentPosition(function(){});', descricao:'script geolocation pelo navegador com javascript'},
        ]
    },
    {
        titulo: 'Alternativas Opensource',
        listaLinks:[
            {url:'https://opensource.builders/', descricao:''},
            {url:'https://alternativeto.net/', descricao:''},
            {url:'https://github.com/awesome-selfhosted/awesome-selfhosted', descricao:''},
            {url:'https://github.com/n1trux/awesome-sysadmin', descricao:''},
        ]
    },
    {
        titulo: 'Tools ferramentas Devs',
        listaLinks:[
            {url:'https://free-for.dev', descricao:'lista ferramentas para devs'},
            {url:'https://www.statuspile.com/', descricao:'pagina de status sobre servico'},
            {url:'https://formspree.io/', descricao:'criar paginas de formularios'},
            {url:'https://www.staticforms.xyz/', descricao:'criar paginas de formularios'},
            {url:'https://readme.com/', descricao:'pagina de documentacao'},
            {url:'https://cloudconvert.com/', descricao:'converte qualquer coisa'},
            {url:'https://www.photopea.com/', descricao:'photoshop no navegador'},
            {url:'https://www.gitpod.io/', descricao:'ambiente devenvolvimento onlinee'},
        ]
    },
    {
        titulo: 'Bug Bounty',
        listaLinks:[
            {url:'https://www.facebook.com/whitehat/researcher-settings', descricao:''},
            {url:'https://www.facebook.com/whitehat/thanks', descricao:''},
            {url:'https://www.blackhat.com/html/archives.html', descricao:''},
            {url:'https://media.defcon.org/', descricao:''},
        ]
    },
    {
        titulo: 'Youtube Playlist - Algoritmos e Logica para iniciantes',
        listaLinks:[
            {url:'https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV', descricao:'Curso de Lógica de Programação'},
            {url:'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVG_mqZcOXhfFf3Po6whFv8o', descricao:'Lógica de Programação'},
            {url:'https://www.youtube.com/watch?v=6OIADpFImtc&list=PLJ4lbwalqv3Eaiay2pCeU_QU6vb-Hz989', descricao:'Portugol Studio'},
            {url:'https://www.youtube.com/playlist?list=PLWinCsaFzrrE_vgJZUbnfdydPrlzkVgha', descricao:'Portugol Studio - Dominando a Lógica de Programação'},
            {url:'https://www.youtube.com/playlist?list=PLWinCsaFzrrEjo5QqWNRNVJnZNNjIrU3w', descricao:'Portugol Studio - Exercícios Resolvidos'},
        ]
    },
    {
        titulo: 'Youtube Playlist - Python para iniciantes',
        listaLinks:[
            {url:'https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6', descricao:'Curso de Python 3 - Mundo 1: Fundamentos'},
            {url:'https://www.youtube.com/playlist?list=PLHz_AreHm4dk_nZHmxxf_J0WRAqy5Czye', descricao:'Curso de Python 3 - Mundo 2: Estruturas de Controle'},
            {url:'https://www.youtube.com/watch?v=0LB3FSfjvao&list=PLHz_AreHm4dksnH2jVTIVNviIMBVYyFnH', descricao:'Curso de Python 3 - Mundo 3: Estruturas Compostas'},
            {url:'https://www.youtube.com/playlist?list=PLfCKf0-awunOu2WyLe2pSD2fXUo795xRe', descricao:'Aprender PYTHON'},
            {url:'https://www.youtube.com/watch?v=kSQDp20eeqE&list=PLesCEcYj003ShHnUT83gQEH6KtG8uysUE', descricao:'Curso de Python - Módulo Tkinter'},
            {url:'https://www.youtube.com/watch?v=c43-mTD-8XM&list=PLesCEcYj003QiX5JaM24ytHrHiOJknwog', descricao:'Curso de Python - Módulo SQLite'},
            {url:'https://www.youtube.com/watch?v=j94IGZmwtYI&list=PLesCEcYj003QxPQ4vTXkt22-E11aQvoVj', descricao:'Curso de Python'},
            {url:'https://www.youtube.com/watch?v=E0YU3d4Vvxs&list=PLesCEcYj003QeYKOo6NyjmHub4QKue63g', descricao:'Curso de Android'},
            {url:'https://www.youtube.com/watch?v=-x-Le_podxo&list=PL51430F6C54953B73', descricao:'Lógica de Programação Usando Python - Curso Completo'},
            {url:'https://www.youtube.com/watch?v=PHHXksljGNA&list=PLOQgLBuj2-3LqnMYKZZgzeC7CKCPF375B', descricao:'Curso Selenium com Python'},
            {url:'https://www.youtube.com/watch?v=RLVbB91A5-8&list=PLbIBj8vQhvm34qAAEEH_PdL2tMG9rz-P7', descricao:'Python Orientado a Objetos - Python POO'},
            {url:'Programación orientada a objetos con PYTHON (completo) 2020', descricao:'https://www.youtube.com/watch?v=AqjTfmPitTQ&list=PLg9145ptuAigw5pV_DRznXdOsX19dorDs'},
        ]
    },
    {
        titulo: 'Youtube Playlist - javascript para iniciantes',
        listaLinks:[
            {url:'https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1', descricao:'Curso Grátis de JavaScript e ECMAScript para Iniciantes'},
            {url:'https://www.youtube.com/watch?v=uFMUdv1W1p4&list=PLwXQLZ3FdTVF9Y0RbsuN54XYP7D0dZIlR', descricao:'Curso de Javascript'},
        ]
    },
    {
        titulo: 'Youtube Playlist - Java para iniciantes',
        listaLinks:[
            {url:'https://www.youtube.com/watch?v=sTX0UEplF54&list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR', descricao:'Curso de Java para Iniciantes - Grátis, Completo'},
            {url:'https://www.youtube.com/watch?v=KlIL63MeyMY&list=PLHz_AreHm4dkqe2aR0tQK74m8SFe-aGsY', descricao:'Curso de POO Java (Programação Orientada a Objetos)'},
            {url:'https://www.youtube.com/playlist?list=PLesCEcYj003Rfzs39Y4Bs_chpkE276-gD', descricao:'Curso de Java'},
            {url:'https://www.youtube.com/watch?v=ZjPotaffGks&list=PLesCEcYj003RzkQBaNOOl7zwlIGOfeo1y', descricao:'Java Orientado a Objetos'},
            {url:'https://www.youtube.com/watch?v=6Co585pjrkw&list=PLesCEcYj003QX6LckjuyANpYpxulv5-39', descricao:'Exercicios de Java'},
            {url:'https://www.youtube.com/watch?v=q84ncDh4ln0&list=PLesCEcYj003SbwnNhQ9eyF7IjPlEK0uVg', descricao:'JAVA 8 - Lambda'},
        ]
    },
    {
        titulo: 'Youtube Playlist - PHP para iniciantes',
        listaLinks:[
            {url:'https://www.youtube.com/watch?v=F7KzJ7e6EAc&list=PLHz_AreHm4dm4beCCCmW4xwpmLf6EHY9k', descricao:'Curso de PHP para Iniciantes'},
            {url:'https://www.youtube.com/watch?v=KlIL63MeyMY&list=PLHz_AreHm4dmGuLII3tsvryMMD7VgcT7x', descricao:'Curso de POO PHP (Programação Orientada a Objetos)'},
            {url:'https://www.youtube.com/playlist?list=PLesCEcYj003TrV2MvUOnmVtMdgIp0C4Pd', descricao:'Curso de PHP'},
            {url:'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVEITn849NlfI9BGY-hk1wkq', descricao:'Curso de PHP 7'},
            {url:'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVEau55kNj_zLgpXL4JZUg8I', descricao:'Curso de PHP Orientado a Objetos'},
            {url:'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVHRW8ho-pBjMUeyeCr99hfh', descricao:'Curso de PHP MVC'},
        ]
    },
    {
        titulo: 'Youtube Playlist - BANCO DADOS para iniciantes',
        listaLinks:[
            {url:'https://www.youtube.com/playlist?list=PL4Sl6eAbMK7RILJ_7WZz_pV6eDfMxmjlJ', descricao:'Funções Oracle ( Aprenda PL/SQL)'},
            {url:'https://www.youtube.com/playlist?list=PL7E27A95750BB1C8B', descricao:'PLSQL Basico'},
            {url:'https://www.youtube.com/playlist?list=PLMaqczuL07LlmZva7iRS8DjyMYg2tptIk', descricao:'Curso Oracle'},
            {url:'https://www.youtube.com/playlist?list=PLS38CylLB1errojsQKp7urhgqTvqIfrb8', descricao:'Programación en PL/SQL'},
            {url:'https://www.youtube.com/playlist?list=PL5xzlIDQ32_dTCe6wemSqXGHs99GV4jaY', descricao:'Curso de programacion PL / SQL'},
            {url:'https://www.youtube.com/watch?v=Ofktsne-utM&list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r', descricao:'Curso de Banco de Dados MySQL'},
        ]
    },
    {
        titulo: 'Youtube Playlist - HTML para iniciantes',
        listaLinks:[
            {url:'https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o', descricao:'Curso de HTML5 Completo e GRÁTIS'},
            {url:'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVGbnuBYtOnkIIwdYKYRuhYt', descricao:'Carreira Web | Sites Profissionais'},
            {url:'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVGKl3iPEyEWpFoYkMUxWW5O', descricao:'Curso de HTML5'},
            {url:'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVF_HYP5r1oR7vK1_7ZuTU78', descricao:'HTML5 & CSS3 na Prática'},
        ]
    },
    {
        titulo: 'Youtube Playlist - CSS para iniciantes',
        listaLinks:[
            {url:'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVGjLmjwfRc0Q9TA5U-PCWp4', descricao:'Curso de CSS Flexbox'},
            {url:'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVGJxKF3ShplF8nMuuxldlEk', descricao:'Curso de Materialize CSS'},
            {url:'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVGf7GUtiOFLc_9AXO25iIzG', descricao:'Curso de CSS3'},
        ]
    },
    {
        titulo: 'Youtube Playlist - Design Responsivo para iniciantes',
        listaLinks:[
            {url:'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVFi6oHo_K4IYDcwCU5-f1x5', descricao:'Design Responsivo'},
        ]
    },
    {
        titulo: 'Youtube Playlist - Android para iniciantes',
        listaLinks:[
            {url:'https://www.youtube.com/playlist?list=PLesCEcYj003QaHBxk_6NC6JmQSCJZ_YjX', descricao:'Android - Cadastro de Clientes'},
        ]
    },
]