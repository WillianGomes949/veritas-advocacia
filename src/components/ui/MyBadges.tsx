import React from "react";

interface BadgeProps {
  /**
   * @default 'warning'
   */
  variant?: "default" | "alternative" | "danger" | "success" | "warning";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  title?: string;
  description?: string;
}

export default function MyBadges(props: BadgeProps) {
  const {
    title = "",
    description = "",
    variant = "default",
    className = "",
    icon,
    iconPosition = "left",
  } = props;

  const baseStyle = `
    text-sm font-medium md:font-medium mt-6 inline-flex items-start
    gap-3 px-6 py-4 rounded-xl
  `;
  const variantStyles = {
    default: `bg-zinc-100 text-zinc-700/80 `,
    alternative: `bg-zinc-100 text-zinc-700/80`,
    danger: ` bg-rose-100 text-rose-700/80`,
    success: `bg-teal-100 text-teal-700/80`,
    warning: `bg-amber-100 text-amber-700/80`,
  };
  const combinedClassName = `
    ${baseStyle}
    ${variantStyles[variant]}
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  const commonProps = {
    className: combinedClassName,
    "data-variant": variant,
    "data-title": title,
  };

  const renderContent = () => (
    <>
      {/* Icon and text content */}
      <div className="flex gap-2 md:gap-6 justify-center items-center px-2 md:px-4">
        {icon && iconPosition === "left" && <span>{icon}</span>}

        <div className="flex flex-col items-start">
          {/* Title and description */}
          <h6>{title}</h6>
          <p>{description}</p>
        </div>

        {icon && iconPosition === "right" && <span>{icon}</span>}
      </div>
    </>
  );

  return <div {...commonProps}>{renderContent()}</div>;
}
