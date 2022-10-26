
import data from "data/data.json"
import {StatisticTitle} from "./Statistics/statisticsTitle/statisticsTitle"

export const App = () => {
  return (
    <StatisticTitle title={data} />
  )
};
