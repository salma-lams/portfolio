import type { IconType } from "react-icons";

export interface SkillChip {
  readonly name: string;
  readonly Icon: IconType;
  readonly iconColor: string;
}

export interface SkillCategoryGroup {
  readonly label: string;
  readonly skills: readonly SkillChip[];
}
