import React from 'react';
import './CTPageContents.scss';

const CTPageContents = () => {
  const contents = [
    { page: 3, title: "Yuyucu və Təmizlik Vasitələri" },
    { page: 5, title: "İşçi və Məktəbli Geyimləri" },
    { page: 7, title: "Santexnika Malları" },
    { page: 9, title: "Dəftərxana və Ofis Ləvazimatları" },
    { page: 11, title: "İT Avadanlıqları" },
    { page: 13, title: "Təsərrüfat Malları" },
    { page: 15, title: "Mebellər" }
  ];

  return (
    <div className="CTPageContents">
      <div className="CTPageContentsContainer">
        <div className="CTPageContentsHeader">
          <h1>Table of Contents</h1>
        </div>
        <div className="CTPageContentsList">
          {contents.map((item, index) => (
            <div key={index} className="CTPageContentsItem">
              <span className="CTPageContentsItemPage">{item.page}</span>
              <span className="CTPageContentsItemTitle">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTPageContents;