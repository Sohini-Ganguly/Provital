import React from 'react';
import '../styles/SearchSection.scss';

const SearchSection = () => {
  return (
    <div className="search-section">
      <div className="search-section__container">
        <form className="search-form">
          <div className="input-group">
            <span className="icon">
              <img src="/images/mingcute_search-line.svg" alt="Search" />
            </span>
            <input
              type="text"
              placeholder="Condition, procedure, speciality..."
              className="search-input"
            />
          </div>

          <div className="input-group">
            <span className="icon">
              <img src="/images/loc.svg" alt="Location" />
            </span>
            <input
              type="text"
              placeholder="City, state, or zipcode"
              className="search-input"
            />
          </div>

          <div className="input-group">
            <span className="icon">
              <img src="/images/insaurance.svg" alt="Insurance" />
            </span>
            <input
              type="text"
              placeholder="Insurance carrier"
              className="search-input"
            />
          </div>

          <button type="submit" className="search-button">
            <img src="/images/find now.svg" alt="Search icon" />
            <span>Find now</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
