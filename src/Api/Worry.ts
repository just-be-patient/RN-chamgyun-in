import Api from './api';

export interface WorryResponse {
  id: number;
  title: string;
  content: string;
  status: string;
  imageUrl: string;
  writer: {
    id: number;
    name: string;
    profileUrl: string;
  };
  createAt: string;
  voteDeadLine: string;
  badges: {hexColor: string; textColor: string; text: string}[];
  viewCount: number;
  worryOptionList: {
    id: number;
    name: string;
  }[];
  interest: {
    id: number;
    name: string;
  };
}

export default class Worry extends Api {
  public static async getWorryList(params: {
    interestId: number;
  }): Promise<WorryResponse[]> {
    const {content} = await this.apiGet<{content: WorryResponse[]}>(
      '/worry',
      params,
    );

    console.log('uk worry params', params);
    console.log('uk worry data', content);

    return content;
  }
}
