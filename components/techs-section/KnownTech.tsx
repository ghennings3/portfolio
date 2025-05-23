import { getRelativeTimeString } from "@/app/lib/getRelativeTime"
import { KnownTech as IKnownTech } from "@/app/types/projects"
import { CmsIcon } from "../CmsIcon"

type KnownTechProps = {
    tech: IKnownTech
}

export const KnownTech = ({tech}: KnownTechProps) => {
    const relativeTime = getRelativeTimeString(new Date(tech.startDate), 'pt-BR').replace('há', '')
    return(
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-violet-500 hover:bg-gray-600/30">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                <CmsIcon icon={tech.iconSvg} />
            </div>
            <span>{relativeTime} de experiência</span>
        </div>
    )
}