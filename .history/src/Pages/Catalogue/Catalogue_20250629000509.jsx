import React, { useState } from 'react';
import './Catalogue.scss'
const CatalogBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Yuyucu və təmizlik vasitələri",
      image: "https://images.unsplash.com/photo-1563453392212-326d32d2d3b9?w=300&h=200&fit=crop",
      shortDesc: "Yüksək keyfiyyətli təmizlik məhsulları",
      details: {
        description: "Peşəkar və məişət təmizlik məhsulları. Antibakterial təsirli, ekoloji təmiz və effektiv formula. Müxtəlif səthlərin təmizlənməsi üçün nəzərdə tutulub.",
        products: ["Ağ paltar yuyucu", "Rəngli paltar yuyucu", "Bulaşıq deterjanı", "Şüşə təmizləyici", "Dezinfektant"],
        specs: "Həcm: 1L, 5L, 10L variantları",
        price: "15-45 AZN aralığında"
      }
    },
    {
      id: 2,
      title: "İşçi və məktəbli geyimləri",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=300&h=200&fit=crop",
      shortDesc: "Keyfiyyətli iş və məktəb geyimləri",
      details: {
        description: "Rahat və davamlı geyimlər. İş təhlükəsizliyi standartlarına uyğun, uzunmüddətli istifadə üçün nəzərdə tutulub.",
        products: ["İş kostyumları", "Məktəb formaları", "Qoruyucu geyimlər", "İş ayaqqabıları", "Aksessuarlar"],
        specs: "Ölçülər: XS-dən 5XL-ə qədər",
        price: "25-120 AZN aralığında"
      }
    },
    {
      id: 3,
      title: "Mebellər və tədris avadanlıqları",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      shortDesc: "Müasir ofis və tədris mebelləri",
      details: {
        description: "Erqonomik dizayn və yüksək keyfiyyət. Ofis və təhsil müəssisələri üçün xüsusi olaraq hazırlanmış mebellər.",
        products: ["Ofis masaları", "İş stulları", "Sınaq masaları", "Kitab şkafları", "Lövhələr"],
        specs: "Material: MDF, Metal, Ağac",
        price: "80-500 AZN aralığında"
      }
    },
    {
      id: 4,
      title: "Təsərrüfat malları",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      shortDesc: "Gündəlik ehtiyaclar üçün məhsullar",
      details: {
        description: "Ev və işyeri təsərrüfatı üçün zəruri məhsullar. Keyfiyyətli və sərfəli qiymətlərlə təqdim olunan geniş çeşid.",
        products: ["Kağız məhsulları", "Plastik qablar", "Təmizlik alətləri", "Mətbəx ləvazimatları", "Bağçılıq alətləri"],
        specs: "Müxtəlif ölçü və növlərdə",
        price: "5-85 AZN aralığında"
      }
    },
    {
      id: 5,
      title: "Santexnika məhsulları",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop",
      shortDesc: "Müasir santexnika həlləri",
      details: {
        description: "Yüksək keyfiyyətli santexnika avadanlıqları. Su qənaətcisi texnologiyalar və uzunmüddətli zəmanət.",
        products: ["Kranlar", "Duş sistemi", "Lavabo", "Klozet", "Borular və fitinqlər"],
        specs: "Avropa standartlarında",
        price: "35-300 AZN aralığında"
      }
    },
    {
      id: 6,
      title: "Ofis və dəftərxana ləvazimatları",
      image: "https://images.unsplash.com/photo-1497005367839-6e852de72767?w=300&h=200&fit=crop",
      shortDesc: "Peşəkar ofis avadanlıqları",
      details: {
        description: "Səmərəli iş mühiti üçün lazımi bütün avadanlıqlar. Müasir texnologiya və rahat istifadə imkanları.",
        products: ["Kağız və dəftərlər", "Yazı ləvazimatları", "Fayl sistemi", "Hesab maşınları", "Laminat maşınları"],
        specs: "A4, A3 formatlarında",
        price: "2-150 AZN aralığında"
      }
    },
    {
      id: 7,
      title: "İT və elektronika avadanlıqları",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=200&fit=crop",
      shortDesc: "Müasir texnoloji həllər",
      details: {
        description: "Son texnologiya avadanlıqları. Yüksək performans və etibarlılıq. Texniki dəstək və zəmanət ilə birlikdə.",
        products: ["Kompüterlər", "Printerlər", "Proyektorlar", "Şəbəkə avadanlıqları", "Kabel və aksessuarlar"],
        specs: "Beynəlxalq standartlarda",
        price: "100-2000 AZN aralığında"
      }
    }
  ];

  const handleBookClick = () => {
    setIsOpen(true);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="catalogContainer">
      <div className={`bookWrapper ${isOpen ? 'bookOpen' : ''}`}>
        {!isOpen ? (
          <div className="bookCover" onClick={handleBookClick}>
            <div className="bookSpine"></div>
            <div className="bookFront">
              <div className="coverContent">
                <h1 className="bookTitle">Şirkət Kataloqu</h1>
                <p className="bookSubtitle">2024-2025</p>
                <div className="decorativeElement"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="openBook">
            <div className="bookPages">
              <div className="leftPage">
                <div className="pageHeader">
                  <h2>Məhsul Kateqoriyaları</h2>
                  <button className="closeButton" onClick={handleClose}>×</button>
                </div>
                <div className="categoriesList">
                  {categories.map(category => (
                    <div 
                      key={category.id}
                      className={`categoryItem ${selectedCategory?.id === category.id ? 'active' : ''}`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      <div className="categoryImage">
                        <img src={category.image} alt={category.title} />
                      </div>
                      <div className="categoryInfo">
                        <h3>{category.title}</h3>
                        <p>{category.shortDesc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rightPage">
                {selectedCategory ? (
                  <div className="categoryDetails">
                    <div className="detailsHeader">
                      <img src={selectedCategory.image} alt={selectedCategory.title} />
                      <h2>{selectedCategory.title}</h2>
                    </div>
                    <div className="detailsContent">
                      <div className="section">
                        <h3>Təsvir</h3>
                        <p>{selectedCategory.details.description}</p>
                      </div>
                      <div className="section">
                        <h3>Məhsullar</h3>
                        <ul>
                          {selectedCategory.details.products.map((product, index) => (
                            <li key={index}>{product}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="section">
                        <h3>Xüsusiyyətlər</h3>
                        <p>{selectedCategory.details.specs}</p>
                      </div>
                      <div className="section priceSection">
                        <h3>Qiymət Aralığı</h3>
                        <p className="price">{selectedCategory.details.price}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="welcomePage">
                    <h2>Xoş gəlmisiniz!</h2>
                    <p>Sol tərəfdən istədiyiniz kateqoriyanı seçin və ətraflı məlumatları buradan oxuyun.</p>
                    <div className="welcomeGraphic">
                      <div className="welcomeIcon">📚</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogBook;