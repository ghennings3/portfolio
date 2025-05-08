import Image from "next/image"

const sections = [
    {
        title: 'Login',
        image: 'https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Home',
        image: 'https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

export const ProjectSection = () => {
    return(
        <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
            {sections.map(section => (
                <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12">
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                        {section.title}
                    </h2>
                    <Image className="w-full aspect-auto rounded-lg object-cover" src={section.image} alt={`imagem da sessão ${section.title}`} width={1080} height={672}/>
                </div>
            ))}
        </section>
    )
}