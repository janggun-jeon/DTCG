import { END_POINT } from '@constants/api';
import { fetch } from '@tauri-apps/api/http';

export const postAccidentData = async (data: string) => {
  try {
    const response = await fetch(END_POINT.ACRYL, {
      method: 'POST',
      body: {
        type: 'Json', //'Text',
        payload: {
          content: data,
          user: data,
          layer: [1, 2, 3, 4, 5],
          use_related: false // 
        },
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};
