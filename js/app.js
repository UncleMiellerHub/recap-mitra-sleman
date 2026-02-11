document.addEventListener('DOMContentLoaded', () => {
  console.log('ReCap Mitra Sleman – App Loaded');

  const statusEl = document.getElementById('status');

  // INFO ONLINE / OFFLINE
  function updateStatus() {
    if (!statusEl) return;
    statusEl.textContent = navigator.onLine
      ? '🟢 Online'
      : '🔴 Offline (data terakhir)';
  }

  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);

  updateStatus();
}); 

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/recap-mitra-sleman/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registered:', registration.scope);
      })
      .catch(function(error) {
        console.log('Service Worker failed:', error);
      });
  });
}
