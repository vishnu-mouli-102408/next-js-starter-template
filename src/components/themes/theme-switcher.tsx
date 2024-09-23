"use client";

import { useState } from "react";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { Switch } from "../ui/switch";

interface ThemeSwitcherProps {
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const ThemeSwitcher = ({ leftIcon, rightIcon }: ThemeSwitcherProps) => {
  const { setTheme } = useTheme();
  const [checked, setChecked] = useState(false);
  return (
    <div className="container">
      <div className="flex flex-row items-center gap-2">
        {leftIcon && (
          <div className={cn("size-5", !checked && "text-blue-600")}>
            {leftIcon}
          </div>
        )}
        <Switch
          onCheckedChange={(e) => {
            // console.log("EEE", e);
            if (e) {
              setTheme("dark");
            } else {
              setTheme("light");
            }
            setChecked(e);
          }}
        />
        {rightIcon && (
          <div className={cn("size-5", checked && "text-blue-600")}>
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
