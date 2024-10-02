import { redirect } from "next/navigation";

const Test = () => {
  // 메인 페이지에서 test 페이지로 이동하면,
  // 바로 메인 페이지로 리다이렉션
  redirect("/");
};

export default Test;
