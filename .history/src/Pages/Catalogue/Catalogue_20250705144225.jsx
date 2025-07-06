import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Star, Heart, Share2 } from 'lucide-react';
import './BookCatalog.scss';

const BookCatalog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const books = [
    {
      id: 1,
      title: "Mən və Mənim Ürəyim",
      author: "Nizami Gəncəvi",
      genre: "Klassik Ədəbiyyat",
      year: "2023",
      pages: 340,
      rating: 4.8,
      description: "Sevgi və məhəbbət haqqında klassik əsər. Bu kitab oxucunu dərin düşüncələrə aparır.",
      coverImage: "/path/to/cover1.jpg",
      backImage: "/path/to/back1.jpg",
      price: "25.99 AZN",
      isbn: "978-994-123-456-7"
    },
    {
      id: 2,
      title: "Gizli Bağçalar",
      author: "Səbinə Məmmədova",
      genre: "Müasir Roman",
      year: "2024",
      pages: 280,
      rating: 4.6,
      description: "Müasir həyatın sirləri və insanlar arasındakı münasibətlər haqqında təsirli hekayə.",
      coverImage: "/path/to/cover2.jpg",
      backImage: "/path/to/back2.jpg",
      price: "22.50 AZN",
      isbn: "978-994-234-567-8"
    },
    {
      id: 3,
      title: "Dəniz Kənarında",
      author: "Əli Həsənov",
      genre: "Şeir Toplusu",
      year: "2023",
      pages: 150,
      rating: 4.9,
      description: "Təbiətin gözəlliyi və həyatın mənası haqqında lirik şeirlər toplusu.",
      coverImage: "/path/to/cover3.jpg",
      backImage: "/path/to/back3.jpg",
      price: "18.00 AZN",
      isbn: "978-994-345-678-9"
    },
    {
      id: 4,
      title: "Zaman Maşını",
      author: "Rəna Əliyeva",
      genre: "Elmi Fantastika",
      year: "2024",
      pages: 420,
      rating: 4.7,
      description: "Gələcək və keçmiş arasında səyahət edən alimin macəralarını təsvir edir.",
      coverImage: "/path/to/cover4.jpg",
      backImage: "/path/to/back4.jpg",
      price: "30.00 AZN",
      isbn: "978-994-456-789-0"
    },
    {
      id: 5,
      title: "Səssiz Gecələr",
      author: "Mübariz Quliyev",
      genre: "Dram",
      year: "2023",
      pages: 200,
      rating: 4.5,
      description: "İnsanın daxili dünyası və yaşadığı çətinliklər haqqında dərin əsər.",
      coverImage: "/path/to/cover5.jpg",
      backImage: "/path/to/back5.jpg",
      price: "20.75 AZN",
      isbn: "978-994-567-890-1"
    },
    {
      id: 6,
      title: "Yaz Günləri",
      author: "Leyla Məmmədova",
      genre: "Romantik",
      year: "2024",
      pages: 320,
      rating: 4.8,
      description: "Gənc qızın sevgi axtarışı və həyatda qarşılaşdığı çətinliklər haqqında.",
      coverImage: "/path/to/cover6.jpg",
      backImage: "/path/to/back6.jpg",
      price: "24.99 AZN",
      isbn: "978-994-678-901-2"
    }
  ];

  const handleNextPage = () => {
    if (currentPage < books.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handlePageClick = (pageIndex) => {
    if (pageIndex !== currentPage) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsFlipping(false);
      }, 300);
    }
  };

  const currentBook = books[currentPage];

  return (
    <div className="bookCatalog">
      <div className="catalogHeader">
        <h1 className="catalogTitle">Kitab Kataloqu</h1>
        <div className="catalogSubtitle">Ən Yaxşı Kitablar Toplusu</div>
      </div>

      <div className="bookContainer">
        <div className="navigationArrows">
          <button 
            className={`navButton prevButton ${currentPage === 0 ? 'disabled' : ''}`}
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className={`navButton nextButton ${currentPage === books.length - 1 ? 'disabled' : ''}`}
            onClick={handleNextPage}
            disabled={currentPage === books.length - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={`bookWrapper ${isFlipping ? 'flipping' : ''}`}>
          <div className="bookCover">
            <div className="bookSpine">
              <div className="spineText">{currentBook.title}</div>
              <div className="spineAuthor">{currentBook.author}</div>
            </div>
            
            <div className="bookFront">
              <div className="coverImageContainer">
                <img 
                  src={currentBook.coverImage} 
                  alt={currentBook.title}
                  className="coverImage"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="coverOverlay">
                  <div className="bookBadge">
                    <BookOpen size={16} />
                    <span>Yeni</span>
                  </div>
                </div>
              </div>
              
              <div className="bookInfo">
                <h2 className="bookTitle">{currentBook.title}</h2>
                <h3 className="bookAuthor">{currentBook.author}</h3>
                <div className="bookGenre">{currentBook.genre}</div>
                <div className="bookRating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(currentBook.rating) ? 'filled' : ''} 
                      />
                    ))}
                  </div>
                  <span className="ratingText">{currentBook.rating}</span>
                </div>
                <div className="bookPrice">{currentBook.price}</div>
              </div>
            </div>

            <div className="bookBack">
              <div className="backContent">
                <div className="backImageContainer">
                  <img 
                    src={currentBook.backImage} 
                    alt={`${currentBook.title} arxa üz`}
                    className="backImage"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                
                <div className="backInfo">
                  <h3 className="backTitle">Kitab Haqqında</h3>
                  <p className="bookDescription">{currentBook.description}</p>
                  
                  <div className="bookDetails">
                    <div className="detailItem">
                      <span className="detailLabel">Nəşr ili:</span>
                      <span className="detailValue">{currentBook.year}</span>
                    </div>
                    <div className="detailItem">
                      <span className="detailLabel">Səhifə sayı:</span>
                      <span className="detailValue">{currentBook.pages}</span>
                    </div>
                    <div className="detailItem">
                      <span className="detailLabel">ISBN:</span>
                      <span className="detailValue">{currentBook.isbn}</span>
                    </div>
                  </div>
                  
                  <div className="bookActions">
                    <button className="actionButton primaryAction">
                      <BookOpen size={18} />
                      <span>Oxu</span>
                    </button>
                    <button className="actionButton secondaryAction">
                      <Heart size={18} />
                      <span>Bəyən</span>
                    </button>
                    <button className="actionButton secondaryAction">
                      <Share2 size={18} />
                      <span>Paylaş</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pagination">
        <div className="pageIndicators">
          {books.map((_, index) => (
            <button
              key={index}
              className={`pageIndicator ${index === currentPage ? 'active' : ''}`}
              onClick={() => handlePageClick(index)}
            >
              <span className="pageNumber">{index + 1}</span>
            </button>
          ))}
        </div>
        
        <div className="pageInfo">
          <span className="currentPageText">
            Səhifə {currentPage + 1} / {books.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCatalog;

