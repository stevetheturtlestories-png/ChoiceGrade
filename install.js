(() => {
  let installPrompt = null;

  const getElement = id => document.getElementById(id);

  const isStandalone = () =>
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  const isIOS = () =>
    /iphone|ipad|ipod/i.test(window.navigator.userAgent);

  const isAndroid = () =>
    /android/i.test(window.navigator.userAgent);

  const showElement = element => {
    if (element) {
      element.classList.remove('hidden');
    }
  };

  const hideElement = element => {
    if (element) {
      element.classList.add('hidden');
    }
  };

  const openInstructions = (title, message) => {
    const overlay = getElement('installOverlay');
    const titleElement = getElement('installTitle');
    const messageElement = getElement('installMessage');

    if (!overlay || !titleElement || !messageElement) {
      return;
    }

    titleElement.textContent = title;
    messageElement.textContent = message;
    showElement(overlay);
    document.body.classList.add('installDialogOpen');
  };

  const closeInstructions = () => {
    hideElement(getElement('installOverlay'));
    document.body.classList.remove('installDialogOpen');
  };

  const updateInstallButtons = () => {
    const buttons = document.querySelectorAll('[data-install-app]');

    if (isStandalone()) {
      buttons.forEach(button => hideElement(button));
      return;
    }

    buttons.forEach(button => showElement(button));
  };

  const beginInstallation = async () => {
    if (isStandalone()) {
      return;
    }

    if (installPrompt) {
      installPrompt.prompt();

      const choice = await installPrompt.userChoice;

      if (choice.outcome === 'accepted') {
        document
          .querySelectorAll('[data-install-app]')
          .forEach(button => hideElement(button));
      }

      installPrompt = null;
      return;
    }

    if (isIOS()) {
      openInstructions(
        'Install ChoiceGrade on iPhone or iPad',
        'Tap the Share button in Safari, scroll down, choose Add to Home Screen, and then tap Add.'
      );
      return;
    }

    if (isAndroid()) {
      openInstructions(
        'Install ChoiceGrade on Android',
        'Open this page in Google Chrome, tap the three-dot menu, choose Install and create shortcut, and then choose Install.'
      );
      return;
    }

    openInstructions(
      'Install ChoiceGrade on your computer',
      'Open this page in Google Chrome or Microsoft Edge. Open the browser menu and choose Install ChoiceGrade or Apps, then Install ChoiceGrade.'
    );
  };

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    updateInstallButtons();
  });

  window.addEventListener('appinstalled', () => {
    installPrompt = null;

    document
      .querySelectorAll('[data-install-app]')
      .forEach(button => hideElement(button));

    closeInstructions();
  });

  document.addEventListener('DOMContentLoaded', () => {
    updateInstallButtons();

    document
      .querySelectorAll('[data-install-app]')
      .forEach(button => {
        button.addEventListener('click', beginInstallation);
      });

    getElement('installClose')?.addEventListener(
      'click',
      closeInstructions
    );

    getElement('installOverlay')?.addEventListener('click', event => {
      if (event.target.id === 'installOverlay') {
        closeInstructions();
      }
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeInstructions();
      }
    });
  });
})();
