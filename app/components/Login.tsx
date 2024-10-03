"use client"; // 클라이언트 컴포넌트로 설정

import { signIn, signOut } from "next-auth/react";

const Login = ({ userInfo }: { userInfo: any }) => {
  return (
    <>
      {userInfo ? ( // userInfo 가 있을 경우 (로그인 상태)
        <div>
          <button onClick={() => signOut()}>로그아웃</button>
          <div>
            <h1>Welcome, {userInfo.name} 😀</h1>
            <h3>Your email is {userInfo.email} !!</h3>
          </div>
        </div>
      ) : (
        <button onClick={() => signIn()}>로그인</button>
      )}
    </>
  );
};

export default Login;
