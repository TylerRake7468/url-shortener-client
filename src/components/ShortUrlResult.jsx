function ShortUrlResult({ result, error }) {
  if (error) {
    return <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>;
  }

  if (result?.short_code) {
    const shortUrl = `http://localhost:3000/${result.short_code}`;
    return (
      <div style={{ marginTop: '1rem' }}>
        <p>Shortened URL:</p>
        <a href={shortUrl} target="_blank" rel="noopener noreferrer">
          {shortUrl}
        </a>
      </div>
    );
  }

  return null;
}

export default ShortUrlResult;