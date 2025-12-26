import Title from "@/component/Event/Title"
import ImageFrame from "./Event/ImageFrame"

const Event = () => {
  return (
    <div className="mb-8">
      <Title />
      <div className="grid grid-cols-2 px-16 mt-6">
        <div>
          title
        </div>
        <ImageFrame image_path="/event/1"/>
      </div>
    </div>
  )
}

export default Event