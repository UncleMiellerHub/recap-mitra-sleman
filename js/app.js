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
