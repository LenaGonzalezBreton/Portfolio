<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Portfolio</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css"  rel="stylesheet" />
    </head>
    <body class="antialiased bg-[#FFFEEF]"           >
    <!--Marquee tournant rtl-->
    <div class="fixed flex text-center">
        <ul class="p-2 flex w-screen z-50 justify-around bg-black gap-4">

            <li class="flex gap-4">
                <div>
                    <marquee class="text-white direction-left w-screen font-bold">Actuellement en alternance chez Eurosérum (Groupe Sodiaal)</marquee>
                </div>
            </li>
        </ul>
    </div>

    <!--Switch funland-->

    <!--Accueil-->

    <div id="accueil" class="h-screen flex flex-col justify-center items-center">
        <div class="text-9xl lg:text-7xl font bold">Gonzalez Breton Léna</div>
        <div class="text-6xl lg:text-4xl mt-2">Fullstack IT Student</div>
    </div>

    <!--Expérience professionnelle-->
    <div id="xppro" class="pl-20 text-xl py-14">
        <div class="border-l-4 border-[#cf412b] h-18 lg:h-10">
            <div class="text-7xl lg:text-4xl font-semibold ml-4">Expérience professionnelle</div>
        </div>
    </div>
    <div class="flex ">
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-6 mb-6">
            <div class="flex flex-col justify-between h-full">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Eurosérum (Groupe Sodiaal)</h5>
                <h6 class="mb-2 text-xl tracking-tight text-gray-900"> Alternante en développement Logiciel en VB.net 2023-2024</h6>
                <p class="font-normal text-gray-700">Développement du logiciel Copilote, application permettant la communication de données entre les différents services</p>
                <div>
                    <a href="https://www.euroserum.com/" class="bg-[#cf412b] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-red-300 mt-6">Visiter le site
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-6 mb-6">

            <div class="flex flex-col justify-between h-full">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">SDIS 70 Caserne de Gray</h5>
                <h6 class="mb-2 text-xl tracking-tight text-gray-900"> Sapeur pompier volontaire et saisonnier 2021-2022</h6>
                <p class="font-normal text-gray-700">Secours à la personne et interventions sur incendies. Maintenance du matériel et réparations.</p>
                <div>
                    <a href="https://www.sdis70.fr/" class="bg-[#cf412b] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-red-300 mt-6">
                        Visiter le site
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-6 mb-6">
            <div class="flex flex-col justify-between h-full">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Technicroc Gray</h5>
                <h6 class="mb-2 text-xl tracking-tight text-gray-900"> Stagiaire en commerce 5 jours en 2019</h6>
                <p class="font-normal text-gray-700">Réception et conseil client, responsable de caisse, mise en rayon et organisation du magasin. </p>
                <div>
                    <a href="https://www.technicroc.fr/" class="bg-[#cf412b] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-red-300 mt-6 items-end">
                        Visiter le site
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    </div>
    <!--Etudes et diplomes-->
    <div class="">
        <div id="etudes" class=" pl-20 text-xl py-14">
            <div class="border-l-4 border-[#cf412b] h-18 lg:h-10 ">
                <div class="text-7xl lg:text-4xl font-semibold ml-4">Etudes et diplômes</div>
            </div>
        </div>
        <div class="flex ">
            <a href="http://pasteurmontroland.com/" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-6 mb-6">

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">BTS Services informatiques et organisations</h5>
                <h6 class="mb-2 text-xl tracking-tight text-gray-900"> Option SLAM 2022-2024</h6>
                <p class="font-normal text-gray-700">Lycée Pasteur Mont-roland à Dole 39100
                </p>
            </a>
            <a href="https://www.lycee-cournot.fr/" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-6 mb-6">

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Baccalauréat général et technologique</h5>
                <h6 class="mb-2 text-xl tracking-tight text-gray-900">Spécialité LLCER et SVT 2019-2022</h6>
                <p class="font-normal text-gray-700">Lycée Augustin Cournot à Gray 70100</p>
            </a>
            <a href="https://spfgray.net/" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-6 mb-6">

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Brevet des collèges</h5>
                <h6 class="mb-2 text-xl tracking-tight text-gray-900"> Mention très bien</h6>
                <p class="font-normal text-gray-700">Collège privé Saint-Pierre Fourier à Gray 70100</p>
            </a>
        </div>
    </div>



    <!--Compétences-->
    <div id="comp" class="pl-20 text-xl py-14">
        <div class="border-l-4 border-[#cf412b] h-18 lg:h-10 mb-14">
            <div class="text-7xl lg:text-4xl font-semibold ml-4">Compétences techniques</div>
        </div>
        <div class="">Aucune lol</div>
    </div>
    <!--Contact-->
    <div class="pl-20 text-xl py-14">
        <div class="border-l-4 border-[#cf412b] h-18 lg:h-10 mb-14">
            <div class="text-7xl lg:text-4xl font-semibold ml-4">Contact</div>
        </div>
        <div class="">
            <label class="font-bold">Mon E-mail:</label>
            <a href="mailto:lena.gonzalezbreton@proton.me? subject=subject text" class="text-[#cf412b] hover:font-bold">lena.gonzalezbreton@proton.me</a>
        </div>
        <div>
            <label class="font-bold">
                Mon numéro:
            </label>
            <a href="tel:0783473866" class="text-[#cf412b] hover:font-bold">+33 7 83 47 38 66</a>
        </div>
        <div>
            <label class="font-bold">Linkedin:</label>
            <a href="https://www.linkedin.com/in/lenagonzalezbreton/" class="text-[#cf412b] hover:font-bold">Lena Gonzalez Breton</a>
        </div>
        <div>
            <label class="font-bold">GitHub:</label>
            <a href="https://github.com/LenaGonzalezBreton" class="text-[#cf412b] hover:font-bold">Lena Gonzalez Breton</a>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
    </body>
</html>
