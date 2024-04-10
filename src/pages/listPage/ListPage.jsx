import Card from "../../components/card/Card"
import "./ListPage.scss"
import {listData} from "../../lib/dummyData"
import Filter from "../../components/filter/Filter"

const ListPage = () => {
  
  const data=listData

  return (
    <div className="listPage">
      <div className="text-container">
        <div className="wrapper">
          <Filter/>
          {data.map((item) => (
             <Card key={item.id} item={item}/>
          ))}
          
        </div>
      </div>
      <div className="map-container"></div>
    </div>
  )
}

export default ListPage
