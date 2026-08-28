import { Moon, Sun } from "lucide-react";
import { useAppTheme } from "../../context/AppThemeContext";
import "./ThemeToggle.css";

/**
 * @param {{ variant?: "floating" | "masthead" }} props
 */
export function ThemeToggle({ variant = "floating" }) {
  const { theme, toggleTheme } = useAppTheme();
  const isDark = theme === "dark";
  const isMasthead = variant === "masthead";

  return (
    <button
      type="button"
      className={
        isMasthead
          ? "theme-toggle theme-toggle--masthead"
          : "theme-toggle theme-toggle--floating"
      }
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Use light theme" : "Use dark theme"}
    >
      {isDark ? (
        <Sun className="theme-toggle__icon" strokeWidth={1.75} aria-hidden />
      ) : (
        <Moon className="theme-toggle__icon" strokeWidth={1.75} aria-hidden />
      )}
      {isMasthead ? (
        <span className="theme-toggle__label">
          {isDark ? "Light" : "Dark"}
        </span>
      ) : null}
    </button>
  );
}
