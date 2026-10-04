export type SkillIconComponent = (props: {
  className?: string;
  style?: Record<string, string | number>;
}) => unknown;

export interface SkillChip {
  readonly name: string;
  readonly Icon: SkillIconComponent;
  readonly iconColor: string;
}

export interface SkillCategoryGroup {
  readonly label: string;
  readonly skills: readonly SkillChip[];
}
