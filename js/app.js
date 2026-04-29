document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderChurchCards(CHURCHES);
  initSearch();
});

const ICON_MAP_PIN = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;

const ICON_WHATSAPP = `<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const ICON_USER = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

let map;
let markers = [];

function initMap() {
  map = L.map('map', {
    center: [-8.76, -63.90],
    zoom: 12,
    scrollWheelZoom: false,
    tap: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(map);

  const churchIcon = L.icon({
    iconUrl: 'assets/images/marker.svg',
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -42]
  });

  const validChurches = CHURCHES.filter(c => c.coords);

  validChurches.forEach(church => {
    const marker = L.marker([church.coords.lat, church.coords.lng], { icon: churchIcon })
      .addTo(map)
      .bindPopup(`
        <div class="popup-name">${church.nome}</div>
        <div class="popup-bairro">${church.endereco.bairro || church.endereco.cidade}</div>
        <a href="#church-${church.id}" class="popup-link" data-id="${church.id}">Ver detalhes &#8595;</a>
      `);

    markers.push({ marker, church });
  });

  if (markers.length > 0) {
    const group = L.featureGroup(markers.map(m => m.marker));
    map.fitBounds(group.getBounds().pad(0.1));
  }

  map.on('popupopen', (e) => {
    setTimeout(() => {
      const popupEl = e.popup.getElement();
      if (!popupEl) return;
      const link = popupEl.querySelector('.popup-link');
      if (link) {
        link.addEventListener('click', (evt) => {
          evt.preventDefault();
          scrollToChurch(evt.target.dataset.id);
          map.closePopup();
        });
      }
    }, 10);
  });
}

function renderChurchCards(churches) {
  const list = document.getElementById('church-list');
  const noResults = document.getElementById('no-results');

  if (churches.length === 0) {
    list.innerHTML = '';
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;

  list.innerHTML = churches.map(church => `
    <article class="church-card" id="church-${church.id}">
      <h3 class="church-name">${church.nome}</h3>
      ${church.endereco.available ? `
        <a href="${church.endereco.mapsUrl}" target="_blank" rel="noopener" class="church-address">
          ${ICON_MAP_PIN}
          <span>${church.endereco.full}</span>
        </a>
        <span class="church-bairro">${church.endereco.bairro}</span>
      ` : `
        <p class="church-address--unavailable">Endereço a confirmar</p>
      `}
      ${church.lider.available ? `
        <div class="church-leader">
          <span class="leader-name">${ICON_USER} ${church.lider.nome}</span>
          <a href="${church.lider.whatsappUrl}" target="_blank" rel="noopener" class="btn-whatsapp">
            ${ICON_WHATSAPP}
            ${church.lider.displayPhone}
          </a>
        </div>
      ` : `
        <p class="church-leader--unavailable">Líder não informado</p>
      `}
    </article>
  `).join('');
}

function initSearch() {
  const input = document.getElementById('search');

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();

    if (!query) {
      renderChurchCards(CHURCHES);
      return;
    }

    const filtered = CHURCHES.filter(c =>
      c.nome.toLowerCase().includes(query) ||
      (c.endereco.bairro && c.endereco.bairro.toLowerCase().includes(query)) ||
      (c.endereco.cidade && c.endereco.cidade.toLowerCase().includes(query))
    );

    renderChurchCards(filtered);
  });
}

function scrollToChurch(id) {
  const card = document.getElementById(`church-${id}`);
  if (!card) return;

  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  card.classList.remove('church-card--highlighted');
  void card.offsetWidth;
  card.classList.add('church-card--highlighted');

  setTimeout(() => {
    card.classList.remove('church-card--highlighted');
  }, 2500);
}
