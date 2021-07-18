import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resizeSidebar } from "../../actions/sidebar";
import { IState } from "../../reducers";
import { SIDEBAR_WIDTH_MIN, SIDEBAR_WIDTH_MAX } from "../../constants/config";

export const useSidebar = () => {
  const dispatch = useDispatch();

  const sidebarWidth = useSelector((state: IState) => state.sidebar.width);

  const [drawerWidth, setDrawerWidth] = useState(sidebarWidth);

  const handleMouseDown = (e: any) => {
    document.addEventListener("mouseup", handleMouseUp, true);
    document.addEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp, true);
    document.removeEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseMove = useCallback((e: any) => {
    const newWidth = e.clientX - document.body.offsetLeft;
    if (newWidth > SIDEBAR_WIDTH_MIN && newWidth < SIDEBAR_WIDTH_MAX) {
      setDrawerWidth(newWidth);
      dispatch(resizeSidebar(newWidth));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    drawerWidth,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
};
