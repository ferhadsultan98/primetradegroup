import React, { useState, useRef } from 'react';
import React, { useState, useRef } from 'react';
import './Catalogue.scss'
const CertificateGenerator = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('az');
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    date: '',
    instructor: '',
    organization: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const languages = {
    az: { flag: '🇦🇿', name: 'Azərbaycan' },
    ru: { flag: '🇷🇺', name: 'Русский' },
    en: { flag: '🇺🇸', name: 'English' }
  };

  const translations = {
    az: {
      title: 'Sertifikat Generatoru',
      selectCertificate: 'Sertifikat növünü seçin',
      name: 'Ad və Soyad',
      course: 'Kurs adı',
      date: 'Tarix',
      instructor: 'Təlimçi',
      organization: 'Təşkilat',
      generate: 'Sertifikat Yarat',
      download: 'PDF Yüklə',
      preview: 'Önizləmə',
      certificateOf: 'Sertifikatı',
      completion: 'Tamamlama',
      awardedTo: 'Təqdim edilib',
      for: 'üçün',
      on: 'tarixində',
      by: 'tərəfindən',
      director: 'Direktor'
    },
    ru: {
      title: 'Генератор Сертификатов',
      selectCertificate: 'Выберите тип сертификата',
      name: 'Имя и Фамилия',
      course: 'Название курса',
      date: 'Дата',
      instructor: 'Инструктор',
      organization: 'Организация',
      generate: 'Создать Сертификат',
      download: 'Скачать PDF',
      preview: 'Предпросмотр',
      certificateOf: 'Сертификат',
      completion: 'о завершении',
      awardedTo: 'Вручается',
      for: 'за',
      on: 'от',
      by: 'от',
      director: 'Директор'
    },
    en: {
      title: 'Certificate Generator',
      selectCertificate: 'Select Certificate Type',
      name: 'Full Name',
      course: 'Course Name',
      date: 'Date',
      instructor: 'Instructor',
      organization: 'Organization',
      generate: 'Generate Certificate',
      download: 'Download PDF',
      preview: 'Preview',
      certificateOf: 'Certificate of',
      completion: 'Completion',
      awardedTo: 'Awarded to',
      for: 'for',
      on: 'on',
      by: 'by',
      director: 'Director'
    }
  };

  const certificateTypes = [
    {
      id: 1,
      name: 'Classic Gold',
      style: 'classic',
      bgColor: '#f8f6f0',
      borderColor: '#d4af37',
      textColor: '#2c1810'
    },
    {
      id: 2,
      name: 'Modern Blue',
      style: 'modern',
      bgColor: '#f0f8ff',
      borderColor: '#1e90ff',
      textColor: '#000080'
    },
    {
      id: 3,
      name: 'Elegant Purple',
      style: 'elegant',
      bgColor: '#faf5ff',
      borderColor: '#9966cc',
      textColor: '#4b0082'
    },
    {
      id: 4,
      name: 'Professional Green',
      style: 'professional',
      bgColor: '#f0fff0',
      borderColor: '#228b22',
      textColor: '#006400'
    },
    {
      id: 5,
      name: 'Creative Orange',
      style: 'creative',
      bgColor: '#fff8f0',
      borderColor: '#ff8c00',
      textColor: '#cc4400'
    }
  ];

  const t = translations[currentLanguage];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCertificateSelect = (cert) => {
    setSelectedCertificate(cert);
    setIsBookOpen(true);
  };

  const generateCertificate = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowPreview(true);
  };

  const downloadPDF = () => {
    // PDF generation logic would go here
    console.log('Downloading PDF...');
  };

  const renderCertificate = (cert) => {
    if (!cert) return null;

    return (
      <div 
        className={`certificatePreview ${cert.style}`}
        style={{
          backgroundColor: cert.bgColor,
          borderColor: cert.borderColor,
          color: cert.textColor
        }}
      >
        <div className="certificateBorder">
          <div className="certificateHeader">
            <h1>{t.certificateOf} {t.completion}</h1>
          </div>
          <div className="certificateContent">
            <p className="awardText">{t.awardedTo}</p>
            <h2 className="recipientName">{formData.name || 'John Doe'}</h2>
            <p className="courseText">
              {t.for} {formData.course || 'Web Development Course'}
            </p>
            <div className="certificateFooter">
              <div className="dateSection">
                <p>{t.on} {formData.date || '2024-06-28'}</p>
              </div>
              <div className="signatureSection">
                <div className="signature">
                  <p>{formData.instructor || 'Jane Smith'}</p>
                  <p>{t.director}</p>
                </div>
              </div>
            </div>
            <div className="organizationName">
              {formData.organization || 'Tech Academy'}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="certificateGenerator">
      <div className="header">
        <h1>{t.title}</h1>
        <div className="languageSwitcher">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              className={`langBtn ${currentLanguage === code ? 'active' : ''}`}
              onClick={() => setCurrentLanguage(code)}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mainContent">
        {!isBookOpen ? (
          <div className="certificateGrid">
            <h2>{t.selectCertificate}</h2>
            <div className="gridContainer">
              {certificateTypes.map(cert => (
                <div
                  key={cert.id}
                  className="certificateCard"
                  onClick={() => handleCertificateSelect(cert)}
                >
                  <div className="cardPreview" style={{ backgroundColor: cert.bgColor, borderColor: cert.borderColor }}>
                    <div className="miniCertificate" style={{ color: cert.textColor }}>
                      <h3>{cert.name}</h3>
                      <div className="previewLines">
                        <div className="line"></div>
                        <div className="line short"></div>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bookContainer">
            <div className="book">
              <div className="bookCover" onClick={() => setIsBookOpen(false)}>
                <div className="coverContent">
                  <h2>Certificate Generator</h2>
                  <div className="coverDecoration"></div>
                </div>
              </div>
              
              <div className="bookPages">
                <div className="leftPage">
                  <h3>Certificate Details</h3>
                  <div className="formContainer">
                    <div className="inputGroup">
                      <label>{t.name}</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter full name"
                      />
                    </div>
                    
                    <div className="inputGroup">
                      <label>{t.course}</label>
                      <input
                        type="text"
                        value={formData.course}
                        onChange={(e) => handleInputChange('course', e.target.value)}
                        placeholder="Enter course name"
                      />
                    </div>
                    
                    <div className="inputGroup">
                      <label>{t.date}</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                      />
                    </div>
                    
                    <div className="inputGroup">
                      <label>{t.instructor}</label>
                      <input
                        type="text"
                        value={formData.instructor}
                        onChange={(e) => handleInputChange('instructor', e.target.value)}
                        placeholder="Enter instructor name"
                      />
                    </div>
                    
                    <div className="inputGroup">
                      <label>{t.organization}</label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="Enter organization name"
                      />
                    </div>
                    
                    <button 
                      className="generateBtn"
                      onClick={generateCertificate}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Loading...' : t.generate}
                    </button>
                  </div>
                </div>
                
                <div className="rightPage">
                  <h3>{t.preview}</h3>
                  <div className="previewContainer">
                    {isLoading ? (
                      <div className="loadingSpinner">
                        <div className="spinner"></div>
                        <p>Generating certificate...</p>
                      </div>
                    ) : showPreview ? (
                      <div className="previewWrapper">
                        {renderCertificate(selectedCertificate)}
                        <button className="downloadBtn" onClick={downloadPDF}>
                          {t.download}
                        </button>
                      </div>
                    ) : (
                      <div className="previewPlaceholder">
                        <p>Fill in the details and click generate to see preview</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateGenerator;