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
                    <a href="{{route("home")}}"
                       class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E94D29] md:p-0 md:dark:hover:text-[#E94D29] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Retour au portfolio</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="mt-32">
<div class="flex mt-12">
    <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ml-6 mb-6 dark:text-[#D7D6DA] dark:bg-gradient-to-br from-[#363A43] to-[#292C33] hover:scale-105 transition-transform duration-300 transform dark:border-[#212225]">
        <a href="#">
            <img class="rounded-t-lg" src="images/A4 - 4.png" alt="Papply"/>
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Veille technologique</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ci-joint ma veille technologique que j'ai réalisé pour mon épreuve de BTS mais également dans le but de l'implémenté au sein de mon entreprise.</p>
            <div class="flex">
                <a href="filesToDownload/Veille technologique.pdf" download
                   class="text-white bg-[#E94D29] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#E94D29] dark:hover:bg-[#E94D29] dark:focus:ring-[#E94D29]">
                    Télécharger
                </a>
            </div>
        </div>
    </div>
        <div
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ml-6 mb-6 dark:text-[#D7D6DA] dark:bg-gradient-to-br from-[#363A43] to-[#292C33] hover:scale-105 transition-transform duration-300 transform dark:border-[#212225]">
            <a href="#">
                <img class="rounded-t-lg" src="images/A4 - 3.png" alt="Papply"/>
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Preuve de compétences</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ci-joint mon document de preuve que j'ai réalisé pour mon épreuve de BTS.</p>
                <div class="flex">
                    <a href="filesToDownload/Dossier de preuves.pdf" download
                       class="text-white bg-[#E94D29] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#E94D29] dark:hover:bg-[#E94D29] dark:focus:ring-[#E94D29]">
                        Télécharger
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
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
