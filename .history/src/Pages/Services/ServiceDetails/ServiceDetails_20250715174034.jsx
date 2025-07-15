import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Droplet, Shirt, Monitor, Warehouse, Sofa, Wrench, Book } from "lucide-react";
import "./ServiceDetails.scss";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const servicesData = [
    {
      id: "cleaning",
      title: t("services.cleaning.title"),
      icon: Droplet,
      details: t("services.cleaning.details"),
      products: [
        {
          name: "Fairy Ultra Plus Qabyuyan Maye",
          description: "Yağlı qalıqları adi mayelərdən 50% daha sürətli təmizləyən qabaqcıl formula. Əllərə aloe vera ekstraktı ilə zərifdir.",
          usage: "Süngərə birbaşa tətbiq edin və ya suda seyreltin. İsti və soyuq suda effektiv işləyir.",
          image: "https://m.media-amazon.com/images/I/71yV5vG1R2L._SL1500_.jpg",
          features: [
            "Yağ üzərində 3x daha effektiv",
            "pH balanslaşdırılmış formula",
            "Bioloji parçalana bilən tərkib",
            "Bütün qab növləri üçün uyğundur"
          ],
          volume: "450 ml",
          ingredients: "Anion səthi aktiv maddələr (5-15%), qeyri-ion səthi aktiv maddələr (<5%), aloe vera ekstraktı, parfum",
          origin: "Türkiyə",
          safety: "Uşaqların əli çatmayan yerdə saxlayın. Gözlə təmasda bol su ilə yuyun.",
          releaseDate: "2023-01-15",
          hashtags: ["#Təmizlik", "#Qabyuyan", "#FairyUltra", "#EkoTəmizlik", "#TəmizMətbəx", "#TəmizQablar", "#Gigiyena"]
        },
        {
          name: "Dettol Antibakterial Səth Təmizləyicisi",
          description: "E.coli və Salmonella daxil olmaqla 99.9% bakteriya və virusları öldürür. Səthləri gigiyenik təmizləyir.",
          usage: "Səthə birbaşa püskürtün və bezlə silin. Yaxalamağa ehtiyac yoxdur.",
          image: "https://m.media-amazon.com/images/I/61YyQy5r0FL._SL1500_.jpg",
          features: [
            "Limon təravəti ətri",
            "Çoxsaylı səthlərdə işləyir",
            "Sınaqdan keçirilmiş antibakterial təsir",
            "500 ml spreylik şüşə"
          ],
          volume: "500 ml",
          ingredients: "Kvaterner ammonium birləşmələri, su, limon ətri, qeyri-ion səthi aktiv maddələr",
          origin: "Böyük Britaniya",
          safety: "Yanan materiallardan uzaq tutun. Dəri ilə təmasda yuyun.",
          releaseDate: "2022-06-10",
          hashtags: ["#Antibakterial", "#Dettol", "#TəmizSəth", "#Gigiyena", "#TəmizlikMəhsulları", "#SəthTəmizliyi", "#LimonƏtri"]
        },
        {
          name: "Vileda SuperMocio Mikrofiber Döşəmə Süpürgəsi",
          description: "Adi süpürgələrdən 7x daha çox maye udan və 50% daha yaxşı kir təmizləyən qabaqcıl mikrofiber texnologiyası.",
          usage: "Teleskopik sapı taxın, su və ya təmizləyici məhlulla nəmləndirin, döşəmələri silin. 60°C-də maşında yuyula bilər.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "360° fırlanan başlıq",
            "300 dəfəyə qədər yuyula bilər",
            "Erqonomik sap",
            "Bütün döşəmə növləri üçün uyğundur"
          ],
          material: "Mikrofiber, polipropilen",
          origin: "Almaniya",
          safety: "Uşaqların əli çatmayan yerdə saxlayın.",
          releaseDate: "2021-03-20",
          hashtags: ["#Vileda", "#DöşəməTəmizliyi", "#Mikrofiber", "#TəmizEv", "#Süpürgə", "#EkoTəmizlik", "#DöşəməBaxımı"]
        }
      ]
    },
    {
      id: "workwear",
      title: t("services.workwear.title"),
      icon: Shirt,
      details: t("services.workwear.details"),
      products: [
        {
          name: "Carhartt Force T-Shirt",
          description: "Nəm çəkən və qoxuya nəzarət texnologiyalı performans köynəyi. 100% pambıqdan hazırlanmış, davamlı və rahatdır.",
          usage: "İsti iş mühitləri üçün idealdır. Soyuq suda maşında yuyulur, aşağı istilikdə qurudulur.",
          image: "https://m.media-amazon.com/images/I/71T5hYjJmZL._AC_UX569_.jpg",
          features: [
            "UPF 30+ günəşdən qoruma",
            "Yivli yaxalıq",
            "Etiketsiz boyun",
            "Gücləndirilmiş tikişlər"
          ],
          material: "100% pambıq",
          origin: "ABŞ",
          safety: "Maşında yuyularkən ağartıcı istifadə etməyin.",
          releaseDate: "2020-09-01",
          hashtags: ["#İşGeyimi", "#Carhartt", "#TəmizGeyim", "#DavamlıKöynək", "#Rahatlıq", "#PambıqGeyim", "#İşMühi"]
        },
        {
          name: "Dickies Flex Regular Fit Duck Carpenter Şalvar",
          description: "Hərəkət azadlığı üçün elastik texnologiyalı davamlı iş şalvarı. Pambıq kətan və gücləndirilmiş tikişlərlə hazırlanmışdır.",
          usage: "Çəkic ilgəyi, alət cibləri və gücləndirilmiş dizlərlə peşəkar istifadə üçün nəzərdə tutulub.",
          image: "https://m.media-amazon.com/images/I/81v0r8J1kIL._AC_UX569_.jpg",
          features: [
            "Elastik parça",
            "İkiqat ön dizayn",
            "8 ciblə dizayn",
            "28-44 bel ölçüləri"
          ],
          material: "Pambıq kətan, spandeks",
          origin: "ABŞ",
          safety: "Ağartıcıdan istifadə etməyin. Aşağı istilikdə yuyun.",
          releaseDate: "2021-11-15",
          hashtags: ["#Dickies", "#İşŞalvarı", "#DavamlıGeyim", "#PeşəkarGeyim", "#RahatŞalvar", "#İşMühi", "#KətanParça"]
        },
        {
          name: "Timberland PRO Kişi 6 Pit Boss Polad Burun Çəkmə",
          description: "Yorğunluq əleyhinə texnologiya və elektrik təhlükəsizliyi qorunması ilə sənaye dərəcəli təhlükəsizlik çəkmələri.",
          usage: "İnşaat və sənaye iş mühitləri üçün nəzərdə tutulub. Suya davamlı və sürüşməyə qarşıdır.",
          image: "https://m.media-amazon.com/images/I/71+1+3Y5wmL._AC_UX625_.jpg",
          features: [
            "ASTM F2413-11 təhlükəsizlik dərəcəsi",
            "Polad burun qorunması",
            "Antimikrob astar",
            "Rezin qabarcıqlı altlıq"
          ],
          material: "Dəri, rezin",
          origin: "ABŞ",
          safety: "Sürüşkən səthlərdə diqqətli olun.",
          releaseDate: "2022-02-10",
          hashtags: ["#Timberland", "#TəhlükəsizlikÇəkməsi", "#İşAyaqqabısı", "#DavamlıÇəkmə", "#SuyaDavamlı", "#SənayeGeyimi", "#Təhlükəsizlik"]
        }
      ]
    },
    {
      id: "it_equipment",
      title: t("services.it_equipment.title"),
      icon: Monitor,
      details: t("services.it_equipment.details"),
      products: [
        {
          name: "Dell OptiPlex 7080 Masaüstü Kompüter",
          description: "10-cu nəsil Intel Core prosessorları və peşəkar qrafik seçimləri ilə yığcam biznes masaüstü kompüteri.",
          usage: "Ofis mühitləri, zəng mərkəzləri və peşəkar iş yerləri üçün idealdır.",
          image: "https://m.media-amazon.com/images/I/71yV5vG1R2L._SL1500_.jpg",
          features: [
            "Intel Core i5-10500 prosessor",
            "8GB DDR4 RAM (64GB-a qədər genişləndirilə bilər)",
            "256GB SSD + 1TB HDD",
            "Windows 10 Pro"
          ],
          material: "Plastik, metal",
          origin: "Çin",
          safety: "Elektrik təhlükəsizliyi standartlarına uyğun istifadə edin.",
          releaseDate: "2020-12-01",
          hashtags: ["#Dell", "#MasaüstüKompüter", "#OfisAvadanlığı", "#ITAvadanlıq", "#Texnologiya", "#PeşəkarKompüter", "#Səmərəliİş"]
        },
        {
          name: "HP EliteDisplay E243 24 düymlük Monitor",
          description: "Erqonomik stend və göz qoruyucu texnologiyalı Full HD biznes monitoru.",
          usage: "DisplayPort, HDMI və ya VGA ilə qoşulur. Tənzimlənən əyilmə, fırlanma və hündürlük.",
          image: "https://m.media-amazon.com/images/I/81wXcfu3VTL._AC_SL1500_.jpg",
          features: [
            "1920x1080 təsvir ölçüsü",
            "Parıltı əleyhinə IPS panel",
            "Aşağı mavi işıq rejimi",
            "VESA montajı ilə uyğundur"
          ],
          material: "Plastik, şüşə",
          origin: "Çin",
          safety: "Düzgün enerji mənbəyinə qoşun.",
          releaseDate: "2021-05-15",
          hashtags: ["#HPMonitor", "#OfisMonitoru", "#FullHD", "#ErqonomikDizayn", "#Texnologiya", "#GözQoruyucu", "#OfisAvadanlığı"]
        },
        {
          name: "Logitech MK540 Qabaqcıl Simsiz Klaviatura və Siçan Dəsti",
          description: "2.4GHz simsiz bağlantılı təhlükəsiz və rahat simsiz giriş cihazları.",
          usage: "Plug-and-play USB qəbuledicisi, 128-bit AES şifrələmə ilə təhlükəsizdir.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "3 il batareya ömrü",
            "Səssiz düymələr",
            "Dəqiq sürüşdürmə çarxı",
            "8m simsiz məsafə"
          ],
          material: "Plastik",
          origin: "Çin",
          safety: "Batareyaları düzgün dəyişdirin.",
          releaseDate: "2020-07-20",
          hashtags: ["#Logitech", "#SimsizKlaviatura", "#OfisAvadanlığı", "#SiçanDəsti", "#Texnologiya", "#SəssizDüymələr", "#TəhlükəsizBağlantı"]
        }
      ]
    },
    {
      id: "household",
      title: t("services.household.title"),
      icon: Warehouse,
      details: t("services.household.details"),
      products: [
        {
          name: "Instant Pot Duo 7-in-1 Elektrik Təzyiqli Qazan",
          description: "Təzyiqli bişirmə, yavaş bişirmə, düyü bişirmə, qatıq hazırlama, buxar bişirmə, sote və qızdırıcı funksiyaları olan çoxfunksiyalı qazan.",
          usage: "14 daxili ağıllı proqram ilə əlsiz bişirmə. 10 təhlükəsizlik mexanizmi daxildir.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "6 litr tutum",
            "1000 vatt güc",
            "Paslanmaz polad bişirmə qabı",
            "Gecikdirilmiş bişirmə taymeri"
          ],
          material: "Paslanmaz polad, plastik",
          origin: "Çin",
          safety: "Təzyiq mexanizmini diqqətlə istifadə edin.",
          releaseDate: "2021-09-10",
          hashtags: ["#InstantPot", "#MətbəxAvadanlığı", "#TəzyiqliQazan", "#AğıllıBişirmə", "#EkoMətbəx", "#Çoxfunksiyalı", "#MətbəxAlətləri"]
        },
        {
          name: "Shark Navigator Lift-Away Professional Tozsoran",
          description: "HEPA filtrasiyası və portativ təmizləmə üçün lift-away texnologiyalı güclü şaquli tozsoran.",
          usage: "Mərtəbələr, mebel və dar yerlər üçün əl tozsoranına çevrilir.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "Allergenlərə qarşı tam möhür",
            "Fırlanan sükan",
            "25 fut enerji kabeli",
            "5 il məhdud zəmanət"
          ],
          material: "Plastik, metal",
          origin: "ABŞ",
          safety: "Filtrləri mütəmadi təmizləyin.",
          releaseDate: "2022-03-05",
          hashtags: ["#SharkTozsoran", "#TəmizEv", "#HEPAFiltr", "#Tozsoran", "#EkoTəmizlik", "#PortativTəmizlik", "#EvBaxımı"]
        },
        {
          name: "Honeywell HCE200W UberHeat Seramik Qızdırıcı",
          description: "Tənzimlənən termostat və həddindən artıq istiləşmə qorunması ilə yığcam şəxsi qızdırıcı.",
          usage: "150 kvadrat futadək kiçik otaqlar üçün idealdır. İki istilik parametri (750W/1500W).",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "Sərin toxunuşlu korpus",
            "Aşma açarı",
            "Enerji səmərəli",
            "Əl ilə idarəetmə"
          ],
          material: "Plastik, seramik",
          origin: "Çin",
          safety: "Yanan materiallardan uzaq tutun.",
          releaseDate: "2020-11-01",
          hashtags: ["#Honeywell", "#Qızdırıcı", "#Şəxsiİstilik", "#EnerjiSəmərəliliyi", "#EkoEv", "#İstilikAvadanlığı", "#KiçikOtaq"]
        }
      ]
    },
    {
      id: "furniture",
      title: t("services.furniture.title"),
      icon: Sofa,
      details: t("services.furniture.details"),
      products: [
        {
          name: "IKEA Markus Ofis Kreslosu",
          description: "Tənzimlənən hündürlük, əyilmə gərginliyi və bel dəstəyi ilə erqonomik ofis kreslosu.",
          usage: "Nəfəs alan mesh arxalıq ilə uzun iş seansları üçün nəzərdə tutulub.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "10 il məhdud zəmanət",
            "Tənzimlənən qol dayaqları",
            "Nylon baza və təkərlər",
            "Maksimum yük: 110 kq"
          ],
          material: "Mesh parça, polad",
          origin: "İsveç",
          safety: "Düzgün yığılmasını təmin edin.",
          releaseDate: "2021-07-15",
          hashtags: ["#IKEA", "#OfisKreslosu", "#ErqonomikDizayn", "#RahatMebel", "#MətbəxMebeli", "#OfisDizaynı", "#Mebel"]
        },
        {
          name: "Zinus Modern Studio 6 düymlük Platforma Yataq Çərçivəsi",
          description: "Səssiz dizaynlı möhkəm polad çərçivəli aşağı profilli platforma yataq.",
          usage: "Yastıq yayına ehtiyac yoxdur. Standart kraliça döşəkləri ilə uyğundur.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "Alətsiz yığılma",
            "317 kq çəki tutumu",
            "12 düym alt boşluq",
            "5 il zəmanət"
          ],
          material: "Polad",
          origin: "Çin",
          safety: "Maksimum çəki limitinə riayət edin.",
          releaseDate: "2020-04-10",
          hashtags: ["#Zinus", "#YataqÇərçivəsi", "#MinimalistDizayn", "#DavamlıMebel", "#EkoEv", "#YataqOtağı", "#Mebel"]
        },
        {
          name: "Bush Furniture Cabot L-Şəkilli İş Masası",
          description: "Fayl çekmecəsi, CPU stendi və kabel idarəetməsi ilə künc iş stansiyası.",
          usage: "Cızılma və ləkəyə davamlı laminat səth. Sol və ya sağ orientasiya mümkündür.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "58.5W x 59D düym ölçüləri",
            "Tənzimlənən ayaq səviyyələndiriciləri",
            "10 il zəmanət",
            "Albalı rəngli bitirmə"
          ],
          material: "Laminat, polad",
          origin: "ABŞ",
          safety: "Ağır əşyaları masanın kənarına qoymayın.",
          releaseDate: "2021-12-01",
          hashtags: ["#OfisMasası", "#LŞəkilliMasa", "#BushFurniture", "#ErqonomikOfis", "#Mebel", "#OfisDizaynı", "#DavamlıMasa"]
        }
      ]
    },
    {
      id: "plumbing",
      title: t("services.plumbing.title"),
      icon: Wrench,
      details: t("services.plumbing.details"),
      products: [
        {
          name: "Moen 7594ESRS Arbor Motionsense Dalğa Sensorlu Kran",
          description: "Ləkəyə davamlı paslanmaz polad örtüklü əlsiz mətbəx kranı.",
          usage: "Əllər çirkli və ya dolu olduqda dalğa ilə aktivləşdirilir.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "Əlsiz və əl ilə rejimlər",
            "Maqnitli səpmə başlığı",
            "6.5 GPM axın sürəti",
            "Ömürlük məhdud zəmanət"
          ],
          material: "Paslanmaz polad",
          origin: "ABŞ",
          safety: "Suyun temperaturuna nəzarət edin.",
          releaseDate: "2022-01-20",
          hashtags: ["#Moen", "#ƏlsizKran", "#MətbəxAvadanlığı", "#TəmizMətbəx", "#Santexnika", "#AğıllıKran", "#Gigiyena"]
        },
        {
          name: "KOHLER K-3609-0 Memoirs Stately Komfort Hündürlüyü Tualet",
          description: "Class Five yuyulma texnologiyalı su səmərəli uzunsov tualet qabı.",
          usage: "ADA uyğun komfort hündürlüyü. Səssiz bağlanan oturacaq daxildir.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "1.28 GPF reytinqi",
            "12 düym kobud giriş",
            "AquaPiston kanistr",
            "10 il zəmanət"
          ],
          material: "Keramika",
          origin: "ABŞ",
          safety: "Düzgün quraşdırılmasını təmin edin.",
          releaseDate: "2021-08-05",
          hashtags: ["#Kohler", "#Tualet", "#Santexnika", "#SuSəmərəliliyi", "#KomfortluTualet", "#HamamAvadanlığı", "#EkoSantexnika"]
        },
        {
          name: "RIDGID 59787 Model K-400 Boru Təmizləyici Maşın",
          description: "4 düymədək tıxanmış boruları təmizləmək üçün peşəkar dərəcəli baraban maşını.",
          usage: "50 fut 5/16 düymlük kabel və saxlama qutusu daxildir.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "3/8 HP motor",
            "Avtomatik kabel qidalandırması",
            "Ağır polad çərçivə",
            "7 il zəmanət"
          ],
          material: "Polad",
          origin: "ABŞ",
          safety: "Elektrikli avadanlıq kimi diqqətlə istifadə edin.",
          releaseDate: "2020-10-15",
          hashtags: ["#RIDGID", "#BoruTəmizləyici", "#SantexnikaAlətləri", "#PeşəkarAlət", "#Təmizlik", "#BoruBaxımı", "#Santexnika"]
        }
      ]
    },
    {
      id: "office_supplies",
      title: t("services.office_supplies.title"),
      icon: Book,
      details: t("services.office_supplies.details"),
      products: [
        {
          name: "Swingline Optima 40 Vərəq Zımbalayıcı",
          description: "Tam zolaqlı və tıxanma əleyhinə mexanizmli ağır yük zımbalayıcı.",
          usage: "40 vərəqə qədər zımbalayır. Ön yüklənən zımba kartrici.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "Metal konstruksiya",
            "Ömürlük zəmanət",
            "Rezin baza",
            "Standart #10 zımbalar istifadə edir"
          ],
          material: "Metal, plastik",
          origin: "ABŞ",
          safety: "Diqqətlə istifadə edin, barmaqları zımbadan uzaq tutun.",
          releaseDate: "2021-06-01",
          hashtags: ["#Swingline", "#Zımbalayıcı", "#OfisAvadanlığı", "#DavamlıZımba", "#OfisAlətləri", "#SənədTəşkili", "#PeşəkarOfis"]
        },
        {
          name: "Post-it Super Sticky 3x3 Qeyd Kağızları",
          description: "Şaquli və qeyri-bərabər səthlərə daha yaxşı yapışan əlavə yapışqanlı qeyd kağızları.",
          usage: "Beyin fırtınası, xatırlatmalar və sənədləri işarələmək üçün əladır.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "Paketdə 24 ədəd",
            "76% təkrar emal edilmiş kağız",
            "Çoxrəngli",
            "2x yapışma gücü"
          ],
          material: "Kağız",
          origin: "ABŞ",
          safety: "Kağızı düzgün atın.",
          releaseDate: "2020-03-10",
          hashtags: ["#PostIt", "#QeydKağızları", "#OfisAlətləri", "#Təşkilatçılıq", "#RəngliQeydlər", "#OfisTəşkili", "#EkoKağız"]
        },
        {
          name: "HP OfficeJet Pro 9015e Hamısı Bir Arada Printer",
          description: "Mobil çap, avtomatik ikitərəfli çap və yüksək məhsuldar mürəkkəb seçimləri ilə ağıllı biznes printeri.",
          usage: "Çap, skan, surət çıxarma və faks. Alexa ilə işləyir.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "22 ppm çap sürəti",
            "35 vərəqli ADF",
            "250 vərəqli kağız qabı",
            "6 aylıq mürəkkəb abunəliyi daxildir"
          ],
          material: "Plastik",
          origin: "Çin",
          safety: "Elektrik təhlükəsizliyi standartlarına uyğun istifadə edin.",
          releaseDate: "2021-04-20",
          hashtags: ["#HPPrinter", "#OfisPrinteri", "#AğıllıÇap", "#OfisAvadanlığı", "#Texnologiya", "#ÇoxfunksiyalıPrinter", "#Sənədİdarəetmə"]
        }
      ]
    }
  ];

  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <div>{t("services.not_found")}</div>;
  }

  const IconComponent = service.icon;

  return (
    <div className="serviceDetailsContainer">
      <Helmet>
        <title>{`${service.title} - PRIME TRADE GROUP MMC`}</title>
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <div className="containerWrapper">
        <SectionHeader
          title={service.title}
          subtitle={t("services.details.subtitle")}
        />
        
        <section className="serviceDetailsSection">
          <div className="serviceDetailsContent">
            <div className="serviceIconWrapper">
              <IconComponent className="serviceIcon" />
            </div>
            
            <h2 className="serviceTitle">{service.title}</h2>
            <p className="serviceDetailsText">{service.details}</p>
            
            <div className="productsContainer">
              {service.products.map((product, index) => (
                <div key={index} className={`productCard ${index % 2 === 0 ? 'leftAlign' : 'rightAlign'}`}>
                  <div className="productImageContainer">
                    <img src={product.image} alt={product.name} className="productImage" />
                  </div>
                  
                  <div className="productInfo">
                    <h3 className="productName">{product.name}</h3>
                    <p className="productDescription">{product.description}</p>
                    
                    <div className="usageSection">
                      <h4 className="sectionTitle">İstifadə</h4>
                      <p>{product.usage}</p>
                    </div>
                    
                    <div className="featuresSection">
                      <h4 className="sectionTitle">Əsas Xüsusiyyətlər</h4>
                      <ul className="featuresList">
                        {product.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="additionalInfoSection">
                      <h4 className="sectionTitle">Əlavə Məlumat</h4>
                      <p><strong>Həcm/Material:</strong> {product.volume || product.material}</p>
                      <p><strong>Mənşə:</strong> {product.origin}</p>
                      <p><strong>Təhlükəsizlik:</strong> {product.safety}</p>
                      <p><strong>Buraxılış Tarixi:</strong> {product.releaseDate}</p>
                      <p><strong>Haştaqlar:</strong> {product.hashtags.join(" ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              className="backButton"
              onClick={() => navigate("/services")}
            >
              {t("services.back")}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;