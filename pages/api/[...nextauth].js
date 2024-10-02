import NextAuth from "next-auth";

import Naver from "next-auth/providers/naver";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

export const authOptions = {
  providers: [Naver({}), Google({}), Github({})],
};
