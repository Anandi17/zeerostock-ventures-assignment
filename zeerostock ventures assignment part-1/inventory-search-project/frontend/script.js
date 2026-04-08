async function searchInventory() {
  const q = document.getElementById('searchInput').value;
  const category = document.getElementById('category').value;
  const minPrice = document.getElementById('minPrice').value;
  const maxPrice = document.getElementById('maxPrice').value;

  const queryParams = new URLSearchParams({
    q,
    category,
    minPrice,
    maxPrice
  });

  try {
    const response = await fetch(
      `http://localhost:5000/search?${queryParams}`
    );

    const data = await response.json();

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!response.ok) {
      resultsDiv.innerHTML = `<p>${data.message}</p>`;
      return;
    }

    if (data.length === 0) {
      resultsDiv.innerHTML = '<p>No results found</p>';
      return;
    }

    data.forEach(item => {
      resultsDiv.innerHTML += `
        <div class="result-card">
          <h3>${item.productName}</h3>
          <p>Category: ${item.category}</p>
          <p>Price: $${item.price}</p>
          <p>Supplier: ${item.supplier}</p>
        </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
}