import React, { useState } from 'react';
import UrlForm from '../components/UrlForm';
import ShortUrlResult from '../components/ShortUrlResult';

function Home() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (fullUrl) => {
    setResult(null);
    setError(null);
    try {
      const res = await fetch('http://localhost:3000/short_urls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ full_url: fullUrl })
      });

      const data = await res.json();

      if (res.ok) {
        setResult(data);
      } else {
        setError(data.errors?.[0] || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>URL Shortener</h1>
      <UrlForm onSubmit={handleSubmit} />
      <ShortUrlResult result={result} error={error} />
    </div>
  );
}

export default Home;