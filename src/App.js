// Node Modules
import React, { useState } from 'react';

// Components
import LoadingSpinner from './components/LoadingSpinner';

// Hooks
import { useFetch } from './hooks/useFetch';

// Settings
import { settings } from './settings';

function handleLookup(
  url, 
  fetchFeed, 
  setApiResponseData, 
  setIsLoadingArticles,
  setIsViewingSearchResults, 
  searchQuery
) {
  fetchFeed(
    `${url}/${searchQuery}`,
    setApiResponseData,
    setIsLoadingArticles
  );
  setIsViewingSearchResults(true)
}

function App() {
  const [fetchLookup] = useFetch();
  const [searchQuery, setSearchQuery] = useState('');
  const [isViewingResponseData, setIsViewingResponseData] = useState(false);
  const [isLoadingResponseData, setIsLoadingResponseData] = useState(false);
  const [apiResponseData, setApiResponseData] = useState([]);
  
  return (
    <>
      <section id="wrapper">
        <div className="main app__container_main">
          <h1 className="main__title">
            <strong>Azure &amp; M365</strong> Tenant Lookup. 🔍
          </h1>

        </div>
        <div className="app__container app__container_search">
          <div className="app__input">
            <input 
              type="text" 
              name="search_query" 
              className="search_query"
              placeholder="Enter your tenant domain..."
              aria-label="Search Input"
              value={searchQuery}
              onChange={ (event) => {
                setSearchQuery(event.target.value) 
              }}
            />
            <p className="input__error">Please provide a search query</p>
          </div>
          <button 
            onClick={
              () => {
                if (searchQuery) {
                  handleLookup(
                    settings.lookupApi.byDomain, 
                    fetchLookup,
                    setApiResponseData,
                    setIsLoadingResponseData,
                    setIsViewingResponseData,
                    searchQuery
                  );
                }
              }
            }
            className="app__btn"
          >
            Search
          </button>
          {
            isViewingResponseData ? (
              <button 
                onClick={
                  () => {
                    setSearchQuery('');
                    setApiResponseData({});
                    setIsViewingResponseData(false);
                  }
                }
                className="app__btn"
              >
                Clear
              </button>
            ) : null
          }
        </div>
      </section>
      <section id="feed" className="app__container_feed">
        <header className="header">
          <h1 className="main__title">
            { 
              isViewingResponseData &&
              apiResponseData &&
              apiResponseData.statusCode &&
              apiResponseData.statusCode === 200 ? (
                <>
                  <strong>
                    Tenant Found
                  </strong>
                  {(
                    !isLoadingResponseData && 
                    apiResponseData &&
                    apiResponseData.data
                  ) ? (
                    <p>{ apiResponseData.data.tenantId } </p>
                  ) : null }
                </>
              ) : (
                isViewingResponseData ? (
                  <strong>
                    { 
                      apiResponseData && 
                      apiResponseData.data && 
                      apiResponseData.data.errorMessage ? (
                        apiResponseData.data.errorMessage
                      ) : (
                        <p>Oops looks like something went wrong.<br/>
                        Please check back in a moment</p>
                      )
                    }
                  </strong>
                ) : null
              )
            }
          </h1>
          { isLoadingResponseData ? (
              < LoadingSpinner spinnerStyle={{ width: "200px" }} />
            ) : null
          }
        </header>
      </section>
    </>
  );
}

export default App;
