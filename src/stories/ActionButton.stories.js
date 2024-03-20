import { UserCircle } from "@phosphor-icons/react";
import ActionButton from "../components/ActionButton";

export default {
  title: "Action Button",
  component: ActionButton,
};

const Template = (args) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: args.type === "Reverse" ? "black" : "white",
      padding: "140px",
    }}
  >
    <ActionButton {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  type: "Neutral",
  size: "Small",
  text: "Click Me",
  icon: <UserCircle size={24} />,
};
