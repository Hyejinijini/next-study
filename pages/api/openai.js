import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.API_SECRET,
});
const openaiHandler = async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "너는 vs 게임을 만들어주는 게임 콘텐츠 메이커야. 게임을 만들어달라고 하면, 벨런스 있는 vs 게임을 만들어주면 돼. 템플릿은 질문[A vs B] 이거야. 템플릿 제외하고는 다른말 하지마. 그리고 질문은 예를 들어, 둘 중에 뭐가 더 좋아? [탕수육 부먹 VS 탕수육 찍먹] 이런식으로 만들어줘.",
        },
        {
          role: "user",
          content: "주제는 랜덤이야. vs 게임 만들어줘.",
        },
      ],
    });

    return res.status(200).json({ data: completion.choices[0].message });
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error.response ? error.response.data : error.message);
    if (error.status === 429) {
      // 재시도 로직 추가
      res.status(429).json({ error: "요청 제한 초과. 잠시 후 다시 시도하세요." });
    } else {
      res.status(500).json({ error: "서버 내부 오류" });
    }
  }
};

export default openaiHandler;
