<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <link rel="icon" href="/images/tab.png" type="image/png">
        <link rel="apple-touch-icon" href="/images/tab.png">

        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600&display=swap" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])

        @if($page['component'] === 'welcome')
            <link rel="preload" as="image" href="/images/hero/slide-1.jpg" fetchpriority="high">
        @endif
        
        @php
            $isAdminRoute = request()->is('system-node-mgt/*') || request()->is('system-node-mgt');
        @endphp

        @if(!$isAdminRoute)
            <!-- Google Translate -->
            <script type="text/javascript">
                function googleTranslateElementInit() {
                    new google.translate.TranslateElement({
                        pageLanguage: 'en',
                        includedLanguages: 'pl,fr,de,es,ar,zh-CN,ja,ru,en',
                        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false
                    }, 'google_translate_element');
                }
            </script>
            <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" defer></script>
            <style>
                .goog-te-banner-frame.skiptranslate { display: none !important; }
                body { top: 0px !important; }
                #google_translate_element { display: none; }
            </style>
        @endif

        <x-inertia::head>
            <title inertia>{{ config('app.name', 'United Cooperate Trust Bank') }}</title>
            <meta name="description" content="United Cooperate Trust Bank offers secure online banking, personal and corporate accounts, investment services, and global financing solutions. Experience premium banking with local trust and global reach.">
            <meta name="keywords" content="United Cooperate Trust Bank, secure online banking, corporate banking USA, personal investment services, global trade finance, private banking, digital banking solutions">
            <meta name="author" content="United Cooperate Trust Bank">
            <meta name="robots" content="index, follow">
            <link rel="canonical" href="{{ url()->current() }}">

            <!-- Open Graph / Facebook -->
            <meta property="og:type" content="website">
            <meta property="og:url" content="{{ url()->current() }}">
            <meta property="og:title" content="United Cooperate Trust Bank | Secure & Innovative Banking">
            <meta property="og:description" content="Manage your wealth with confidence. Join United Cooperate Trust Bank for premium personal and business financial services.">
            <meta property="og:image" content="{{ asset('images/slider_wealth.png') }}">

            <!-- Twitter -->
            <meta property="twitter:card" content="summary_large_image">
            <meta property="twitter:url" content="{{ url()->current() }}">
            <meta property="twitter:title" content="United Cooperate Trust Bank | Global Financial Excellence">
            <meta property="twitter:description" content="Secure, reliable, and forward-thinking banking services for individuals and corporations worldwide.">
            <meta property="twitter:image" content="{{ asset('images/slider_wealth.png') }}">

            <!-- Structured Data (JSON-LD) for GEO/AI Search -->
            <script type="application/ld+json">
            {
                "@@context": "https://schema.org",
                "@@type": "BankOrCreditUnion",
                "name": "United Cooperate Trust Bank",
                "alternateName": "UCT Bank",
                "url": "{{ url('/') }}",
                "logo": "{{ asset('images/logo.png') }}",
                "description": "United Cooperate Trust Bank is a leading financial institution providing innovative banking solutions, secure online management, and global investment strategies.",
                "address": {
                    "@@type": "PostalAddress",
                    "streetAddress": "Global Financial District",
                    "addressLocality": "Financial Center",
                    "addressRegion": "USA",
                    "postalCode": "10005",
                    "addressCountry": "US"
                },
                "contactPoint": {
                    "@@type": "ContactPoint",
                    "telephone": "+1-555-UCT-BANK",
                    "contactType": "customer service",
                    "areaServed": "Worldwide",
                    "availableLanguage": ["English", "Spanish", "German", "French"]
                },
                "sameAs": [
                    "https://www.facebook.com/unitedcooperatetrust",
                    "https://twitter.com/uctbank",
                    "https://www.linkedin.com/company/united-cooperate-trust-bank"
                ]
            }
            </script>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <div id="google_translate_element"></div>
        <x-inertia::app />
    </body>
</html>
