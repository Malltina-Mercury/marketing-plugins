import useGetApi from "../useGetApi";

const useFetchPlugin = (id) => {
  return useGetApi(`/Cards/${id}`);
}

export default useFetchPlugin;
