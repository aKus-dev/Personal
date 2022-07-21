import { useAtom } from 'jotai';
import { projectAtom } from '../global';

export const useProject = () => {
    const [project, setProject] = useAtom(projectAtom)

    return {
        project,
        setProject
    }
}