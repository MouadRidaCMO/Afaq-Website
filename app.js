/* ============================================
   AFAQ — language switcher + mobile menu + scroll reveals
   ============================================

   French lives in the HTML as the default, so the page reads correctly with
   JavaScript disabled and search engines index it as-is. English and Arabic
   are overrides keyed by each element's data-i18n attribute. Any key left out
   of a dictionary simply falls back to the French already in the markup,
   which is why the English block carries no city names: they are identical.

   To edit or add copy in a language, edit T.en / T.ar below. Nothing else.
   ============================================ */

const T = {

/* -------------------------------------------------- ENGLISH -------- */
en: {
    'nav.universities': 'Universities',
    'nav.scholarship': 'Scholarship',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Study in Hungary',
    'hero.title': 'A Future Without Limits',
    'hero.subtitle': 'Your partner for a place at Hungary’s leading universities',
    'hero.description': 'AFAQ helps talented Moroccan students reach higher education opportunities in Hungary, with full support before, during and after enrolment.',
    'hero.cta': 'Start your journey',
    'hero.cta2': 'See the universities',
    'hero.trust': 'From application to settling in, one point of contact',

    'uni.title': 'Hungarian Universities',
    'uni.subtitle': 'The institutions we guide our students towards, from the oldest to the most technical',
    'uni.note': 'The right institution depends on your profile, your field and your goals. We work that out together before any application.',

    'uni.elte.body': 'Founded in 1635, ELTE is the oldest Hungarian university still in operation and a reference point for the humanities, psychology and the natural sciences.',
    'uni.elte.t1': 'Humanities', 'uni.elte.t2': 'Psychology', 'uni.elte.t3': 'Sciences',

    'uni.corvinus.body': 'Hungary’s best known address for economics and management, with a strong international reputation in business and public policy.',
    'uni.corvinus.t1': 'Economics', 'uni.corvinus.t2': 'Management', 'uni.corvinus.t3': 'Social sciences',

    'uni.bme.body': 'One of the oldest technical universities in the world, BME remains Hungary’s reference for engineering, architecture and computer science.',
    'uni.bme.t1': 'Engineering', 'uni.bme.t2': 'Computer science', 'uni.bme.t3': 'Architecture',

    'uni.bge.body': 'One of the largest business schools in the country, focused on applied training in commerce, finance and tourism.',
    'uni.bge.t1': 'Commerce', 'uni.bge.t2': 'Finance', 'uni.bge.t3': 'Tourism',

    'uni.szte.body': 'A major research university in southern Hungary, particularly strong in medicine, pharmacy and the life sciences.',
    'uni.szte.t1': 'Medicine', 'uni.szte.t2': 'Pharmacy', 'uni.szte.t3': 'Research',

    'uni.debrecen.body': 'One of the largest universities in the country and a long established destination for international students in medicine and engineering.',
    'uni.debrecen.t1': 'Medicine', 'uni.debrecen.t2': 'Engineering', 'uni.debrecen.t3': 'Agriculture',

    'uni.pecs.body': 'The first university founded in Hungary, in 1367. It offers medicine, business and the arts in a city known for its student life.',
    'uni.pecs.t1': 'Medicine', 'uni.pecs.t2': 'Business', 'uni.pecs.t3': 'Arts',

    'uni.szechenyi.body': 'Set in the heart of Hungary’s automotive industry, with engineering and management programmes shaped by close industrial partnerships.',
    'uni.szechenyi.t1': 'Engineering', 'uni.szechenyi.t2': 'Automotive', 'uni.szechenyi.t3': 'Management',

    'uni.obuda.body': 'A technical university built around applied engineering and information technology, with direct links to industry.',
    'uni.obuda.t1': 'Engineering', 'uni.obuda.t2': 'IT', 'uni.obuda.t3': 'Applied sciences',

    'uni.ppke.body': 'Recognised for law and the humanities, with a faculty of information technology and bionics that has made a name for itself.',
    'uni.ppke.t1': 'Law', 'uni.ppke.t2': 'Humanities', 'uni.ppke.t3': 'IT',

    'uni.mate.body': 'Hungary’s national centre for agriculture, food science and environmental studies, spread across several campuses.',
    'uni.mate.t1': 'Agriculture', 'uni.mate.t2': 'Food science', 'uni.mate.t3': 'Environment',

    'uni.pannonia.body': 'A human scale university near Lake Balaton, strong in chemical engineering, information technology and management.',
    'uni.pannonia.t1': 'Chemical engineering', 'uni.pannonia.t2': 'IT', 'uni.pannonia.t3': 'Management',

    'uni.miskolc.body': 'A broad university in northern Hungary with deep roots in engineering and materials science.',
    'uni.miskolc.t1': 'Engineering', 'uni.miskolc.t2': 'Management', 'uni.miskolc.t3': 'Law',

    'uni.eszterhazy.body': 'Focused on teacher training, the humanities and economics, in one of the finest historic towns in the country.',
    'uni.eszterhazy.t1': 'Education', 'uni.eszterhazy.t2': 'Humanities', 'uni.eszterhazy.t3': 'Economics',

    'uni.dunaujvaros.body': 'A small, practical university on the Danube, oriented towards engineering, IT and communication.',
    'uni.dunaujvaros.t1': 'Engineering', 'uni.dunaujvaros.t2': 'IT', 'uni.dunaujvaros.t3': 'Communication',

    'sh.eyebrow': 'State scholarship',
    'sh.title': 'Stipendium Hungaricum',
    'sh.body': 'The Hungarian government scholarship programme for international students. Morocco is one of the partner countries, which makes Moroccan students eligible at bachelor, master and doctoral level.',
    'sh.body2': 'The scholarship is highly selective and the number of programme choices is limited. The strength of the file and the coherence of the project make the difference, and that is exactly where we come in.',
    'sh.cta': 'Check my eligibility',
    'sh.b1.title': 'Tuition fees', 'sh.b1.body': 'Fully covered on the awarded programme',
    'sh.b2.title': 'Monthly allowance', 'sh.b2.body': 'Paid throughout the duration of your studies',
    'sh.b3.title': 'Accommodation', 'sh.b3.body': 'University dormitory or a contribution towards rent',
    'sh.b4.title': 'Health insurance', 'sh.b4.body': 'Included in the programme',
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

    'why.title': 'Why Choose AFAQ',
    'why.subtitle': 'What sets us apart from a simple intermediary',
    'why.1.title': 'Local Expertise',
    'why.1.body': 'Our founders know Hungary, its universities and student life from the inside. We understand the specific challenges Moroccan students face.',
    'why.2.title': 'Quality Selection',
    'why.2.body': 'We prioritise what genuinely fits you academically and professionally, not simply placing you somewhere. Your success is our success.',
    'why.3.title': 'Complete Support',
    'why.3.body': 'Beyond enrolment, we handle your accommodation, your finances and your administrative paperwork. Everything you need to succeed.',
    'why.4.title': 'Lasting Support',
    'why.4.body': 'Our relationship does not end when you arrive. We support you throughout your studies and into your professional transition.',

    'about.title': 'Who We Are',
    'about.subtitle': 'We have walked the path we now guide others through',
    'about.mouad.role': 'Co-founder',
    'about.mouad.body': 'An ELTE graduate, Mouad holds a master’s in Media and Digital Marketing from Budapest. He has walked the same route he now guides students through, from application to settling in.',
    'about.aya.role': 'Co-founder',
    'about.aya.body': 'A Stipendium Hungaricum scholarship holder, Aya is studying management in Hungary. She knows the scholarship application and the reality of student life there from the inside.',

    'cta.deadline': 'Next Stipendium Hungaricum round',
    'cta.title': 'Ready to Begin?',
    'cta.body': 'Applications usually open in November and close in mid January. Write to us now for a free first consultation and we will look at your profile together.',
    'cta.whatsapp': 'Message us on WhatsApp',
    'cta.email': 'Send us an email',

    'form.step': 'First step',
    'form.title': 'Fill in your application form',
    'form.body': 'Enter your details and check they are correct before submitting. This is what we use to review your profile and get back to you.',
    'form.cta': 'Open the form',
    'form.help': 'Stuck on a question? Write to us and we will walk you through it.',

    'footer.blurb': 'Your partner for a place at Hungary’s leading universities.',
    'footer.nav': 'Navigation',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy policy',
    'footer.country': 'Morocco',
    'footer.rights': '© 2026 AFAQ. All rights reserved.'
},

/* -------------------------------------------------- ARABIC --------- */
ar: {
    'nav.universities': 'الجامعات',
    'nav.scholarship': 'المنحة',
    'nav.services': 'الخدمات',
    'nav.process': 'المسار',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',

    'hero.eyebrow': 'الدراسة في المجر',
    'hero.title': 'مستقبل بلا حدود',
    'hero.subtitle': 'شريكك للالتحاق بأفضل الجامعات المجرية',
    'hero.description': 'تساعد آفاق الطلبة المغاربة المتميزين على الوصول إلى فرص الدراسات العليا في المجر، مع مواكبة شاملة قبل التسجيل وأثناءه وبعده.',
    'hero.cta': 'ابدأ رحلتك',
    'hero.cta2': 'تصفح الجامعات',
    'hero.trust': 'من الترشيح إلى الاستقرار، مُحاور واحد',

    'uni.title': 'الجامعات المجرية',
    'uni.subtitle': 'المؤسسات التي نوجّه إليها طلبتنا، من الأعرق إلى الأكثر تخصصاً في التقنية',
    'uni.note': 'يعتمد اختيار المؤسسة على ملفك وتخصصك وأهدافك. نناقش ذلك معك قبل أي ترشيح.',

    'uni.elte.city': 'بودابست',
    'uni.elte.body': 'تأسست سنة 1635، وهي أعرق جامعة مجرية ما تزال قائمة، ومرجع في العلوم الإنسانية وعلم النفس والعلوم الأساسية.',
    'uni.elte.t1': 'علوم إنسانية', 'uni.elte.t2': 'علم النفس', 'uni.elte.t3': 'علوم',

    'uni.corvinus.city': 'بودابست',
    'uni.corvinus.body': 'أشهر عنوان مجري في الاقتصاد والتدبير، بسمعة دولية قوية في الأعمال والسياسات العمومية.',
    'uni.corvinus.t1': 'اقتصاد', 'uni.corvinus.t2': 'تدبير', 'uni.corvinus.t3': 'علوم اجتماعية',

    'uni.bme.city': 'بودابست',
    'uni.bme.body': 'من أقدم الجامعات التقنية في العالم، وتبقى المرجع المجري في الهندسة والعمارة والمعلوميات.',
    'uni.bme.t1': 'هندسة', 'uni.bme.t2': 'معلوميات', 'uni.bme.t3': 'عمارة',

    'uni.bge.city': 'بودابست',
    'uni.bge.body': 'من أكبر مدارس الأعمال في البلاد، وتركّز على التكوين التطبيقي في التجارة والمالية والسياحة.',
    'uni.bge.t1': 'تجارة', 'uni.bge.t2': 'مالية', 'uni.bge.t3': 'سياحة',

    'uni.szte.city': 'سيغد',
    'uni.szte.body': 'جامعة بحثية كبرى في جنوب المجر، قوية بشكل خاص في الطب والصيدلة وعلوم الحياة.',
    'uni.szte.t1': 'طب', 'uni.szte.t2': 'صيدلة', 'uni.szte.t3': 'بحث علمي',

    'uni.debrecen.city': 'ديبريتسن',
    'uni.debrecen.body': 'من أكبر جامعات البلاد ووجهة راسخة منذ سنوات للطلبة الدوليين في الطب والهندسة.',
    'uni.debrecen.t1': 'طب', 'uni.debrecen.t2': 'هندسة', 'uni.debrecen.t3': 'فلاحة',

    'uni.pecs.city': 'بيتش',
    'uni.pecs.body': 'أول جامعة تأسست في المجر سنة 1367. تقدّم الطب والتجارة والفنون في مدينة معروفة بحياتها الطلابية.',
    'uni.pecs.t1': 'طب', 'uni.pecs.t2': 'تجارة', 'uni.pecs.t3': 'فنون',

    'uni.szechenyi.city': 'جيور',
    'uni.szechenyi.body': 'تقع في قلب صناعة السيارات المجرية، ببرامج هندسية وتدبيرية تشكّلها شراكات صناعية وثيقة.',
    'uni.szechenyi.t1': 'هندسة', 'uni.szechenyi.t2': 'صناعة السيارات', 'uni.szechenyi.t3': 'تدبير',

    'uni.obuda.city': 'بودابست',
    'uni.obuda.body': 'جامعة تقنية مبنية على الهندسة التطبيقية وتكنولوجيا المعلومات، بصلة مباشرة بالقطاع الصناعي.',
    'uni.obuda.t1': 'هندسة', 'uni.obuda.t2': 'معلوميات', 'uni.obuda.t3': 'علوم تطبيقية',

    'uni.ppke.city': 'بودابست',
    'uni.ppke.body': 'معروفة بالقانون والعلوم الإنسانية، مع كلية للمعلوميات والبيونيك صنعت لنفسها اسماً.',
    'uni.ppke.t1': 'قانون', 'uni.ppke.t2': 'علوم إنسانية', 'uni.ppke.t3': 'معلوميات',

    'uni.mate.city': 'غودولو',
    'uni.mate.body': 'المركز الوطني المجري للفلاحة وعلوم الأغذية والبيئة، موزّع على عدة حرم جامعية.',
    'uni.mate.t1': 'فلاحة', 'uni.mate.t2': 'علوم الأغذية', 'uni.mate.t3': 'بيئة',

    'uni.pannonia.city': 'فيسبريم',
    'uni.pannonia.body': 'جامعة بحجم إنساني قرب بحيرة بالاتون، قوية في الهندسة الكيميائية والمعلوميات والتدبير.',
    'uni.pannonia.t1': 'هندسة كيميائية', 'uni.pannonia.t2': 'معلوميات', 'uni.pannonia.t3': 'تدبير',

    'uni.miskolc.city': 'ميشكولتس',
    'uni.miskolc.body': 'جامعة شاملة في شمال المجر، بجذور عميقة في الهندسة وعلوم المواد.',
    'uni.miskolc.t1': 'هندسة', 'uni.miskolc.t2': 'تدبير', 'uni.miskolc.t3': 'قانون',

    'uni.eszterhazy.city': 'إيغر',
    'uni.eszterhazy.body': 'تركّز على تكوين الأساتذة والعلوم الإنسانية والاقتصاد، في واحدة من أجمل المدن التاريخية في البلاد.',
    'uni.eszterhazy.t1': 'تربية', 'uni.eszterhazy.t2': 'علوم إنسانية', 'uni.eszterhazy.t3': 'اقتصاد',

    'uni.dunaujvaros.city': 'دونا أوجفاروش',
    'uni.dunaujvaros.body': 'جامعة صغيرة وعملية على ضفاف الدانوب، موجّهة نحو الهندسة والمعلوميات والتواصل.',
    'uni.dunaujvaros.t1': 'هندسة', 'uni.dunaujvaros.t2': 'معلوميات', 'uni.dunaujvaros.t3': 'تواصل',

    'sh.eyebrow': 'منحة حكومية',
    'sh.title': 'Stipendium Hungaricum',
    'sh.body': 'برنامج المنح الدراسية للحكومة المجرية الموجّه للطلبة الدوليين. المغرب من البلدان الشريكة، ما يجعل الطلبة المغاربة مؤهلين في الإجازة والماستر والدكتوراه.',
    'sh.body2': 'المنحة انتقائية جداً وعدد اختيارات البرامج محدود. جودة الملف وانسجام المشروع هما ما يصنع الفرق، وهنا بالضبط يأتي دورنا.',
    'sh.cta': 'تحقّق من أهليتي',
    'sh.b1.title': 'رسوم الدراسة', 'sh.b1.body': 'مغطاة بالكامل في البرنامج الممنوح',
    'sh.b2.title': 'منحة شهرية', 'sh.b2.body': 'تُصرف طوال مدة الدراسة',
    'sh.b3.title': 'السكن', 'sh.b3.body': 'إقامة جامعية أو مساهمة في الكراء',
    'sh.b4.title': 'التأمين الصحي', 'sh.b4.body': 'مُدرج ضمن البرنامج',
    'sh.note': 'تبقى بعض المصاريف على عاتقك، وتختلف الشروط حسب الجامعة والبرنامج. نراجع معك وضعيتك الخاصة.',

    'services.title': 'خدماتنا',
    'services.subtitle': 'مواكبة شاملة طوال مسارك',
    'services.1.title': 'الاختيار والترشيح',
    'services.1.body': 'نحلل ملفك لنقترح عليك البرامج الجامعية المجرية الأنسب لطموحاتك الأكاديمية والمهنية.',
    'services.2.title': 'السكن',
    'services.2.body': 'مساعدة في البحث عن سكن قريب من جامعتك في المجر وتأمينه.',
    'services.3.title': 'الحساب البنكي والأمور المالية',
    'services.3.body': 'مرافقة لفتح حساب بنكي محلي، وتدبير ميزانيتك الطلابية، والوصول إلى الدعم المالي المتاح.',
    'services.4.title': 'شرائح الهاتف والاتصالات',
    'services.4.body': 'إعداد سريع لخدمات الاتصال ورقم هاتف محلي.',
    'services.5.title': 'التأشيرة والإقامة',
    'services.5.body': 'توجيه كامل للحصول على تأشيرة الدراسة وبطاقة الإقامة في المجر.',
    'services.6.title': 'الإدماج المهني',
    'services.6.body': 'دعم في التداريب وأعمال الطلبة والانتقال إلى تجربتك المهنية الأولى بعد التخرج.',

    'process.title': 'مسارنا',
    'process.subtitle': 'أربع خطوات بسيطة لإنجاح تسجيلك',
    'process.1.title': 'استشارة أولية',
    'process.1.body': 'تشاركنا ملفك الدراسي واهتماماتك وأهدافك، ونناقش معك الفرص الأنسب لك.',
    'process.2.title': 'الاختيار والترشيح',
    'process.2.body': 'نُعِدّ ملف ترشيحك الكامل للجامعات المختارة، مع دعم تام في المساطر الإدارية.',
    'process.3.title': 'القبول والتحضير',
    'process.3.body': 'بعد قبولك، نساعدك في إجراءات التأشيرة والسكن وكل تحضيرات السفر.',
    'process.4.title': 'مواكبة مستمرة',
    'process.4.body': 'خلال دراستك وبعدها، نبقى شركاءك في الاستقرار والأسئلة الأكاديمية والتطور المهني.',

    'why.title': 'لماذا تختار آفاق',
    'why.subtitle': 'ما يميّزنا عن مجرد وسيط',
    'why.1.title': 'خبرة ميدانية',
    'why.1.body': 'مؤسسونا يعرفون المجر وجامعاتها وحياة الطالب فيها من الداخل، ونفهم التحديات الخاصة بالطلبة المغاربة.',
    'why.2.title': 'اختيار قائم على الجودة',
    'why.2.body': 'نعطي الأولوية لما يناسبك فعلاً أكاديمياً ومهنياً، لا لمجرد التسجيل في أي مكان. نجاحك هو نجاحنا.',
    'why.3.title': 'مواكبة شاملة',
    'why.3.body': 'أبعد من التسجيل: نتكفل بالسكن والأمور المالية والوثائق الإدارية. كل ما يلزمك لتنجح.',
    'why.4.title': 'علاقة تدوم',
    'why.4.body': 'علاقتنا لا تنتهي عند وصولك. ندعمك طوال دراستك وفي انتقالك إلى الحياة المهنية.',

    'about.title': 'من نحن',
    'about.subtitle': 'سلكنا بأنفسنا الطريق الذي نرافقك فيه اليوم',
    'about.mouad.role': 'شريك مؤسس',
    'about.mouad.body': 'خريج جامعة ELTE ببودابست، حاصل على ماستر في الإعلام والتسويق الرقمي. سلك معاد بنفسه المسار الذي يرافق فيه الطلبة اليوم، من الترشيح إلى الاستقرار.',
    'about.aya.role': 'شريكة مؤسِّسة',
    'about.aya.body': 'حاصلة على منحة Stipendium Hungaricum، تتابع آية دراستها في التدبير بالمجر. تعرف عن قرب مسار الترشيح للمنحة وواقع الحياة الطلابية هناك.',

    'cta.deadline': 'الدورة المقبلة لمنحة Stipendium Hungaricum',
    'cta.title': 'مستعد للانطلاق؟',
    'cta.body': 'تُفتح الترشيحات عادة في نونبر وتُغلق في منتصف يناير. راسلنا الآن للحصول على استشارة أولى مجانية وسندرس ملفك معاً.',
    'cta.whatsapp': 'راسلنا على واتساب',
    'cta.email': 'أرسل لنا بريداً إلكترونياً',

    'form.step': 'الخطوة الأولى',
    'form.title': 'املأ استمارة الترشيح',
    'form.body': 'أدخل معلوماتك وتأكد من صحتها قبل الإرسال. على أساسها ندرس ملفك ونعود إليك.',
    'form.cta': 'فتح الاستمارة',
    'form.help': 'واجهتك صعوبة في سؤال ما؟ راسلنا وسنرشدك خطوة بخطوة.',

    'footer.blurb': 'شريكك للالتحاق بأفضل الجامعات المجرية.',
    'footer.nav': 'روابط',
    'footer.contact': 'اتصل بنا',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.country': 'المغرب',
    'footer.rights': '© 2026 آفاق. جميع الحقوق محفوظة.'
}

};

const RTL = ['ar'];

/* Cairo is only fetched the first time someone actually switches to Arabic,
   so French and English visitors never pay for it. */
function loadArabicFont() {
    if (document.getElementById('ar-font')) return;
    const link = document.createElement('link');
    link.id = 'ar-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap';
    document.head.appendChild(link);
}

function setLang(lang) {
    const dict = T[lang];            // undefined for 'fr' — restores the markup
    if (lang === 'ar') loadArabicFont();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        // stash the original French the first time we touch this element
        if (el.dataset.fr === undefined) el.dataset.fr = el.textContent;
        const translated = dict && dict[el.dataset.i18n];
        el.textContent = translated || el.dataset.fr;
    });

    const root = document.documentElement;
    root.lang = lang;
    root.dir = RTL.includes(lang) ? 'rtl' : 'ltr';

    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    try {
        localStorage.setItem('afaq-lang', lang);
    } catch (e) {
        /* private browsing — the choice just won't persist */
    }
}

function initLang() {
    const supported = ['fr', 'en', 'ar'];

    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    // ?lang= in the URL wins, so a link can be shared in any language
    const fromUrl = new URLSearchParams(location.search).get('lang');
    let saved = null;
    try {
        saved = localStorage.getItem('afaq-lang');
    } catch (e) { /* ignore */ }

    const lang = fromUrl || saved;
    if (supported.includes(lang)) setLang(lang);
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

function initHeaderShadow() {
    const header = document.querySelector('.header');
    if (!header) return;

    const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
}

initLang();
initMenu();
initReveal();
initHeaderShadow();
