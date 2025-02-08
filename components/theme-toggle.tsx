import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      onClick={toggleTheme}
      className="text-2xl font-semibold mb-2 dark:text-white"
    >
      主题切换：{theme}
    </div>
  );
}
