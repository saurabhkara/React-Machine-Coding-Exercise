import { memo } from "react";

function Header() {
  console.log("Header Rendered");
  return <div>Header</div>;
}

export default memo(Header);
