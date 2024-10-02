"use client"; // 클라이언트로 사용하겠다는 의미, 이걸 적어주지 않으면 디폴트는 서버

import Link from "next/link";

const About = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <h2 className="text-2xl ">about 페이지 입니다.</h2>
      {/* 링크를 이용해서 홈으로 이동 */}
      <Link href="/" className="text-rose-400 hover:font-bold">
        홈으로
      </Link>
    </div>
  );
};

export default About;
