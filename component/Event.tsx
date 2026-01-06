import Title from "@/component/Event/Title"
import ImageFrame from "./Event/ImageFrame"

const Event = () => {
  return (
    <div className="mb-8 px-4 sm:px-6 lg:px-8">
      <Title />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto mt-6">
        <div>
          title
        </div>
        <ImageFrame image_path="/event/1"/>
      </div>
    </div>
  )
}

export default Event