import HoverItem from "../components/HoverItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "HoverItem",
  component: HoverItem,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HoverItem>;

const Template: ComponentStory<typeof HoverItem> = (args) => (
  <div className="w-[40px] mt-[30px] ml-[20px]">
    <HoverItem {...args} />
  </div>
);

export const IssuePopupStories = Template.bind({});
IssuePopupStories.args = {
  eachInfo: "男裝",
};
