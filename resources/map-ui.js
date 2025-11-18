(function () {
  if (typeof map === 'undefined') {
    return;
  }

  const panel = document.querySelector('.map-ui');
  if (!panel) {
    return;
  }

  const opacitySlider = panel.querySelector('#polygonOpacity');
  const opacityValue = panel.querySelector('[data-opacity-value]');
  const adjustableLayers = [
    typeof lyr_ndvi_25042025_5 !== 'undefined' ? lyr_ndvi_25042025_5 : null,
    typeof lyr_ndvi_14072025_6 !== 'undefined' ? lyr_ndvi_14072025_6 : null,
    typeof lyr_ndvi_12092025_7 !== 'undefined' ? lyr_ndvi_12092025_7 : null,
    typeof lyr__2024_8 !== 'undefined' ? lyr__2024_8 : null,
  ].filter(Boolean);

  const updateOpacity = (value) => {
    const numeric = Math.max(0, Math.min(100, Number(value) || 0));
    const normalized = numeric / 100;
    adjustableLayers.forEach((layer) => layer.setOpacity(normalized));
    if (opacityValue) {
      opacityValue.textContent = `${numeric}%`;
    }
  };

  if (opacitySlider) {
    opacitySlider.addEventListener('input', (event) => updateOpacity(event.target.value));
    updateOpacity(opacitySlider.value || 80);
  }

  const fitExtent = (extent) => {
    if (!extent) {
      return;
    }
    const padding = window.innerWidth < 768 ? [60, 40, 60, 40] : [80, 60, 80, 360];
    map.getView().fit(extent, {
      duration: 900,
      padding,
      maxZoom: 17,
    });
  };

  const actions = {
    'focus-all': () => fitExtent(typeof jsonSource__2024_8 !== 'undefined' ? jsonSource__2024_8.getExtent() : null),
    'focus-latest': () => {
      if (typeof lyr_ndvi_12092025_7 === 'undefined') {
        return;
      }
      fitExtent(lyr_ndvi_12092025_7.getSource().getExtent());
    },
  };

  panel.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const handler = actions[button.dataset.action];
      if (typeof handler === 'function') {
        handler();
        button.classList.add('is-active');
        setTimeout(() => button.classList.remove('is-active'), 450);
      }
    });
  });

  const pillsHost = panel.querySelector('[data-layer-pills]');
  if (!pillsHost) {
    return;
  }

  const layerDescriptors = [
    { layer: typeof lyr_ndvi_25042025_5 !== 'undefined' ? lyr_ndvi_25042025_5 : null, label: 'Апрель', meta: '25.04', color: '#fb923c' },
    { layer: typeof lyr_ndvi_14072025_6 !== 'undefined' ? lyr_ndvi_14072025_6 : null, label: 'Июль', meta: '14.07', color: '#38bdf8' },
    { layer: typeof lyr_ndvi_12092025_7 !== 'undefined' ? lyr_ndvi_12092025_7 : null, label: 'Сентябрь', meta: '12.09', color: '#22c55e' },
    { layer: typeof lyr__2024_8 !== 'undefined' ? lyr__2024_8 : null, label: 'Контуры', meta: '2024', color: '#a855f7' },
  ].filter(({ layer }) => layer);

  const syncLayerState = (button, layer) => {
    button.classList.toggle('is-active', layer.getVisible());
  };

  layerDescriptors.forEach(({ layer, label, meta, color }) => {
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'layer-pill';
    pill.innerHTML = `<span>${label}</span><small>${meta}</small>`;
    pill.style.setProperty('--pill-color', color);
    syncLayerState(pill, layer);
    pill.addEventListener('click', () => {
      layer.setVisible(!layer.getVisible());
      syncLayerState(pill, layer);
    });
    if (typeof layer.on === 'function') {
      layer.on('change:visible', () => syncLayerState(pill, layer));
    }
    pillsHost.appendChild(pill);
  });
})();
