import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      {/* 프로필을 불러오는 동안 loading...를 표시합니다. fallback에 컴포넌트가 있다면 컴포넌트가 실행 */}
      <Suspense fallback={"loading..."}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
