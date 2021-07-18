import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { resizeSidebar } from "../../actions/sidebar";
import { SIDEBAR_WIDTH_MIN, SIDEBAR_WIDTH_MAX } from "../../constants/config";

export const useSidebar = () => {
  const dispatch = useDispatch();

  const handleMouseDown = (e: any) => {
    document.addEventListener("mouseup", handleMouseUp, true);
    document.addEventListener("mousemove", handleMouseMove, true);

    document.body.style.userSelect = "none";
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp, true);
    document.removeEventListener("mousemove", handleMouseMove, true);

    document.body.style.userSelect = "unset";
  };

  const handleMouseMove = useCallback((e: any) => {
    let newWidth = e.clientX - document.body.offsetLeft;

    if (newWidth > SIDEBAR_WIDTH_MIN && newWidth < SIDEBAR_WIDTH_MAX) {
      dispatch(resizeSidebar(newWidth));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
};
