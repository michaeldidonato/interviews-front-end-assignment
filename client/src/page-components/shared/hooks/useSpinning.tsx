import { useLoadingContext } from "@/contexts/loading-context";
import { useEffect } from "react";

const useSpinning = (flags: boolean[]) => {
  const { setLoading } = useLoadingContext();

  const atLeastOne = flags.some((flag: boolean) => flag);

  useEffect(() => {
    setLoading(atLeastOne);
  }, [atLeastOne, setLoading]);
};

export default useSpinning;
