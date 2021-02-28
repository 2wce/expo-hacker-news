export interface Story {
  by: string;
  title: string;
  text: string;
  score: string;
}

export const selectFields = ({ by, title, text, score }: Story) => ({
  by,
  title,
  text,
  score,
});
