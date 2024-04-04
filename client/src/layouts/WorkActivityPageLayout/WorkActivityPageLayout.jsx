import WorkActivity from "../../components/WorkActivity/WorkActivity";
import SearchID from "../../components/SearchID/SearchID";

function WorkActivityPage() {
  return (
    <div>
      <div className='search-component'>
        <SearchID />
      </div>
      <div className='acitvity-component'>
        <WorkActivity />
      </div>
    </div>
  )
}

export default WorkActivityPage