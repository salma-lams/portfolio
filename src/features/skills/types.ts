import React from "react";

export interface SkillChip {
  readonly name: string;
  readonly Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  readonly iconColor: string;
}

export interface SkillCategoryGroup {
  readonly label: string;
  readonly skills: readonly SkillChip[];
}
