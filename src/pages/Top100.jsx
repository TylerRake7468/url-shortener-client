import React, { useEffect, useState } from 'react';
import UrlList from '../components/UrlList';

function Top100() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/short_urls')
      .then((res) => res.json())
      .then((data) => {
        setUrls(data.urls || []);
      })
      .catch(() => {
        setError('Failed to load data.');
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Top 100 URLs</h1>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <UrlList urls={urls} />}
    </div>
  );
}

export default Top100;