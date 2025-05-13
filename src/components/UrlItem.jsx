function UrlItem({ url }) {
  const shortUrl = `http://localhost:3000/${url.short_code}`;

  return (
    <tr>
      <td>{url.title || 'No Title'}</td>
      <td>
        <a href={url.full_url} target="_blank" rel="noopener noreferrer">
          {url.full_url}
        </a>
      </td>
      <td>
        <a href={shortUrl} target="_blank" rel="noopener noreferrer">
          {shortUrl}
        </a>
      </td>
      <td>{url.click_count}</td>
    </tr>
  );
}

export default UrlItem;