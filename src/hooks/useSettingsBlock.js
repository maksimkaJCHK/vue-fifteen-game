import { ref, provide, onBeforeMount } from 'vue';
import { getParamGame } from '@/helpers/helpers.js';

const useSettings = () => {
  const isSettings = ref(false);

  const closeSettings = () => isSettings.value = false;
  const openSettings = () => isSettings.value = true;

  onBeforeMount(() => {
    const params = getParamGame();

    if (!params) openSettings();
    if (params) isSettings.value = params.isSettingsSave;
  });

  provide('isSettings', isSettings);
  provide('closeSettings', closeSettings);
  provide('openSettings', openSettings);

  return { isSettings };
}

export default useSettings;