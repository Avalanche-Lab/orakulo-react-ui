import {
  mdiAlert,
  mdiAlertCircle,
  mdiCheck,
  mdiClose,
  mdiInformation,
  mdiStar,
} from "@mdi/js";
import Icon from "@mdi/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "informative",
        "positive",
        "negative",
        "notice",
        "neutral",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="informative">Informative</Badge>
      <Badge variant="positive">Positive</Badge>
      <Badge variant="negative">Negative</Badge>
      <Badge variant="notice">Notice</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const WithPrefixIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge
        variant="informative"
        prefixIcon={<Icon path={mdiInformation} size={0.8} />}
      >
        Info
      </Badge>
      <Badge
        variant="positive"
        prefixIcon={<Icon path={mdiCheck} size={0.8} />}
      >
        Success
      </Badge>
      <Badge
        variant="negative"
        prefixIcon={<Icon path={mdiClose} size={0.8} />}
      >
        Error
      </Badge>
      <Badge
        variant="notice"
        prefixIcon={<Icon path={mdiAlertCircle} size={0.8} />}
      >
        Warning
      </Badge>
    </div>
  ),
};

export const WithSuffixIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default" suffixIcon={<Icon path={mdiStar} size={0.8} />}>
        Featured
      </Badge>
      <Badge
        variant="informative"
        suffixIcon={<Icon path={mdiAlert} size={0.8} />}
      >
        New
      </Badge>
      <Badge
        variant="positive"
        suffixIcon={<Icon path={mdiCheck} size={0.8} />}
      >
        Verified
      </Badge>
    </div>
  ),
};

export const WithBothIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge
        variant="informative"
        prefixIcon={<Icon path={mdiInformation} size={0.8} />}
        suffixIcon={<Icon path={mdiAlert} size={0.8} />}
      >
        Important
      </Badge>
      <Badge
        variant="positive"
        prefixIcon={<Icon path={mdiCheck} size={0.8} />}
        suffixIcon={<Icon path={mdiStar} size={0.8} />}
      >
        Premium
      </Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="positive">Active</Badge>
      <Badge variant="neutral">Pending</Badge>
      <Badge variant="negative">Inactive</Badge>
      <Badge variant="notice">Maintenance</Badge>
      <Badge variant="informative">Processing</Badge>
    </div>
  ),
};

export const NotificationBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge
        variant="negative"
        prefixIcon={<Icon path={mdiAlert} size={0.8} />}
      >
        3
      </Badge>
      <Badge
        variant="notice"
        prefixIcon={<Icon path={mdiAlertCircle} size={0.8} />}
      >
        12
      </Badge>
      <Badge
        variant="informative"
        prefixIcon={<Icon path={mdiInformation} size={0.8} />}
      >
        5
      </Badge>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge
        variant="default"
        className="cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => alert("Badge clicked!")}
      >
        Clickable
      </Badge>
      <Badge
        variant="informative"
        className="cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => alert("Badge clicked!")}
      >
        Interactive
      </Badge>
    </div>
  ),
};

export const LongText: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="informative">
        This is a very long badge text that might wrap
      </Badge>
      <Badge variant="positive" size="lg">
        Another long badge with larger size
      </Badge>
    </div>
  ),
};
