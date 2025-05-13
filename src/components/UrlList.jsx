import UrlItem from './UrlItem';

function UrlList({ urls }) {
  if (urls.length === 0) {
    return <p>No URLs found.</p>;
  }

  return (
    <table border="1" cellPadding="10" style={{ marginTop: '1rem', width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Full URL</th>
          <th>Short URL</th>
          <th>Click Count</th>
        </tr>
      </thead>
      <tbody>
        {urls.map((url) => (
          <UrlItem key={url.id} url={url} />
        ))}
      </tbody>
    </table>
  );
}

export default UrlList;