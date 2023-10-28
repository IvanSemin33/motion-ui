import { useState } from "react";

import * as Icons from "react-icons/go";

import Input from "../../components/Input";

import { IconGallery as SBIconGallery, IconItem } from "@storybook/addon-docs";

const IconGallery = () => {
  const [search, setSearch] = useState("");

  const icons = Object.keys(Icons)
    .filter((iconName) => {
      return iconName.toLowerCase().includes(search.toLowerCase());
    })
    .map((iconName) => {
      return { Icon: Icons[iconName], name: iconName };
    });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "24px",
      }}
    >
      <Input
        IconStart={Icons.SearchIcon}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search icon"
      />
      <SBIconGallery>
        {icons.map(({ Icon, name }) => {
          return (
            <IconItem name={name}>
              <Icon />
            </IconItem>
          );
        })}
      </SBIconGallery>
    </div>
  );
};

export default IconGallery;
