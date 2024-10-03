// NextAuth 라이브러리 및 인증 제공자 불러오기
import NextAuth from "next-auth";
import Naver from "next-auth/providers/naver"; // 네이버 인증 제공자
import Google from "next-auth/providers/google"; // 구글 인증 제공자
import Github from "next-auth/providers/github"; // 깃허브 인증 제공자

// 환경 변수에서 클라이언트 ID와 비밀 키를 가져오는 옵션 객체 설정
export const authOptions = {
  providers: [
    // 네이버 인증 제공자 설정
    Naver({
      clientId: process.env.NAVER_CLIENT_ID, // .env 파일에서 클라이언트 ID 가져오기
      clientSecret: process.env.NAVER_CLIENT_SECRET, // .env 파일에서 클라이언트 비밀 키 가져오기
    }),
    // // 구글 인증 제공자 설정
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID, // .env 파일에서 클라이언트 ID 가져오기
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // .env 파일에서 클라이언트 비밀 키 가져오기
    }),
    // 깃허브 인증 제공자 설정
    Github({
      clientId: process.env.GITHUB_CLIENT_ID, // .env 파일에서 클라이언트 ID 가져오기
      clientSecret: process.env.GITHUB_CLIENT_SECRET, // .env 파일에서 클라이언트 비밀 키 가져오기
    }),
  ],
  secret: "!12@984#alciw&4^5", // JWT 생성 시 쓰는 암호
};

// NextAuth를 사용하여 인증 기능을 설정하고 내보내기
export default NextAuth(authOptions);
