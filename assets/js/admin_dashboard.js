const sidebarLinks = document.querySelectorAll('.sidebar-link');
const uploadDropzone = document.getElementById('uploadDropzone');
const fileInput = document.getElementById('eventImages');
const previewSection = document.getElementById('imagePreview');
const statusFilters = document.getElementById('statusFilter');
const categoryFilters = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');

function setActiveLink(targetId) {
  sidebarLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.target === targetId);
  });
}

sidebarLinks.forEach(link => {
  link.addEventListener('click', event => {
    const target = event.currentTarget.dataset.target;
    setActiveLink(target);
  });
});

if (uploadDropzone && fileInput && previewSection) {
  ['dragenter', 'dragover'].forEach(eventName => {
    uploadDropzone.addEventListener(eventName, e => {
      e.preventDefault();
      uploadDropzone.classList.add('drag-over');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    uploadDropzone.addEventListener(eventName, e => {
      e.preventDefault();
      uploadDropzone.classList.remove('drag-over');
    });
  });

  uploadDropzone.addEventListener('drop', e => {
    const files = Array.from(e.dataTransfer.files);
    addPreviewImages(files);
  });

  uploadDropzone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => addPreviewImages(Array.from(fileInput.files)));
}

function addPreviewImages(files) {
  files.forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      const card = document.createElement('div');
      card.className = 'preview-card';
      card.innerHTML = `
        <img src="${reader.result}" alt="Uploaded image">
        <button type="button" class="remove-preview">×</button>
      `;
      card.querySelector('.remove-preview').addEventListener('click', () => card.remove());
      previewSection.appendChild(card);
    };
    reader.readAsDataURL(file);
  });
}

function renderCharts() {
  const eventChartCtx = document.getElementById('eventChart');
  const participationChartCtx = document.getElementById('participationChart');
  const statusChartCtx = document.getElementById('statusChart');

  if (eventChartCtx) {
    new Chart(eventChartCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Events Created',
          data: [12, 18, 14, 22, 28, 25],
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.18)',
          tension: 0.35,
          pointRadius: 4,
          pointBackgroundColor: '#2563eb',
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: 'rgba(148, 163, 184, 0.18)' }, beginAtZero: true }
        }
      }
    });
  }

  if (participationChartCtx) {
    new Chart(participationChartCtx, {
      type: 'doughnut',
      data: {
        labels: ['Students Joined', 'Pending Approval', 'Cancelled'],
        datasets: [{
          data: [58, 24, 18],
          backgroundColor: ['#2563eb', '#7c3aed', '#f97316']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }

  if (statusChartCtx) {
    new Chart(statusChartCtx, {
      type: 'bar',
      data: {
        labels: ['Pending', 'Approved', 'Upcoming', 'Ongoing', 'Completed'],
        datasets: [{
          label: 'Event Count',
          data: [8, 16, 10, 6, 12],
          backgroundColor: '#2563eb',
          borderRadius: 12,
          barPercentage: 0.65
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true, grid: { color: 'rgba(148, 163, 184, 0.18)' } }
        }
      }
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setActiveLink('overview');
  renderCharts();

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      document.querySelectorAll('.table tbody tr').forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
      });
    });
  }

  [categoryFilters, statusFilters].forEach(select => {
    if (!select) return;
    select.addEventListener('change', () => {
      const status = statusFilters?.value;
      const category = categoryFilters?.value;
      document.querySelectorAll('.table tbody tr').forEach(row => {
        const matchesStatus = status === 'all' || row.dataset.status === status;
        const matchesCategory = category === 'all' || row.dataset.category === category;
        row.style.display = matchesStatus && matchesCategory ? '' : 'none';
      });
    });
  });
});