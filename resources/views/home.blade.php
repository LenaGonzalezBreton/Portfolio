<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Portfolio</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet"/>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet"/>

    <style>
        .custom-scrollbar::-webkit-scrollbar {
            display: none; /* Masquer la barre de défilement */
        }

        #map {
            width: 100%;
            height: 400px;
        }
    </style>

</head>
<body class="antialiased bg-[#FFFEEF] dark:bg-[#26272B] overflow-y-auto custom-scrollbar">
<nav class="bg-[#FFFEEF] dark:bg-[#26272B] fixed w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="{{ route('epreuve') }}" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://ludovicspina.fr/images/lena/LOGO.png" class="h-8" alt="Logo">
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="filesToDownload/Cv_lenagonzalezbreton.pdf" download
               class="text-white bg-[#E94D29] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#E94D29] dark:hover:bg-[#E94D29] dark:focus:ring-[#E94D29]">
                Télécharger mon CV
            </a>
            <button data-collapse-toggle="navbar-sticky" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                <li>
                    <a href="#accueil"
                       class="block py-2 px-3 text-white bg-[#E94D29] rounded md:bg-transparent md:text-[#E94D29] md:p-0 md:dark:text-[#E94D29]"
                       aria-current="page">Accueil</a>
                </li>
                <li>
                    <a href="#apropos"
                       class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E94D29] md:p-0 md:dark:hover:text-[#E94D29] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">A
                        propos</a>
                </li>
                <li>
                    <a href="#etudes"
                       class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E94D29] md:p-0 md:dark:hover:text-[#E94D29] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Etudes
                        et diplomes</a>
                </li>
                <li>
                    <a href="#projets"
                       class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E94D29] md:p-0 md:dark:hover:text-[#E94D29] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projets</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!--#region Bouton bounce  -->
<a href="#accueil"
   class="fixed bottom-5 right-5 rounded-full border border-2 border-white p-2 animate-bounce bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-20 dark:border-orange-800">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E8632A"
         class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"/>
    </svg>
</a>
<!--#endregion -->

<!--#region Accueil -->

<div id="accueil" class="h-screen flex ml-16 items-center ml-10">
    <div class="flex">
        <div>
            <img class="w-32" src="images/moi3D.png">
        </div>
        <div class="flex flex-col justify-center">
            <div class="text-9xl lg:text-6xl font-bold dark:text-[#D7D6DA]">Gonzalez Breton Léna</div>
            <div
                class="text-6xl lg:text-4xl font bold bg-clip-text text-transparent bg-gradient-to-r from-[#E94D29] to-[#FFB8EF] flex">
                Fullstack IT Student
            </div>
        </div>

    </div>

</div>
<!--#endregion -->

<!--#region A propos -->
<div class="mb-10">
    <div id="apropos" class=" pl-20 text-xl py-14">
        <div class="flex border-l-4 border-[#cf412b] h-18 lg:h-10 dark:border-[#E94D29]">
            <img class="ml-4" src="images/icons/handwave.gif">
            <div class="text-7xl lg:text-4xl font-semibold ml-4 dark:text-[#D7D6DA]">Qui suis-je ?</div>
        </div>
    </div>
    <div class="ml-10 text-gray-900 dark:text-gray-400">
        <p>Etudiante en BTS SIO 2e année, je suis également en alternance chez Eurosérum à Port-sur-saône en tant que
            développeuse logiciel. </p>
        <p>Je suis passionnée de jeux vidéos, d'art, de sport, de voyages et de mes amis.</p>
        <p>Dans ma vie je recherche un cadre apaisant qui me permettra d'exploiter mes qualités à 100%.</p>
        <p>De plus j'ai un esprit d'équipe qui fait que la bonne humeur est pour moi un indispensable.</p>
    </div>
</div>
<!--#endregion -->

<!--#region Expérience professionnelle -->
<div id="xppro" class="pl-20 text-xl py-14">
    <div class="flex border-l-4 border-[#cf412b] h-18 lg:h-10 dark:border-[#E94D29]">
        <img class="ml-4" src="images/icons/Ordifemme.png">
        <div class="text-7xl lg:text-4xl font-semibold ml-4 dark:text-[#D7D6DA]">Expérience professionnelle</div>
    </div>
</div>
<div class="flex ">
    <div
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ml-6 mb-6 dark:bg-gradient-to-br from-[#363A43] to-[#292C33] dark:border-[#212225]">
        <div class="flex flex-col justify-between h-full">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#D7D6DA]">Eurosérum (Groupe
                Sodiaal)</h5>
            <h6 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-[#D7D6DA]"> Alternante en développement
                Logiciel en VB.net 2023-2024</h6>
            <p class="font-normal text-gray-700 dark:text-[#D7D6DA]">Développement du logiciel Copilote, application
                permettant la communication de données entre les différents services</p>
            <div>
                <a href="https://www.euroserum.com/"
                   class="bg-[#cf412b] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-red-300 mt-6 dark:text-[#D7D6DA] dark:bg-[#E94D29] hover:scale-105 transition-transform duration-300 transform">Visiter
                    le site
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <div
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ml-6 mb-6 dark:bg-gradient-to-br from-[#363A43] to-[#292C33] dark:border-[#212225] ">
        <div class="flex flex-col justify-between h-full">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#D7D6DA]">SDIS 70 Caserne de
                Gray</h5>
            <h6 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-[#D7D6DA]"> Sapeur pompier volontaire et
                saisonnier 2021-2022</h6>
            <p class="font-normal text-gray-700 dark:text-[#D7D6DA]">Secours à la personne et interventions sur
                incendies. Maintenance du matériel et réparations.</p>
            <div>
                <a href="https://www.sdis70.fr/"
                   class="bg-[#cf412b] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-red-300 mt-6 dark:text-[#D7D6DA] dark:bg-[#E94D29] hover:scale-105 transition-transform duration-300 transform">
                    Visiter le site
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <div
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ml-6 mb-6 dark:bg-gradient-to-br from-[#363A43] to-[#292C33] dark:border-[#212225]">
        <div class="flex flex-col justify-between h-full">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#D7D6DA]">Technicroc Gray</h5>
            <h6 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-[#D7D6DA]"> Stagiaire en commerce 5 jours en
                2019</h6>
            <p class="font-normal text-gray-700 dark:text-[#D7D6DA]">Réception et conseil client, responsable de caisse,
                mise en rayon et organisation du magasin. </p>
            <div>
                <a href="https://www.technicroc.fr/"
                   class="bg-[#cf412b] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-red-300 mt-6 items-end dark:text-[#D7D6DA] dark:bg-[#E94D29] hover:scale-105 transition-transform duration-300 transform">
                    Visiter le site
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>

<!--#endregion -->

<!--#region Etudes et diplomes-->
<div class="">
    <div id="etudes" class=" pl-20 text-xl py-14">
        <div class="flex border-l-4 border-[#cf412b] h-18 lg:h-10 dark:border-[#E94D29]">
            <img class="ml-4" src="images/icons/etudes.png">
            <div class="text-7xl lg:text-4xl font-semibold ml-4 dark:text-[#D7D6DA]">Etudes et diplômes</div>
        </div>
    </div>
    <div class="flex ">
        <a href="http://pasteurmontroland.com/"
           class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ml-6 mb-6 dark:text-[#D7D6DA] dark:bg-gradient-to-br from-[#363A43] to-[#292C33] hover:scale-105 transition-transform duration-300 transform dark:border-[#212225]">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#D7D6DA]">BTS Services
                informatiques et organisations</h5>
            <h6 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-[#D7D6DA]"> Option SLAM 2022-2024</h6>
            <p class="font-normal text-gray-700 dark:text-[#D7D6DA]">Lycée Pasteur Mont-roland à Dole 39100
            </p>
        </a>
        <a href="https://www.lycee-cournot.fr/"
           class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ml-6 mb-6 dark:text-[#D7D6DA] dark:bg-gradient-to-br from-[#363A43] to-[#292C33] hover:scale-105 transition-transform duration-300 transform dark:border-[#212225]">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#D7D6DA]">Baccalauréat général et
                technologique</h5>
            <h6 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-[#D7D6DA]">Spécialité LLCER et SVT
                2019-2022</h6>
            <p class="font-normal text-gray-700 dark:text-[#D7D6DA]">Lycée Augustin Cournot à Gray 70100</p>
        </a>
        <a href="https://spfgray.net/"
           class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ml-6 mb-6 dark:text-[#D7D6DA] dark:bg-gradient-to-br from-[#363A43] to-[#292C33] hover:scale-105 transition-transform duration-300 transform dark:border-[#212225]">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#D7D6DA]">Brevet des
                collèges</h5>
            <h6 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-[#D7D6DA]"> Mention très bien</h6>
            <p class="font-normal text-gray-700 dark:text-[#D7D6DA]">Collège privé Saint-Pierre Fourier à Gray 70100</p>
        </a>
    </div>
</div>
<!--#endregion -->

<!--#region Projets-->
<div id="projets" class=" pl-20 text-xl py-14">
    <div class="flex border-l-4 border-[#cf412b] h-18 lg:h-10 dark:border-[#E94D29]">
        <img class="ml-4" src="images/icons/etudes.png">
        <div class="text-7xl lg:text-4xl font-semibold ml-4 dark:text-[#D7D6DA]">Projets</div>
    </div>
</div>
<div class="flex">
    <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ml-6 mb-6 dark:text-[#D7D6DA] dark:bg-gradient-to-br from-[#363A43] to-[#292C33] hover:scale-105 transition-transform duration-300 transform dark:border-[#212225]">
        <a href="#">
            <img class="rounded-t-lg" src="images/88shots_so.png" alt="Papply"/>
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PAPPLY</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Papply est une application développée au cours
                de ma formation, permettant à nos professeurs de créer des TPs et de les assigner à une promotion.
                Ils peuvent les modifier et également les supprimer.</p>
            <div class="flex gap-2">
                <svg class="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path fill="#9B4F96"
                          d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
                    <path fill="#68217A"
                          d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
                    <path fill="#fff"
                          d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"/>
                </svg>
                <img class="w-10" src="images/icons/avaloniauinet-icon.svg">
                <img class="w-10" src="images/icons/SQL-256.png">
            </div>
        </div>
    </div>

    <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ml-6 mb-6 dark:text-[#D7D6DA] dark:bg-gradient-to-br from-[#363A43] to-[#292C33] hover:scale-105 transition-transform duration-300 transform dark:border-[#212225]">
        <a href="#">
            <img class="rounded-t-lg" src="images/afdcmockup.png" alt="Papply"/>
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Au fil des contes</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Cette application permet aux enfants malades
                d'écouter des histoires afin de se détendre à l'hopital. Il est possible d'écouter une histoire lue par
                une conteuse, de la noter, de l'ajouter à ses favoris mais également d'effectuer des recherches par noms
                et mots-clés.</p>
            <div class="flex gap-2">
                <svg class="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                        d="M504.4 115.8a5.7 5.7 0 0 0 -.3-.7 8.5 8.5 0 0 0 -.5-1.3 6 6 0 0 0 -.5-.7 9.4 9.4 0 0 0 -.7-.9c-.2-.2-.5-.4-.8-.6a8.8 8.8 0 0 0 -.9-.7L404.4 55.6a8 8 0 0 0 -8 0L300.1 111h0a8.1 8.1 0 0 0 -.9 .7 7.7 7.7 0 0 0 -.8 .6 8.2 8.2 0 0 0 -.7 .9c-.2 .2-.4 .5-.5 .7a9.7 9.7 0 0 0 -.5 1.3c-.1 .2-.2 .4-.3 .7a8.1 8.1 0 0 0 -.3 2.1V223.2l-80.2 46.2V63.4a7.8 7.8 0 0 0 -.3-2.1c-.1-.2-.2-.5-.3-.7a8.4 8.4 0 0 0 -.5-1.2c-.1-.3-.4-.5-.5-.7a9.4 9.4 0 0 0 -.7-.9 9.5 9.5 0 0 0 -.8-.6 9.8 9.8 0 0 0 -.9-.7h0L115.6 1.1a8 8 0 0 0 -8 0L11.3 56.5h0a6.5 6.5 0 0 0 -.9 .7 7.8 7.8 0 0 0 -.8 .6 8.2 8.2 0 0 0 -.7 .9c-.2 .3-.4 .5-.6 .7a7.9 7.9 0 0 0 -.5 1.2 6.5 6.5 0 0 0 -.3 .7 8.2 8.2 0 0 0 -.3 2.1v329.7a8 8 0 0 0 4 7l192.5 110.8a8.8 8.8 0 0 0 1.3 .5c.2 .1 .4 .2 .6 .3a7.9 7.9 0 0 0 4.1 0c.2-.1 .4-.2 .6-.2a8.6 8.6 0 0 0 1.4-.6L404.4 400.1a8 8 0 0 0 4-7V287.9l92.2-53.1a8 8 0 0 0 4-7V117.9A8.6 8.6 0 0 0 504.4 115.8zM111.6 17.3h0l80.2 46.2-80.2 46.2L31.4 63.4zm88.3 60V278.6l-46.5 26.8-33.7 19.4V123.5l46.5-26.8zm0 412.8L23.4 388.5V77.3L57.1 96.7l46.5 26.8V338.7a6.9 6.9 0 0 0 .1 .9 8 8 0 0 0 .2 1.2h0a5.9 5.9 0 0 0 .4 .9 6.4 6.4 0 0 0 .4 1v0a8.5 8.5 0 0 0 .6 .8 7.6 7.6 0 0 0 .7 .8l0 0c.2 .2 .5 .4 .8 .6a8.9 8.9 0 0 0 .9 .7l0 0 0 0 92.2 52.2zm8-106.2-80.1-45.3 84.1-48.4 92.3-53.1 80.1 46.1-58.8 33.6zm184.5 4.6L215.9 490.1V397.8L346.6 323.2l45.8-26.2zm0-119.1L358.7 250l-46.5-26.8V131.8l33.7 19.4L392.4 178zm8-105.3-80.2-46.2 80.2-46.2 80.2 46.2zm8 105.3V178L455 151.2l33.7-19.4v91.4h0z"
                        fill="#ffffff"/>
                </svg>
                <svg class="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                        d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
                        fill="#f7df1e"/>
                </svg>

            </div>
        </div>
    </div>

    <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ml-6 mb-6 dark:text-[#D7D6DA] dark:bg-gradient-to-br from-[#363A43] to-[#292C33] hover:scale-105 transition-transform duration-300 transform dark:border-[#212225]">
        <a href="#">
            <img class="rounded-t-lg" src="images/Logo-comp271771.jpg" alt="Papply"/>
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">COPILOTE</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Cette application permet la centralisation des
                données et des procédés de l'usine d'Euroserum. Elle est répartie en plusieurs secteurs comme la
                maintenance ou encore la gestion des effectifs. Je l'ai développé en coopération avec mon maître
                d'apprentissage. Durant ce projet, j'ai également pu effectuer des modifications sur la base de données
                tels qu'ajouter des tables créer des procédures stockées etc..</p>
            <div class="flex gap-2">
                <img src="images/vbnet.svg" class="w-10">
                <img src="images/Syncfusion_Logo_Image.png" class="w-24">
            </div>
        </div>
    </div>
</div>
<!--#endregion -->


<!--#region Compétences -->
<div id="comp" class="pl-20 text-xl py-14">
    <div class="border-l-4 border-[#cf412b] h-18 lg:h-10 mb-14 dark:border-[#E94D29]">
        <div class="text-7xl lg:text-4xl font-semibold ml-4 dark:text-[#D7D6DA]">Hard skills</div>
    </div>
    <div class="flex gap-4 h-16">
        <img data-tooltip-target="tooltip-c#"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"/>

        <img data-tooltip-target="tooltip-laravel"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"/>

        <img data-tooltip-target="tooltip-sql"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"/>

        <img data-tooltip-target="tooltip-tailwind"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"/>

        <img data-tooltip-target="tooltip-vb"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg"/>

        <img data-tooltip-target="tooltip-html"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>

        <img data-tooltip-target="tooltip-css"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>

        <img data-tooltip-target="tooltip-js"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>

        <img data-tooltip-target="tooltip-php"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"/>
    </div>
    <!--#region tooltips -->
    <div id="tooltip-c#" role="tooltip"
         class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        C# langage logiciel
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div id="tooltip-laravel" role="tooltip"
         class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Framework Laravel
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div id="tooltip-sql" role="tooltip"
         class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Requête SQL et base de données
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div id="tooltip-tailwind" role="tooltip"
         class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Framework CSS TailwindCSS
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div id="tooltip-vb" role="tooltip"
         class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Visual Basic .net
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div id="tooltip-html" role="tooltip"
         class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        HTML
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div id="tooltip-css" role="tooltip"
         class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        CSS
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div id="tooltip-js" role="tooltip"
         class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Javascript
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div id="tooltip-php" role="tooltip"
         class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        POO et PHP
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

    <!--#endregion -->
</div>
<!--
<div id="comp" class="pl-20 text-xl py-14">
    <div class="border-l-4 border-[#cf412b] h-18 lg:h-10 mb-14 dark:border-[#E94D29]">
        <div class="text-7xl lg:text-4xl font-semibold ml-4 dark:text-[#D7D6DA]">Soft skills</div>
    </div>
    <div class=""></div>
</div>-->
<!--#endregion -->


<!--#region Contact -->
<div class="pl-20 text-xl py-14">
    <div class="border-l-4 border-[#cf412b] h-18 lg:h-10 mb-14 dark:border-[#E94D29]">
        <div class="text-7xl lg:text-4xl font-semibold ml-4 dark:text-[#D7D6DA]">Contact</div>
    </div>
    <div class="">
        <label class="font-bold dark:text-[#D7D6DA]">Mon E-mail:</label>
        <a href="mailto:lena.gonzalezbreton@proton.me? subject=subject text" class="text-[#cf412b] hover:font-bold">lena.gonzalezbreton@proton.me</a>
    </div>
    <div>
        <label class="font-bold dark:text-[#D7D6DA]">
            Mon numéro:
        </label>
        <a href="tel:0783473866" class="text-[#cf412b] hover:font-bold ">+33 7 83 47 38 66</a>
    </div>
    <div>
        <label class="font-bold dark:text-[#D7D6DA]">Linkedin:</label>
        <a href="https://www.linkedin.com/in/lenagonzalezbreton/" class="text-[#cf412b] hover:font-bold ">Lena Gonzalez
            Breton</a>
    </div>
    <div>
        <label class="font-bold dark:text-[#D7D6DA]">GitHub:</label>
        <a href="https://github.com/LenaGonzalezBreton" class="text-[#cf412b] hover:font-bold">Lena Gonzalez Breton</a>
    </div>
</div>
<!--#endregion -->

<!--
<footer class="bg-[#FFFEEF] dark:bg-[#26272B] rounded-lg shadow m-4">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/"
                                                                                      class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
</footer>
-->

<!--#region Défilement js  -->
<script>
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
</script>
<!--#endregion -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
</body>
</html>
