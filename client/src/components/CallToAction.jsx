import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-orange-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
        <p className="text-gray-500 my-2">JavaScript Projects</p>
        <Button
          gradientDuoTone="pinkToOrange"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://gsxdev.vercel.app/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            MERN Stack Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/MERN_Stack_9437df2ba9_62af1dd3fc.png" />
      </div>
    </div>
  );
}
