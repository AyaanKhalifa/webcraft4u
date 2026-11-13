import { useState, useEffect } from 'react';
import { downloadWebCraftApk } from '../utils/downloadApk.js';

let deferredInstallPrompt = null;

export function usePwaInstall() {
  const [canPrompt, setCanPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  useEffect(() => {
    // Check if already in standalone (installed PWA) mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    if (isStandalone) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      setCanPrompt(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setCanPrompt(false);
      deferredInstallPrompt = null;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const triggerInstall = async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      if (choice && choice.outcome === 'accepted') {
        setIsInstalled(true);
        setCanPrompt(false);
        deferredInstallPrompt = null;
        return { success: true, method: 'native' };
      }
      return { success: false, method: 'dismissed' };
    } else {
      // Show interactive install instructions modal
      setShowInstallGuide(true);
      return { success: true, method: 'guide' };
    }
  };

  return {
    canPrompt,
    isInstalled,
    showInstallGuide,
    setShowInstallGuide,
    triggerInstall,
    downloadApk: downloadWebCraftApk
  };
}

