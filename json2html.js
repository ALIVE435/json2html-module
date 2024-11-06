// json2html.js
export default function json2html(data) {
  // Extract unique headers from all objects in the array
  const headers = Array.from(
    data.reduce((cols, obj) => {
      Object.keys(obj).forEach(key => cols.add(key));
      return cols;
    }, new Set())
  );

  // Start building the HTML table as a string
  let html = `<table data-user="aniketksingh01@gmail.com"><thead><tr>`;
  // Add table headers
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += `</tr></thead><tbody>`;

  // Add table rows
  data.forEach(row => {
    html += `<tr>`;
    headers.forEach(header => {
      html += `<td>${row[header] || ""}</td>`;
    });
    html += `</tr>`;
  });

  html += `</tbody></table>`;
  return html;
}
