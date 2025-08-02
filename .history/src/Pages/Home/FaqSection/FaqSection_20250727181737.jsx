import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQSection.scss';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'PRIME TRADE GROUP MMC hansı sahələr üzrə xidmət göstərir?',
      answer: 'Şirkətimiz təchizat, tender və satınalma sahələrində fəaliyyət göstərir. Biz təmizlik məhsulları, mebel, məişət avadanlıqları, informasiya texnologiyaları avadanlıqları, ofis ləvazimatları, santexnika məhsulları və iş geyimləri üzrə məhsulların təmini və satışını həyata keçiririk.',
    },
    {
      question: 'Yalnız dövlət müəssisələri iləmi işləyirsiniz, yoxsa özəl sektora da xidmət göstərirsiniz?',
      answer: 'Hər iki istiqamətdə fəaliyyət göstəririk. Dövlət tenderlərində iştirak etməklə yanaşı, özəl şirkətlərin də fərdi və korporativ ehtiyaclarına uyğun təchizat xidmətləri təqdim edirik.',
    },
    {
      question: 'Məhsullarınızı haradan əldə edirsiniz?',
      answer: 'Məhsullarımızı etibarlı yerli və beynəlxalq istehsalçılardan və rəsmi distribyutorlardan alırıq. Bu, keyfiyyətə və davamlı tədarükə zəmanət verir.',
    },
    {
      question: 'Sifariş prosesi necə həyata keçirilir?',
      answer: 'Sifariş üçün bizimlə əlaqə saxladıqdan sonra ehtiyaclarınız analiz olunur, uyğun məhsullar və qiymət təklifləri hazırlanır. Razılaşmadan sonra təchizat qrafiki müəyyən edilir və məhsullar təhvil verilir.',
    },
    {
      question: 'Minimum sifariş həcmi varmı?',
      answer: 'Xeyr, biz həm kiçik, həm də iri sifarişlərlə işləyirik. İstər bir ofis üçün ləvazimat, istərsə də iri həcmli tender təchizatı – hər bir sifarişi diqqətlə və operativ şəkildə həyata keçiririk.',
    },
    {
      question: 'Hansı bölgələrə xidmət göstərirsiniz?',
      answer: 'Biz Azərbaycan Respublikasının bütün bölgələrinə xidmət göstəririk. Müştərinin yerləşdiyi əraziyə uyğun çatdırılma və logistika həlləri tətbiq olunur.',
    },
    {
      question: 'İş geyimləri və fərdi mühafizə vasitələri üçün xüsusi dizayn və loqo tətbiqi mümkündürmü?',
      answer: 'Bəli, müştərinin istəyinə uyğun olaraq iş geyimlərinə loqo tətbiqi və dizayn fərdiləşdirmə xidmətləri də təklif edirik.',
    },
    {
      question: 'Məhsullara zəmanət verirsinizmi?',
      answer: 'Bəli, təqdim etdiyimiz bütün avadanlıqlar və məhsullar müvafiq zəmanətlə təmin olunur. Zəmanət müddəti məhsulun növündən və istehsalçısından asılı olaraq dəyişir.',
    },
    {
      question: 'Ödəniş üsulları hansılardır?',
      answer: 'Ödənişlər bank köçürməsi, müqavilə əsasında təxirə salınmış ödəniş və ya nağdsız hesablaşma yolu ilə həyata keçirilir. Müqavilədən asılı olaraq fərqli şərtlər tətbiq oluna bilər.',
    },
    {
      question: 'Sizdən qiymət təklifi necə ala bilərik?',
      answer: 'Əlaqə bölməmiz vasitəsilə bizə müraciət etdikdən sonra ehtiyaclarınızı bildirin. Komandamız sizin üçün ən uyğun məhsulları müəyyən edib, qısa zamanda qiymət təklifi təqdim edəcək.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqContainer">
      <div className="containerWrapper">
        <div className="faqSection">
          <h2 className="sectionTitle">Tez-tez verilən suallar</h2>
          <div className="faqList">
            {faqData.map((faq, index) => (
              <div key={index} className="faqCard">
                <div className="faqHeader" onClick={() => toggleFAQ(index)}>
                  <h3 className="faqQuestion">{faq.question}</h3>
                  <div className="faqIcon">
                    {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="faqContent">
                    <p className="faqAnswer">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;