/**
 * Server component — renders JSON-LD without client hydration cost.
 */
function JsonLd({ data }) {
  if (!data) return null;

  const payload = Array.isArray(data)
    ? data.map((entry) => JSON.stringify(entry)).join("\n")
    : JSON.stringify(data);

  if (Array.isArray(data)) {
    return (
      <>
        {data.map((entry, index) => (
          <script
            // eslint-disable-next-line react/no-danger
            key={entry["@id"] ?? entry["@type"] ?? index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
          />
        ))}
      </>
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: payload }}
    />
  );
}

export default JsonLd;
