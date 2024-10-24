"use client";

import { useState } from "react";

const aiPage = () => {
  const [aiContent1, setAiContent1] = useState("");
  const [aiContent2, setAiContent2] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/openai");
      if (!res.ok) {
        throw new Error("API 요청에 실패했습니다.");
      }
      const { data } = await res.json();
      const { content } = data;
      const contents = content.split("vs");
      setAiContent1(contents[0]);
      setAiContent2(contents[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{loading ? "로딩중..." : "밸런스게임 생성하기"}</button>
      <div>
        <button className="bg-slate-400">{aiContent1}</button>
        <span> VS </span>
        <button className="bg-purple-400">{aiContent2}</button>
      </div>
    </div>
  );
};

export default aiPage;
