document.getElementById('submitBtn').addEventListener('click', function() {
  const codeInput = document.getElementById('codeInput').value;
  const outputDiv = document.getElementById('output');
  
  if (codeInput) {
      outputDiv.innerHTML = `<pre>${escapeHtml(codeInput)}</pre>`;
  } else {
      outputDiv.innerHTML = '<p>Please enter some code!</p>';
  }
});

function escapeHtml(html) {
  const text = document.createTextNode(html);
  const div = document.createElement('div');
  div.appendChild(text);
  return div.innerHTML;
}
