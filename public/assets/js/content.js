/*----------------------------------------------
*
* [Content Scripts]
*
*
----------------------------------------------*/

/*----------------------------------------------
 Recaptcha
----------------------------------------------*/

jQuery(function ($) {
  "use strict";

  if ($('input[name="reCAPTCHA"]').length) {
    let siteKey = "6Lf-NwEVAAAAAPo_wwOYxFW18D9_EKvwxJxeyUx7";

    if (siteKey) {
      $('input[name="reCAPTCHA"]').attr("data-key", siteKey);
      grecaptcha.ready(function () {
        grecaptcha
          .execute(siteKey, { action: "create_comment" })
          .then(function (token) {
            $('input[name="reCAPTCHA"]').val(token);
          });
      });
    }
  }
});

/*----------------------------------------------
 i18n
----------------------------------------------*/

jQuery(function ($) {
  "use strict";

  let cookieNotice = true;

  if (cookieNotice) {
    // Translate
    gdprCookieNoticeLocales.en = {
      description:
        "We use cookies to offer you a better browsing experience, personalise content and ads, to provide social media features and to analyse our traffic. Read about how we use cookies and how you can control them by clicking Cookie Settings. You consent to our cookies if you continue to use this website.",
      settings: "Cookie settings",
      accept: "Accept cookies",
      statement: "Our cookie statement",
      save: "Save settings",
      always_on: "Always on",
      cookie_essential_title: "Essential website cookies",
      cookie_essential_desc:
        "Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
      cookie_performance_title: "Performance cookies",
      cookie_performance_desc:
        "These cookies are used to enhance the performance and functionality of our websites but are non-essential to their use. For example it stores your preferred language or the region that you are in.",
      cookie_analytics_title: "Analytics cookies",
      cookie_analytics_desc:
        "We use analytics cookies to help us measure how users interact with website content, which helps us customize our websites and application for you in order to enhance your experience.",
      cookie_marketing_title: "Marketing cookies",
      cookie_marketing_desc:
        "These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.",
    };

    gdprCookieNoticeLocales.fr = {
      description:
        "Nous utilisons des cookies pour vous offrir une meilleure expérience de navigation, personnaliser le contenu et les publicités, fournir des fonctionnalités de médias sociaux et analyser notre trafic. Découvrez comment nous utilisons les cookies et comment vous pouvez les contrôler en cliquant sur Paramètres des cookies. Vous consentez à nos cookies si vous continuez à utiliser ce site web.",
      settings: "Params. des cookies",
      accept: "Accepter les cookies",
      statement: "Notre déclaration relative aux cookies",
      sauvegarder: "Enregistrer les params.",
      always_on: "Toujours activé",
      cookie_essential_title: "Cookies de site web essentiels",
      cookie_essential_desc:
        "Les cookies essentiels contribuent à rendre un site web utilisable en permettant des fonctions de base comme la navigation dans les pages et l'accès aux zones sécurisées du site web. Le site web ne peut pas fonctionner correctement sans ces cookies.",
      cookie_performance_title: "Cookies de performance",
      cookie_performance_desc:
        "Ces cookies sont utilisés pour améliorer les performances et les fonctionnalités de nos sites web mais ne sont pas essentiels à leur utilisation. Par exemple, ils enregistrent votre langue préférée ou la région dans laquelle vous vous trouvez.",
      cookie_analytics_title: "Cookies d'analyse",
      cookie_analytics_desc:
        "Nous utilisons des cookies d'analyse pour nous aider à mesurer comment les utilisateurs interagissent avec le contenu du site Web, ce qui nous aide à personnaliser nos sites Web et notre application pour vous afin d'améliorer votre expérience.",
      cookie_marketing_title: "Cookies de marketing",
      cookie_marketing_desc:
        "Ces cookies sont utilisés pour rendre les messages publicitaires plus pertinents pour vous et vos intérêts. L'intention est d'afficher des annonces qui sont pertinentes et engageantes pour l'utilisateur individuel et qui ont donc plus de valeur pour les éditeurs et les annonceurs tiers.",
    };

    gdprCookieNoticeLocales.nl = {
      description:
        "Wij gebruiken cookies om u een betere browse-ervaring te bieden, inhoud en advertenties te personaliseren, functies voor sociale media aan te bieden en ons verkeer te analyseren. Lees meer over hoe wij cookies gebruiken en hoe u ze kunt controleren door te klikken op Cookie-instellingen. U stemt in met onze cookies als u deze website blijft gebruiken.",
      settings: "Cookie-instellingen",
      accept: "Cookies accepteren",
      statement: "Onze cookieverklaring",
      sauvegarder: "Instellingen opslaan",
      always_on: "Altijd aan",
      cookie_essential_title: "Noodzakelijke website cookies",
      cookie_essential_desc:
        "Noodzakelijke cookies helpen een website bruikbaar te maken door basisfuncties zoals paginanavigatie en toegang tot beveiligde delen van de website mogelijk te maken. Zonder deze cookies kan de website niet goed functioneren.",
      cookie_performance_title: "Prestatiecookies",
      cookie_performance_desc:
        "Deze cookies worden gebruikt om de prestaties en functionaliteit van onze websites te verbeteren, maar zijn niet essentieel voor het gebruik ervan. Ze slaan bijvoorbeeld uw voorkeurstaal op of de regio waarin u zich bevindt.",
      cookie_analytics_titel: "Analytics cookies",
      cookie_analytics_desc:
        "Wij gebruiken analytische cookies om ons te helpen meten hoe gebruikers omgaan met de inhoud van de website, wat ons helpt onze websites en applicatie voor u aan te passen om uw ervaring te verbeteren",
      cookie_marketing_title: "Marketing cookies",
      cookie_marketing_desc:
        "Deze cookies worden gebruikt om reclameboodschappen relevanter te maken voor u en uw interesses. De bedoeling is om advertenties weer te geven die relevant en aantrekkelijk zijn voor de individuele gebruiker en daardoor waardevoller zijn voor uitgevers en externe adverteerders.",
    };

    gdprCookieNotice({
      locale: window.localStorage.getItem("current-locale") || "fr", // This is the default value
      timeout: 2000, // Time until the cookie bar appears
      expiration: 30, // This is the default value, in days
      domain: window.location.hostname, // If you run the same cookie notice on all subdomains, define the main domain starting with a .
      implicit: true, // Accept cookies on page scroll automatically
      statement: "https://www.lbpartners.be/privacy-policy", // Link to your cookie statement page
      performance: ["JSESSIONID"], // Cookies in the performance category.
      analytics: ["ga"], // Cookies in the analytics category.
      marketing: ["SSID"], // Cookies in the marketing category.
    });
  }

  const translations = {};

  translations.fr = {
    "current-locale": "FR",
    navbar_text:
      "Nos conseillers répondent à vos questions du lundi au vendredi, de 9h à 17h.",
    menu_item1: "Accueil",
    menu_item2: "Services",
    menu_item3: "Équipe",
    menu_item4: "Témoignages",
    menu_item5: "Cas d'étude",
    languages_picker_title: "Choisissez une langue",
    hero_item1_title: "Donnez vie à votre vision entrepreneuriale",
    hero_item1_body:
      "Notre expertise en création d'entreprise transforme vos idées audacieuses en réalité concrète.",
    hero_item2_title: "Faites grandir votre entreprise en toute confiance",
    hero_item2_body:
      "Avec nos services en stratégie, développement et gestion des ressources humaines, votre croissance est entre de bonnes mains.",
    hero_item3_title: "Assurez votre conformité et votre sérénité",
    hero_item3_body:
      "Nos services juridiques et fiscaux vous gardent en conformité et optimisent vos obligations pour une tranquillité d'esprit totale.",
    hero_item4_title: "Saisissez les opportunités d'investissement",
    hero_item4_body:
      "Nos conseils en finances et investissements vous aident à identifier et à exploiter les opportunités les plus prometteuses.",
    services_pre_title: "Nos domaines d'expertise",
    services_title_beginning: "L'excellence dans",
    services_title_highlighted_end: "les services",
    services_body:
      "Avec notre gamme complète de services, laissez-nous propulser votre entreprise vers de nouveaux sommets. Nous sommes spécialisés dans la prestation de services de conseil grâce à un ensemble de technologies de pointe et à une équipe de professionnels expérimentés. Voici un aperçu des options que vous pouvez engager.",
    services_title_1: "Création d'entreprise",
    services_body_1:
      "Nous vous guidons pas à pas pour concrétiser votre projet entrepreneurial.",
    services_title_2: "Audit et conseil",
    services_body_2:
      "Nos audits rigoureux et conseils personnalisés maximisent votre performance.",
    services_title_3: "Stratégie et développement",
    services_body_3:
      "Nous définissons des stratégies d'entreprise robustes pour vous aider à évoluer.",
    services_title_4: "Ressources humaines",
    services_body_4:
      "Optimisez la gestion de votre capital humain avec notre expertise.",
    services_title_5: "Juridique et fiscal",
    services_body_5:
      "Restez en conformité et minimisez votre charge fiscale grâce à nos conseils avisés.",
    services_title_6: "Finances et investissements",
    services_body_6:
      "Assurez la santé financière de votre entreprise et exploitez les opportunités d'investissement.",
    team_pre_title: "Notre équipe d'experts",
    team_title_beginning: "Rencontrez-",
    team_title_highlighted_end: "nous",
    team_body:
      "À vos côtés pour une croissance durable. L’éthique et l'intégrité sont les bases sur lesquels notre équipe repose. Ce sont des principes fondamentaux qui deviennent des attitudes quotidiennes.",
    team_founders_speech_title: "Le mot des fondateurs",
    team_founders_speech_body:
      "Depuis notre création, nous avons toujours cru en la puissance de l'entrepreneuriat. Notre mission chez Legal & Business Partners est d'aider chaque entrepreneur à réaliser son potentiel maximal. Nous comprenons les défis que représente la création et la gestion d'une entreprise, et c'est pourquoi nous proposons un accompagnement complet et personnalisé pour chaque étape de votre parcours entrepreneurial. Avec nous à vos côtés, vous pouvez vous concentrer sur ce que vous faites de mieux : innover, diriger et réussir.",
    team_founders_speech_signature: "Bilal & Jean-David",
    team_member_first_name_1: "Jean-David",
    team_member_last_name_1: "Lukandu",
    team_member_job_title_1: "Conseiller financier & co-founder",
    team_member_first_name_2: "Bilal",
    team_member_last_name_2: "Ismail",
    team_member_job_title_2: "Conseiller juridique & co-founder",
    study_cases_pre_title: "Nos cas d'étude",
    study_cases_title_beginning: "Leurs projets,",
    study_cases_title_highlighted_end: "notre expertise",
    study_cases_body:
      "Découvrez comment notre expertise a contribué au développement et à la croissance de ceux qui nous ont fait confiance. Apprenez-en plus sur notre impact et nos réalisations à travers nos études de cas et actualités.",
    study_cases_cta_more: "Découvrez nos cas d'étude",
    newsletter_pre_title: "Newsletter",
    newsletter_title_beginning: "Apprenez-en ",
    newsletter_title_highlighted_end: "plus",
    newsletter_body:
      "Grâce à nos newsletters, recevez nos cas d'étude, découvrez nos conseils en matière de gestion d'entreprise et gardez un oeil sur les dernières nouveautés en termes de fiscalité et législation.",
    newsletter_form_name_placeholder: "Nom",
    newsletter_form_email_address_placeholder: "Adresse e-mail",
    newsletter_form_cta_subscribe: "S'abonner",
    testimonials_pre_title: "Témoignages de nos clients",
    testimonials_title_beginning: "Ils nous font déjà",
    testimonials_title_highlighted_end: "confiance",
    testimonials_body:
      "Nous travaillons intensément à la recherche d'idéaux et de solutions qui peuvent avoir un effet positif sur la vie de nos clients. C'est ce qui nous anime et nous sommes sensibles à toute cette reconnaissance.",
    testimonials_item1_text: "Temoignages 01",
    testimonials_item1_name: "Prenom N.",
    testimonials_item1_role: "Role/Position",
    testimonials_item2_text: "Temoignages 02",
    testimonials_item2_name: "Prenom N.",
    testimonials_item2_role: "Role/Position",
    testimonials_item3_text: "Temoignages 03",
    testimonials_item3_name: "Prenom N.",
    testimonials_item3_role: "Role/Position",
    testimonials_item4_text: "Temoignages 04",
    testimonials_item4_name: "Prenom N.",
    testimonials_item4_role: "Role/Position",
    testimonials_item5_text: "Temoignages 05",
    testimonials_item5_name: "Prenom N.",
    testimonials_item5_role: "Role/Position",
    testimonials_item6_text: "Temoignages 06",
    testimonials_item6_name: "Prenom N.",
    testimonials_item6_role: "Role/Position",
    testimonials_cta_more: "Découvrez nos cas d'étude",
    contact_pre_title: "Écrivez-nous",
    contact_title_beginning: "Dites-nous ",
    contact_title_highlighted_end: "tout",
    contact_body:
      "Dites-nous en plus sur votre situation et vos projets. Nous accorderons une attention particulière à votre message et vous répondrons dans les meilleurs délais.",
    contact_form_name_placeholder: "Nom",
    contact_form_email_address_placeholder: "Adresse e-mail",
    contact_form_phone_number_placeholder: "Numéro de téléphone",
    contact_form_message_placeholder: "Message",
    contact_form_subject: "Sujet",
    contact_form_subject_option_1: "Création d'entreprise",
    contact_form_subject_option_2: "Audit et conseil",
    contact_form_subject_option_3: "Stratégie et développement",
    contact_form_subject_option_4: "Ressources humaines",
    contact_form_subject_option_5: "Juridique et fiscal",
    contact_form_subject_option_6: "Finances et investissements",
    contact_form_subject_option_7: "Autre",
    contact_form_success: "Votre message a été envoyé avec succès. Merci.",
    contact_form_invalid:
      "Des erreurs de validation sont survenues. Veuillez confirmer les champs et soumettre à nouveau.",
    contact_form_error: "Sorry. Nous n'avons pas pu envoyer votre message.",
    contact_phone_number: "+32 2 522 08 13",
    contact_email_address: "info@lbpartners.be",
    contact_office_address: "Av. Roi Albert I 64",
    document_privacy_policy: "Politique de confidentialité",
    document_terms_and_conditions: "Conditions générales d'utilisation",
    copyright: "© 2023 Legal and Business Partners SRL - Tous droits réservés.",
    backlink: "Fièrement réalisé par ",
    common_company_name: "Legal & Business Partners",
    common_legal_company_name: "Legal and Business Partners SRL",
    common_company_vat: "BE 0792.288.476",
    common_company_address_street_and_house: "Av. Roi Albert I 64",
    common_company_address_city_country: "1780 Wemmel, Belgique",
    common_company_tagline: "Votre partenaire de confiance pour la croissance.",
    common_cta_get_in_touch: "Prenez contact",
    common_cta_more_info: "En savoir plus",
    common_cta_view_map: "Afficher sur Google Maps ©",
    common_cta_submit: "Soumettre",
  };

  translations.en = {
    "current-locale": "EN",
    navbar_text:
      "Our experts are available to answer your questions from Monday to Friday, from 9am to 6pm.",
    menu_item1: "Home",
    menu_item2: "Services",
    menu_item3: "Team",
    menu_item4: "Testimonials",
    menu_item5: "Case studies",
    languages_picker_title: "Choose a language",
    hero_item1_title: "Accounting and Auditing",
    hero_item1_body:
      "Our expert accountants ensure accurate financial records and help businesses navigate complex regulations, providing peace of mind and enabling informed decision-making.",
    hero_item2_title: "Tax Advice",
    hero_item2_body:
      "Maximize your savings and minimize risks with our personalized tax advice, as our knowledgeable team helps you optimize your tax strategies and ensure compliance with ever-changing tax laws.",
    hero_item3_title: "Corporate Finance",
    hero_item3_body:
      "Make informed financial decisions and achieve sustainable growth with our corporate finance solutions, including financial analysis, capital optimization, and expert guidance in mergers and acquisitions.",
    hero_item4_title: "Human Resources",
    hero_item4_body:
      "Attract top talent, enhance employee engagement, and streamline HR practices with our comprehensive HR consulting services, designed to maximize the potential of your workforce and drive organizational success.",
    services_pre_title: "Our Areas of Expertise",
    services_title_beginning: "L'excellence dans",
    services_title_highlighted_end: "les services",
    services_body:
      "Nous sommes spécialisés dans la prestation de services de conseil grâce à un ensemble de technologies de pointe et à une équipe de professionnels expérimentés. Voici un aperçu des options que vous pouvez engager.",
    services_title_1: "Audit & Assurance",
    services_body_1: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_2: "Conseil financier",
    services_body_2: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_3: "Fiscalité",
    services_body_3: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_4: "Marketing",
    services_body_4: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_5: "Conseil juridique",
    services_body_5: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_6: "Gestion des risques",
    services_body_6: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    team_pre_title: "Notre équipe d'experts",
    team_title_beginning: "Rencontrez-",
    team_title_highlighted_end: "nous",
    team_body:
      "L'éthique et l'intégrité sont les bases sur lesquels notre équipe repose. Ce sont des principes fondamentaux qui deviennent des attitudes quotidiennes.",
    team_founders_speech_title: "Le mot des fondateurs",
    team_founders_speech_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lacinia diam.\n\nVivamus efficitur et est quis posuere. Nulla sollicitudin vulputate dui, id pretium tortor congue eu. Integer aliquet justo eu quam volutpat ullamcorper.\n\nDuis ut hendrerit mauris. Phasellus faucibus ut enim vel tincidunt. Nunc venenatis a dui et laoreet.",
    team_founders_speech_signature: "Bilal & Jean-David",
    team_member_first_name_1: "Jean-David",
    team_member_last_name_1: "Lukandu",
    team_member_job_title_1: "Legal advisor & co-founder",
    team_member_first_name_2: "Bilal",
    team_member_last_name_2: "Ismail",
    team_member_job_title_2: "Fiscal advisor & co-founder",
    study_cases_pre_title: "Nos cas d'étude",
    study_cases_title_beginning: "Leurs projets,",
    study_cases_title_highlighted_end: "notre expertise",
    study_cases_body:
      "Chaque mois, nous publions une étude de cas afin de vous faire découvrir comment notre expertise a contribué au développement et à la croissance de ceux qui nous ont fait confiance.",
    study_cases_cta_more: "Nos cas d'étude",
    newsletter_pre_title: "Newsletter",
    newsletter_title_beginning: "Apprenez-en ",
    newsletter_title_highlighted_end: "plus",
    newsletter_body:
      "Grâce à nos newsletters, recevez nos cas d'étude, découvrez nos conseils en matière de gestion d'entreprise et gardez un oeil sur les dernières nouveautés en termes de fiscalité et législation.",
    newsletter_form_name_placeholder: "Nom",
    newsletter_form_email_address_placeholder: "Adresse e-mail",
    newsletter_form_cta_subscribe: "S'abonner",
    testimonials_pre_title: "Témoignages de nos clients",
    testimonials_title_beginning: "Ils nous font déjà",
    testimonials_title_highlighted_end: "confiance",
    testimonials_body:
      "Nous travaillons intensément à la recherche d'idéaux et de solutions qui peuvent avoir un effet positif sur la vie de nos clients. C'est ce qui nous anime et nous sommes sensibles à toute cette reconnaissance.",
    testimonials_cta_more: "Nos cas d'étude",
    contact_pre_title: "Écrivez-nous",
    contact_title_beginning: "Dites-nous ",
    contact_title_highlighted_end: "tout",
    contact_body:
      "Dites-nous en plus sur votre situation et vos projets. Nous accorderons une attention particulière à votre message et vous répondrons dans les meilleurs délais.",
    contact_form_name_placeholder: "Nom",
    contact_form_email_address_placeholder: "Adresse e-mail",
    contact_form_phone_number_placeholder: "Numéro de téléphone",
    contact_form_message_placeholder: "Message",
    contact_form_subject: "Sujet",
    contact_form_subject_option_1: "Audit & Assurance",
    contact_form_subject_option_2: "Conseil financier",
    contact_form_subject_option_3: "Fiscalité",
    contact_form_subject_option_4: "Marketing",
    contact_form_subject_option_5: "Conseil juridique",
    contact_form_subject_option_6: "Gestion des risques",
    contact_form_subject_option_7: "Autre",
    contact_form_success: "Votre message a été envoyé avec succès. Merci.",
    contact_form_invalid:
      "Des erreurs de validation sont survenues. Veuillez confirmer les champs et soumettre à nouveau.",
    contact_form_error: "Sorry. Nous n'avons pas pu envoyer votre message.",
    contact_phone_number: "+32 2 522 08 13",
    contact_email_address: "contact@lbpartners.be",
    contact_office_address: "Av. Reine Astrid 59b",
    document_privacy_policy: "Politique de confidentialité",
    document_terms_and_conditions: "Conditions générales d'utilisation",
    copyright: "© 2023 Legal and Business Partners SRL - Tous droits réservés.",
    backlink: "Fièrement réalisé par ",
    common_company_name: "Legal & Business Partners",
    common_legal_company_name: "Legal and Business Partners SRL",
    common_company_vat: "BE 0792.288.476",
    common_company_address_street_and_house: "Av. Reine Astrid 59b",
    common_company_address_city_country: "1780 Wemmel, Belgique",
    common_company_tagline: "Votre partenaire de confiance pour la croissance.",
    common_cta_get_in_touch: "Prenez contact",
    common_cta_more_info: "En savoir plus",
    common_cta_view_map: "Afficher sur Google Maps ©",
    common_cta_submit: "Soumettre",
    contact_form_succes: "",
  };

  translations.nl = {
    "current-locale": "NL",
    navbar_text:
      "Nos conseillers répondent à vos questions du lundi au vendredi, de 9h à 18h.",
    menu_item1: "Accueil",
    menu_item2: "Services",
    menu_item3: "Équipe",
    menu_item4: "Témoignages",
    menu_item5: "Cas d'étude",

    languages_picker_title: "Choisissez une langue",

    hero_item1_title: "Fiscalité des entreprises",
    hero_item1_body:
      "Sed in orci nunc. Donec sit amet ante et dolor commodo venenatis vitae nec odio.",
    hero_item2_title: "Conseils juridiques",
    hero_item2_body:
      "Nos juristes vous fournissent assistance et conseil afin que votre entreprise puisse constamment répondre aux exigences légales et réglementaires en vigueur.",
    hero_item3_title: "Gestion d'entreprise",
    hero_item3_body:
      "Notre équipe vous accompagne et vous assiste lors de la création de votre entreprise et tout au long de votre activité.",
    hero_item4_title: "Gestion du personnel",
    hero_item4_body:
      "Nos spécialistes RH vous aident à recruter de nouveaux collaborateurs et s’occupent de la gestion salariale de votre entreprise en vous garantissant le respect de la législation sociale en vigueur.",

    services_pre_title: "Nos domaines d'expertise",
    services_title_beginning: "L'excellence dans",
    services_title_highlighted_end: "les services",
    services_body:
      "Nous sommes spécialisés dans la prestation de services de conseil grâce à un ensemble de technologies de pointe et à une équipe de professionnels expérimentés. Voici un aperçu des options que vous pouvez engager.",
    services_title_1: "Audit & Assurance",
    services_body_1: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_2: "Conseil financier",
    services_body_2: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_3: "Fiscalité",
    services_body_3: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_4: "Marketing",
    services_body_4: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_5: "Conseil juridique",
    services_body_5: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_6: "Gestion des risques",
    services_body_6: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",

    team_pre_title: "Notre équipe d'experts",
    team_title_beginning: "Rencontrez-",
    team_title_highlighted_end: "nous",
    team_body:
      "L'éthique et l'intégrité sont les bases sur lesquels notre équipe repose. Ce sont des principes fondamentaux qui deviennent des attitudes quotidiennes.",
    team_founders_speech_title: "Le mot des fondateurs",
    team_founders_speech_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lacinia diam.\n\nVivamus efficitur et est quis posuere. Nulla sollicitudin vulputate dui, id pretium tortor congue eu. Integer aliquet justo eu quam volutpat ullamcorper.\n\nDuis ut hendrerit mauris. Phasellus faucibus ut enim vel tincidunt. Nunc venenatis a dui et laoreet.",
    team_founders_speech_signature: "Bilal & Jean-David",
    team_member_first_name_1: "Jean-David",
    team_member_last_name_1: "Lukandu",
    team_member_job_title_1: "Legal advisor & co-founder",
    team_member_first_name_2: "Bilal",
    team_member_last_name_2: "Ismail",
    team_member_job_title_2: "Fiscal advisor & co-founder",

    study_cases_pre_title: "Nos cas d'étude",
    study_cases_title_beginning: "Leurs projets,",
    study_cases_title_highlighted_end: "notre expertise",
    study_cases_body:
      "Chaque mois, nous publions une étude de cas afin de vous faire découvrir comment notre expertise a contribué au développement et à la croissance de ceux qui nous ont fait confiance.",
    study_cases_cta_more: "Nos cas d'étude",

    newsletter_pre_title: "Newsletter",
    newsletter_title_beginning: "Apprenez-en ",
    newsletter_title_highlighted_end: "plus",
    newsletter_body:
      "Grâce à nos newsletters, recevez nos cas d'étude, découvrez nos conseils en matière de gestion d'entreprise et gardez un oeil sur les dernières nouveautés en termes de fiscalité et législation.",
    newsletter_form_name_placeholder: "Nom",
    newsletter_form_email_address_placeholder: "Adresse e-mail",
    newsletter_form_cta_subscribe: "S'abonner",

    testimonials_pre_title: "Témoignages de nos clients",
    testimonials_title_beginning: "Ils nous font déjà",
    testimonials_title_highlighted_end: "confiance",
    testimonials_body:
      "Nous travaillons intensément à la recherche d'idéaux et de solutions qui peuvent avoir un effet positif sur la vie de nos clients. C'est ce qui nous anime et nous sommes sensibles à toute cette reconnaissance.",
    testimonials_cta_more: "Nos cas d'étude",

    contact_pre_title: "Écrivez-nous",
    contact_title_beginning: "Dites-nous ",
    contact_title_highlighted_end: "tout",
    contact_body:
      "Dites-nous en plus sur votre situation et vos projets. Nous accorderons une attention particulière à votre message et vous répondrons dans les meilleurs délais.",

    contact_form_name_placeholder: "Nom",
    contact_form_email_address_placeholder: "Adresse e-mail",
    contact_form_phone_number_placeholder: "Numéro de téléphone",
    contact_form_message_placeholder: "Message",
    contact_form_subject: "Sujet",
    contact_form_subject_option_1: "Audit & Assurance",
    contact_form_subject_option_2: "Conseil financier",
    contact_form_subject_option_3: "Fiscalité",
    contact_form_subject_option_4: "Marketing",
    contact_form_subject_option_5: "Conseil juridique",
    contact_form_subject_option_6: "Gestion des risques",
    contact_form_subject_option_7: "Autre",
    contact_form_succes: "Uw bericht is succesvol verzonden. Bedankt.",
    contact_form_invalid:
      "Er zijn validatiefouten opgetreden. Gelieve de velden te bevestigen en opnieuw in te dienen.",
    contact_form_error: "Sorry. We konden uw bericht niet verzenden.",

    contact_phone_number: "+32 2 522 08 13",
    contact_email_address: "contact@lbpartners.be",
    contact_office_address: "Av. Reine Astrid 59b", //Kon. Astridlaan 59b, 1780 Wemmel

    document_privacy_policy: "Politique de confidentialité",
    document_terms_and_conditions: "Conditions générales d'utilisation",
    copyright: "© 2023 Legal and Business Partners SRL - Tous droits réservés.",
    backlink: "Fièrement réalisé par ",

    common_company_name: "Legal & Business Partners",
    common_legal_company_name: "Legal and Business Partners SRL",
    common_company_vat: "BE 0792.288.476",
    common_company_address_street_and_house: "Av. Reine Astrid 59b",
    common_company_address_city_country: "1780 Wemmel, Belgique",
    common_company_tagline: "Votre partenaire de confiance pour la croissance.",

    common_cta_get_in_touch: "Prenez contact",
    common_cta_more_info: "En savoir plus",
    common_cta_view_map: "Afficher sur Google Maps ©",
    common_cta_submit: "Soumettre",
  };

  function changeLanguage(lng) {
    window.localStorage.setItem("current-locale", lng);
    window.languagesResources = translations[lng];

    $("[data-translation-key]").each(function (i, elt) {
      $(elt).text(
        window.languagesResources[$(elt).attr("data-translation-key")]
      );
    });
    $("[placeholder-translation-key]").each(function (i, elt) {
      $(elt).attr(
        "placeholder",
        window.languagesResources[$(elt).attr("placeholder-translation-key")]
      );
    });
  }

  $(document).ready(function () {
    const initialLanguage = window.localStorage.getItem("current-locale");
    if (initialLanguage === null) {
      const potentialLng = (
        navigator.languages.find((language) => {
          const isoLng = language.slice(0, 2);
          return isoLng == "fr";
        }) ||
        navigator.userLanguage ||
        navigator.language
      )
        .slice(0, 2)
        .toLowerCase();
      console.log(potentialLng);

      changeLanguage(potentialLng);
    } else {
      changeLanguage(initialLanguage);
    }
    $(document).on("click", "#locale-fr", function () {
      changeLanguage("fr");
      window.location.reload();
    });
  });
});
