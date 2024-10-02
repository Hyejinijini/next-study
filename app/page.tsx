import Login from "./components/Login";

/**
 * 페이지 이동
 *
 * 라우터 설정을 하지 않았음에도 링크를 이용해서 페이지를 이동할 수 있는 이유:
 * 폴더/page.tsx 이렇게 폴더 밑에 page를 하나 만들어주면 자동으로 라우터가 생성이 되기 때문이다.
 * 예시) about/page.tsx -> about 경로의 페이지가 생성됨
 */
import Link from "next/link";

/**
 * Meta Data
 *
 * 기존에는 html 파일 내, head 태그 안에 메타데이터를 정의했었는데,
 * Next 에서는 html 에 작성하지 않아도 된다.
 */
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Study | Main",
  description: "Next 공부 기록용 메인 페이지 입니다.",
};

const MainPage = () => {
  return (
    <div>
      <h2 className="text-2xl flex justify-center p-20 border">메인 페이지</h2>
      <div className="flex justify-center gap-20 p-4">
        <li>
          {/* about 으로 이동 */}
          <Link href="/about" className="hover:font-bold">
            about
          </Link>
        </li>
        <li>
          {/* test 로 이동 */}
          <Link href="/test" className="hover:font-bold">
            test
          </Link>
        </li>
      </div>
      <div className="flex justify-center py-20">
        <Login />
      </div>
    </div>
  );
};

export default MainPage;
