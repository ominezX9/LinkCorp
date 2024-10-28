import LineImage from '@assets/images/vectors/Line-pattern.svg'

type FeaturesProps = {
    title: string,
    description: string,
    image: string,
    flow?: "reverse" | "default",
}
export default function Features({
    title,
    description,
    image,
    flow,
} : FeaturesProps) {

  return (
    <div className={`flex ${flow ===  "reverse" ? "flex-row-reverse" : "flex-row" } item-center justify-between gap-4`}>
        <div className="flex-none basis-1/2 relative p-6 rounded-md">
            <img src={image} alt="Featured Image" className="rounded-md" />
            <img className={`absolute top-5 ${flow ===  "reverse" ? "-right-10" : "-left-10"}`} src={LineImage} alt="" />
        </div>
        <div className="flex flex-col ">
            <h1 className="text-lg">{title}</h1>
            <p className="text-base text-gray-500">{description}</p>
        </div>
    </div>
  )
}
