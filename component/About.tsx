import Card from "@/component/About/Card"
import Mission from "@/component/About/Mission"

const Top = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl">
        We offer a mix of educational programs and community-driven activities
        designed to help you excel in AWS.
      </h1>
      <div className="flex flex-wrap justify-center mt-6 sm:mt-8 items-center w-full max-w-7xl pb-4 gap-4 sm:gap-6 lg:gap-8">
        <Card
          title="Hands-On Workshops"
          subtitle="Practical, interactive sessions to help you build real-world AWS skills."
        />
        <Card
          title="Expert-Led Webinars"
          subtitle="Learn from industry professionals with deep AWS experience."
        />
        <Card
          title="Community Networking"
          subtitle="Connect, collaborate, and grow with other cloud enthusiasts."
        />
      </div>
      <Mission />
    </div>
  );
};

export default Top;