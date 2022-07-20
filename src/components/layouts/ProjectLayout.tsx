import { Children } from '../../interfaces';

export const ProjectLayout = ({ children }: Children) => {
  return (
    <main className="h-screen bg-white dark:bg-gradient-to-r dark:from-[#0f1015] dark:to-[#050709]">
      <div className="h-full flex flex-col">
        {children}
      </div>
    </main>
  )
}
