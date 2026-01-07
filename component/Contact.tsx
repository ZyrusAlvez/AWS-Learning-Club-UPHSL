import Card from "@/component/Contact/Card"
import Title from "@/component/Contact/Title"

const Contact_Us = () => {
  return (
      <div id="contact" className="w-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8 scroll-mt-[70px]">
        <Title />
        <div className="flex justify-center items-stretch flex-wrap gap-8 sm:gap-12 lg:gap-16 mt-6 sm:mt-8 w-full max-w-7xl">
          <Card
            title="Email"
            subtitle="We'd love to here from you! Reach out anytime."
            info="awslc.uphsl@gmail.com"
          />
          <Card
            title="Phone"
            subtitle="Call us for inquiries or support; we’re here to help!"
            info="+639936628701"
          />
          <Card
            title="Place"
            subtitle="College of Computer Studies - UPHSL"
            info="83JP+F52, National Hi-way, Sto. Niño, Biñan, Laguna"
          />
        </div>
      </div>
  );
};

export default Contact_Us;