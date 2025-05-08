import Image from "next/image"

export const ProjectCard = () => {
    return(
        <div className="group rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-violet-500 opacity-70 hover:opacity-100 transition-all">
            <div className="w-full h-48 overflow-hidden">
                <Image className="group-hover:scale-110 w-full h-full object-cover duration-500 transition-all" width={380} height={200} unoptimized src='https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="imagem do projeto" />
            </div>
            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-violet-500 transition-colors">Projeto</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla itaque, voluptates facere libero hic.
                </p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate">Next.js,Next.js,Next.js,Next.js,Next.js,Next.js,Next.js,Next.js,Next.js,Next.js</span>
            </div>
        </div>
    )
}