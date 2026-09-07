/* ============================================
   Afaq — language switcher + mobile menu + scroll reveals
   ============================================

   Arabic is written directly into index.html, so it is what the page shows
   before a single line of JavaScript runs and what a reader with JavaScript
   off keeps. French and English are override dictionaries keyed by each
   element's data-i18n attribute.

   Any key left out of a dictionary falls back to the Arabic already in the
   markup, which is why T.ar holds a single entry: the tab title. The markup
   title stays French on purpose, so the tab, the Google result and the share
   card agree with the French og: tags, and T.ar puts it back into Arabic for
   readers who are actually looking at the page.

   To edit or add copy in a language, edit T.fr / T.en below, or the markup
   for Arabic. Nothing else.
   ============================================ */

const T = {

/* -------------------------------------------------- FRENCH --------- */
fr: {
    'nav.universities': 'Universités',
    'nav.scholarship': 'Bourse',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Étudier en Hongrie',
    'hero.title': 'Un Avenir, Sans Limites',
    'hero.subtitle': 'Votre partenaire pour intégrer les meilleures universités hongroises',
    'hero.description': "Afaq aide les étudiants marocains talentueux à accéder à des opportunités d'études supérieures en Hongrie, avec un accompagnement complet avant, pendant et après l'inscription.",
    'hero.cta': 'Commencer votre parcours',
    'hero.cta2': 'Voir les universités',
    'hero.trust': 'De la candidature à votre installation, un seul interlocuteur',

    'uni.title': 'Les Universités Hongroises',
    'uni.subtitle': 'Les établissements vers lesquels nous orientons nos étudiants, du plus ancien au plus technique',

    'uni.elte.city': 'Budapest',
    'uni.elte.body': 'Fondée en 1635, ELTE est la plus ancienne université hongroise encore en activité et une référence en sciences humaines, en psychologie et en sciences fondamentales.',
    'uni.elte.t1': 'Sciences humaines', 'uni.elte.t2': 'Psychologie', 'uni.elte.t3': 'Sciences',

    'uni.corvinus.city': 'Budapest',
    'uni.corvinus.body': "L'adresse hongroise la plus connue en économie et en management, avec une solide réputation internationale en commerce et en politiques publiques.",
    'uni.corvinus.t1': 'Économie', 'uni.corvinus.t2': 'Management', 'uni.corvinus.t3': 'Sciences sociales',

    'uni.bme.city': 'Budapest',
    'uni.bme.body': "L'une des plus anciennes universités techniques au monde, BME reste la référence hongroise en ingénierie, en architecture et en informatique.",
    'uni.bme.t1': 'Ingénierie', 'uni.bme.t2': 'Informatique', 'uni.bme.t3': 'Architecture',

    'uni.bge.city': 'Budapest',
    'uni.bge.body': "L'une des plus grandes écoles de commerce du pays, tournée vers la formation appliquée au commerce, à la finance et au tourisme.",
    'uni.bge.t1': 'Commerce', 'uni.bge.t2': 'Finance', 'uni.bge.t3': 'Tourisme',

    'uni.szte.city': 'Szeged',
    'uni.szte.body': 'Grande université de recherche du sud de la Hongrie, particulièrement forte en médecine, en pharmacie et en sciences du vivant.',
    'uni.szte.t1': 'Médecine', 'uni.szte.t2': 'Pharmacie', 'uni.szte.t3': 'Recherche',

    'uni.debrecen.city': 'Debrecen',
    'uni.debrecen.body': "L'une des plus grandes universités du pays et une destination installée de longue date pour les étudiants internationaux en médecine et en ingénierie.",
    'uni.debrecen.t1': 'Médecine', 'uni.debrecen.t2': 'Ingénierie', 'uni.debrecen.t3': 'Agronomie',

    'uni.pecs.city': 'Pécs',
    'uni.pecs.body': 'La première université fondée en Hongrie, en 1367. Elle propose médecine, commerce et arts dans une ville réputée pour sa vie étudiante.',
    'uni.pecs.t1': 'Médecine', 'uni.pecs.t2': 'Commerce', 'uni.pecs.t3': 'Arts',

    'uni.szechenyi.city': 'Győr',
    'uni.szechenyi.body': "Implantée au cœur de l'industrie automobile hongroise, avec des programmes d'ingénierie et de gestion façonnés par des partenariats industriels étroits.",
    'uni.szechenyi.t1': 'Ingénierie', 'uni.szechenyi.t2': 'Automobile', 'uni.szechenyi.t3': 'Gestion',

    'uni.obuda.city': 'Budapest',
    'uni.obuda.body': "Université technique construite autour de l'ingénierie appliquée et des technologies de l'information, en lien direct avec le monde industriel.",
    'uni.obuda.t1': 'Ingénierie', 'uni.obuda.t2': 'Informatique', 'uni.obuda.t3': 'Sciences appliquées',

    'uni.pannonia.city': 'Veszprém',
    'uni.pannonia.body': 'Université à taille humaine près du lac Balaton, forte en génie chimique, en informatique et en gestion.',
    'uni.pannonia.t1': 'Génie chimique', 'uni.pannonia.t2': 'Informatique', 'uni.pannonia.t3': 'Gestion',

    'uni.miskolc.city': 'Miskolc',
    'uni.miskolc.body': 'Université généraliste du nord de la Hongrie, aux racines solides en ingénierie et en science des matériaux.',
    'uni.miskolc.t1': 'Ingénierie', 'uni.miskolc.t2': 'Gestion', 'uni.miskolc.t3': 'Droit',

    'uni.note': "Le choix d'un établissement dépend de votre profil, de votre filière et de vos objectifs. Nous en discutons ensemble avant toute candidature.",

    'sh.eyebrow': "Bourse d'État",
    'sh.title': 'Stipendium Hungaricum',
    'sh.body': 'Le programme de bourses du gouvernement hongrois pour les étudiants internationaux. Le Maroc fait partie des pays partenaires, ce qui rend les étudiants marocains éligibles en licence, en master et en doctorat.',
    'sh.body2': "La bourse est très sélective et le nombre de choix de programmes est limité. La qualité du dossier et la cohérence du projet font la différence, et c'est précisément là que nous intervenons.",
    'sh.cta': 'Évaluer mon éligibilité',
    'sh.b1.title': 'Frais de scolarité',
    'sh.b1.body': 'Pris en charge à 100% sur le programme concerné',
    'sh.b2.title': 'Allocation mensuelle',
    'sh.b2.body': 'Versée pendant toute la durée des études',
    'sh.b3.title': 'Logement',
    'sh.b3.body': 'Résidence universitaire ou contribution au loyer',
    'sh.b4.title': 'Assurance maladie',
    'sh.b4.body': 'Incluse dans le programme',
    'sh.note': "Certaines dépenses restent à votre charge, et les conditions varient selon l'université et le programme. Nous faisons le point avec vous sur votre situation précise.",

    'services.title': 'Nos Services',
    'services.subtitle': 'Un accompagnement complet tout au long de votre parcours',
    'services.1.title': 'Sélection & Candidature',
    'services.1.body': 'Nous analysons votre profil pour vous proposer les programmes universitaires hongrois les mieux adaptés à vos ambitions académiques et professionnelles.',
    'services.2.title': 'Logement',
    'services.2.body': 'Aide à la recherche et à la sécurisation de votre logement en Hongrie, à proximité de votre université.',
    'services.3.title': 'Compte Bancaire & Finances',
    'services.3.body': 'Assistance pour ouvrir un compte bancaire local, gérer votre budget étudiant et accéder aux aides financières disponibles.',
    'services.4.title': 'Cartes SIM & Télécommunications',
    'services.4.body': "Configuration rapide de vos services de télécommunication et d'un numéro de téléphone local.",
    'services.5.title': 'Visa & Résidence',
    'services.5.body': "Guidance complète pour l'obtention de votre visa d'études et de votre permis de résidence en Hongrie.",
    'services.6.title': 'Placement Professionnel',
    'services.6.body': 'Soutien pour les stages, les emplois étudiants et la transition vers votre première expérience professionnelle après vos études.',

    'process.title': 'Notre Processus',
    'process.subtitle': 'Quatre étapes simples pour réussir votre inscription',
    'process.1.title': 'Consultation Initiale',
    'process.1.body': 'Vous nous partagez votre profil académique, vos intérêts et vos objectifs. Nous discutons des opportunités qui vous correspondent le mieux.',
    'process.2.title': 'Sélection & Candidature',
    'process.2.body': 'Nous préparons votre dossier de candidature complet pour les universités sélectionnées, avec un soutien total pour les démarches administratives.',
    'process.3.title': 'Acceptation & Préparation',
    'process.3.body': 'Une fois accepté, nous vous aidons pour les formalités de visa, le logement et tous les préparatifs de votre départ.',
    'process.4.title': 'Support Continu',
    'process.4.body': 'Durant vos études et après, nous restons vos partenaires pour votre installation, vos questions académiques et votre développement professionnel.',

    'why.title': 'Pourquoi Choisir Afaq',
    'why.subtitle': "Ce qui nous distingue d'un simple intermédiaire",
    'why.1.title': 'Expertise Locale',
    'why.1.body': "Nos fondateurs connaissent la Hongrie, ses universités et le parcours étudiant de l'intérieur. Nous comprenons les défis spécifiques des étudiants marocains.",
    'why.2.title': 'Sélection Qualité',
    'why.2.body': 'Nous privilégions ce qui vous correspond vraiment sur le plan académique et professionnel, pas le simple placement. Votre réussite est notre réussite.',
    'why.3.title': 'Accompagnement Complet',
    'why.3.body': "Au-delà de l'inscription, nous gérons votre logement, vos finances et vos documents administratifs. Tout ce qui vous permet de réussir.",
    'why.4.title': 'Support Durable',
    'why.4.body': "Notre relation ne s'arrête pas à votre arrivée. Nous vous soutenons tout au long de vos études et pour votre transition professionnelle.",

    'cta.deadline': 'Prochaine session Stipendium Hungaricum',
    'cta.title': 'Prêt à Commencer?',
    'cta.body': 'Les candidatures ouvrent généralement en novembre et se clôturent à la mi-janvier. Écrivez-nous dès maintenant pour une première consultation gratuite et nous étudierons votre profil ensemble.',

    'form.step': 'Première étape',
    'form.title': 'Remplissez votre formulaire de candidature',
    'form.body': "Renseignez vos informations et vérifiez leur exactitude avant de valider. C'est sur cette base que nous étudions votre profil et que nous revenons vers vous.",
    'form.cta': 'Ouvrir le formulaire',
    'form.help': 'Une question vous bloque? Écrivez-nous et nous vous guidons.',

    'cta.whatsapp': 'Écrire sur WhatsApp',
    'cta.email': 'Nous envoyer un email',

    'footer.blurb': 'Votre partenaire pour intégrer les meilleures universités hongroises.',
    'footer.nav': 'Navigation',

    'nav.process': 'Processus',

    'footer.privacy': 'Politique de confidentialité',
    'footer.contact': 'Contact',
    'footer.country': 'Maroc',
    'footer.rights': '© 2026 Afaq. Tous droits réservés.'
},

/* -------------------------------------------------- ENGLISH -------- */
en: {
    'meta.title': 'Afaq - A Future Without Limits',

    'nav.universities': 'Universities',
    'nav.scholarship': 'Scholarship',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Study in Hungary',
    'hero.title': 'A Future Without Limits',
    'hero.subtitle': 'Your partner for a place at Hungary’s leading universities',
    'hero.description': 'Afaq helps talented Moroccan students reach higher education opportunities in Hungary, with full support before, during and after enrolment.',
    'hero.cta': 'Start your journey',
    'hero.cta2': 'See the universities',
    'hero.trust': 'From application to settling in, one point of contact',

    'uni.title': 'Hungarian Universities',
    'uni.subtitle': 'The institutions we guide our students towards, from the oldest to the most technical',

    'uni.elte.city': 'Budapest',
    'uni.elte.body': 'Founded in 1635, ELTE is the oldest Hungarian university still in operation and a reference point for the humanities, psychology and the natural sciences.',
    'uni.elte.t1': 'Humanities', 'uni.elte.t2': 'Psychology', 'uni.elte.t3': 'Sciences',

    'uni.corvinus.city': 'Budapest',
    'uni.corvinus.body': 'Hungary’s best known address for economics and management, with a strong international reputation in business and public policy.',
    'uni.corvinus.t1': 'Economics', 'uni.corvinus.t2': 'Management', 'uni.corvinus.t3': 'Social sciences',

    'uni.bme.city': 'Budapest',
    'uni.bme.body': 'One of the oldest technical universities in the world, BME remains Hungary’s reference for engineering, architecture and computer science.',
    'uni.bme.t1': 'Engineering', 'uni.bme.t2': 'Computer science', 'uni.bme.t3': 'Architecture',

    'uni.bge.city': 'Budapest',
    'uni.bge.body': 'One of the largest business schools in the country, focused on applied training in commerce, finance and tourism.',
    'uni.bge.t1': 'Commerce', 'uni.bge.t2': 'Finance', 'uni.bge.t3': 'Tourism',

    'uni.szte.city': 'Szeged',
    'uni.szte.body': 'A major research university in southern Hungary, particularly strong in medicine, pharmacy and the life sciences.',
    'uni.szte.t1': 'Medicine', 'uni.szte.t2': 'Pharmacy', 'uni.szte.t3': 'Research',

    'uni.debrecen.city': 'Debrecen',
    'uni.debrecen.body': 'One of the largest universities in the country and a long established destination for international students in medicine and engineering.',
    'uni.debrecen.t1': 'Medicine', 'uni.debrecen.t2': 'Engineering', 'uni.debrecen.t3': 'Agriculture',

    'uni.pecs.city': 'Pécs',
    'uni.pecs.body': 'The first university founded in Hungary, in 1367. It offers medicine, business and the arts in a city known for its student life.',
    'uni.pecs.t1': 'Medicine', 'uni.pecs.t2': 'Business', 'uni.pecs.t3': 'Arts',

    'uni.szechenyi.city': 'Győr',
    'uni.szechenyi.body': 'Set in the heart of Hungary’s automotive industry, with engineering and management programmes shaped by close industrial partnerships.',
    'uni.szechenyi.t1': 'Engineering', 'uni.szechenyi.t2': 'Automotive', 'uni.szechenyi.t3': 'Management',

    'uni.obuda.city': 'Budapest',
    'uni.obuda.body': 'A technical university built around applied engineering and information technology, with direct links to industry.',
    'uni.obuda.t1': 'Engineering', 'uni.obuda.t2': 'IT', 'uni.obuda.t3': 'Applied sciences',

    'uni.pannonia.city': 'Veszprém',
    'uni.pannonia.body': 'A human scale university near Lake Balaton, strong in chemical engineering, information technology and management.',
    'uni.pannonia.t1': 'Chemical engineering', 'uni.pannonia.t2': 'IT', 'uni.pannonia.t3': 'Management',

    'uni.miskolc.city': 'Miskolc',
    'uni.miskolc.body': 'A broad university in northern Hungary with deep roots in engineering and materials science.',
    'uni.miskolc.t1': 'Engineering', 'uni.miskolc.t2': 'Management', 'uni.miskolc.t3': 'Law',

    'uni.note': 'The right institution depends on your profile, your field and your goals. We work that out together before any application.',

    'sh.eyebrow': 'State scholarship',
    'sh.title': 'Stipendium Hungaricum',
    'sh.body': 'The Hungarian government scholarship programme for international students. Morocco is one of the partner countries, which makes Moroccan students eligible at bachelor, master and doctoral level.',
    'sh.body2': 'The scholarship is highly selective and the number of programme choices is limited. The strength of the file and the coherence of the project make the difference, and that is exactly where we come in.',
    'sh.cta': 'Check my eligibility',
    'sh.b1.title': 'Tuition fees',
    'sh.b1.body': 'Fully covered on the awarded programme',
    'sh.b2.title': 'Monthly allowance',
    'sh.b2.body': 'Paid throughout the duration of your studies',
    'sh.b3.title': 'Accommodation',
    'sh.b3.body': 'University dormitory or a contribution towards rent',
    'sh.b4.title': 'Health insurance',
    'sh.b4.body': 'Included in the programme',
    'sh.note': 'Some expenses remain yours to cover, and conditions vary by university and programme. We go through your specific situation with you.',

    'services.title': 'Our Services',
    'services.subtitle': 'Full support throughout your journey',
    'services.1.title': 'Selection & Application',
    'services.1.body': 'We review your profile to suggest the Hungarian university programmes best suited to your academic and professional ambitions.',
    'services.2.title': 'Accommodation',
    'services.2.body': 'Help finding and securing your accommodation in Hungary, close to your university.',
    'services.3.title': 'Bank Account & Finances',
    'services.3.body': 'Assistance opening a local bank account, managing your student budget and accessing available financial support.',
    'services.4.title': 'SIM Cards & Telecoms',
    'services.4.body': 'Quick setup of your telecom services and a local phone number.',
    'services.5.title': 'Visa & Residence',
    'services.5.body': 'Complete guidance on obtaining your study visa and residence permit in Hungary.',
    'services.6.title': 'Career Placement',
    'services.6.body': 'Support with internships, student jobs and the move into your first professional experience after graduation.',

    'process.title': 'Our Process',
    'process.subtitle': 'Four simple steps to a successful application',
    'process.1.title': 'Initial Consultation',
    'process.1.body': 'You share your academic background, your interests and your goals. We discuss the opportunities that suit you best.',
    'process.2.title': 'Selection & Application',
    'process.2.body': 'We prepare your complete application file for the selected universities, with full support on the administrative steps.',
    'process.3.title': 'Acceptance & Preparation',
    'process.3.body': 'Once accepted, we help you with visa formalities, accommodation and everything needed before you leave.',
    'process.4.title': 'Ongoing Support',
    'process.4.body': 'During your studies and afterwards, we remain your partners for settling in, academic questions and your professional development.',

    'why.title': 'Why Choose Afaq',
    'why.subtitle': 'What sets us apart from a simple intermediary',
    'why.1.title': 'Local Expertise',
    'why.1.body': 'Our founders know Hungary, its universities and student life from the inside. We understand the specific challenges Moroccan students face.',
    'why.2.title': 'Quality Selection',
    'why.2.body': 'We prioritise what genuinely fits you academically and professionally, not simply placing you somewhere. Your success is our success.',
    'why.3.title': 'Complete Support',
    'why.3.body': 'Beyond enrolment, we handle your accommodation, your finances and your administrative paperwork. Everything you need to succeed.',
    'why.4.title': 'Lasting Support',
    'why.4.body': 'Our relationship does not end when you arrive. We support you throughout your studies and into your professional transition.',

    'cta.deadline': 'Next Stipendium Hungaricum round',
    'cta.title': 'Ready to Begin?',
    'cta.body': 'Applications usually open in November and close in mid January. Write to us now for a free first consultation and we will look at your profile together.',

    'form.step': 'First step',
    'form.title': 'Fill in your application form',
    'form.body': 'Enter your details and check they are correct before submitting. This is what we use to review your profile and get back to you.',
    'form.cta': 'Open the form',
    'form.help': 'Stuck on a question? Write to us and we will walk you through it.',

    'cta.whatsapp': 'Message us on WhatsApp',
    'cta.email': 'Send us an email',

    'footer.blurb': 'Your partner for a place at Hungary’s leading universities.',
    'footer.nav': 'Navigation',

    'nav.process': 'Process',

    'footer.privacy': 'Privacy policy',
    'footer.contact': 'Contact',
    'footer.country': 'Morocco',
    'footer.rights': '© 2026 Afaq. All rights reserved.'
},

/* -------------------------------------------------- ARABIC --------- */
/* The page is already Arabic. Only the title differs, because the markup
   keeps the French one for search engines and link previews. */
ar: {
    'meta.title': 'آفاق - مستقبل بلا حدود'
}

};

const RTL = ['ar'];

/* Cairo is loaded by the head script when the page opens in Arabic, and by
   this when a French or English reader switches to it. French and English
   visitors who never switch do not pay for it. */
function loadArabicFont() {
    if (document.getElementById('ar-font')) return;
    const link = document.createElement('link');
    link.id = 'ar-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap';
    document.head.appendChild(link);
}

/* persist is false when the language was not chosen by the reader but picked
   for them, so an automatic default never masquerades as a saved preference:
   change the default later and returning visitors follow it. */
function setLang(lang, persist = true) {
    const dict = T[lang];            // 'ar' is the markup, bar the title
    if (lang === 'ar') loadArabicFont();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        // stash the Arabic the markup shipped with, the first time we touch it
        if (el.dataset.base === undefined) el.dataset.base = el.textContent;
        const translated = dict && dict[el.dataset.i18n];
        el.textContent = translated || el.dataset.base;
    });

    const root = document.documentElement;
    root.lang = lang;
    root.dir = RTL.includes(lang) ? 'rtl' : 'ltr';

    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    if (!persist) return;

    try {
        localStorage.setItem('afaq-lang', lang);
    } catch (e) {
        /* private browsing — the choice just won't persist */
    }
}

function initLang() {
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    /* Which language to open in is decided by the inline script in the head of
       index.html, because lang, dir and the Cairo download all have to be
       settled before the first paint. It has already applied ?lang= over a
       saved choice over the Arabic default; all that is left here is the text.
       The fallback only matters if that script is ever removed. */
    setLang(window.afaqLang || 'ar', !!window.afaqLangChosen);
}

function initMenu() {
    const toggle = document.getElementById('nav-toggle');
    const panel = document.getElementById('primary-nav');
    if (!toggle || !panel) return;

    const close = () => {
        panel.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const open = panel.classList.toggle('is-open');
        toggle.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
    });

    // tapping a link should navigate and get the panel out of the way
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') close();
    });

    // if the viewport grows past the breakpoint, drop the mobile state
    window.matchMedia('(min-width: 769px)').addEventListener('change', e => {
        if (e.matches) close();
    });
}

function initReveal() {
    const items = Array.from(document.querySelectorAll('.reveal'));
    if (!items.length) return;

    // Only opt into the hidden-then-reveal styling once we know JS is running,
    // so a script failure can never leave the page blank.
    document.documentElement.classList.add('js-reveal');

    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
    }

    let observer = null;
    const show = el => {
        el.classList.add('is-visible');
        observer.unobserve(el);   // reveal once, don't re-animate on scroll back
    };

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) show(entry.target);
        });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    items.forEach(el => observer.observe(el));

    // Safety net. IntersectionObserver only reports *changes* in intersection,
    // so an element whose ratio is 0 before and 0 after a jump never fires at
    // all: a fast flick, an anchor link, or a restored scroll position can
    // leave whole sections stuck at opacity 0. Sweep on scroll until every
    // item has been revealed, then unhook the listener.
    let queued = false;
    const sweep = () => {
        queued = false;
        const limit = window.innerHeight * 0.95;
        let pending = 0;
        items.forEach(el => {
            if (el.classList.contains('is-visible')) return;
            if (el.getBoundingClientRect().top < limit) show(el);
            else pending++;
        });
        if (!pending) window.removeEventListener('scroll', onScroll);
    };
    const onScroll = () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(sweep);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
}

function initStepProgress() {
    const steps = document.querySelector('.steps');
    const fill = steps && steps.querySelector('.steps-fill');
    if (!fill) return;

    // Fill the spine in step with how far the reader has moved through the
    // list, rather than animating it once. Starts when the list is a little
    // below the fold and completes as its foot clears the lower third.
    let queued = false;
    const measure = () => {
        queued = false;
        const r = steps.getBoundingClientRect();
        const vh = window.innerHeight;
        const span = r.height + vh * 0.45;
        const p = (vh * 0.8 - r.top) / (span || 1);
        fill.style.height = (Math.min(1, Math.max(0, p)) * 100).toFixed(2) + '%';
    };
    const onScroll = () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
}

function initHeaderShadow() {
    const header = document.querySelector('.header');
    if (!header) return;

    const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
}

/* The floating WhatsApp button.
   Two conditions decide whether it shows: the reader is past the hero, where
   the header CTA has scrolled away, and the contact section is not on screen,
   since that already carries the same button. Without JavaScript the CSS
   leaves it permanently visible, which is the safe failure. */
function initWhatsAppFloat() {
    const btn = document.querySelector('.wa-float');
    if (!btn) return;

    const hero = document.querySelector('.hero');
    const contact = document.getElementById('contact');
    let contactOnScreen = false;

    const update = () => {
        const threshold = hero ? hero.offsetHeight * 0.6 : 400;
        btn.classList.toggle('is-visible', window.scrollY > threshold && !contactOnScreen);
    };

    if (contact && 'IntersectionObserver' in window) {
        new IntersectionObserver(entries => {
            contactOnScreen = entries[0].isIntersecting;
            update();
        }).observe(contact);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
}

/* The logo was href="#", which parks a bare "#" in the address bar the moment
   anyone clicks it. It points at "/" now, so it still works with JavaScript
   off and matches privacy.html; on the homepage this turns the click into a
   scroll to the top rather than a reload, and leaves the URL, along with any
   ?lang= on it, exactly as it was. scrollTo without an explicit behavior lets
   the CSS decide, so prefers-reduced-motion still gets an instant jump. */
function initLogoLink() {
    const logo = document.querySelector('.header .logo');
    if (!logo) return;

    logo.addEventListener('click', e => {
        const onHome = location.pathname === '/' || location.pathname.endsWith('/index.html');
        if (!onHome) return;
        // let cmd/ctrl/shift/middle clicks open a new tab as the reader expects
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

        e.preventDefault();
        window.scrollTo(0, 0);
    });
}

initLang();
initLogoLink();
initMenu();
initReveal();
initStepProgress();
initHeaderShadow();
initWhatsAppFloat();
