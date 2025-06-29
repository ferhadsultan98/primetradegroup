import React, { useState } from 'react';
import './Catalogue.scss';

const ProductCatalog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    {
      id: 1,
      title: "Premium Bluetooth Kulaklık",
      category: "Elektronik",
      price: "₺1,299",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      description: "Yüksek kaliteli ses deneyimi sunan kablosuz kulaklık",
      features: [
        "40 saat pil ömrü",
        "Aktif gürültü engelleme",
        "Hızlı şarj teknolojisi",
        "Premium deri kaplama",
        "Bluetooth 5.0 bağlantı"
      ],
      specs: {
        "Frekans Aralığı": "20Hz - 20kHz",
        "Empedans": "32 Ohm",
        "Sürücü": "40mm dinamik",
        "Ağırlık": "290g",
        "Garanti": "2 yıl"
      }
    },
    {
      id: 2,
      title: "Akıllı Saat Pro",
      category: "Wearable",
      price: "₺2,599",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      description: "Gelişmiş sağlık takibi ve akıllı özellikler",
      features: [
        "7 gün pil ömrü",
        "GPS ve GLONASS",
        "Su geçirmez tasarım",
        "Kalp ritmi takibi",
        "100+ spor modu"
      ],
      specs: {
        "Ekran": "1.4' AMOLED",
        "İşlemci": "Dual-core ARM",
        "RAM": "1GB",
        "Depolama": "8GB",
        "Su Direnci": "5ATM"
      }
    },
    {
      id: 3,
      title: "Wireless Şarj Pad",
      category: "Aksesuar",
      price: "₺399",
      image: "https://images.unsplash.com/photo-1586953983027-d7508698d43c?w=400",
      description: "Hızlı kablosuz şarj teknolojisi",
      features: [
        "15W hızlı şarj",
        "Evrensel uyumluluk",
        "LED gösterge",
        "Aşırı ısınma koruması",
        "Şık tasarım"
      ],
      specs: {
        "Çıkış Gücü": "15W max",
        "Giriş": "USB-C",
        "Boyut": "100mm çap",
        "Kalınlık": "8mm",
        "Malzeme": "Alüminyum"
      }
    }
  ];

  const handleBookClick = () => {
    setIsOpen(!isOpen);
  };

  const handleProductSelect = (index) => {
    setSelectedProduct(index);
  };

  return (
    <div className="catalogContainer">
      <div className={`bookWrapper ${isOpen ? 'bookOpen' : ''}`}>
        {/* Kitap Kapağı */}
        <div className="bookCover" onClick={handleBookClick}>
          <div className="coverContent">
            <h1 className="catalogTitle">ÜRÜN KATALOĞU</h1>
            <div className="coverDesign">
              <div className="designElement"></div>
              <div className="designElement"></div>
              <div className="designElement"></div>
            </div>
            <p className="coverSubtitle">Premium Teknoloji Ürünleri</p>
            <div className="openIndicator">
              <span>Açmak için tıklayın</span>
            </div>
          </div>
          <div className="bookSpine"></div>
        </div>

        {/* Kitap İçeriği */}
        <div className="bookContent">
          {/* Sol Sayfa - Ürün Listesi */}
          <div className="leftPage">
            <div className="pageHeader">
              <h2>Ürünlerimiz</h2>
              <div className="pageNumber">01</div>
            </div>
            <div className="productList">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className={`productItem ${selectedProduct === index ? 'active' : ''}`}
                  onClick={() => handleProductSelect(index)}
                >
                  <div className="productImage">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="productInfo">
                    <h3>{product.title}</h3>
                    <p className="category">{product.category}</p>
                    <p className="price">{product.price}</p>
                  </div>
                  <div className="selectIndicator">
                    <div className="arrow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Sayfa - Ürün Detayları */}
          <div className="rightPage">
            <div className="pageHeader">
              <h2>Detaylar</h2>
              <div className="pageNumber">02</div>
            </div>
            <div className="productDetails">
              {products[selectedProduct] && (
                <>
                  <div className="detailHeader">
                    <div className="detailImage">
                      <img src={products[selectedProduct].image} alt={products[selectedProduct].title} />
                    </div>
                    <div className="detailTitle">
                      <h3>{products[selectedProduct].title}</h3>
                      <p className="detailCategory">{products[selectedProduct].category}</p>
                      <p className="detailPrice">{products[selectedProduct].price}</p>
                    </div>
                  </div>

                  <div className="detailDescription">
                    <p>{products[selectedProduct].description}</p>
                  </div>

                  <div className="detailFeatures">
                    <h4>Özellikler</h4>
                    <ul>
                      {products[selectedProduct].features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detailSpecs">
                    <h4>Teknik Özellikler</h4>
                    <div className="specsList">
                      {Object.entries(products[selectedProduct].specs).map(([key, value]) => (
                        <div key={key} className="specItem">
                          <span className="specKey">{key}:</span>
                          <span className="specValue">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Kapatma Butonu */}
        {isOpen && (
          <button className="closeButton" onClick={handleBookClick}>
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;