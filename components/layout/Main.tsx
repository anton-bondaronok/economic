import ThemeButton from "../ThemeButton";

export default function Main({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-200 dark:bg-slate-900">
      <ThemeButton/>
      {children}
    </main>
  )
}
