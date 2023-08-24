import { component$ } from "@builder.io/qwik";

export const SkeletonDestinationMenuItem = component$(
  ({ active }: SkeletonDestinationMenuItemsProps) => {
    return (
      <div
        class={[
          {
            "before:absolute before:h-1 before:bottom-0 before:w-full before:bg-white":
              active,
          },
          "relative pb-3.5",
        ]}
      >
        <div
          class={[
            { "bg-white": active, "bg-secondary": !active },
            "h-3.5 md:h-4 w-8 md:w-10 rounded",
          ]}
        />
      </div>
    );
  }
);

type SkeletonDestinationMenuItemsProps = {
  active?: boolean;
};
