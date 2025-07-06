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
// BookCatalog.scss
.bookCatalog {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  .catalogHeader {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    z-index: 2;

    .catalogTitle {
      font-size: 3.5rem;
      color: #fff;
      font-weight: 700;
      margin: 0 0 1rem 0;
      text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      letter-spacing: -0.02em;
    }

    .catalogSubtitle {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 300;
      letter-spacing: 0.1em;
    }
  }

  .bookContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 600px;
    margin-bottom: 3rem;

    .navigationArrows {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      display: flex;
      justify-content: space-between;
      z-index: 10;
      pointer-events: none;

      .navButton {
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        pointer-events: all;
        backdrop-filter: blur(10px);

        &:hover:not(.disabled) {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        &.disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        &.prevButton {
          margin-left: -30px;
        }

        &.nextButton {
          margin-right: -30px;
        }
      }
    }

    .bookWrapper {
      perspective: 1000px;
      width: 100%;
      max-width: 500px;
      height: 650px;
      position: relative;
      transition: transform 0.6s ease;

      &.flipping {
        transform: rotateY(180deg);
      }

      .bookCover {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.6s ease;
        cursor: pointer;
        border-radius: 15px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);

        &:hover {
          transform: rotateY(15deg) rotateX(5deg);
        }

        .bookSpine {
          position: absolute;
          left: -15px;
          top: 0;
          width: 30px;
          height: 100%;
          background: linear-gradient(135deg, #2c3e50, #34495e);
          border-radius: 15px 0 0 15px;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 0.5rem;
          box-shadow: inset 2px 0 5px rgba(0, 0, 0, 0.3);

          .spineText {
            writing-mode: vertical-lr;
            text-orientation: mixed;
            color: #fff;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 1rem;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          }

          .spineAuthor {
            writing-mode: vertical-lr;
            text-orientation: mixed;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.7rem;
            font-weight: 400;
          }
        }

        .bookFront,
        .bookBack {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 15px;
          backface-visibility: hidden;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .bookFront {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          display: flex;
          flex-direction: column;

          .coverImageContainer {
            position: relative;
            height: 60%;
            overflow: hidden;
            border-radius: 15px 15px 0 0;

            .coverImage {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.3s ease;
            }

            .coverOverlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.1) 0%,
                transparent 30%,
                transparent 70%,
                rgba(0, 0, 0, 0.3) 100%
              );
              display: flex;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 1rem;

              .bookBadge {
                background: rgba(255, 255, 255, 0.9);
                border-radius: 20px;
                padding: 0.5rem 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.8rem;
                font-weight: 600;
                color: #667eea;
                backdrop-filter: blur(10px);
              }
            }
          }

          .bookInfo {
            padding: 1.5rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .bookTitle {
              font-size: 1.5rem;
              font-weight: 700;
              color: #2c3e50;
              margin: 0 0 0.5rem 0;
              line-height: 1.2;
            }

            .bookAuthor {
              font-size: 1rem;
              color: #667eea;
              margin: 0 0 0.5rem 0;
              font-weight: 500;
            }

            .bookGenre {
              font-size: 0.9rem;
              color: #7f8c8d;
              margin-bottom: 1rem;
              padding: 0.3rem 0.8rem;
              background: rgba(103, 126, 234, 0.1);
              border-radius: 15px;
              width: fit-content;
            }

            .bookRating {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              margin-bottom: 1rem;

              .stars {
                display: flex;
                gap: 0.2rem;

                svg {
                  color: #ddd;
                  
                  &.filled {
                    color: #ffd700;
                    fill: #ffd700;
                  }
                }
              }

              .ratingText {
                font-size: 0.9rem;
                color: #2c3e50;
                font-weight: 600;
              }
            }

            .bookPrice {
              font-size: 1.3rem;
              font-weight: 700;
              color: #e74c3c;
              margin-top: auto;
            }
          }
        }

        .bookBack {
          transform: rotateY(180deg);
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);

          .backContent {
            height: 100%;
            display: flex;
            flex-direction: column;

            .backImageContainer {
              height: 40%;
              overflow: hidden;
              border-radius: 15px 15px 0 0;

              .backImage {
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: brightness(0.8);
              }
            }

            .backInfo {
              padding: 1.5rem;
              flex: 1;
              display: flex;
              flex-direction: column;

              .backTitle {
                font-size: 1.2rem;
                font-weight: 700;
                color: #2c3e50;
                margin: 0 0 1rem 0;
              }

              .bookDescription {
                font-size: 0.9rem;
                line-height: 1.6;
                color: #34495e;
                margin-bottom: 1.5rem;
                flex: 1;
              }

              .bookDetails {
                margin-bottom: 1.5rem;

                .detailItem {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 0.5rem;
                  padding: 0.3rem 0;
                  border-bottom: 1px solid rgba(52, 73, 94, 0.1);

                  .detailLabel {
                    font-size: 0.8rem;
                    color: #7f8c8d;
                    font-weight: 500;
                  }

                  .detailValue {
                    font-size: 0.8rem;
                    color: #2c3e50;
                    font-weight: 600;
                  }
                }
              }

              .bookActions {
                display: flex;
                gap: 0.5rem;
                margin-top: auto;

                .actionButton {
                  display: flex;
                  align-items: center;
                  gap: 0.5rem;
                  padding: 0.8rem 1rem;
                  border: none;
                  border-radius: 10px;
                  font-size: 0.8rem;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  flex: 1;
                  justify-content: center;

                  &.primaryAction {
                    background: #667eea;
                    color: #fff;

                    &:hover {
                      background: #5a6fd8;
                      transform: translateY(-2px);
                    }
                  }

                  &.secondaryAction {
                    background: rgba(103, 126, 234, 0.1);
                    color: #667eea;
                    border: 1px solid rgba(103, 126, 234, 0.3);

                    &:hover {
                      background: rgba(103, 126, 234, 0.2);
                      transform: translateY(-2px);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 2;

    .pageIndicators {
      display: flex;
      gap: 0.5rem;

      .pageIndicator {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        backdrop-filter: blur(10px);

        &:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.1);
        }

        &.active {
          background: rgba(255, 255, 255, 0.9);
          border-color: #fff;
          color: #667eea;
          transform: scale(1.2);
        }

        .pageNumber {
          font-size: 0.9rem;
        }
      }
    }

    .pageInfo {
      .currentPageText {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
}

// Responsive Design
@media (max-width: 768px) {
  .bookCatalog {
    padding: 1rem;

    .catalogHeader {
      margin-bottom: 2rem;

      .catalogTitle {
        font-size: 2.5rem;
      }

      .catalogSubtitle {
        font-size: 1rem;
      }
    }

    .bookContainer {
      min-height: 500px;

      .navigationArrows {
        .navButton {
          width: 50px;
          height: 50px;

          &.prevButton {
            margin-left: -25px;
          }

          &.nextButton {
            margin-right: -25px;
          }
        }
      }

      .bookWrapper {
        max-width: 400px;
        height: 550px;

        .bookCover {
          .bookSpine {
            left: -10px;
            width: 20px;
            padding: 1rem 0.3rem;

            .spineText {
              font-size: 0.7rem;
            }

            .spineAuthor {
              font-size: 0.6rem;
            }
          }

          .bookFront {
            .bookInfo {
              padding: 1rem;

              .bookTitle {
                font-size: 1.2rem;
              }

              .bookAuthor {
                font-size: 0.9rem;
              }

              .bookGenre {
                font-size: 0.8rem;
              }

              .bookPrice {
                font-size: 1.1rem;
              }
            }
          }

          .bookBack {
            .backContent {
              .backInfo {
                padding: 1rem;

                .backTitle {
                  font-size: 1rem;
                }

                .bookDescription {
                  font-size: 0.8rem;
                }

                .bookActions {
                  flex-direction: column;
                  gap: 0.3rem;

                  .actionButton {
                    padding: 0.6rem 0.8rem;
                    font-size: 0.7rem;
                  }
                }
              }
            }
          }
        }
      }
    }

    .pagination {
      .pageIndicators {
        .pageIndicator {
          width: 40px;
          height: 40px;

          .pageNumber {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .bookCatalog {
    padding: 0.5rem;

    .catalogHeader {
      .catalogTitle {
        font-size: 2rem;
      }

      .catalogSubtitle {
        font-size: 0.9rem;
      }
    }

    .bookContainer {
      min-height: 450px;

      .bookWrapper {
        max-width: 300px;
        height: 450px;

        .bookCover {
          .bookFront {
            .bookInfo {
              padding: 0.8rem;

              .bookTitle {
                font-size: 1rem;
              }

              .bookAuthor {
                font-size: 0.8rem;
              }

              .bookGenre {
                font-size: 0.7rem;
              }

              .bookPrice {
                font-size: 1rem;
              }
            }
          }

          .bookBack {
            .backContent {
              .backInfo {
                padding: 0.8rem;

                .backTitle {
                  font-size: 0.9rem;
                }

                .bookDescription {
                  font-size: 0.7rem;
                }
              }
            }
          }
        }
      }
    }

    .pagination {
      .pageIndicators {
        gap: 0.3rem;

        .pageIndicator {
          width: 35px;
          height: 35px;

          .pageNumber {
            font-size: 0.7rem;
          }
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .bookCatalog {
    padding: 3rem;

    .catalogHeader {
      .catalogTitle {
        font-size: 4rem;
      }

      .catalogSubtitle {
        font-size: 1.4rem;
      }
    }

    .bookContainer {
      min-height: 700px;

      .bookWrapper {
        max-width: 600px;
        height: 750px;

        .bookCover {
          .bookSpine {
            left: -20px;
            width: 40px;
            padding: 2.5rem 0.8rem;

            .spineText {
              font-size: 1.1rem;
            }

            .spineAuthor {
              font-size: 0.9rem;
            }
          }

          .bookFront {
            .bookInfo {
              padding: 2rem;

              .bookTitle {
                font-size: 1.8rem;
              }

              .bookAuthor {
                font-size: 1.2rem;
              }

              .bookGenre {
                font-size: 1rem;
              }

              .bookPrice {
                font-size: 1.5rem;
              }
            }
          }

          .bookBack {
            .backContent {
              .backInfo {
                padding: 2rem;

                .backTitle {
                  font-size: 1.4rem;
                }

                .bookDescription {
                  font-size: 1rem;
                }
