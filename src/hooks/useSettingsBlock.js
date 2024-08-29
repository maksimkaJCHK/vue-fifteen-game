import { ref, provide, onBeforeMount } from 'vue';
import { getParamGame } from '@/helpers/helpers.js';

const useSettings = () => {
  const isSettings = ref(false);

  const closeSettings = () => isSettings.value = false;
  const openSettings = () => isSettings.value = true;

  provide('isSettings', isSettings);
  provide('closeSettings', closeSettings);
  provide('openSettings', openSettings);

  onBeforeMount(() => {
    const params = getParamGame();

    if (!params) openSettings();
  });
}

export default useSettings;