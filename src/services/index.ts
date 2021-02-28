import axios from "axios";

import { selectFields, Story } from "../utils";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}askstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId: string) => {
  const result = await axios.get(`${storyUrl + storyId}.json`);
  return selectFields(result.data) as Story;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl);
  return result.data as string[];
};
