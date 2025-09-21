import { END_POINT } from '@constants/api';
import { fetch } from '@tauri-apps/api/http';

export const postSaveScenarios = async (data: string) => {
  try {
    const parsedData = JSON.parse(data);
    const res = await fetch(END_POINT.TEST_CASE, {
      method: 'POST',
      body: {
        type: 'Json',
        payload: parsedData,
      },
    });

    return res;
  } catch (e) {
    console.log(e);
  }
};

export const deleteScenarios = async () => {
  try {
    const res = await fetch(END_POINT.TEST_CASE, {
      method: 'DELETE',
    });

    return res;
  } catch (e) {
    console.log(e);
  }
};
