import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getCompletionJSON = async ({
  text,
  maxTokens,
  temperature,
}: {
  text: string;
  maxTokens: number;
  temperature: number;
}) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are an assistant, and you only reply with JSON.',
      },
      {
        role: 'user',
        content: text,
      },
    ],
    model: 'gpt-3.5-turbo-1106',
    response_format: { type: 'json_object' },
    max_tokens: maxTokens,
    temperature,
  });

  const res = {
    value: completion.choices[0].message.content?.replace(/\n/g, ''),
    error:
      completion.choices[0].finish_reason === 'stop'
        ? undefined
        : 'Something went wrong',
  };

  return res;
};
