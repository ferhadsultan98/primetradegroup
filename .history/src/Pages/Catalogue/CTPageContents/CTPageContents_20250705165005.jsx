import React from 'react';
import { FaBookOpen, FaRegBookmark, FaSearch, FaChartLine, FaLightbulb, FaUsers, FaGlobe, FaTools } from 'react-icons/fa';
import './'
const CTPageContents = () => {
  const contents = [
    { page: 4, title: "Introduction", icon: <FaBookOpen />, description: "Overview of our services and mission" },
    { page: 8, title: "Market Analysis", icon: <FaChartLine />, description: "Current trends and industry insights" },
    { page: 12, title: "Our Methodology", icon: <FaTools />, description: "How we approach problem solving" },
    { page: 18, title: "Case Studies", icon: <FaSearch />, description: "Success stories and client results" },
    { page: 24, title: "Innovation", icon: <FaLightbulb />, description: "Our cutting-edge solutions" },
    { page: 30, title: "Team", icon: <FaUsers />, description: "Meet our expert professionals" },
    { page: 36, title: "Global Reach", icon: <FaGlobe />, description: "Our international presence" },
    { page: 42, title: "Conclusion", icon: <FaRegBookmark />, description: "Summary and next steps" }
  ];

  return (
    <div className="CTPageContents">
      <div className="CTPageContentsContainer">
        <div className="CTPageContentsHeader">
          <h1>Table of Contents</h1>
          <div className="CTPageContentsDivider"></div>
          <p className="CTPageContentsSubtitle">Explore our comprehensive guide</p>
        </div>
        
        <div className="CTPageContentsGrid">
          {contents.map((item, index) => (
            <div key={index} className="CTPageContentsItem">
              <div className="CTPageContentsItemIcon">{item.icon}</div>
              <div className="CTPageContentsItemDetails">
                <div className="CTPageContentsItemPage">Page {item.page}</div>
                <h3 className="CTPageContentsItemTitle">{item.title}</h3>
                <p className="CTPageContentsItemDescription">{item.description}</p>
              </div>
              <div className="CTPageContentsItemDecoration"></div>
            </div>
          ))}
        </div>
        
        <div className="CTPageContentsFooter">
          <p>For more information, please contact us</p>
        </div>
      </div>
    </div>
  );
};

export default CTPageContents;