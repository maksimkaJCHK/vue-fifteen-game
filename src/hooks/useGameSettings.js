import { ref, provide, onBeforeMount } from 'vue';

import {
  generateBoardItem,
  calcNumbRow,
  calcNumbCol,
  moveFigures,
  generateArr,
  bForCompareArr,
  isStopGame,
  saveGameParam,
  getParamGame
} from '@/helpers/helpers.js';

const useGameSettings = (isSettings) => {
  const items = ref([]);
  const firstPosition = ref([]);

  const isGameOver = ref(false);
  const isStart = ref(false);
  const stopGameCondition = ref('');
  const id = ref(null);

  const count = ref(0);
  const size = ref(3);

  // Делаю параметры игры доступными для всего приложения
  provide('items', items);
  provide('firstPosition', firstPosition);

  provide('isGameOver', isGameOver);
  provide('isStart', isStart);
  provide('stopGameCondition', stopGameCondition);
  provide('id', id);

  provide('count', count);
  provide('size', size);

  // Функции для управления игрой
  const startGame = () => {
    count.value = 0;
    isStart.value = true;
    isGameOver.value = false;
  };

  const genStartGame = () => {
    const genItems = generateBoardItem(size.value);
    const genStopGameCondition = bForCompareArr([...generateArr(size.value * size.value)]);

    id.value = Date.now();
    stopGameCondition.value = genStopGameCondition;

    items.value = genItems;
    firstPosition.value = [ ...genItems ];
  };

  const saveGame = () => {
    saveGameParam({
      itemsSave: items.value,
      firstPositionSave: firstPosition.value,
      isGameOverSave: isGameOver.value,
      isStartSave: isStart.value,
      stopGameConditionSave: stopGameCondition.value,
      idSave: id.value,
      countSave: count.value,
      sizeSave: size.value,
      isSettingsSave: isSettings.value
    });
  };

  const newGame = () => {
    genStartGame()
    startGame();
    saveGame();
  };

  const changeSize = (sizeParam) => {
    size.value = sizeParam;
    newGame();
  };

  const reloadGame = () => {
    items.value =  [ ...firstPosition.value ];

    startGame();
    saveGame();
  };

  const move = (item) => {
    if (isGameOver.value) return;

    const idxNull = items.value.findIndex((el) => el === null);

    const fIdx = items.value.findIndex((el) => el === item);
    const isColInRow = calcNumbRow(idxNull, size.value) === calcNumbRow(fIdx, size.value);
    const isColInCols = calcNumbCol(idxNull, size.value) === calcNumbCol(fIdx, size.value);

    if (isColInRow || isColInCols) {
      const newItems = moveFigures({
        idxNull,
        curIdx: fIdx,
        items: items.value,
        smes: isColInCols ? size.value : 1
      });

      items.value = newItems;
      count.value = count.value + 1;
      isGameOver.value = isStopGame(newItems, stopGameCondition.value),
      isStart.value = !isStopGame(newItems, stopGameCondition.value),

      saveGame();
    }
  };

  // Делаю доступными для всего приложения функции для управления игрой
  provide('newGame', newGame);
  provide('reloadGame', reloadGame);
  provide('move', move);
  provide('changeSize', changeSize);

  onBeforeMount(() => {
    const params = getParamGame();

    if (!params) newGame();

    if (params) {
      const {
        itemsSave,
        firstPositionSave,
        isGameOverSave,
        isStartSave,
        stopGameConditionSave,
        idSave,
        countSave,
        sizeSave,
      } = params;

      items.value = itemsSave;
      firstPosition.value = firstPositionSave;
      isGameOver.value = isGameOverSave;
      isStart.value = isStartSave;
      stopGameCondition.value = stopGameConditionSave;
      id.value = idSave;
      count.value = countSave;
      size.value = sizeSave;
    }
  });
}

export default useGameSettings;