/**
 * Universal Android APK Downloader for Chrome and mobile browsers
 * Uses Fetch -> Blob for Android Package Archive MIME type, with instant fallback
 */
export async function downloadWebCraftApk(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  const apkUrl = '/WebCraft.apk';
  const fileName = 'WebCraft.apk';

  try {
    // Attempt Blob-based download to enforce correct MIME type in Chrome
    const response = await fetch(apkUrl);
    if (!response.ok) throw new Error('Fetch failed with status ' + response.status);

    const blob = await response.blob();
    const apkBlob = new Blob([blob], { type: 'application/vnd.android.package-archive' });
    const blobUrl = window.URL.createObjectURL(apkBlob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(link);
    }, 2000);
  } catch (err) {
    console.warn('Blob download failed, using direct navigation fallback:', err);
    // Direct navigation fallback (triggers browser native download header)
    const directLink = document.createElement('a');
    directLink.href = apkUrl;
    directLink.download = fileName;
    directLink.target = '_blank';
    directLink.rel = 'noopener noreferrer';
    document.body.appendChild(directLink);
    directLink.click();
    document.body.removeChild(directLink);
  }
}

