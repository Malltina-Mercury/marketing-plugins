import useGetApi from "../useGetApi";

const useFetchAllPlugins = () => {
  return useGetApi('/Cards');
}

export default useFetchAllPlugins;
