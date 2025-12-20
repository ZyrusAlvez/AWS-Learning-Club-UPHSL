import Card from "@/component/About/Card"
import Mission from "@/component/About/Mission"

const Top = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-center sm:text-lg">
        We offer a mix of educational programs and community-driven activities
        designed to help you excel in AWS.
      </h1>
      <div className="flex flex-wrap justify-center mt-8 items-center px-2 pb-4 gap-8">
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