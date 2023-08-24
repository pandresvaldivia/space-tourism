import { component$ } from "@builder.io/qwik";
import techologyMenuItemStyles from "@styles/modules/technology/technology-menu-item.module.css";

export const SkeletonTechnologyMenuItem = component$(
  ({ active, index }: SkeletonTechnologyMenuItemProps) => {
    return (
      <div
        class={[
          techologyMenuItemStyles.link,
          {
            "bg-white border-white text-primary": active,
            "border-white/25 text-white": !active,
          },
          "flex items-center justify-center font-bellefair aspect-square rounded-full border transition-colors",
        ]}
      >
        {index}
      </div>
    );
  }
);

export interface SkeletonTechnologyMenuItemProps {
  index: number;
  active?: boolean;
}
