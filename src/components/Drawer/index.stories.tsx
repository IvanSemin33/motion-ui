import { useState } from "react";

import { motion } from "framer-motion";
import { noop } from "lodash";

import { GoX, GoStar } from "react-icons/go";

import { children, className, ECategories } from "../../utils/argTypes";
import Button from "../Button";
import List from "../List";
import ListItem, { EListItemColors } from "../ListItem";

import Drawer, { EDrawerPositions, EDrawerVariants } from ".";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Navigation/Drawer",
  component: Drawer,
  zeplinLink: "",
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    children,
    className,
    header: {
      control: {
        type: "other",
      },
      description: "The content of the drawer header.",
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: "node",
        },
      },
    },
    onClose: {
      control: {
        type: "function",
      },
      description: "Callback fired when the component requests to be closed.",
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: "function",
        },
      },
    },
    open: {
      control: {
        type: "boolean",
      },
      description: "If true, the drawer is open.",
      table: {
        category: ECategories.STATE,
        type: {
          summary: "boolean",
        },
      },
    },
    position: {
      control: {
        type: "radio",
        options: Object.values(EDrawerPositions),
      },
      description: "The position of the temporary drawer.",
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: "EDrawerPositions",
          detail: Object.values(EDrawerPositions).join(" | "),
        },
        defaultValue: {
          summary: EDrawerPositions.LEFT,
        },
      },
    },
    variant: {
      control: {
        type: "radio",
        options: Object.values(EDrawerVariants),
      },
      description: "The variant of the drawer.",
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: "EDrawerVariants",
          detail: Object.values(EDrawerVariants).join(" | "),
        },
        defaultValue: {
          summary: EDrawerVariants.TEMPORARY,
        },
      },
    },
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
  const isPermanent = args.variant === EDrawerVariants.PERMANENT;
  const [open, setOpen] = useState(isPermanent);

  const renderHeader = () => (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 18px",
        height: "calc(40px + 28px + 28px)",
        width: "100%",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2, delay: 0 } }}
    >
      <div
        style={{
          color: "#BCBCBC",
          fontFamily: "Inter",
          fontSize: "28px",
          fontWeight: 600,
          lineHeight: 1.4,
        }}
      >
        Header
      </div>
      {!isPermanent && (
        <GoX
          onClick={() => setOpen(!open)}
          style={{ color: "#BCBCBC", cursor: "pointer" }}
        />
      )}
    </motion.div>
  );

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: isPermanent ? "none" : "center",
        justifyContent: isPermanent ? "none" : "center",
      }}
    >
      <Drawer
        {...args}
        header={renderHeader()}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {Array.from({ length: 5 }, (_, i) => (
            <ListItem
              start={<GoStar />}
              color={EListItemColors.PRIMARY}
              onClick={noop}
              key={i}
              style={{ backgroundColor: "transparent" }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.2 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.2, delay: 0 } }}
            >
              <span style={{ color: "#BCBCBC" }}>Item {i + 1}</span>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {!isPermanent && <Button onClick={() => setOpen(!open)}>Open</Button>}
    </div>
  );
};

export const TemporaryLeft = Template.bind({});
TemporaryLeft.args = {
  variant: EDrawerVariants.TEMPORARY,
  position: EDrawerPositions.LEFT,
};
export const TemporaryBottom = Template.bind({});
TemporaryBottom.args = {
  ...TemporaryLeft.args,
  position: EDrawerPositions.BOTTOM,
};

export const TemporaryRight = Template.bind({});
TemporaryRight.args = {
  ...TemporaryLeft.args,
  position: EDrawerPositions.RIGHT,
};

export const TemporaryTop = Template.bind({});
TemporaryTop.args = {
  ...TemporaryLeft.args,
  position: EDrawerPositions.TOP,
};

export const Permanent = Template.bind({});
Permanent.args = {
  variant: EDrawerVariants.PERMANENT,
};

export const Persistent: ComponentStory<typeof Drawer> = (args) => {
  const [open, setOpen] = useState(false);

  const renderHeader = () => (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 18px",
        height: "calc(40px + 28px + 28px)",
        width: "200px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2, delay: 0 } }}
    >
      <div
        style={{
          color: "#BCBCBC",
          fontFamily: "Inter",
          fontSize: "28px",
          fontWeight: 600,
          lineHeight: 1.4,
        }}
      >
        Header
      </div>
      <GoX
        onClick={() => setOpen(!open)}
        style={{ color: "#BCBCBC", cursor: "pointer" }}
      />
    </motion.div>
  );

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
      }}
    >
      <Drawer
        {...args}
        variant={EDrawerVariants.PERSISTENT}
        header={renderHeader()}
        open={open}
        onClose={() => setOpen(false)}
        initial={{ width: 0 }}
        animate={{ width: 240, transition: { delay: 0, duration: 0.2 } }}
        exit={{ width: 0, transition: { duration: 0.2, delay: 0.2 } }}
      >
        <List>
          {Array.from({ length: 5 }, (_, i) => (
            <ListItem
              start={<GoStar />}
              color={EListItemColors.PRIMARY}
              onClick={noop}
              key={i}
              style={{ backgroundColor: "transparent" }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.2 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.2, delay: 0 } }}
            >
              <span style={{ color: "#BCBCBC" }}>Item {i + 1}</span>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 20px 0 20px",
          gap: "20px",
        }}
      >
        <Button onClick={() => setOpen(!open)}>Open</Button>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          molestie lacus nulla, ac vestibulum massa venenatis nec. Sed a libero
          ut augue convallis vulputate vel et sem. Nullam elementum erat quis
          velit mattis, ut consectetur turpis iaculis. Nulla pellentesque tempor
          turpis at mattis. Vivamus eget mattis justo. Nulla euismod, lorem vel
          efficitur hendrerit, tortor massa vestibulum nisl, sit amet aliquet
          massa ligula a ipsum. Curabitur maximus est vel ultrices aliquam. Sed
          elementum interdum nulla eu commodo. Vestibulum euismod, nunc non
          malesuada vehicula, nisl mi euismod mi, et malesuada diam lorem id
          lorem. Vivamus velit massa, efficitur viverra ipsum eu, efficitur
          porta ante. Integer in purus mattis, iaculis ipsum vel, iaculis lorem.
          Mauris vel ultricies eros, eget consectetur dui. Etiam at dui
          efficitur, tempor velit id, sagittis lacus. Etiam placerat gravida
          magna nec fermentum. Sed venenatis facilisis ante id ullamcorper.
          Pellentesque magna nulla, semper ac ullamcorper scelerisque, ultrices
          nec purus. Nulla feugiat maximus urna, vel vehicula ligula mollis nec.
          Donec ullamcorper lacus dui, molestie volutpat arcu posuere at. Duis
          convallis ex ac aliquet fringilla. Mauris dignissim in lectus eu
          rhoncus.
        </div>
      </div>
    </div>
  );
};
