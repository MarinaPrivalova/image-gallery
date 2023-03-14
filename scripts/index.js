const panels = Array.from(document.querySelectorAll('.panel'));

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    const activePanels = Array.from(document.querySelectorAll('.panel_open'));
    activePanels.forEach(activePanel => {
      activePanel.classList.remove('panel_open');
    });
    panel.classList.add('panel_open');
  });
});
