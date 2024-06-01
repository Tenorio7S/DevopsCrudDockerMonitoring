document.getElementById('restauranteForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const tipo = document.getElementById('tipo').value;
    const preco = document.getElementById('preco').value;
  
    const response = await fetch('/restaurantes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, tipo, preco })
    });
  
    const messageDiv = document.getElementById('message');
    if (response.ok) {
      const result = await response.json();
      messageDiv.textContent = result.message;
      messageDiv.style.color = 'green';
    } else {
      const error = await response.json();
      messageDiv.textContent = error;
      messageDiv.style.color = 'red';
    }
  });

  document.getElementById('loadRestaurantes').addEventListener('click', loadRestaurantes);

async function loadRestaurantes() {
  const response = await fetch('/restaurantes');
  const restaurantes = await response.json();
  
  const restaurantesTableBody = document.getElementById('restaurantesTable').querySelector('tbody');
  restaurantesTableBody.innerHTML = '';

  restaurantes.forEach(restaurante => {
    const row = document.createElement('tr');

    const cellNome = document.createElement('td');
    cellNome.textContent = restaurante.nome;
    row.appendChild(cellNome);

    const cellTipo = document.createElement('td');
    cellTipo.textContent = restaurante.tipo;
    row.appendChild(cellTipo);

    const cellPreco = document.createElement('td');
    cellPreco.textContent = restaurante.preco;
    row.appendChild(cellPreco);

    restaurantesTableBody.appendChild(row);
  });
}

// Carregar a lista de restaurantes ao carregar a página
window.onload = loadRestaurantes;