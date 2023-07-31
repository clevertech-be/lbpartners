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
      "Notre expertise en création d'entreprise transforme vos idées audacieuses en une réalité.",
    hero_item2_title: "Faites grandir votre entreprise en toute confiance",
    hero_item2_body:
      "Avec nos services en stratégie, développement et gestion des ressources humaines, votre croissance est entre de bonnes mains.",
    hero_item3_title: "Assurez votre conformité et votre sérénité",
    hero_item3_body:
      "Nos services juridiques et fiscaux vous gardent en conformité avec les nouvelles dispositions légales et optimisent votre entreprise sur mesure pour une tranquillité d'esprit totale.",
    hero_item4_title: "Saisissez les opportunités d'investissement",
    hero_item4_body:
      "Nos conseils en finance et investissement vous aident à identifier et à exploiter les opportunités les plus prometteuses.",
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
      "Nos audits rigoureux et nos conseils personnalisés maximisent votre performance.",
    services_title_3: "Stratégie et développement",
    services_body_3:
      "Nous définissons des stratégies d'entreprise robustes pour vous aider à évoluer.",
    services_title_4: "Ressources humaines",
    services_body_4:
      "Optimisez la gestion de votre capital humain avec notre expertise.",
    services_title_5: "Juridique et fiscal",
    services_body_5:
      "Restez en conformité avec les nouvelles dispositions légales et minimisez votre charge fiscale grâce à nos conseils avisés.",
    services_title_6: "Finances et investissements",
    services_body_6:
      "Assurez la santé financière de votre entreprise et exploitez les opportunités d'investissement.",
    team_pre_title: "Notre équipe d'experts",
    team_title_beginning: "Rencontrez-",
    team_title_highlighted_end: "nous",
    team_body:
      "À vos côtés pour une croissance durable. L’éthique et l'intégrité sont les bases sur lesquels notre équipe repose. Ce sont des principes fondamentaux qui deviennent une attitude quotidienne.",
    team_founders_speech_title: "Le mot des fondateurs",
    team_founders_speech_body:
      "Depuis notre création, nous avons toujours cru en la puissance de l'entrepreneuriat. Notre mission chez Legal & Business Partners est d'aider chaque entrepreneur à réaliser son potentiel maximal. Nous comprenons les défis que représente la création et la gestion d'une entreprise, et c'est pourquoi nous proposons un accompagnement complet et personnalisé pour chaque étape de votre parcours entrepreneurial. Avec nous à vos côtés, vous pouvez vous concentrer sur ce que vous faites de mieux : innover, diriger et réussir.",
    team_founders_speech_signature: "Bilal & Jean-David",
    team_member_first_name_1: "Jean-David",
    team_member_last_name_1: "Lukandu",
    team_member_job_title_1: "Financial Expert & co-founder",
    team_member_first_name_2: "Bilal",
    team_member_last_name_2: "Ismail",
    team_member_job_title_2: "Legal Expert & co-founder",
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
    const initialLanguage = "fr"; //window.localStorage.getItem("current-locale");
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
